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
  if (prismaRepo.isPrismaConfigured()) return 'PostgreSQL (Prisma ORM)';
  if (supabaseRepo.isSupabaseConfigured()) return 'PostgreSQL (Supabase API)';
  return 'SQLite (Local)';
}

// ==========================================================
// UNIFIED ASYNC REPOSITORY METHODS
// ==========================================================

async function getCategories() {
  if (prismaRepo.isPrismaConfigured()) {
    try {
      return await prismaRepo.getPrismaCategories();
    } catch (err) {
      console.warn('[PRISMA WARN] getCategories error:', err.message);
    }
  }

  if (supabaseRepo.isSupabaseConfigured()) {
    try {
      return await supabaseRepo.getSupabaseCategories();
    } catch (err) {
      console.warn('[SUPABASE WARN] getCategories error:', err.message);
    }
  }

  return queryAll('SELECT * FROM service_categories ORDER BY id ASC');
}

async function getServices(categorySlug = null) {
  if (prismaRepo.isPrismaConfigured()) {
    try {
      return await prismaRepo.getPrismaServices(categorySlug);
    } catch (err) {
      console.warn('[PRISMA WARN] getServices error:', err.message);
    }
  }

  if (supabaseRepo.isSupabaseConfigured()) {
    try {
      return await supabaseRepo.getSupabaseServices(categorySlug);
    } catch (err) {
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
  if (prismaRepo.isPrismaConfigured()) {
    try {
      return await prismaRepo.getPrismaServiceBySlug(slug);
    } catch (err) {
      console.warn('[PRISMA WARN] getServiceBySlug error:', err.message);
    }
  }

  if (supabaseRepo.isSupabaseConfigured()) {
    try {
      return await supabaseRepo.getSupabaseServiceBySlug(slug);
    } catch (err) {
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
  if (prismaRepo.isPrismaConfigured()) {
    try {
      return await prismaRepo.getPrismaOrderWithDetails(cleanId);
    } catch (err) {
      console.warn('[PRISMA WARN] getOrderWithDetails error:', err.message);
    }
  }

  if (supabaseRepo.isSupabaseConfigured()) {
    try {
      return await supabaseRepo.getSupabaseOrderWithDetails(cleanId);
    } catch (err) {
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
  if (prismaRepo.isPrismaConfigured()) {
    try {
      return await prismaRepo.savePrismaDocument({ orderId, fileName, fileSize, docType });
    } catch (err) {
      console.warn('[PRISMA WARN] saveDocument error:', err.message);
    }
  }

  if (supabaseRepo.isSupabaseConfigured()) {
    try {
      const docId = 'doc-' + Date.now();
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
  if (prismaRepo.isPrismaConfigured()) {
    try {
      return await prismaRepo.savePrismaConsultation({ name, phone, email, city, service, method, notes });
    } catch (err) {
      console.warn('[PRISMA WARN] saveConsultation error:', err.message);
    }
  }

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
  if (prismaRepo.isPrismaConfigured()) {
    try {
      return await prismaRepo.getPrismaConsultations(limit);
    } catch (err) {
      console.warn('[PRISMA WARN] getConsultations error:', err.message);
    }
  }

  if (supabaseRepo.isSupabaseConfigured()) {
    try {
      return await supabaseRepo.getSupabaseConsultations(limit);
    } catch (err) {
      console.warn('[SUPABASE WARN] getConsultations error:', err.message);
    }
  }

  return queryAll('SELECT * FROM consultations ORDER BY created_at DESC LIMIT ?', [limit]);
}

async function getRegisteredPTs() {
  if (prismaRepo.isPrismaConfigured()) {
    try {
      return await prismaRepo.getPrismaRegisteredPTs();
    } catch (err) {
      console.warn('[PRISMA WARN] getRegisteredPTs error:', err.message);
    }
  }

  if (supabaseRepo.isSupabaseConfigured()) {
    try {
      return await supabaseRepo.getSupabaseRegisteredPTs();
    } catch (err) {
      console.warn('[SUPABASE WARN] getRegisteredPTs error:', err.message);
    }
  }

  return queryAll('SELECT name FROM registered_pts');
}

async function getRegisteredTrademarks() {
  if (prismaRepo.isPrismaConfigured()) {
    try {
      return await prismaRepo.getPrismaRegisteredTrademarks();
    } catch (err) {
      console.warn('[PRISMA WARN] getRegisteredTrademarks error:', err.message);
    }
  }

  if (supabaseRepo.isSupabaseConfigured()) {
    try {
      return await supabaseRepo.getSupabaseRegisteredTrademarks();
    } catch (err) {
      console.warn('[SUPABASE WARN] getRegisteredTrademarks error:', err.message);
    }
  }

  return queryAll('SELECT * FROM registered_trademarks');
}

async function getKBLIItems() {
  if (prismaRepo.isPrismaConfigured()) {
    try {
      return await prismaRepo.getPrismaKBLIItems();
    } catch (err) {
      console.warn('[PRISMA WARN] getKBLIItems error:', err.message);
    }
  }

  if (supabaseRepo.isSupabaseConfigured()) {
    try {
      return await supabaseRepo.getSupabaseKBLIItems();
    } catch (err) {
      console.warn('[SUPABASE WARN] getKBLIItems error:', err.message);
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
  getActiveEngine,
  // Prisma ORM Layer
  isPrismaConfigured: prismaRepo.isPrismaConfigured,
  getPrisma: prismaRepo.getPrisma,
  testPrisma: prismaRepo.testPrismaConnection,
  // Supabase Client Layer
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
