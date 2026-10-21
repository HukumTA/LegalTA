-- ==========================================================
-- LEGALTA Database Seed Data for Supabase (PostgreSQL)
-- Safe to re-run (idempotent with ON CONFLICT DO NOTHING)
-- ==========================================================

-- 1. SEED USERS (Admin, PLA, and Clients)
INSERT INTO public.users (id, name, email, phone_number, role, avatar_url) VALUES 
('usr-pla-najwa', 'Najwa', 'najwa@legalta.id', '+6281288880192', 'PLA', 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-Z30Zfg8uJB3aOLvO9XqC3TwP-vAZf0h_Ir39bA9SP54kzOeP62jZBolvPWJQXkWtTh9QvQAg6GyCtArctfeXkBY1SvQS023dXHCrNUWOe6D5tB6q4qWIOvKw3f-lKNuzdzrpDqoth0IR_XKzd0O-T9uCMIkCEccvOWhE1FcARDHbxTlmOYUtoVwsG4Dd_1iRyfond1cNXc5nQR6A4AF5OBc4h6lGHpA_IPMCCPAYq9s40mP29aEl9p_PXfz_QPJluQ'),
('usr-pla-wildan', 'Wildan', 'wildan@legalta.id', '+6281288880193', 'PLA', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqsZ6ngVW8Z6CtogIwwkxrbHDdEEPIZVDqrlJqC4q9rup7_g9dDEeT4FQHmkkk47wiovPZTle2fRgdPld6xjnvjpT6Dz8ZbESbBvrGkHn-_g_Pc1mSbta4bPZxnZiKgJTVUeaets5ViUfr8YPmWTWzrK6dDJy5KZDLJPqt8Mtk0JwxiOZFcYtUjp2WON5wOnV4pmbGOZpM7C4lFR20RggLjfFpZ6eHjz1ZshpkLWydFK2IQyWhrgRgs3MR4RW3deetRg'),
('usr-admin-amirah', 'Amirah Sridinanti', 'amirah@legalta.id', '+6281288880100', 'ADMIN', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg0Mc2x4PoIYdBGuLU9TbsCUCpT4lFmufN_7c_3OSBV8jlMtOHKcYFwKQQdAOarCdNNTBGYwW9OzjlnJXBpRNlo0MmK-NKTCOFRohengCZX_W_6cTX0xJYRaX_Byj52UbHTSf9A3w0yzNBdAurlqEyHt8CYf_EUUC6gIu5JSpoojSOIeYKsYaMIU3-Z66ADd4_pqHPmspY1KQMCn_WypVzmCQUTy0oBX6cn-xlkCe-tHUUUOj0V0tmO_O5qMMd91rGcA'),
('usr-client-01', 'Bambang Sutrisno', 'bambang@perkasadigital.id', '+6281299990891', 'CLIENT', NULL),
('usr-client-02', 'Dewi Lestari', 'dewi@kopisenja.com', '+6281311110104', 'CLIENT', NULL),
('usr-client-03', 'Rian Hidayat', 'rian@voyagerlabs.io', '+6281522220942', 'CLIENT', NULL)
ON CONFLICT (id) DO NOTHING;

-- 2. SEED SERVICE CATEGORIES
INSERT INTO public.service_categories (id, name, slug, description) VALUES
(1, 'Pendirian Badan Usaha', 'pendirian-badan-usaha', 'Legalitas pendirian PT, CV, PMA, dan Yayasan resmi Kemenkumham RI'),
(2, 'Perizinan Usaha', 'perizinan-usaha', 'Perizinan berusaha berbasis risiko OSS-RBA, NIB, PB-UMKU, dan PSE Kominfo'),
(3, 'Dokumen Perusahaan', 'dokumen-perusahaan', 'Perubahan anggaran dasar, RUPS, restrukturisasi saham, dan akta notaris'),
(4, 'Pendaftaran HKI', 'pendaftaran-hki', 'Perlindungan kekayaan intelektual DJKI: Merek dagang, Hak cipta, Paten, dan Desain')
ON CONFLICT (id) DO NOTHING;

-- Reset sequence if needed for service_categories
SELECT setval('service_categories_id_seq', (SELECT MAX(id) FROM public.service_categories));

-- 3. SEED SERVICES
INSERT INTO public.services (id, category_id, title, slug, description, base_price, estimated_days) VALUES
(1, 1, 'Pendirian PT Standar (PMDN)', 'pt-standar', 'Paket lengkap Akta Notaris, SK Kemenkumham AHU, NPWP Badan, NIB OSS-RBA, dan Sertifikat Standar', 4900000, 3),
(2, 1, 'Pendirian PT Perorangan (UMKM)', 'pt-perorangan', 'Khusus usaha mikro & kecil: Tanpa notaris, 1 pemegang saham, modal bebas, terbit SK Menkumham otomatis', 1450000, 1),
(3, 1, 'Pendirian CV Usaha', 'cv', 'Badan usaha persekutuan komanditer untuk UMKM, biaya operasional hemat, terdaftar di AHU Kemenkumham', 3200000, 3),
(4, 1, 'Pendirian PT PMA (Modal Asing)', 'pt-pma', 'Investasi asing legal di Indonesia: OSS RBA terintegrasi, pendampingan modal setor Rp 10M, izin BKPM', 14500000, 10),
(5, 2, 'Penerbitan NIB & Akun OSS-RBA', 'perizinan-oss', 'Nomor Induk Berusaha 13 digit berlaku sebagai TDP, API, dan Hak Akses Kepabeanan', 1250000, 1),
(6, 2, 'Pendaftaran PSE Kominfo', 'pse', 'Kewajiban legalitas platform aplikasi, software SaaS, dan website e-commerce lingkup domestik', 2500000, 3),
(7, 2, 'Persetujuan PKKPR Tata Ruang', 'pkkpr', 'Validasi kesesuaian pemanfaatan ruang lokasi usaha terhadap RDTR tata kota', 3000000, 5),
(8, 3, 'Perubahan Anggaran Dasar PT', 'perubahan-akta', 'Amandemen anggaran dasar: Pergantian direksi/komisaris, perubahan modal, atau domisili hukum', 4500000, 3),
(9, 4, 'Pendaftaran Merek Dagang (Brand)', 'merek', 'Perlindungan 10 tahun nama & logo di DJKI Kemenkumham: Asas First-to-File, 1 kelas Nice', 2450000, 1),
(10, 4, 'Pencatatan Hak Cipta Cepat', 'hakcipta', 'Perlindungan program komputer, software, karya tulis, dan seni berlaku seumur hidup + 70 tahun', 1750000, 2)
ON CONFLICT (id) DO NOTHING;

SELECT setval('services_id_seq', (SELECT MAX(id) FROM public.services));

-- 4. SEED ORDERS
INSERT INTO public.orders (id, user_id, service_id, pla_id, title, status, total_amount, voucher_code, kemenkumham_id, created_at) VALUES
('LEG-2025-0891', 'usr-client-01', 1, 'usr-pla-najwa', 'PT Perkasa Digital Nusantara', 'ON_PROGRESS', 4900000, 'AHU-98218-PNBP', 'W-2025-PT-0891', '2025-10-21 09:30:00+07'),
('LEG-2025-0104', 'usr-client-02', 2, 'usr-pla-wildan', 'PT Kopi Senja Selaras', 'COMPLETED', 1450000, 'AHU-11029-PNBP', 'AHU-0098212.AH.01.01.2025', '2025-10-12 08:15:00+07'),
('LEG-2025-0942', 'usr-client-03', 9, 'usr-pla-najwa', 'Voyager Labs (Kelas 42)', 'PENDING', 2450000, 'DJKI-M-9021-NICE42', 'D22-2025-00942', '2025-10-22 14:00:00+07')
ON CONFLICT (id) DO NOTHING;

-- 5. SEED ORDER TRACKING STEPS
INSERT INTO public.order_tracking (id, order_id, step_number, step_name, status, description, completed_at) VALUES
(1, 'LEG-2025-0891', 1, 'Konsultasi & Verifikasi Dokumen', 'DONE', 'Wawancara awal & verifikasi KTP/NPWP direksi dan komisaris terkonfirmasi Dukcapil', '2025-10-21 10:45:00+07'),
(2, 'LEG-2025-0891', 2, 'Cek Nama PT & Reservasi AHU', 'DONE', 'Pemesanan nama PT PERKASA DIGITAL NUSANTARA sukses disetujui Ditjen AHU Kemenkumham RI', '2025-10-21 15:30:00+07'),
(3, 'LEG-2025-0891', 3, 'Akta Notaris & Tanda Tangan', 'JALAN', 'Draf Anggaran Dasar selesai dirumuskan. Proses pembacaan & pengesahan akta notaris rekanan', NULL),
(4, 'LEG-2025-0891', 4, 'Pengesahan SK Menkumham & NIB', 'PENDING', 'Pengunggahan salinan resmi akta ke Ditjen AHU untuk penerbitan SK Badan Hukum final & NIB OSS', NULL),
(5, 'LEG-2025-0104', 1, 'Konsultasi & Pernyataan Pendirian', 'DONE', 'Formulir pernyataan pendirian mandiri selesai diisi dan divalidasi sistem', '2025-10-12 09:15:00+07'),
(6, 'LEG-2025-0104', 2, 'Pendaftaran Nama PT Perorangan', 'DONE', 'Nama PT KOPI SENJA SELARAS disetujui Ditjen AHU Kemenkumham', '2025-10-12 11:00:00+07'),
(7, 'LEG-2025-0104', 3, 'Penerbitan Sertifikat AHU', 'DONE', 'Sertifikat Pendaftaran Pendirian Perseroan Perorangan resmi terbit', '2025-10-13 14:20:00+07'),
(8, 'LEG-2025-0104', 4, 'Penerbitan NIB & Akun OSS', 'DONE', 'NIB 13 digit dan akun OSS RBA resmi diserahkan kepada klien. Berkas lengkap', '2025-10-14 10:00:00+07'),
(9, 'LEG-2025-0942', 1, 'Penelusuran Kemiripan PDKI', 'JALAN', 'Riset mendalam kemiripan fonetik dan visual di Kelas Nice 42 oleh Konsultan HKI', NULL),
(10, 'LEG-2025-0942', 2, 'Penyusunan Etiket & Uraian', 'PENDING', 'Format etiket gambar logo & perincian klasifikasi software', NULL),
(11, 'LEG-2025-0942', 3, 'Pengajuan ke Portal DJKI', 'PENDING', 'Pembayaran billing PNBP & penerbitan bukti pendaftaran resmi', NULL),
(12, 'LEG-2025-0942', 4, 'Masa Pengumuman & Sertifikat', 'PENDING', 'Monitoring masa oposisi 2 bulan hingga terbit Sertifikat Merek', NULL)
ON CONFLICT (id) DO NOTHING;

SELECT setval('order_tracking_id_seq', (SELECT MAX(id) FROM public.order_tracking));

-- 6. SEED DOCUMENTS
INSERT INTO public.documents (id, order_id, uploaded_by, file_name, file_url, file_size, doc_type) VALUES
('doc-01', 'LEG-2025-0891', 'usr-pla-najwa', 'Draft_Akta_Notaris_v1.2.pdf', '/documents/Draft_Akta_Notaris_v1.2.pdf', '1.8 MB', 'AKTA'),
('doc-02', 'LEG-2025-0891', 'usr-pla-najwa', 'Voucher_Pemesanan_Nama_AHU.pdf', '/documents/Voucher_Pemesanan_Nama_AHU.pdf', '420 KB', 'VOUCHER'),
('doc-03', 'LEG-2025-0104', 'usr-pla-wildan', 'Sertifikat_Pernyataan_Pendirian_AHU.pdf', '/documents/Sertifikat_Pernyataan_Pendirian_AHU.pdf', '2.4 MB', 'SK_MENKUMHAM'),
('doc-04', 'LEG-2025-0104', 'usr-pla-wildan', 'NIB_Nomor_Induk_Berusaha_OSS.pdf', '/documents/NIB_Nomor_Induk_Berusaha_OSS.pdf', '1.1 MB', 'NIB')
ON CONFLICT (id) DO NOTHING;

-- 7. SEED KBLI REFERENCE ITEMS
INSERT INTO public.kbli_items (code, title, category, sector_name, description, risk_level, permits_required, dpi_rules) VALUES
('62019', 'Aktivitas Pengembangan Aplikasi Bergerak / Software Lainnya', 'J', 'Informasi & Komunikasi', 'Mencakup kegiatan konsultasi, analisis, desain, serta pemrograman aplikasi berbasis sistem operasi mobile (iOS, Android) atau modul perangkat lunak proprietary lainnya.', 'MR', 'NIB + Sertifikat Standar (Self-declaration komitmen teknis)', 'Terbuka 100% Kepemilikan Asing (PMA)'),
('56303', 'Rumah Minum / Kafe', 'I', 'Penyediaan Akomodasi & Makan Minum', 'Mencakup usaha penyediaan minuman dan kudapan ringan untuk dikonsumsi di tempat, kedai kopi spesialti, juice bar, dan gerai minuman santai.', 'R', 'NIB Berlaku Langsung sebagai legalitas operasional', 'Dicadangkan khusus Koperasi & UMKM'),
('46100', 'Perdagangan Besar Balas Jasa (Fee) / Broker Makelar', 'G', 'Perdagangan Besar & Eceran', 'Mencakup kegiatan keagenan, perantara komoditas industri, dan makelar perdagangan besar yang memperdagangkan barang atas nama pihak lain.', 'MT', 'NIB + Sertifikat Standar Terverifikasi dinas terkait', 'Maksimal kepemilikan asing 67% - 100%'),
('41011', 'Konstruksi Gedung Tempat Tinggal', 'F', 'Konstruksi', 'Mencakup kegiatan pembangunan gedung tempat tinggal termasuk rumah, apartemen, kondominium, dan perumahan rakyat.', 'MT', 'NIB + Sertifikat Badan Usaha (SBU) LPJK terakreditasi', 'Terbuka PMA dengan persyaratan kemitraan lokal'),
('46900', 'Perdagangan Besar Berbagai Macam Barang (Ekspor Impor)', 'G', 'Perdagangan Besar', 'Mencakup perdagangan besar berbagai macam barang tanpa kekhususan tertentu (General Trading).', 'MR', 'NIB + Bukti Kepemilikan Gudang (TDG)', 'Terbuka 100% Modal Asing untuk skala besar')
ON CONFLICT (code) DO NOTHING;

-- 8. SEED REGISTERED PTS
INSERT INTO public.registered_pts (name, status, ahu_number, registration_date) VALUES
('NUSANTARA DIGITAL MEDIA', 'ACTIVE', 'AHU-0012981.AH.01.01.2021', '2021-03-15'),
('SINAR ABADI SEJAHTERA', 'ACTIVE', 'AHU-0034821.AH.01.01.2022', '2022-06-20'),
('CAKRAWALA INOVASI MAKMUR', 'ACTIVE', 'AHU-0081293.AH.01.01.2023', '2023-09-10'),
('BERKAH KARYA NUSANTARA', 'ACTIVE', 'AHU-0091823.AH.01.01.2024', '2024-01-05')
ON CONFLICT (name) DO NOTHING;

-- 9. SEED REGISTERED TRADEMARKS
INSERT INTO public.registered_trademarks (brand_name, nice_class, application_number, owner_name, status, phonetic_key) VALUES
('VOYAGE DIGITAL', 42, 'DID2021049281', 'PT Nusantara Digital Kreasindo', 'Terdaftar', 'FJJDGTL'),
('VOYAGERS INDONESIA', 39, 'IDM000892711', 'CV Bahari Bersama Khatulistiwa', 'Terdaftar', 'FJRSNDNS'),
('KOPITAN', 43, 'IDM000781290', 'PT Selera Kopi Tradisi', 'Terdaftar', 'KPTN'),
('ARCADIA STUDIOS', 42, 'DID2023091823', 'PT Studio Arcadia Kreatif', 'Terdaftar', 'ARKDSTDS')
ON CONFLICT (application_number) DO NOTHING;
