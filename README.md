# LEGALTA — Keseimbangan • Modern • Adil

> **Arsitektur Monorepo Terpadu (Single Page Application, Layered Backend API, Prisma ORM & Supabase Database)**  
> Platform *LegalTech* korporasi di Indonesia yang mengintegrasikan kecerdasan perizinan berusaha OSS-RBA, administrasi hukum umum Ditjen AHU Kemenkumham RI, dan hak kekayaan intelektual (DJKI).

---

## 🏛️ Struktur Arsitektur Monorepo

```
LegalTA/
├── PRD.Md                         # Product Requirements Document
├── ERD.Md                         # Entity Relationship Diagram & Schema Specs
├── package.json                   # Root Monorepo Configuration, Dependencies & Scripts
├── .env.example                   # Template Variabel Lingkungan (Prisma & Supabase)
├── .env                           # Variabel Lingkungan Lokal
│
├── prisma/                        # 💎 PRISMA ORM (DATA MODELING & MIGRATION)
│   ├── schema.prisma              # Deklarasi Model, Relasi, Indeks & Enums PostgreSQL
│   └── seed.js                    # Seeder Database Idempotent via Prisma Client
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
│       ├── server.js              # Express Server, Middleware, Engine Logger & Static SPA
│       ├── routes/
│       │   └── api.js             # Central REST API Routing & /database/status
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
└── database/                      # 🗄️ DATABASE LAYER & UNIFIED CASCADE ADAPTER
    ├── prisma.js                  # Prisma Client Repository Layer (@prisma/client)
    ├── supabase.js                # Supabase Client Layer (@supabase/supabase-js)
    ├── db.js                      # Unified Adapter: Prisma ORM -> Supabase -> SQLite Fallback
    ├── supabase_schema.sql        # Backup Skema DDL PostgreSQL
    ├── supabase_seed.sql          # Backup Seed Data SQL
    ├── supabase_init.js           # CLI Verifikasi Supabase REST
    ├── schema.sql                 # DDL SQLite Lokal
    ├── seed.sql                   # Seed SQLite Lokal
    └── init.js                    # Inisialisasi Otomatis Database Lokal
```

---

## ⚡ Panduan Prisma ORM ke Supabase

Struktur database LEGALTA didefinisikan menggunakan **Prisma Schema** (`prisma/schema.prisma`). Anda dapat melakukan sinkronisasi struktur langsung ke Supabase tanpa perlu menulis query SQL manual.

### Langkah 1: Siapkan Supabase Connection String
1. Buat project di [Supabase Dashboard](https://supabase.com/dashboard).
2. Buka menu **Project Settings** -> **Database**.
3. Di bagian **Connection String**:
   - Salin URI dengan mode **Transaction** (Port 6543) ke variabel `DATABASE_URL` di file [`.env`](file:///e:/Ngodingkan/LegalTA/.env).
   - Salin URI dengan mode **Session / Direct connection** (Port 5432) ke variabel `DIRECT_URL` di file [`.env`](file:///e:/Ngodingkan/LegalTA/.env).

Contoh isi [`.env`](file:///e:/Ngodingkan/LegalTA/.env):
```env
PORT=3000

DATABASE_URL="postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:5432/postgres"

SUPABASE_URL=https://[PROJECT-REF].supabase.co
SUPABASE_ANON_KEY=[ANON-KEY]
```

### Langkah 2: Dorong Skema Prisma ke Supabase
Jalankan perintah ini untuk membuat seluruh tabel, enum, foreign key, dan indeks di Supabase PostgreSQL:
```bash
npm run prisma:push
```

### Langkah 3: Isi Data Awal (Seed) Menggunakan Prisma
Jalankan seeder idempotent Prisma:
```bash
npm run prisma:seed
```
Perintah ini akan mengisi data demo pesanan (`LEG-2025-0891`, `LEG-2025-0104`, `LEG-2025-0942`), katalog layanan AHU/OSS/DJKI, akun PLA Najwa & Wildan, serta kamus KBLI 2020.

### Langkah 4: Buka Prisma Studio (Opsional)
Untuk melihat dan mengelola data tabel secara visual melalui antarmuka web interaktif:
```bash
npm run prisma:studio
```

---

## 🚀 Menjalankan Server & API

1. **Jalankan Aplikasi Monorepo**:
   ```bash
   npm start
   # atau mode pengembangan:
   npm run dev
   ```

2. **Akses di Browser**:
   - **Frontend Web SPA**: [http://localhost:3000](http://localhost:3000)
   - **Health Check API**: [http://localhost:3000/api/health](http://localhost:3000/api/health)
   - **Status Mesin Database**: [http://localhost:3000/api/database/status](http://localhost:3000/api/database/status)

> **Catatan Keandalan:** Jika `DATABASE_URL` belum diisi, aplikasi akan tetap berjalan mulus menggunakan SQLite lokal (`database/legalta.sqlite`) sebagai fallback otomatis sehingga Anda dapat menguji seluruh UI dan fitur tanpa kendala.
