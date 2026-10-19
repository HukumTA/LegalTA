/**
 * LEGALTA Database Initialization & Seeding Script
 */

const fs = require('fs');
const path = require('path');
const { exec, DB_PATH } = require('./db');

function initDatabase() {
  console.log(`[DB] Menginisialisasi basis data di: ${DB_PATH}`);

  const schemaPath = path.join(__dirname, 'schema.sql');
  const seedPath = path.join(__dirname, 'seed.sql');

  try {
    const schemaSql = fs.readFileSync(schemaPath, 'utf8');
    exec(schemaSql);
    console.log('[DB] ✅ Skema tabel berhasil dibuat sesuai ERD.Md');

    const seedSql = fs.readFileSync(seedPath, 'utf8');
    exec(seedSql);
    console.log('[DB] ✅ Data awal (seed) berhasil dimasukkan');

    console.log('[DB] Inisialisasi basis data LEGALTA selesai 100%!\n');
  } catch (error) {
    console.error('[DB] ❌ Gagal menginisialisasi basis data:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  initDatabase();
}

module.exports = { initDatabase };
