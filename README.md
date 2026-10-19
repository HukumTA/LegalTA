# LEGALTA — Keseimbangan • Modern • Adil

> **Arsitektur Monorepo Terpadu (Single Page Application, Layered Backend API & Relational Database)**  
> Platform *LegalTech* korporasi di Indonesia yang mengintegrasikan kecerdasan perizinan berusaha OSS-RBA, administrasi hukum umum Ditjen AHU Kemenkumham RI, dan hak kekayaan intelektual (DJKI).

---

## 🏛️ Struktur Arsitektur Monorepo

```
LegalTA/
├── PRD.Md                         # Product Requirements Document
├── ERD.Md                         # Entity Relationship Diagram & Schema Specs
├── package.json                   # Root Monorepo Configuration & Scripts
│
├── frontend/                      # 🎨 FRONTEND CLIENT (HANYA 1 FILE HTML)
│   ├── index.html                 # Satu-satunya berkas HTML (Single Page Application Root)
│   └── js/
│       ├── app.js                 # SPA Router, Life-cycle & Hash-based Navigation
│       ├── api.js                 # Centralized API Service (Client -> Backend)
│       ├── components/
│       │   ├── navbar.js          # Persistent Header & Mobile Drawer
│       │   ├── footer.js          # Standard Editorial Footer
│       │   └── toast.js           # Toast Notification System
│       └── views/                 # Modular SPA Views
│           ├── homeView.js        # Beranda & 4-Langkah Workflow
│           ├── pendirianView.js   # Pendirian PT, CV, PMA & Matriks Legal
│           ├── perizinanView.js   # Perizinan OSS-RBA, NIB, PB-UMKU, PSE
│           ├── dokumenView.js     # Perubahan Anggaran Dasar & RUPS
│           ├── hkiView.js         # Merek Dagang, Hak Cipta, Paten, Desain
│           ├── cekPtView.js       # Tool Interaktif Cek Nama PT (PP 43/2011)
│           ├── cekMerekView.js    # Tool Interaktif Cek Merek PDKI (UU 20/2016)
│           ├── cekKbliView.js     # Tool Interaktif Kamus KBLI 2020 & Risiko OSS
│           ├── trackingView.js    # Live Client Tracking Dashboard (PRD 3.C)
│           ├── tentangView.js     # Visi, Misi & 6 Profil Dewan Pimpinan
│           ├── konsultasiView.js  # Form Konsultasi & Kalkulator Biaya
│           └── kontakView.js      # Kantor SCBD Jakarta & Form Pertanyaan
│
├── backend/                       # ⚙️ BACKEND API ENGINE (Node.js & Express)
│   └── src/
│       ├── server.js              # Express Server, Middleware & Static SPA Serving
│       ├── routes/
│       │   └── api.js             # Central REST API Routing
│       ├── controllers/
│       │   ├── servicesController.js    # Katalog Layanan & Kategori
│       │   ├── ordersController.js      # Live Tracking, Status & Dokumen
│       │   ├── toolsController.js       # Endpoint Validasi PT, Merek, KBLI
│       │   └── consultationsController.js # Manajemen Booking Leads
│       └── services/
│           ├── ptValidator.js     # Business Logic Validasi Nama PT (PP 43/2011)
│           ├── merekMatcher.js    # Engine Kemiripan Fonetik PDKI (Soundex)
│           └── kbliEngine.js      # Search & Risk Determination OSS-RBA
│
└── database/                      # 🗄️ DATABASE LAYER (SQLite via Node.js 24 Native)
    ├── schema.sql                 # DDL Relasional Lengkap Sesuai ERD.Md
    ├── seed.sql                   # Data Awal (Users, Services, Demo Orders, KBLI)
    ├── db.js                      # Native DatabaseSync Connector & Helper
    ├── init.js                    # Database Initializer & Migration Runner
    └── legalta.sqlite             # File Basis Data SQLite Terenkripsi/Lokal
```

---

## ⚡ Fitur Utama & Kepatuhan PRD / ERD

### 1. Frontend SPA (Hanya 1 HTML)
- **Zero Page Reload**: Navigasi mulus antar 12 modul views menggunakan `#/` hash-routing (`frontend/js/app.js`).
- **Design Tokens Konsisten**: Tailwind CSS dengan palet HSL modern (*Deep Crimson `#570005`, Warm Rust `#9b4500`, Deep Slate Navy `#1f273b`*) dan tipografi editorial *Newsreader* + *Plus Jakarta Sans*.
- **Responsive Drawer**: Navigasi mobile responsif dengan akordion submenu.

### 2. Backend REST API
- `GET /api/services`: Mengambil katalog layanan dan harga dasar.
- `GET /api/orders/:id`: Mengambil live status 4 langkah tracking, dokumen brankas, dan data Personal Legal Assistant (PLA).
- `POST /api/orders/:orderId/documents`: Mengunggah dan mencatat dokumen tambahan ke database.
- `POST /api/tools/cek-pt`: Menguji usulan nama PT (aturan 3 kata, cek kata terlarang, Levenshtein distance).
- `POST /api/tools/cek-merek`: Menghitung probabilitas lolos substantif dan kemiripan fonetik PDKI.
- `GET /api/tools/cek-kbli`: Pencarian kode 5-digit KBLI 2020 dan pemetaan tingkat risiko (R, MR, MT, T).
- `POST /api/consultations`: Menyimpan data konsultasi & menghasilkan deep-link WhatsApp otomatis.

### 3. Database Relasional (ERD.Md)
- Menggunakan `node:sqlite` bawaan Node.js 24 (Zero third-party driver issues).
- Tabel: `users`, `service_categories`, `services`, `orders`, `order_tracking`, `documents`, `consultations`, `kbli_items`, `registered_pts`, `registered_trademarks`.
- Dilengkapi data demo siap uji:
  - `LEG-2025-0891`: PT Perkasa Digital Nusantara (Status: `ON_PROGRESS` / Akta Notaris `JALAN`)
  - `LEG-2025-0104`: PT Kopi Senja Selaras (Status: `COMPLETED` / Semua langkah `DONE`)
  - `LEG-2025-0942`: Voyager Labs (Status: `PENDING` / Riset PDKI `JALAN`)

---

## 🚀 Panduan Menjalankan Aplikasi

1. **Inisialisasi Database** (Opsional, sudah diinisialisasi otomatis saat server start):
   ```bash
   npm run db:init
   ```

2. **Jalankan Aplikasi Monorepo**:
   ```bash
   npm start
   # atau
   npm run dev
   ```

3. **Akses di Browser**:
   - **Aplikasi Web**: [http://localhost:3000](http://localhost:3000)
   - **Health Check API**: [http://localhost:3000/api/health](http://localhost:3000/api/health)
