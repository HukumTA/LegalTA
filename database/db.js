/**
 * LEGALTA Unified Database Access Layer
 * Supports Supabase (PostgreSQL Cloud) with graceful local SQLite fallback.
 */

const { DatabaseSync } = require('node:sqlite');
const path = require('path');
const fs = require('fs');
const supabaseRepo = require('./supabase');

const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'legalta.sqlite');

// Ensure local directory exists
const dbDir = path.dirname(DB_PATH);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

let sqliteInstance = null;

function getDb() {
  if (!sqliteInstance) {
    sqliteInstance = new DatabaseSync(DB_PATH);
    sqliteInstance.exec('PRAGMA journal_mode = WAL;');
    sqliteInstance.exec('PRAGMA foreign_keys = ON;');
  }
  return sqliteInstance;
}

function exec(sql) {
  return getDb().exec(sql);
}

function queryAll(sql, params = []) {
  const stmt = getDb().prepare(sql);
  return stmt.all(...params);
}

function queryOne(sql, params = []) {
  const stmt = getDb().prepare(sql);
  return stmt.get(...params);
}

function run(sql, params = []) {
  const stmt = getDb().prepare(sql);
  return stmt.run(...params);
}

// ==========================================================
// UNIFIED ASYNC REPOSITORY METHODS (Supabase -> SQLite Fallback)
// ==========================================================

async function getCategories() {
  if (supabaseRepo.isSupabaseConfigured()) {
    try {
      return await supabaseRepo.getSupabaseCategories();
    } catch (err) {
      console.warn('[SUPABASE WARN] getCategories error, falling back to SQLite:', err.message);
    }
  }
  return queryAll('SELECT * FROM service_categories ORDER BY id ASC');
}

async function getServices(categorySlug = null) {
  if (supabaseRepo.isSupabaseConfigured()) {
    try {
      return await supabaseRepo.getSupabaseServices(categorySlug);
    } catch (err) {
      console.warn('[SUPABASE WARN] getServices error, falling back to SQLite:', err.message);
    }
  }

  let sql = `
    SELECT s.*, c.name as category_name, c.slug as category_slug 
    FROM services s 
    JOIN service_categories c ON s.category_id = c.id
  `;
  const params = [];
  if (categorySlug) {
    sql += ' WHERE c.slug = ?';
    params.push(categorySlug);
  }
  sql += ' ORDER BY s.id ASC';
  return queryAll(sql, params);
}

async function getServiceBySlug(slug) {
  if (supabaseRepo.isSupabaseConfigured()) {
    try {
      return await supabaseRepo.getSupabaseServiceBySlug(slug);
    } catch (err) {
      console.warn('[SUPABASE WARN] getServiceBySlug error, falling back to SQLite:', err.message);
    }
  }

  return queryOne(`
    SELECT s.*, c.name as category_name, c.slug as category_slug 
    FROM services s 
    JOIN service_categories c ON s.category_id = c.id
    WHERE s.slug = ?
  `, [slug]);
}

async function getOrderWithDetails(cleanId) {
  if (supabaseRepo.isSupabaseConfigured()) {
    try {
      return await supabaseRepo.getSupabaseOrderWithDetails(cleanId);
    } catch (err) {
      console.warn('[SUPABASE WARN] getOrderWithDetails error, falling back to SQLite:', err.message);
    }
  }

  const order = queryOne(`
    SELECT o.*, s.title as service_title, c.name as category_name,
           u.name as client_name, u.email as client_email, u.phone_number as client_phone,
           pla.name as pla_name, pla.email as pla_email, pla.phone_number as pla_phone, pla.avatar_url as pla_avatar
    FROM orders o
    JOIN services s ON o.service_id = s.id
    JOIN service_categories c ON s.category_id = c.id
    JOIN users u ON o.user_id = u.id
    LEFT JOIN users pla ON o.pla_id = pla.id
    WHERE o.id = ? OR u.phone_number = ?
  `, [cleanId, cleanId]);

  if (!order) return null;

  const steps = queryAll(`
    SELECT * FROM order_tracking 
    WHERE order_id = ? 
    ORDER BY step_number ASC
  `, [order.id]);

  const documents = queryAll(`
    SELECT * FROM documents 
    WHERE order_id = ? 
    ORDER BY created_at DESC
  `, [order.id]);

  return {
    order,
    steps,
    documents,
    pla: {
      name: order.pla_name || 'Najwa',
      title: 'Senior Personal Legal Assistant',
      specialization: 'Hukum Perseroan & Perizinan OSS-RBA',
      email: order.pla_email || 'halo@legalta.id',
      phone: order.pla_phone || '+6281288880192',
      avatar: order.pla_avatar
    }
  };
}

async function saveDocument({ orderId, fileName, fileSize = '1.2 MB', docType = 'OTHER' }) {
  const docId = 'doc-' + Date.now();
  if (supabaseRepo.isSupabaseConfigured()) {
    try {
      return await supabaseRepo.insertSupabaseDocument({
        id: docId,
        order_id: orderId,
        uploaded_by: 'usr-client-01',
        file_name: fileName,
        file_url: `/documents/${fileName}`,
        file_size: fileSize,
        doc_type: docType
      });
    } catch (err) {
      console.warn('[SUPABASE WARN] saveDocument error, falling back to SQLite:', err.message);
    }
  }

  run(`
    INSERT INTO documents (id, order_id, uploaded_by, file_name, file_url, file_size, doc_type)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `, [docId, orderId, 'usr-client-01', fileName, `/documents/${fileName}`, fileSize, docType]);

  return { id: docId, fileName, docType, fileSize };
}

async function saveConsultation({ name, phone, email, city = '', service = 'pt-standar', method = 'whatsapp', notes = '' }) {
  if (supabaseRepo.isSupabaseConfigured()) {
    try {
      return await supabaseRepo.insertSupabaseConsultation({
        client_name: name,
        phone_number: phone,
        email,
        city,
        service_slug: service,
        consult_method: method,
        notes
      });
    } catch (err) {
      console.warn('[SUPABASE WARN] saveConsultation error, falling back to SQLite:', err.message);
    }
  }

  run(`
    INSERT INTO consultations (client_name, phone_number, email, city, service_slug, consult_method, notes)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `, [name, phone, email, city, service, method, notes]);

  return { client_name: name, phone_number: phone, email };
}

async function getConsultations(limit = 50) {
  if (supabaseRepo.isSupabaseConfigured()) {
    try {
      return await supabaseRepo.getSupabaseConsultations(limit);
    } catch (err) {
      console.warn('[SUPABASE WARN] getConsultations error, falling back to SQLite:', err.message);
    }
  }

  return queryAll('SELECT * FROM consultations ORDER BY created_at DESC LIMIT ?', [limit]);
}

async function getRegisteredPTs() {
  if (supabaseRepo.isSupabaseConfigured()) {
    try {
      return await supabaseRepo.getSupabaseRegisteredPTs();
    } catch (err) {
      console.warn('[SUPABASE WARN] getRegisteredPTs error, falling back to SQLite:', err.message);
    }
  }
  return queryAll('SELECT name FROM registered_pts');
}

async function getRegisteredTrademarks() {
  if (supabaseRepo.isSupabaseConfigured()) {
    try {
      return await supabaseRepo.getSupabaseRegisteredTrademarks();
    } catch (err) {
      console.warn('[SUPABASE WARN] getRegisteredTrademarks error, falling back to SQLite:', err.message);
    }
  }
  return queryAll('SELECT * FROM registered_trademarks');
}

async function getKBLIItems() {
  if (supabaseRepo.isSupabaseConfigured()) {
    try {
      return await supabaseRepo.getSupabaseKBLIItems();
    } catch (err) {
      console.warn('[SUPABASE WARN] getKBLIItems error, falling back to SQLite:', err.message);
    }
  }
  return queryAll('SELECT * FROM kbli_items');
}

module.exports = {
  getDb,
  exec,
  queryAll,
  queryOne,
  run,
  DB_PATH,
  // Supabase status & instance
  isSupabaseConfigured: supabaseRepo.isSupabaseConfigured,
  getSupabase: supabaseRepo.getSupabase,
  testSupabase: supabaseRepo.testConnection,
  // Unified async repository functions
  getCategories,
  getServices,
  getServiceBySlug,
  getOrderWithDetails,
  saveDocument,
  saveConsultation,
  getConsultations,
  getRegisteredPTs,
  getRegisteredTrademarks,
  getKBLIItems
};
