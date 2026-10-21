/**
 * LEGALTA Local SQLite Initialization & Seeding Script
 */

const fs = require('fs');
const path = require('path');
const { exec, DB_PATH } = require('../db');

function initDatabase({ silent = false } = {}) {
  const schemaPath = path.join(__dirname, 'schema.sql');
  const seedPath = path.join(__dirname, 'seed.sql');

  try {
    const schemaSql = fs.readFileSync(schemaPath, 'utf8');
    exec(schemaSql);

    const seedSql = fs.readFileSync(seedPath, 'utf8');
    exec(seedSql);

    if (!silent) {
      console.log(`[LEGALTA] Database lokal (SQLite) siap di: ${DB_PATH}`);
    }
  } catch (error) {
    console.error(`[LEGALTA] Gagal inisialisasi SQLite: ${error.message}`);
  }
}

if (require.main === module) {
  initDatabase({ silent: false });
}

module.exports = { initDatabase };
