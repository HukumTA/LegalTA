# Product Requirements Document (PRD): LEGALTA

## 1. Visi dan Identitas Produk
**Nama Produk:** LEGALTA
**Tagline:** Keseimbangan • Modern • Adil[cite: 10]
**Visi:** Menjadi platform *LegalTech* terdepan di Indonesia yang memberikan kemudahan, transparansi, dan keadilan dalam pengurusan legalitas bagi setiap pengusaha dan korporasi, dari tahap pendirian hingga perlindungan kekayaan intelektual.

## 2. Target Pengguna
1. **Pengusaha Pemula / UMKM (Individual):** Membutuhkan layanan paket dasar seperti pendirian PT Perorangan, CV, dan NIB[cite: 6].
2. **Perusahaan Berkembang / Korporat:** Membutuhkan layanan kompleks seperti pendaftaran Merek (HKI), perubahan Anggaran Dasar, dan perizinan khusus[cite: 6].
3. **Admin / Personal Legal Assistant (PLA):** Staf internal LEGALTA yang bertugas memproses dokumen klien, memperbarui status *tracking*, dan memberikan konsultasi[cite: 4, 5].

## 3. Fitur Utama (Core Features)
### A. Layanan Legalitas Terintegrasi
Platform harus mencakup kategori layanan berikut:
*   **Pendirian & Pembubaran Badan Usaha:** PT, PT PMA, PT Perorangan, CV, Yayasan, Firma, Koperasi.
*   **Perizinan Usaha:** NIB, OSS, PKP, PSE, PKKPR, LKPM.
*   **Pengurusan Dokumen Perusahaan:** Perubahan Anggaran Dasar, Data Perusahaan, Cabang, Akta Jual Beli/Akuisisi.
*   **Pendaftaran HKI:** Merek, Paten, Desain Industri, Hak Cipta.

### B. Tools Terbuka (Public Tools)
Fitur *self-service* interaktif yang dapat diakses dari menu *dropdown* "Tools"[cite: 9]:
*   **Cek Nama PT:** Pengecekan ketersediaan nama perseroan secara *real-time* (simulasi atau API AHU).
*   **Cek Nama Merek:** Pengecekan pangkalan data kekayaan intelektual (DJKI).
*   **Cek KBLI:** Mesin pencari Klasifikasi Baku Lapangan Usaha Indonesia berdasarkan kata kunci.

### C. Live Tracking System (Transparansi Penuh)
Dasbor klien interaktif yang menampilkan *progress* layanan secara *real-time* dari *smartphone* atau PC. Status meliputi:
1.  Konsultasi (Status: DONE/JALAN)
2.  Cek Nama PT (Status: DONE/JALAN)[cite: 8]
3.  Akta Notaris (Status: DONE/JALAN)[cite: 8]
4.  Pengesahan AHU (Status: PENDING)[cite: 8]

### D. Alur Kerja 4 Langkah (User Flow)
1.  **Pilih Layanan:** Klien menelusuri lebih dari 30 jenis layanan legal dengan transparansi harga[cite: 7].
2.  **Konsultasi Gratis:** Klien terhubung dengan *Personal Legal Assistant* (PLA)[cite: 5, 7].
3.  **Kirim Dokumen Online:** Klien mengunggah syarat administratif via dasbor aman[cite: 7].
4.  **Terima Hasil Digital:** Pengiriman akta dan dokumen secara digital (dan fisik)[cite: 7].

## 4. Kriteria Penerimaan (Acceptance Criteria)
*   Sistem *routing* URL yang ramah SEO untuk setiap layanan (misal: `/layanan/pendirian-pt`).
*   Tombol *Call-to-Action* (CTA) "Konsultasi Gratis" yang terhubung dengan modul *chat* atau WhatsApp API (melayang di sudut kanan bawah)[cite: 1, 3, 4, 5, 6, 7, 8].
*   Arsitektur *backend* yang mampu menangani pengunggahan file dokumen berukuran besar (KTP, NPWP, Draft Akta).