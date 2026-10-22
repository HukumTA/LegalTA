/**
 * LEGALTA Prisma Database Seeder
 * Idempotent seeder using upsert and transaction
 */

require('dotenv').config({ quiet: true });
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('[LEGALTA] Memulai pengisian data awal (Prisma Seed)...');

  // 1. Seed Users
  const usersData = [
    {
      id: 'usr-pla-najwa',
      name: 'Najwa',
      email: 'najwa@legalta.id',
      phoneNumber: '+6281288880192',
      role: 'PLA',
      avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-Z30Zfg8uJB3aOLvO9XqC3TwP-vAZf0h_Ir39bA9SP54kzOeP62jZBolvPWJQXkWtTh9QvQAg6GyCtArctfeXkBY1SvQS023dXHCrNUWOe6D5tB6q4qWIOvKw3f-lKNuzdzrpDqoth0IR_XKzd0O-T9uCMIkCEccvOWhE1FcARDHbxTlmOYUtoVwsG4Dd_1iRyfond1cNXc5nQR6A4AF5OBc4h6lGHpA_IPMCCPAYq9s40mP29aEl9p_PXfz_QPJluQ'
    },
    {
      id: 'usr-pla-wildan',
      name: 'Wildan',
      email: 'wildan@legalta.id',
      phoneNumber: '',
      role: 'CTO',
      avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqsZ6ngVW8Z6CtogIwwkxrbHDdEEPIZVDqrlJqC4q9rup7_g9dDEeT4FQHmkkk47wiovPZTle2fRgdPld6xjnvjpT6Dz8ZbESbBvrGkHn-_g_Pc1mSbta4bPZxnZiKgJTVUeaets5ViUfr8YPmWTWzrK6dDJy5KZDLJPqt8Mtk0JwxiOZFcYtUjp2WON5wOnV4pmbGOZpM7C4lFR20RggLjfFpZ6eHjz1ZshpkLWydFK2IQyWhrgRgs3MR4RW3deetRg'
    },
    {
      id: 'usr-admin-amirah',
      name: 'Amirah Sridinanti',
      email: 'amirah@legalta.id',
      phoneNumber: '+6281288880100',
      role: 'ADMIN',
      avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg0Mc2x4PoIYdBGuLU9TbsCUCpT4lFmufN_7c_3OSBV8jlMtOHKcYFwKQQdAOarCdNNTBGYwW9OzjlnJXBpRNlo0MmK-NKTCOFRohengCZX_W_6cTX0xJYRaX_Byj52UbHTSf9A3w0yzNBdAurlqEyHt8CYf_EUUC6gIu5JSpoojSOIeYKsYaMIU3-Z66ADd4_pqHPmspY1KQMCn_WypVzmCQUTy0oBX6cn-xlkCe-tHUUUOj0V0tmO_O5qMMd91rGcA'
    },
    {
      id: 'usr-client-01',
      name: 'Bambang Sutrisno',
      email: 'bambang@perkasadigital.id',
      phoneNumber: '+6281299990891',
      role: 'CLIENT'
    },
    {
      id: 'usr-client-02',
      name: 'Dewi Lestari',
      email: 'dewi@kopisenja.com',
      phoneNumber: '+6281311110104',
      role: 'CLIENT'
    },
    {
      id: 'usr-client-03',
      name: 'Rian Hidayat',
      email: 'rian@voyagerlabs.io',
      phoneNumber: '+6281522220942',
      role: 'CLIENT'
    }
  ];

  for (const u of usersData) {
    await prisma.user.upsert({
      where: { email: u.email },
      update: u,
      create: u
    });
  }
  console.log(`✅ [Users] Berhasil memuat ${usersData.length} data pengguna.`);

  // 2. Seed Service Categories
  const categoriesData = [
    { id: 1, name: 'Pendirian Badan Usaha', slug: 'pendirian-badan-usaha', description: 'Legalitas pendirian PT, CV, PMA, dan Yayasan resmi Kemenkumham RI' },
    { id: 2, name: 'Perizinan Usaha', slug: 'perizinan-usaha', description: 'Perizinan berusaha berbasis risiko OSS-RBA, NIB, PB-UMKU, dan PSE Kominfo' },
    { id: 3, name: 'Dokumen Perusahaan', slug: 'dokumen-perusahaan', description: 'Perubahan anggaran dasar, RUPS, restrukturisasi saham, dan akta notaris' },
    { id: 4, name: 'Pendaftaran HKI', slug: 'pendaftaran-hki', description: 'Perlindungan kekayaan intelektual DJKI: Merek dagang, Hak cipta, Paten, dan Desain' }
  ];

  for (const c of categoriesData) {
    await prisma.serviceCategory.upsert({
      where: { id: c.id },
      update: c,
      create: c
    });
  }
  console.log(`✅ [Categories] Berhasil memuat ${categoriesData.length} kategori.`);

  // 3. Seed Services
  const servicesData = [
    { id: 1, categoryId: 1, title: 'Pendirian PT Standar (PMDN)', slug: 'pt-standar', description: 'Paket lengkap Akta Notaris, SK Kemenkumham AHU, NPWP Badan, NIB OSS-RBA, dan Sertifikat Standar', basePrice: 4900000, estimatedDays: 3 },
    { id: 2, categoryId: 1, title: 'Pendirian PT Perorangan (UMKM)', slug: 'pt-perorangan', description: 'Khusus usaha mikro & kecil: Tanpa notaris, 1 pemegang saham, modal bebas, terbit SK Menkumham otomatis', basePrice: 1450000, estimatedDays: 1 },
    { id: 3, categoryId: 1, title: 'Pendirian CV Usaha', slug: 'cv', description: 'Badan usaha persekutuan komanditer untuk UMKM, biaya operasional hemat, terdaftar di AHU Kemenkumham', basePrice: 3200000, estimatedDays: 3 },
    { id: 4, categoryId: 1, title: 'Pendirian PT PMA (Modal Asing)', slug: 'pt-pma', description: 'Investasi asing legal di Indonesia: OSS RBA terintegrasi, pendampingan modal setor Rp 10M, izin BKPM', basePrice: 14500000, estimatedDays: 10 },
    { id: 5, categoryId: 2, title: 'Penerbitan NIB & Akun OSS-RBA', slug: 'perizinan-oss', description: 'Nomor Induk Berusaha 13 digit berlaku sebagai TDP, API, dan Hak Akses Kepabeanan', basePrice: 1250000, estimatedDays: 1 },
    { id: 6, categoryId: 2, title: 'Pendaftaran PSE Kominfo', slug: 'pse', description: 'Kewajiban legalitas platform aplikasi, software SaaS, dan website e-commerce lingkup domestik', basePrice: 2500000, estimatedDays: 3 },
    { id: 7, categoryId: 2, title: 'Persetujuan PKKPR Tata Ruang', slug: 'pkkpr', description: 'Validasi kesesuaian pemanfaatan ruang lokasi usaha terhadap RDTR tata kota', basePrice: 3000000, estimatedDays: 5 },
    { id: 8, categoryId: 3, title: 'Perubahan Anggaran Dasar PT', slug: 'perubahan-akta', description: 'Amandemen anggaran dasar: Pergantian direksi/komisaris, perubahan modal, atau domisili hukum', basePrice: 4500000, estimatedDays: 3 },
    { id: 9, categoryId: 4, title: 'Pendaftaran Merek Dagang (Brand)', slug: 'merek', description: 'Perlindungan 10 tahun nama & logo di DJKI Kemenkumham: Asas First-to-File, 1 kelas Nice', basePrice: 2450000, estimatedDays: 1 },
    { id: 10, categoryId: 4, title: 'Pencatatan Hak Cipta Cepat', slug: 'hakcipta', description: 'Perlindungan program komputer, software, karya tulis, dan seni berlaku seumur hidup + 70 tahun', basePrice: 1750000, estimatedDays: 2 }
  ];

  for (const s of servicesData) {
    await prisma.service.upsert({
      where: { id: s.id },
      update: s,
      create: s
    });
  }
  console.log(`✅ [Services] Berhasil memuat ${servicesData.length} layanan.`);

  // 4. Seed Orders
  const ordersData = [
    {
      id: 'LEG-2025-0891',
      userId: 'usr-client-01',
      serviceId: 1,
      plaId: 'usr-pla-najwa',
      title: 'PT Perkasa Digital Nusantara',
      status: 'ON_PROGRESS',
      totalAmount: 4900000,
      voucherCode: 'AHU-98218-PNBP',
      kemenkumhamId: 'W-2025-PT-0891'
    },
    {
      id: 'LEG-2025-0104',
      userId: 'usr-client-02',
      serviceId: 2,
      plaId: 'usr-pla-wildan',
      title: 'PT Kopi Senja Selaras',
      status: 'COMPLETED',
      totalAmount: 1450000,
      voucherCode: 'AHU-11029-PNBP',
      kemenkumhamId: 'AHU-0098212.AH.01.01.2025'
    },
    {
      id: 'LEG-2025-0942',
      userId: 'usr-client-03',
      serviceId: 9,
      plaId: 'usr-pla-najwa',
      title: 'Voyager Labs (Kelas 42)',
      status: 'PENDING',
      totalAmount: 2450000,
      voucherCode: 'DJKI-M-9021-NICE42',
      kemenkumhamId: 'D22-2025-00942'
    }
  ];

  for (const o of ordersData) {
    await prisma.order.upsert({
      where: { id: o.id },
      update: o,
      create: o
    });
  }
  console.log(`✅ [Orders] Berhasil memuat ${ordersData.length} pesanan.`);

  // 5. Seed Order Tracking Steps
  const stepsData = [
    { id: 1, orderId: 'LEG-2025-0891', stepNumber: 1, stepName: 'Konsultasi & Verifikasi Dokumen', status: 'DONE', description: 'Wawancara awal & verifikasi KTP/NPWP direksi dan komisaris terkonfirmasi Dukcapil', completedAt: new Date('2025-10-21T10:45:00+07:00') },
    { id: 2, orderId: 'LEG-2025-0891', stepNumber: 2, stepName: 'Cek Nama PT & Reservasi AHU', status: 'DONE', description: 'Pemesanan nama PT PERKASA DIGITAL NUSANTARA sukses disetujui Ditjen AHU Kemenkumham RI', completedAt: new Date('2025-10-21T15:30:00+07:00') },
    { id: 3, orderId: 'LEG-2025-0891', stepNumber: 3, stepName: 'Akta Notaris & Tanda Tangan', status: 'JALAN', description: 'Draf Anggaran Dasar selesai dirumuskan. Proses pembacaan & pengesahan akta notaris rekanan', completedAt: null },
    { id: 4, orderId: 'LEG-2025-0891', stepNumber: 4, stepName: 'Pengesahan SK Menkumham & NIB', status: 'PENDING', description: 'Pengunggahan salinan resmi akta ke Ditjen AHU untuk penerbitan SK Badan Hukum final & NIB OSS', completedAt: null },

    { id: 5, orderId: 'LEG-2025-0104', stepNumber: 1, stepName: 'Konsultasi & Pernyataan Pendirian', status: 'DONE', description: 'Formulir pernyataan pendirian mandiri selesai diisi dan divalidasi sistem', completedAt: new Date('2025-10-12T09:15:00+07:00') },
    { id: 6, orderId: 'LEG-2025-0104', stepNumber: 2, stepName: 'Pendaftaran Nama PT Perorangan', status: 'DONE', description: 'Nama PT KOPI SENJA SELARAS disetujui Ditjen AHU Kemenkumham', completedAt: new Date('2025-10-12T11:00:00+07:00') },
    { id: 7, orderId: 'LEG-2025-0104', stepNumber: 3, stepName: 'Penerbitan Sertifikat AHU', status: 'DONE', description: 'Sertifikat Pendaftaran Pendirian Perseroan Perorangan resmi terbit', completedAt: new Date('2025-10-13T14:20:00+07:00') },
    { id: 8, orderId: 'LEG-2025-0104', stepNumber: 4, stepName: 'Penerbitan NIB & Akun OSS', status: 'DONE', description: 'NIB 13 digit dan akun OSS RBA resmi diserahkan kepada klien. Berkas lengkap', completedAt: new Date('2025-10-14T10:00:00+07:00') },

    { id: 9, orderId: 'LEG-2025-0942', stepNumber: 1, stepName: 'Penelusuran Kemiripan PDKI', status: 'JALAN', description: 'Riset mendalam kemiripan fonetik dan visual di Kelas Nice 42 oleh Konsultan HKI', completedAt: null },
    { id: 10, orderId: 'LEG-2025-0942', stepNumber: 2, stepName: 'Penyusunan Etiket & Uraian', status: 'PENDING', description: 'Format etiket gambar logo & perincian klasifikasi software', completedAt: null },
    { id: 11, orderId: 'LEG-2025-0942', stepNumber: 3, stepName: 'Pengajuan ke Portal DJKI', status: 'PENDING', description: 'Pembayaran billing PNBP & penerbitan bukti pendaftaran resmi', completedAt: null },
    { id: 12, orderId: 'LEG-2025-0942', stepNumber: 4, stepName: 'Masa Pengumuman & Sertifikat', status: 'PENDING', description: 'Monitoring masa oposisi 2 bulan hingga terbit Sertifikat Merek', completedAt: null }
  ];

  for (const st of stepsData) {
    await prisma.orderTracking.upsert({
      where: { id: st.id },
      update: st,
      create: st
    });
  }
  console.log(`✅ [OrderTracking] Berhasil memuat ${stepsData.length} milestone tracking.`);

  // 6. Seed Documents
  const docsData = [
    { id: 'doc-01', orderId: 'LEG-2025-0891', uploadedBy: 'usr-pla-najwa', fileName: 'Draft_Akta_Notaris_v1.2.pdf', fileUrl: '/documents/Draft_Akta_Notaris_v1.2.pdf', fileSize: '1.8 MB', docType: 'AKTA' },
    { id: 'doc-02', orderId: 'LEG-2025-0891', uploadedBy: 'usr-pla-najwa', fileName: 'Voucher_Pemesanan_Nama_AHU.pdf', fileUrl: '/documents/Voucher_Pemesanan_Nama_AHU.pdf', fileSize: '420 KB', docType: 'VOUCHER' },
    { id: 'doc-03', orderId: 'LEG-2025-0104', uploadedBy: 'usr-pla-wildan', fileName: 'Sertifikat_Pernyataan_Pendirian_AHU.pdf', fileUrl: '/documents/Sertifikat_Pernyataan_Pendirian_AHU.pdf', fileSize: '2.4 MB', docType: 'SK_MENKUMHAM' },
    { id: 'doc-04', orderId: 'LEG-2025-0104', uploadedBy: 'usr-pla-wildan', fileName: 'NIB_Nomor_Induk_Berusaha_OSS.pdf', fileUrl: '/documents/NIB_Nomor_Induk_Berusaha_OSS.pdf', fileSize: '1.1 MB', docType: 'NIB' }
  ];

  for (const d of docsData) {
    await prisma.document.upsert({
      where: { id: d.id },
      update: d,
      create: d
    });
  }
  console.log(`✅ [Documents] Berhasil memuat ${docsData.length} dokumen brankas.`);

  // 7. Seed KBLI Items
  const kbliData = [
    { code: '62019', title: 'Aktivitas Pengembangan Aplikasi Bergerak / Software Lainnya', category: 'J', sectorName: 'Informasi & Komunikasi', description: 'Mencakup kegiatan konsultasi, analisis, desain, serta pemrograman aplikasi berbasis sistem operasi mobile (iOS, Android) atau modul perangkat lunak proprietary lainnya.', riskLevel: 'MR', permitsRequired: 'NIB + Sertifikat Standar (Self-declaration komitmen teknis)', dpiRules: 'Terbuka 100% Kepemilikan Asing (PMA)' },
    { code: '56303', title: 'Rumah Minum / Kafe', category: 'I', sectorName: 'Penyediaan Akomodasi & Makan Minum', description: 'Mencakup usaha penyediaan minuman dan kudapan ringan untuk dikonsumsi di tempat, kedai kopi spesialti, juice bar, dan gerai minuman santai.', riskLevel: 'R', permitsRequired: 'NIB Berlaku Langsung sebagai legalitas operasional', dpiRules: 'Dicadangkan khusus Koperasi & UMKM' },
    { code: '46100', title: 'Perdagangan Besar Balas Jasa (Fee) / Broker Makelar', category: 'G', sectorName: 'Perdagangan Besar & Eceran', description: 'Mencakup kegiatan keagenan, perantara komoditas industri, dan makelar perdagangan besar yang memperdagangkan barang atas nama pihak lain.', riskLevel: 'MT', permitsRequired: 'NIB + Sertifikat Standar Terverifikasi dinas terkait', dpiRules: 'Maksimal kepemilikan asing 67% - 100%' },
    { code: '41011', title: 'Konstruksi Gedung Tempat Tinggal', category: 'F', sectorName: 'Konstruksi', description: 'Mencakup kegiatan pembangunan gedung tempat tinggal termasuk rumah, apartemen, kondominium, dan perumahan rakyat.', riskLevel: 'MT', permitsRequired: 'NIB + Sertifikat Badan Usaha (SBU) LPJK terakreditasi', dpiRules: 'Terbuka PMA dengan persyaratan kemitraan lokal' },
    { code: '46900', title: 'Perdagangan Besar Berbagai Macam Barang (Ekspor Impor)', category: 'G', sectorName: 'Perdagangan Besar', description: 'Mencakup perdagangan besar berbagai macam barang tanpa kekhususan tertentu (General Trading).', riskLevel: 'MR', permitsRequired: 'NIB + Bukti Kepemilikan Gudang (TDG)', dpiRules: 'Terbuka 100% Modal Asing untuk skala besar' }
  ];

  for (const k of kbliData) {
    await prisma.kbliItem.upsert({
      where: { code: k.code },
      update: k,
      create: k
    });
  }
  console.log(`✅ [KBLI] Berhasil memuat ${kbliData.length} data KBLI 2020.`);

  // 8. Seed Registered PTs
  const ptsData = [
    { id: 1, name: 'NUSANTARA DIGITAL MEDIA', status: 'ACTIVE', ahuNumber: 'AHU-0012981.AH.01.01.2021', registrationDate: new Date('2021-03-15') },
    { id: 2, name: 'SINAR ABADI SEJAHTERA', status: 'ACTIVE', ahuNumber: 'AHU-0034821.AH.01.01.2022', registrationDate: new Date('2022-06-20') },
    { id: 3, name: 'CAKRAWALA INOVASI MAKMUR', status: 'ACTIVE', ahuNumber: 'AHU-0081293.AH.01.01.2023', registrationDate: new Date('2023-09-10') },
    { id: 4, name: 'BERKAH KARYA NUSANTARA', status: 'ACTIVE', ahuNumber: 'AHU-0091823.AH.01.01.2024', registrationDate: new Date('2024-01-05') }
  ];

  for (const pt of ptsData) {
    await prisma.registeredPt.upsert({
      where: { id: pt.id },
      update: pt,
      create: pt
    });
  }
  console.log(`✅ [PT] Berhasil memuat ${ptsData.length} PT terdaftar.`);

  // 9. Seed Registered Trademarks
  const marksData = [
    { id: 1, brandName: 'VOYAGE DIGITAL', niceClass: 42, applicationNumber: 'DID2021049281', ownerName: 'PT Nusantara Digital Kreasindo', status: 'Terdaftar', phoneticKey: 'FJJDGTL' },
    { id: 2, brandName: 'VOYAGERS INDONESIA', niceClass: 39, applicationNumber: 'IDM000892711', ownerName: 'CV Bahari Bersama Khatulistiwa', status: 'Terdaftar', phoneticKey: 'FJRSNDNS' },
    { id: 3, brandName: 'KOPITAN', niceClass: 43, applicationNumber: 'IDM000781290', ownerName: 'PT Selera Kopi Tradisi', status: 'Terdaftar', phoneticKey: 'KPTN' },
    { id: 4, brandName: 'ARCADIA STUDIOS', niceClass: 42, applicationNumber: 'DID2023091823', ownerName: 'PT Studio Arcadia Kreatif', status: 'Terdaftar', phoneticKey: 'ARKDSTDS' }
  ];

  for (const m of marksData) {
    await prisma.registeredTrademark.upsert({
      where: { id: m.id },
      update: m,
      create: m
    });
  }
  console.log(`✅ [Trademarks] Berhasil memuat ${marksData.length} merek DJKI.`);

  console.log('[PRISMA SEED] ✅ Semua data awal LEGALTA berhasil diisi ke PostgreSQL!\n');
}

main()
  .catch((e) => {
    console.error('❌ Error during Prisma seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
