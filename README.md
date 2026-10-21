# LEGALTA — Keseimbangan • Modern • Adil

> **Arsitektur Monorepo Terpadu (Single Page Application, Layered Backend API & Supabase Database)**  
> Platform *LegalTech* korporasi di Indonesia yang mengintegrasikan kecerdasan perizinan berusaha OSS-RBA, administrasi hukum umum Ditjen AHU Kemenkumham RI, dan hak kekayaan intelektual (DJKI).

---

## 🏛️ Struktur Arsitektur Monorepo

```
LegalTA/
├── PRD.Md                         # Product Requirements Document
├── ERD.Md                         # Entity Relationship Diagram & Schema Specs
├── package.json                   # Root Monorepo Configuration & Scripts
├── .env.example                   # Template Variabel Lingkungan & Kredensial Supabase
├── .env                           # Variabel Lingkungan Lokal
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
│       ├── server.js              # Express Server, Middleware, Supabase Status & Static SPA Serving
│       ├── routes/
│       │   └── api.js             # Central REST API Routing & Supabase Status Endpoint
│       ├── controllers/
│       │   ├── servicesController.js    # Katalog Layanan & Kategori (Async)
│       │   ├── ordersController.js      # Live Tracking, Status & Dokumen (Async)
│       │   ├── toolsController.js       # Endpoint Validasi PT, Merek, KBLI (Async)
│       │   └── consultationsController.js # Manajemen Booking Leads (Async)
│       └── services/
│           ├── ptValidator.js     # Business Logic Validasi Nama PT (PP 43/2011)
│           ├── merekMatcher.js    # Engine Kemiripan Fonetik PDKI (Soundex)
│           └── kbliEngine.js      # Search & Risk Determination OSS-RBA
│
└── database/                      # 🗄️ DATABASE LAYER (Supabase Cloud + Local SQLite Fallback)
    ├── supabase.js                # Supabase Client & Async Repository (@supabase/supabase-js)
    ├── supabase_schema.sql        # DDL PostgreSQL Lengkap untuk Supabase SQL Editor
    ├── supabase_seed.sql          # Data Awal PostgreSQL (Users, Services, Orders, KBLI)
    ├── supabase_init.js           # CLI Checker Status & Verifikasi Koneksi Supabase
    ├── db.js                      # Unified Adapter: Supabase Cloud dengan Fallback SQLite
    ├── schema.sql                 # DDL SQLite Lokal
    ├── seed.sql                   # Data Awal SQLite Lokal
    └── init.js                    # Inisialisasi Otomatis Database Lokal
```

---

## ⚡ Fitur Utama & Kepatuhan PRD / ERD

### 1. Frontend SPA (Hanya 1 HTML)
- **Zero Page Reload**: Navigasi mulus antar 12 modul views menggunakan `#/` hash-routing (`frontend/js/app.js`).
- **Design Tokens Konsisten**: Tailwind CSS dengan palet HSL modern (*Deep Crimson `#570005`, Warm Rust `#9b4500`, Deep Slate Navy `#1f273b`*) dan tipografi editorial *Newsreader* + *Plus Jakarta Sans*.
- **Responsive Drawer**: Navigasi mobile responsif dengan akordion submenu.

### 2. Backend REST API
- `GET /api/services`: Mengambil katalog layanan dan harga dasar (langsung dari Supabase / fallback).
- `GET /api/orders/:id`: Mengambil live status 4 langkah tracking, dokumen brankas, dan data Personal Legal Assistant (PLA).
- `POST /api/orders/:orderId/documents`: Mengunggah dan mencatat dokumen tambahan ke database.
- `POST /api/tools/cek-pt`: Menguji usulan nama PT (aturan 3 kata, cek kata terlarang, Levenshtein distance terhadap PT terdaftar).
- `POST /api/tools/cek-merek`: Menghitung probabilitas lolos substantif dan kemiripan fonetik PDKI.
- `GET /api/tools/cek-kbli`: Pencarian kode 5-digit KBLI 2020 dan pemetaan tingkat risiko (R, MR, MT, T).
- `POST /api/consultations`: Menyimpan data konsultasi & menghasilkan deep-link WhatsApp otomatis.
- `GET /api/supabase/status`: Memeriksa status koneksi aktif ke Supabase PostgreSQL.
- `GET /api/health`: Health-check status server & engine basis data yang sedang aktif.

---

## 🗄️ Panduan Integrasi Supabase (PostgreSQL Cloud)

LEGALTA telah terintegrasi penuh dengan **Supabase**. Ikuti langkah mudah berikut untuk menghubungkan basis data:

### Langkah 1: Buat Project di Supabase
1. Masuk ke [https://supabase.com](https://supabase.com) dan buat project baru (misal: `legalta-db`).
2. Tentukan nama database dan password database Anda.

### Langkah 2: Jalankan Skema & Data Awal di Supabase SQL Editor
1. Buka dashboard Supabase Anda, lalu klik menu **SQL Editor** pada navigasi kiri.
2. Buat **New Query**, buka file [database/supabase_schema.sql](file:///e:/Ngodingkan/LegalTA/database/supabase_schema.sql), lalu salin seluruh kodenya dan klik **Run**.
   - Ini akan membuat seluruh 10 tabel inti, foreign keys, index performa, serta aturan *Row Level Security (RLS)*.
3. Buat query baru, buka file [database/supabase_seed.sql](file:///e:/Ngodingkan/LegalTA/database/supabase_seed.sql), lalu salin seluruh isinya dan klik **Run**.
   - Ini akan mengisi data awal paket layanan, akun demo, riwayat tracking, database KBLI 2020, PT terdaftar, dan merek DJKI.

### Langkah 3: Konfigurasi Kredensial di `.env`
Buka menu **Project Settings** -> **API** di Supabase Dashboard, salin **Project URL** dan **anon public key**, lalu masukkan ke file `.env` di root project LEGALTA:
```env
PORT=3000
SUPABASE_URL=https://<your-project-ref>.supabase.co
SUPABASE_ANON_KEY=<your-anon-public-key>
```

### Langkah 4: Verifikasi Koneksi Supabase
Jalankan perintah verifikasi:
```bash
npm run db:supabase
```
Script akan memeriksa koneksi dan menampilkan jumlah baris data di setiap tabel Supabase secara langsung.

> **Fitur Fallback Aman:** Jika Supabase belum dikonfigurasi atau sedang offline, server LEGALTA secara otomatis beralih ke database lokal SQLite tanpa pernah mengalami *crash* atau *downtime*.

---

## 🚀 Panduan Menjalankan Aplikasi

1. **Jalankan Aplikasi Monorepo**:
   ```bash
   npm start
   # atau untuk auto-restart saat develop:
   npm run dev
   ```

2. **Akses di Browser**:
   - **Aplikasi Web**: [http://localhost:3000](http://localhost:3000)
   - **Health Check API**: [http://localhost:3000/api/health](http://localhost:3000/api/health)
   - **Status Supabase**: [http://localhost:3000/api/supabase/status](http://localhost:3000/api/supabase/status)

3. **Data Demo Siap Uji**:
   - Tracking Pesanan: Cari ID `LEG-2025-0891` atau nomor WhatsApp `+6281299990891` di menu [Live Tracking](http://localhost:3000/#/tracking).
   - Cek Nama PT: Uji di menu [Cek PT](http://localhost:3000/#/cek-pt) (contoh usulan: `PT Inovasi Digital Nusantara`).
   - Cek Merek: Uji di menu [Cek Merek](http://localhost:3000/#/cek-merek) (contoh: nama `VOYAGER` di Kelas Nice `42`).
   - Cek KBLI: Uji di menu [Cek KBLI](http://localhost:3000/#/cek-kbli) (contoh cari: `software` atau kode `62019`).
