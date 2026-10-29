/**
 * Klasifikasi Nice Kelas Merek Lengkap (Kelas 1 s/d 45)
 * Berurutan dari Kelas 1 hingga Kelas 45
 * Standar DJKI Kemenkumham RI & WIPO Nice Classification
 * - Kelas 1 - 34 : Barang (Goods)
 * - Kelas 35 - 45 : Jasa (Services)
 */

export const NICE_CLASSES_LIST = [
  // BARANG (1 - 34)
  { id: 1, type: "Barang", short: "Bahan Kimia Industri, Sains & Pertanian", desc: "Bahan kimia untuk keperluan industri, sains, fotografi, pertanian, hortikultura, damar buatan dan pupuk." },
  { id: 2, type: "Barang", short: "Cat, Pernis & Pelindung Karat", desc: "Cat, pernis, lak, bahan pencegah karat dan pembusukan kayu, zat pewarna, bahan pencelup warna." },
  { id: 3, type: "Barang", short: "Skincare, Kosmetik & Perawatan Tubuh", desc: "Zat untuk membersihkan, memutihkan, kosmetik, sabun, losion rambut, minyak asiri dan pasta gigi.", popular: true },
  { id: 4, type: "Barang", short: "Minyak Industri, Pelumas & Lilin", desc: "Minyak dan lemak untuk industri, minyak pelumas, bahan bakar, penerangan, lilin dan sumbu." },
  { id: 5, type: "Barang", short: "Farmasi, Obat Medis & Suplemen", desc: "Sediaan farmasi medis, herba, makanan dietetik medis, plester, pembalut dan disinfektan." },
  { id: 6, type: "Barang", short: "Logam Biasa, Pipa & Kunci Logam", desc: "Logam biasa dan campurannya, bahan bangunan logam, pipa logam, peti besi dan kunci logam." },
  { id: 7, type: "Barang", short: "Mesin Pabrik, Perkakas & Generator", desc: "Mesin dan mesin perkakas, motor (kecuali kendaraan darat), kopling mesin dan alat pertanian bermesin." },
  { id: 8, type: "Barang", short: "Perkakas Tangan Manual & Pisau", desc: "Perkakas dan perkakas tangan yang dioperasikan manual, alat pemotong, pisau, gunting dan pedang." },
  { id: 9, type: "Barang", short: "Gadget, Elektronik & Software Aplikasi", desc: "Komputer, smartphone, software, aplikasi digital, lensa optik, aparatus perekam dan peranti elektronik.", popular: true },
  { id: 10, type: "Barang", short: "Alat Kesehatan Medis & Bedah", desc: "Aparatus dan instrumen bedah, medis, gigi, mata, anggota badan palsu, dan tempat tidur medis." },
  { id: 11, type: "Barang", short: "Lampu, Pendingin AC & Kulkas", desc: "Aparatus untuk penerangan, pemanas, pembangkit uap, pendingin kulkas, pengering dan ventilasi." },
  { id: 12, type: "Barang", short: "Kendaraan, Mobil, Motor & Otomotif", desc: "Kendaraan darat, mobil, sepeda motor, sepeda roda dua, aparatus lokomosi udara atau air." },
  { id: 13, type: "Barang", short: "Senjata Api, Amunisi & Kembang Api", desc: "Senjata api, amunisi dan proyektil, bahan peledak, kembang api dan mercon." },
  { id: 14, type: "Barang", short: "Perhiasan Emas, Permata & Jam Tangan", desc: "Logam mulia dan campurannya, perhiasan, batu permata, perhiasan imitasi dan alat penunjuk waktu." },
  { id: 15, type: "Barang", short: "Alat Musik, Gitar & Aksesori Musik", desc: "Instrumen alat musik petik, tiup, gesek, perkusi dan aksesori penala musik." },
  { id: 16, type: "Barang", short: "Kertas, Buku, Kemasan & Alat Tulis", desc: "Kertas, karton, bahan cetakan, buku, alat penjilidan, foto, alat tulis kantor, perekat dan kuas." },
  { id: 17, type: "Barang", short: "Karet, Gasket, Selang & Penyekat", desc: "Karet, getah, mika, plastik cetakan untuk manufaktur, bahan pengemas fleksibel dan pipa selang." },
  { id: 18, type: "Barang", short: "Tas Kulit, Dompet, Koper & Payung", desc: "Kulit dan kulit imitasi, tas bepergian, koper, dompet, payung, tongkat jalan dan cambuk." },
  { id: 19, type: "Barang", short: "Bahan Bangunan Non-Logam & Semen", desc: "Bahan konstruksi non-logam, pipa kaku untuk bangunan, aspal, semen, ter, batu dan gipsum." },
  { id: 20, type: "Barang", short: "Furnitur, Mebel & Bingkai Cermin", desc: "Perabot rumah tangga, mebel kantor, cermin, bingkai gambar, wadah penyimpanan kayu/plastik." },
  { id: 21, type: "Barang", short: "Peralatan Dapur, Piring & Sikat Gigi", desc: "Perkakas dan wadah dapur/rumah tangga, gelas, porselen, tembikar dan alat pembersih." },
  { id: 22, type: "Barang", short: "Tali, Tambang, Tenda & Terpal", desc: "Tali, tambang, jaring, tenda, terpal, layar kapal, karung dan bahan pengisi serat." },
  { id: 23, type: "Barang", short: "Benang Jahit & Benang Rajut", desc: "Benang untuk keperluan tekstil, menjahit pakaian dan merajut sulam." },
  { id: 24, type: "Barang", short: "Tekstil, Kain, Sprei & Selimut", desc: "Kain tenun, tekstil pakaian, sprei tempat tidur, sarung bantal dan taplak meja." },
  { id: 25, type: "Barang", short: "Pakaian, Hijab, Sepatu & Sandal", desc: "Pakaian pria/wanita/anak, busana muslim, alas kaki sepatu, sandal dan tutup kepala topi.", popular: true },
  { id: 26, type: "Barang", short: "Renda, Pita, Kancing & Ritsleting", desc: "Renda dan bordiran sulam, pita, kancing baju, kait baju, peniti, jarum dan bunga buatan." },
  { id: 27, type: "Barang", short: "Karpet, Keset, Tikar & Wallpaper", desc: "Karpet lantai, keset kaki, tikar anyaman, linoleum dan pelapis dinding non-tekstil." },
  { id: 28, type: "Barang", short: "Mainan Anak, Game & Alat Olahraga", desc: "Permainan papan, mainan edukasi, boneka, video game konsol, peralatan senam dan olahraga." },
  { id: 29, type: "Barang", short: "Daging, Ikan, Susu & Minyak Olahan", desc: "Daging olahan, ikan, unggas, ekstrak daging, buah/sayur beku kalengan, susu dan keju." },
  { id: 30, type: "Barang", short: "Kopi, Teh, Cokelat, Roti & Bumbu", desc: "Kopi, teh, kakao, beras, tepung gandum, roti, pastry, kembang gula, es krim, madu dan saus sambal.", popular: true },
  { id: 31, type: "Barang", short: "Pertanian, Buah Segar & Pakan Hewan", desc: "Produk hasil pertanian segar, buah, sayuran mentah, benih tanaman, pakan ternak dan hewan hidup." },
  { id: 32, type: "Barang", short: "Air Mineral, Jus Buah & Minuman Segar", desc: "Air minum dalam kemasan, jus sari buah, sirop, soda, minuman energi dan bir." },
  { id: 33, type: "Barang", short: "Minuman Beralkohol, Wine & Liqueur", desc: "Minuman keras beralkohol (kecuali bir), anggur fermentasi, wiski dan minuman anggur." },
  { id: 34, type: "Barang", short: "Tembakau, Rokok, Vape & Pemantik", desc: "Tembakau kering, rokok kretek, cerutu, rokok elektrik (vape), cairan pod dan korek api." },

  // JASA (35 - 45)
  { id: 35, type: "Jasa", short: "Bisnis, Toko Retail & E-Commerce", desc: "Periklanan, manajemen bisnis, administrasi kantor, toko ritel grosir dan penjualan daring marketplace.", popular: true },
  { id: 36, type: "Jasa", short: "Keuangan, Asuransi & Real Estat", desc: "Layanan perbankan, keuangan, investasi saham, penjaminan asuransi dan agen sewa properti." },
  { id: 37, type: "Jasa", short: "Konstruksi, Renovasi & Perbaikan", desc: "Jasa konstruksi bangunan, instalasi listrik/plumbing, perbaikan mesin dan servis perawatan." },
  { id: 38, type: "Jasa", short: "Telekomunikasi, Siaran & Internet", desc: "Jasa telekomunikasi, penyedia akses internet, penyiaran televisi/radio dan komunikasi digital." },
  { id: 39, type: "Jasa", short: "Logistik Ekspedisi, Kurir & Wisata", desc: "Pengangkutan penumpang/barang, ekspedisi kargo pengiriman, pergudangan dan biro perjalanan." },
  { id: 40, type: "Jasa", short: "Pengolahan Bahan, Sablon & Percetakan", desc: "Pengerjaan material logam/kayu, pemurnian minyak, daur ulang sampah, sablon baju dan cetak percetakan." },
  { id: 41, type: "Jasa", short: "Pendidikan, Kursus Pelatihan & Hiburan", desc: "Penyelenggaraan sekolah, bimbingan belajar, seminar, konser musik, produksi film dan event olahraga." },
  { id: 42, type: "Jasa", short: "Software, Cloud, Desain & IT Solution", desc: "Jasa riset ilmiah, arsitektur software, cloud computing, keamanan siber dan desain grafis.", popular: true },
  { id: 43, type: "Jasa", short: "Kafe, Restoran, F&B & Penginapan", desc: "Jasa penyediaan makanan dan minuman, kedai kopi, katering hajatan, hotel dan akomodasi sementara.", popular: true },
  { id: 44, type: "Jasa", short: "Klinik Medis, Salon Kecantikan & Hewan", desc: "Layanan rumah sakit medis, klinik gigi, salon kecantikan spa, tata rias dan dokter hewan." },
  { id: 45, type: "Jasa", short: "Layanan Hukum, Konsultan & Keamanan", desc: "Jasa pengacara hukum, advokasi, pengawalan sekuriti, penyelidikan swasta dan konsultasi perizinan." }
];

/**
 * Mencari item kelas berdasarkan id
 */
export function getNiceClassById(id) {
  const num = parseInt(id, 10);
  return NICE_CLASSES_LIST.find(c => c.id === num) || NICE_CLASSES_LIST[41]; // fallback 42
}
