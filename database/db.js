/**
 * LEGALTA Unified Database Access Layer
 * Priority Cascade:
 * 1. Prisma ORM (via DATABASE_URL to Supabase PostgreSQL)
 * 2. Supabase Client (via SUPABASE_URL & SUPABASE_ANON_KEY)
 * 3. Local SQLite Fallback (Zero-config local development)
 */

const path = require('path');
const fs = require('fs');
const prismaRepo = require('./prisma');
const supabaseRepo = require('./supabase');

let prismaAvailable = null;
let supabaseAvailable = null;
let lastPrismaCheck = 0;
let lastSupabaseCheck = 0;
const HEALTH_CACHE_TTL_MS = 60000; // 1 minute retry backoff when unreachable

function canUsePrisma() {
  if (!prismaRepo.isPrismaConfigured()) return false;
  if (prismaAvailable === false && (Date.now() - lastPrismaCheck) < HEALTH_CACHE_TTL_MS) {
    return false;
  }
  return true;
}

function markPrismaStatus(ok) {
  prismaAvailable = ok;
  lastPrismaCheck = Date.now();
}

function canUseSupabase() {
  if (!supabaseRepo.isSupabaseConfigured()) return false;
  if (supabaseAvailable === false && (Date.now() - lastSupabaseCheck) < HEALTH_CACHE_TTL_MS) {
    return false;
  }
  return true;
}

function markSupabaseStatus(ok) {
  supabaseAvailable = ok;
  lastSupabaseCheck = Date.now();
}

const isVercel = Boolean(process.env.VERCEL);
const defaultDbPath = isVercel
  ? path.join('/tmp', 'legalta.sqlite')
  : path.join(__dirname, 'sqlite', 'legalta.sqlite');
const DB_PATH = process.env.DB_PATH || defaultDbPath;

// Ensure local directory exists
const dbDir = path.dirname(DB_PATH);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

let sqliteInstance = null;

function getDb() {
  if (!sqliteInstance) {
    const { DatabaseSync } = require('node:sqlite');
    sqliteInstance = new DatabaseSync(DB_PATH);
    try {
      sqliteInstance.exec('PRAGMA journal_mode = WAL;');
    } catch (_) {
      sqliteInstance.exec('PRAGMA journal_mode = DELETE;');
    }
    sqliteInstance.exec('PRAGMA foreign_keys = ON;');

    try {
      const schemaPath = path.join(__dirname, 'sqlite', 'schema.sql');
      const seedPath = path.join(__dirname, 'sqlite', 'seed.sql');
      if (fs.existsSync(schemaPath)) {
        sqliteInstance.exec(fs.readFileSync(schemaPath, 'utf8'));
      }
      if (fs.existsSync(seedPath)) {
        sqliteInstance.exec(fs.readFileSync(seedPath, 'utf8'));
      }
    } catch (_) {
      // Ignore if already initialized
    }
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

function getActiveEngine() {
  if (prismaRepo.isPrismaConfigured() && prismaAvailable !== false) return 'PostgreSQL (Prisma ORM)';
  if (supabaseRepo.isSupabaseConfigured() && supabaseAvailable !== false) return 'PostgreSQL (Supabase API)';
  if (prismaRepo.isPrismaConfigured() || supabaseRepo.isSupabaseConfigured()) {
    return 'SQLite (Local Fallback — Cloud DB Unreachable/Paused)';
  }
  return 'SQLite (Local)';
}

// ==========================================================
// UNIFIED ASYNC REPOSITORY METHODS
// ==========================================================

async function getCategories() {
  if (canUsePrisma()) {
    try {
      const res = await prismaRepo.getPrismaCategories();
      markPrismaStatus(true);
      return res;
    } catch (err) {
      markPrismaStatus(false);
      console.warn('[PRISMA WARN] getCategories error:', err.message);
    }
  }

  if (canUseSupabase()) {
    try {
      const res = await supabaseRepo.getSupabaseCategories();
      markSupabaseStatus(true);
      return res;
    } catch (err) {
      markSupabaseStatus(false);
      console.warn('[SUPABASE WARN] getCategories error:', err.message);
    }
  }

  return queryAll('SELECT * FROM service_categories ORDER BY id ASC');
}

async function getServices(categorySlug = null) {
  if (canUsePrisma()) {
    try {
      const res = await prismaRepo.getPrismaServices(categorySlug);
      markPrismaStatus(true);
      return res;
    } catch (err) {
      markPrismaStatus(false);
      console.warn('[PRISMA WARN] getServices error:', err.message);
    }
  }

  if (canUseSupabase()) {
    try {
      const res = await supabaseRepo.getSupabaseServices(categorySlug);
      markSupabaseStatus(true);
      return res;
    } catch (err) {
      markSupabaseStatus(false);
      console.warn('[SUPABASE WARN] getServices error:', err.message);
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
  if (canUsePrisma()) {
    try {
      const res = await prismaRepo.getPrismaServiceBySlug(slug);
      markPrismaStatus(true);
      return res;
    } catch (err) {
      markPrismaStatus(false);
      console.warn('[PRISMA WARN] getServiceBySlug error:', err.message);
    }
  }

  if (canUseSupabase()) {
    try {
      const res = await supabaseRepo.getSupabaseServiceBySlug(slug);
      markSupabaseStatus(true);
      return res;
    } catch (err) {
      markSupabaseStatus(false);
      console.warn('[SUPABASE WARN] getServiceBySlug error:', err.message);
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
  if (canUsePrisma()) {
    try {
      const res = await prismaRepo.getPrismaOrderWithDetails(cleanId);
      markPrismaStatus(true);
      return res;
    } catch (err) {
      markPrismaStatus(false);
      console.warn('[PRISMA WARN] getOrderWithDetails error:', err.message);
    }
  }

  if (canUseSupabase()) {
    try {
      const res = await supabaseRepo.getSupabaseOrderWithDetails(cleanId);
      markSupabaseStatus(true);
      return res;
    } catch (err) {
      markSupabaseStatus(false);
      console.warn('[SUPABASE WARN] getOrderWithDetails error:', err.message);
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
      title: order.pla_name === 'Wildan'
        ? 'Chief Technology Officer / Head of Product'
        : 'Head of Client Relations & PLA',
      specialization: order.pla_name === 'Wildan'
        ? 'Arsitektur Otomasi Legaltech & Integrasi API AHU/OSS'
        : 'Hukum Perseroan & Perizinan OSS-RBA',
      email: order.pla_email || (order.pla_name === 'Wildan' ? 'wildan@legalta.id' : 'halo@legalta.id'),
      phone: order.pla_phone || '',
      avatar: order.pla_avatar || (order.pla_name === 'Wildan' 
        ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqsZ6ngVW8Z6CtogIwwkxrbHDdEEPIZVDqrlJqC4q9rup7_g9dDEeT4FQHmkkk47wiovPZTle2fRgdPld6xjnvjpT6Dz8ZbESbBvrGkHn-_g_Pc1mSbta4bPZxnZiKgJTVUeaets5ViUfr8YPmWTWzrK6dDJy5KZDLJPqt8Mtk0JwxiOZFcYtUjp2WON5wOnV4pmbGOZpM7C4lFR20RggLjfFpZ6eHjz1ZshpkLWydFK2IQyWhrgRgs3MR4RW3deetRg' 
        : 'assets/najwa.jpg')
    }
  };
}

async function saveDocument({ orderId, fileName, fileSize = '1.2 MB', docType = 'OTHER' }) {
  if (canUsePrisma()) {
    try {
      const res = await prismaRepo.savePrismaDocument({ orderId, fileName, fileSize, docType });
      markPrismaStatus(true);
      return res;
    } catch (err) {
      markPrismaStatus(false);
      console.warn('[PRISMA WARN] saveDocument error:', err.message);
    }
  }

  if (canUseSupabase()) {
    try {
      const docId = 'doc-' + Date.now();
      const res = await supabaseRepo.insertSupabaseDocument({
        id: docId,
        order_id: orderId,
        uploaded_by: 'usr-client-01',
        file_name: fileName,
        file_url: `/documents/${fileName}`,
        file_size: fileSize,
        doc_type: docType
      });
      markSupabaseStatus(true);
      return res;
    } catch (err) {
      markSupabaseStatus(false);
      console.warn('[SUPABASE WARN] saveDocument error:', err.message);
    }
  }

  const docId = 'doc-' + Date.now();
  run(`
    INSERT INTO documents (id, order_id, uploaded_by, file_name, file_url, file_size, doc_type)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `, [docId, orderId, 'usr-client-01', fileName, `/documents/${fileName}`, fileSize, docType]);

  return { id: docId, fileName, docType, fileSize };
}

async function saveConsultation({ name, phone, email, city = '', service = 'pt-standar', method = 'whatsapp', notes = '' }) {
  if (canUsePrisma()) {
    try {
      const res = await prismaRepo.savePrismaConsultation({ name, phone, email, city, service, method, notes });
      markPrismaStatus(true);
      return res;
    } catch (err) {
      markPrismaStatus(false);
      console.warn('[PRISMA WARN] saveConsultation error:', err.message);
    }
  }

  if (canUseSupabase()) {
    try {
      const res = await supabaseRepo.insertSupabaseConsultation({
        client_name: name,
        phone_number: phone,
        email,
        city,
        service_slug: service,
        consult_method: method,
        notes
      });
      markSupabaseStatus(true);
      return res;
    } catch (err) {
      markSupabaseStatus(false);
      console.warn('[SUPABASE WARN] saveConsultation error:', err.message);
    }
  }

  run(`
    INSERT INTO consultations (client_name, phone_number, email, city, service_slug, consult_method, notes)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `, [name, phone, email, city, service, method, notes]);

  return { client_name: name, phone_number: phone, email };
}

async function getConsultations(limit = 50) {
  if (canUsePrisma()) {
    try {
      const res = await prismaRepo.getPrismaConsultations(limit);
      markPrismaStatus(true);
      return res;
    } catch (err) {
      markPrismaStatus(false);
      console.warn('[PRISMA WARN] getConsultations error:', err.message);
    }
  }

  if (canUseSupabase()) {
    try {
      const res = await supabaseRepo.getSupabaseConsultations(limit);
      markSupabaseStatus(true);
      return res;
    } catch (err) {
      markSupabaseStatus(false);
      console.warn('[SUPABASE WARN] getConsultations error:', err.message);
    }
  }

  return queryAll('SELECT * FROM consultations ORDER BY created_at DESC LIMIT ?', [limit]);
}

async function getRegisteredPTs() {
  if (canUsePrisma()) {
    try {
      const res = await prismaRepo.getPrismaRegisteredPTs();
      markPrismaStatus(true);
      return res;
    } catch (err) {
      markPrismaStatus(false);
      console.warn('[PRISMA WARN] getRegisteredPTs error:', err.message);
    }
  }

  if (canUseSupabase()) {
    try {
      const res = await supabaseRepo.getSupabaseRegisteredPTs();
      markSupabaseStatus(true);
      return res;
    } catch (err) {
      markSupabaseStatus(false);
      console.warn('[SUPABASE WARN] getRegisteredPTs error:', err.message);
    }
  }

  return queryAll('SELECT name FROM registered_pts');
}

async function getRegisteredTrademarks() {
  if (canUsePrisma()) {
    try {
      const res = await prismaRepo.getPrismaRegisteredTrademarks();
      markPrismaStatus(true);
      return res;
    } catch (err) {
      markPrismaStatus(false);
      console.warn('[PRISMA WARN] getRegisteredTrademarks error:', err.message);
    }
  }

  if (canUseSupabase()) {
    try {
      const res = await supabaseRepo.getSupabaseRegisteredTrademarks();
      markSupabaseStatus(true);
      return res;
    } catch (err) {
      markSupabaseStatus(false);
      console.warn('[SUPABASE WARN] getRegisteredTrademarks error:', err.message);
    }
  }

  return queryAll('SELECT * FROM registered_trademarks');
}

async function getKBLIItems() {
  if (canUsePrisma()) {
    try {
      const res = await prismaRepo.getPrismaKBLIItems();
      markPrismaStatus(true);
      return res;
    } catch (err) {
      markPrismaStatus(false);
      console.warn('[PRISMA WARN] getKBLIItems error:', err.message);
    }
  }

  if (canUseSupabase()) {
    try {
      const res = await supabaseRepo.getSupabaseKBLIItems();
      markSupabaseStatus(true);
      return res;
    } catch (err) {
      markSupabaseStatus(false);
      console.warn('[SUPABASE WARN] getKBLIItems error:', err.message);
    }
  }

  return queryAll('SELECT * FROM kbli_items');
}

async function testPrismaWithCache() {
  const res = await prismaRepo.testPrismaConnection();
  markPrismaStatus(Boolean(res.connected));
  return res;
}

async function testSupabaseWithCache() {
  const res = await supabaseRepo.testConnection();
  markSupabaseStatus(Boolean(res.connected));
  return res;
}

module.exports = {
  getDb,
  exec,
  queryAll,
  queryOne,
  run,
  DB_PATH,
  getActiveEngine,
  // Prisma ORM Layer
  isPrismaConfigured: prismaRepo.isPrismaConfigured,
  getPrisma: prismaRepo.getPrisma,
  testPrisma: testPrismaWithCache,
  // Supabase Client Layer
  isSupabaseConfigured: supabaseRepo.isSupabaseConfigured,
  getSupabase: supabaseRepo.getSupabase,
  testSupabase: testSupabaseWithCache,
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
