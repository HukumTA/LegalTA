# Entity Relationship Diagram (ERD): LEGALTA

Platform basis data LEGALTA menggunakan **Prisma ORM** sebagai fondasi *Data Modeling & Schema Management* sebelum dialirkan ke **Supabase (PostgreSQL Cloud)**.

---

## 1. Visualisasi Diagram (Mermaid ERD)

```mermaid
erDiagram
    USERS ||--o{ ORDERS : "places (user_id)"
    USERS ||--o{ ORDERS : "assists (pla_id)"
    USERS ||--o{ DOCUMENTS : "uploads (uploaded_by)"
    
    SERVICE_CATEGORIES ||--o{ SERVICES : "categorizes (category_id)"
    
    SERVICES ||--o{ ORDERS : "purchased_in (service_id)"
    
    ORDERS ||--o{ ORDER_TRACKING : "tracks (order_id)"
    ORDERS ||--o{ DOCUMENTS : "attaches (order_id)"

    USERS {
        string id PK "Default UUID"
        string name "Nama lengkap pengguna"
        string email UK "Alamat email unik"
        string password_hash "Hash password terenkripsi"
        string phone_number "Nomor WhatsApp aktif"
        enum role "CLIENT, ADMIN, PLA"
        string avatar_url "URL foto profil"
        datetime created_at
    }

    SERVICE_CATEGORIES {
        int id PK "Autoincrement"
        string name "Nama kategori (Pendirian, Perizinan, dll)"
        string slug UK "URL slug unik"
        string description
    }

    SERVICES {
        int id PK "Autoincrement"
        int category_id FK "Relasi ke service_categories"
        string title "Judul paket layanan"
        string slug UK "Slug unik layanan"
        string description "Deskripsi lengkap"
        decimal base_price "Biaya paket (IDR Decimal 15,2)"
        int estimated_days "Estimasi hari kerja selesai"
    }

    ORDERS {
        string id PK "Contoh: LEG-2025-0891"
        string user_id FK "Pemesan (users)"
        int service_id FK "Layanan yang dipesan"
        string pla_id FK "Personal Legal Assistant bertugas"
        string title "Nama badan usaha / merek yang diajukan"
        enum status "PENDING, ON_PROGRESS, COMPLETED, CANCELLED"
        decimal total_amount "Total pembayaran final"
        string voucher_code "Kode voucher PNBP Kemenkumham"
        string kemenkumham_id "Nomor registrasi resmi AHU/DJKI"
        datetime created_at
        datetime updated_at
    }

    ORDER_TRACKING {
        int id PK "Autoincrement"
        string order_id FK "Relasi ke orders"
        int step_number "Urutan tahapan (1..4)"
        string step_name "Nama tahap legalitas"
        enum status "DONE, JALAN, PENDING"
        string description "Detail perkembangan"
        datetime completed_at
        datetime updated_at
    }

    DOCUMENTS {
        string id PK "Default UUID or doc-*"
        string order_id FK "Relasi ke orders"
        string uploaded_by FK "Relasi ke users"
        string file_name "Nama file fisik dokumen"
        string file_url "Akses berkas terenkripsi"
        string file_size "Ukuran file (e.g. 1.8 MB)"
        enum doc_type "KTP, NPWP, AKTA, NIB, SK_MENKUMHAM, VOUCHER, OTHER"
        datetime created_at
    }

    CONSULTATIONS {
        int id PK "Autoincrement"
        string client_name "Nama prospek / klien"
        string phone_number "Nomor WhatsApp"
        string email "Email aktif"
        string city "Domisili kota"
        string service_slug "Layanan yang diminati"
        enum consult_method "WHATSAPP, GMEET, OFFICE"
        string notes "Catatan kebutuhan khusus"
        enum status "NEW, CONTACTED, RESOLVED"
        datetime created_at
    }

    KBLI_ITEMS {
        string code PK "Kode KBLI 5 Digit (e.g. 62019)"
        string title "Judul kelompok usaha"
        string category "Kategori sektor (J, I, F, G)"
        string sector_name "Nama sektor industri"
        string description "Ruang lingkup kegiatan"
        enum risk_level "R, MR, MT, T (OSS-RBA)"
        string permits_required "Perizinan berusaha yang diterbitkan"
        string dpi_rules "Aturan Daftar Positif Investasi"
    }

    REGISTERED_PTS {
        int id PK "Autoincrement"
        string name UK "Nama PT terdaftar di Ditjen AHU"
        string status "ACTIVE / DISSOLVED"
        string ahu_number "Nomor SK Menkumham"
        date registration_date
    }

    REGISTERED_TRADEMARKS {
        int id PK "Autoincrement"
        string brand_name "Nama merek dagang"
        int nice_class "Kelas Nice (1 - 45)"
        string application_number UK "Nomor pendaftaran DJKI"
        string owner_name "Nama pemegang hak merek"
        string status "Terdaftar / Diumumkan / Ditolak"
        string phonetic_key "Kunci fonetik soundex"
    }
```

---

## 2. Struktur Prisma ORM ([prisma/schema.prisma](file:///e:/Ngodingkan/LegalTA/prisma/schema.prisma))

Skema Prisma telah didefinisikan secara deklaratif dan *type-safe* dengan fitur:
- **Datasource**: PostgreSQL via `DATABASE_URL` (dengan connection pooling pgbouncer di port 6543) dan `DIRECT_URL` (direct port 5432 untuk migrasi DDL).
- **Enums**: `UserRole`, `OrderStatus`, `StepStatus`, `DocType`, `ConsultMethod`, `ConsultationStatus`, `RiskLevel`.
- **Relasi & Referential Actions**:
  - `orders` -> `users` (`onDelete: Restrict`)
  - `orders` -> `services` (`onDelete: Restrict`)
  - `order_tracking` -> `orders` (`onDelete: Cascade`)
  - `documents` -> `orders` (`onDelete: Cascade`)
- **Indeks Unik**:
  - `@@unique([orderId, stepNumber], name: "orderStepUnique")` pada `order_tracking`.
- **Perintah Sinkronisasi**:
  - Generate Client: `npm run prisma:generate`
  - Push Schema ke Supabase: `npm run prisma:push`
  - Seed Data Awal: `npm run prisma:seed`
  - GUI Inspector: `npm run prisma:studio`