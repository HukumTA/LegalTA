-- ==========================================================
-- LEGALTA Database Schema
-- Based on ERD.Md Specification
-- Database: SQLite (via Node.js 24 native node:sqlite)
-- ==========================================================

-- 1. USERS TABLE
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT,
    phone_number TEXT,
    role TEXT CHECK(role IN ('CLIENT', 'ADMIN', 'PLA')) NOT NULL DEFAULT 'CLIENT',
    avatar_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. SERVICE CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS service_categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT
);

-- 3. SERVICES TABLE
CREATE TABLE IF NOT EXISTS services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    base_price REAL NOT NULL DEFAULT 0,
    estimated_days INTEGER DEFAULT 3,
    FOREIGN KEY (category_id) REFERENCES service_categories(id) ON DELETE CASCADE
);

-- 4. ORDERS TABLE
CREATE TABLE IF NOT EXISTS orders (
    id TEXT PRIMARY KEY, -- e.g. 'LEG-2025-0891'
    user_id TEXT NOT NULL,
    service_id INTEGER NOT NULL,
    pla_id TEXT, -- Assigned Personal Legal Assistant (FK to users)
    title TEXT NOT NULL,
    status TEXT CHECK(status IN ('PENDING', 'ON_PROGRESS', 'COMPLETED', 'CANCELLED')) NOT NULL DEFAULT 'PENDING',
    total_amount REAL NOT NULL DEFAULT 0,
    voucher_code TEXT,
    kemenkumham_id TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (service_id) REFERENCES services(id),
    FOREIGN KEY (pla_id) REFERENCES users(id)
);

-- 5. ORDER TRACKING TABLE (PRD 3.C)
CREATE TABLE IF NOT EXISTS order_tracking (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id TEXT NOT NULL,
    step_number INTEGER NOT NULL,
    step_name TEXT NOT NULL,
    status TEXT CHECK(status IN ('DONE', 'JALAN', 'PENDING')) NOT NULL DEFAULT 'PENDING',
    description TEXT,
    completed_at DATETIME,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
);

-- 6. DOCUMENTS TABLE
CREATE TABLE IF NOT EXISTS documents (
    id TEXT PRIMARY KEY,
    order_id TEXT NOT NULL,
    uploaded_by TEXT NOT NULL,
    file_name TEXT NOT NULL,
    file_url TEXT NOT NULL,
    file_size TEXT,
    doc_type TEXT CHECK(doc_type IN ('KTP', 'NPWP', 'AKTA', 'NIB', 'SK_MENKUMHAM', 'VOUCHER', 'OTHER')) NOT NULL DEFAULT 'OTHER',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (uploaded_by) REFERENCES users(id)
);

-- 7. CONSULTATIONS TABLE (Public Leads / Bookings)
CREATE TABLE IF NOT EXISTS consultations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_name TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    email TEXT NOT NULL,
    city TEXT,
    service_slug TEXT,
    consult_method TEXT CHECK(consult_method IN ('whatsapp', 'gmeet', 'office')) DEFAULT 'whatsapp',
    notes TEXT,
    status TEXT CHECK(status IN ('NEW', 'CONTACTED', 'RESOLVED')) DEFAULT 'NEW',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 8. KBLI 2020 REFERENCE TABLE (Public Tool Engine)
CREATE TABLE IF NOT EXISTS kbli_items (
    code TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    sector_name TEXT NOT NULL,
    description TEXT NOT NULL,
    risk_level TEXT CHECK(risk_level IN ('R', 'MR', 'MT', 'T')) NOT NULL,
    permits_required TEXT NOT NULL,
    dpi_rules TEXT NOT NULL
);

-- 9. REGISTERED PT REFERENCE TABLE (Cek Nama PT Engine)
CREATE TABLE IF NOT EXISTS registered_pts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE NOT NULL,
    status TEXT DEFAULT 'ACTIVE',
    ahu_number TEXT,
    registration_date DATE
);

-- 10. REGISTERED TRADEMARKS REFERENCE TABLE (Cek Merek PDKI Engine)
CREATE TABLE IF NOT EXISTS registered_trademarks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand_name TEXT NOT NULL,
    nice_class INTEGER NOT NULL,
    application_number TEXT UNIQUE NOT NULL,
    owner_name TEXT NOT NULL,
    status TEXT NOT NULL,
    phonetic_key TEXT
);
