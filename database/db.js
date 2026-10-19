/**
 * LEGALTA Database Connection Module
 * Uses Node.js 24 native node:sqlite DatabaseSync
 * Zero external dependencies. High performance synchronous/transactional operations.
 */

const { DatabaseSync } = require('node:sqlite');
const path = require('path');
const fs = require('fs');

const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'legalta.sqlite');

// Ensure directory exists
const dbDir = path.dirname(DB_PATH);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

let dbInstance = null;

function getDb() {
  if (!dbInstance) {
    dbInstance = new DatabaseSync(DB_PATH);
    // Enable WAL mode & foreign keys for performance and data integrity
    dbInstance.exec('PRAGMA journal_mode = WAL;');
    dbInstance.exec('PRAGMA foreign_keys = ON;');
  }
  return dbInstance;
}

/**
 * Execute raw SQL (DDL, multiple statements)
 */
function exec(sql) {
  return getDb().exec(sql);
}

/**
 * Query multiple rows
 */
function queryAll(sql, params = []) {
  const stmt = getDb().prepare(sql);
  return stmt.all(...params);
}

/**
 * Query a single row
 */
function queryOne(sql, params = []) {
  const stmt = getDb().prepare(sql);
  return stmt.get(...params);
}

/**
 * Run INSERT, UPDATE, DELETE
 */
function run(sql, params = []) {
  const stmt = getDb().prepare(sql);
  return stmt.run(...params);
}

module.exports = {
  getDb,
  exec,
  queryAll,
  queryOne,
  run,
  DB_PATH
};
