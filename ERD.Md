# Entity Relationship Diagram (ERD): LEGALTA

Platform basis data LEGALTA menggunakan **Supabase PostgreSQL** sebagai sistem manajemen basis data relasional di cloud, dengan dukungan skema relasional terstruktur penuh serta pengamanan Row Level Security (RLS).

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
        text id PK "Default gen_random_uuid() or custom code"
        text name "Nama lengkap pengguna"
        text email UK "Alamat email unik"
        text password_hash "Hash password terenkripsi"
        text phone_number "Nomor WhatsApp aktif"
        enum role "CLIENT, ADMIN, PLA"
        text avatar_url "URL foto profil"
        timestamptz created_at
    }

    SERVICE_CATEGORIES {
        bigint id PK "Identity generated"
        text name "Nama kategori (Pendirian, Perizinan, dll)"
        text slug UK "URL slug identik"
        text description
    }

    SERVICES {
        bigint id PK "Identity generated"
        bigint category_id FK "Relasi ke service_categories"
        text title "Judul paket layanan"
        text slug UK "Slug unik layanan"
        text description "Deskripsi lengkap"
        numeric base_price "Biaya paket (IDR)"
        integer estimated_days "Estimasi hari kerja selesai"
    }

    ORDERS {
        text id PK "Contoh: LEG-2025-0891"
        text user_id FK "Pemesan (users)"
        bigint service_id FK "Layanan yang dipesan"
        text pla_id FK "Personal Legal Assistant bertugas"
        text title "Nama badan usaha / merek yang diajukan"
        enum status "PENDING, ON_PROGRESS, COMPLETED, CANCELLED"
        numeric total_amount "Total pembayaran final"
        text voucher_code "Kode voucher PNBP Kemenkumham"
        text kemenkumham_id "Nomor registrasi resmi AHU/DJKI"
        timestamptz created_at
        timestamptz updated_at
    }

    ORDER_TRACKING {
        bigint id PK "Identity generated"
        text order_id FK "Relasi ke orders"
        integer step_number "Urutan tahapan (1..4)"
        text step_name "Nama tahap legalitas"
        enum status "DONE, JALAN, PENDING"
        text description "Detail perkembangan"
        timestamptz completed_at
        timestamptz updated_at
    }

    DOCUMENTS {
        text id PK "Default gen_random_uuid() or doc-*"
        text order_id FK "Relasi ke orders"
        text uploaded_by FK "Relasi ke users"
        text file_name "Nama file fisik dokumen"
        text file_url "Akses berkas terenkripsi"
        text file_size "Ukuran file (e.g. 1.8 MB)"
        enum doc_type "KTP, NPWP, AKTA, NIB, SK_MENKUMHAM, VOUCHER, OTHER"
        timestamptz created_at
    }

    CONSULTATIONS {
        bigint id PK "Identity generated"
        text client_name "Nama prospek / klien"
        text phone_number "Nomor WhatsApp"
        text email "Email aktif"
        text city "Domisili kota"
        text service_slug "Layanan yang diminati"
        enum consult_method "whatsapp, gmeet, office"
        text notes "Catatan kebutuhan khusus"
        enum status "NEW, CONTACTED, RESOLVED"
        timestamptz created_at
    }

    KBLI_ITEMS {
        text code PK "Kode KBLI 5 Digit (e.g. 62019)"
        text title "Judul kelompok usaha"
        text category "Kategori sektor (J, I, F, G)"
        text sector_name "Nama sektor industri"
        text description "Ruang lingkup kegiatan"
        enum risk_level "R, MR, MT, T (OSS-RBA)"
        text permits_required "Perizinan berusaha yang diterbitkan"
        text dpi_rules "Aturan Daftar Positif Investasi"
    }

    REGISTERED_PTS {
        bigint id PK "Identity generated"
        text name UK "Nama PT terdaftar di Ditjen AHU"
        text status "ACTIVE / DISSOLVED"
        text ahu_number "Nomor SK Menkumham"
        date registration_date
    }

    REGISTERED_TRADEMARKS {
        bigint id PK "Identity generated"
        text brand_name "Nama merek dagang"
        integer nice_class "Kelas Nice (1 - 45)"
        text application_number UK "Nomor pendaftaran DJKI"
        text owner_name "Nama pemegang hak merek"
        text status "Terdaftar / Diumumkan / Ditolak"
        text phonetic_key "Kunci fonetik soundex"
    }
```

---

## 2. File Skrip Supabase

- **Skema DDL PostgreSQL**: [database/supabase_schema.sql](file:///e:/Ngodingkan/LegalTA/database/supabase_schema.sql)
  - Berisi seluruh definisi tabel, foreign key constraints, default value, index performa, serta kebijakan **Row Level Security (RLS)** untuk publik dan admin.
- **Data Awal (Seed)**: [database/supabase_seed.sql](file:///e:/Ngodingkan/LegalTA/database/supabase_seed.sql)
  - Berisi data dummy pesanan live tracking (`LEG-2025-0891`, `LEG-2025-0104`, `LEG-2025-0942`), database referensi KBLI 2020, database PT AHU terdaftar, dan database merek DJKI PDKI.