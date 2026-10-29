/**
 * Klasifikasi Nice Kelas Merek Lengkap (Kelas 1 s/d 45)
 * Standar DJKI Kemenkumham RI / WIPO Nice Classification
 * Kelas 1 - 34: Barang (Goods)
 * Kelas 35 - 45: Jasa (Services)
 */

export const NICE_CLASSES = [
  // JASA (SERVICES) - Kelas 35 s/d 45
  {
    group: "Jasa (Kelas 35 - 45)",
    classes: [
      { id: 42, label: "Kelas 42 — Teknologi, Software, Desain & Riset Ilmiah", popular: true },
      { id: 43, label: "Kelas 43 — Kafe, Restoran, Katering & Perhotelan/Penginapan", popular: true },
      { id: 35, label: "Kelas 35 — Periklanan, Manajemen Bisnis, E-Commerce & Retail Toko", popular: true },
      { id: 36, label: "Kelas 36 — Keuangan, Perbankan, Investasi, Asuransi & Real Estat" },
      { id: 37, label: "Kelas 37 — Konstruksi Bangunan, Perbaikan, Instalasi & Perawatan" },
      { id: 38, label: "Kelas 38 — Telekomunikasi, Siaran Media, Chatting & Akses Jaringan" },
      { id: 39, label: "Kelas 39 — Transportasi, Ekspedisi Logistik, Pergudangan & Perjalanan" },
      { id: 40, label: "Kelas 40 — Pengolahan Bahan, Daur Ulang, Percetakan & Kustomisasi Produk" },
      { id: 41, label: "Kelas 41 — Pendidikan, Pelatihan Kursus, Hiburan & Kegiatan Olahraga" },
      { id: 44, label: "Kelas 44 — Layanan Medis, Klinik Kesehatan, Perawatan Kecantikan & Pertanian" },
      { id: 45, label: "Kelas 45 — Layanan Hukum, Keamanan, Perlindungan Fisik & Konseling Personal" }
    ]
  },
  // BARANG (GOODS) - Kelas 1 s/d 34
  {
    group: "Barang: Makanan, Minuman & Pertanian (Kelas 29 - 34)",
    classes: [
      { id: 30, label: "Kelas 30 — Kopi, Teh, Cokelat, Beras, Roti, Kue & Bumbu Dapur", popular: true },
      { id: 29, label: "Kelas 29 — Daging, Ikan, Unggas, Susu, Minyak Goreng & Makanan Olahan" },
      { id: 31, label: "Kelas 31 — Produk Pertanian, Buah & Sayur Segar, Benih Tanaman & Pakan Hewan" },
      { id: 32, label: "Kelas 32 — Bir, Air Mineral, Minuman Jus Buah & Minuman Non-Alkohol" },
      { id: 33, label: "Kelas 33 — Minuman Beralkohol (Kecuali Bir), Wine & Spirit" },
      { id: 34, label: "Kelas 34 — Tembakau, Rokok, Vape / Rokok Elektrik & Alat Perokok" }
    ]
  },
  {
    group: "Barang: Fashion, Gaya Hidup & Rumah Tangga (Kelas 14, 18, 20 - 28)",
    classes: [
      { id: 25, label: "Kelas 25 — Pakaian, Busana Muslim, Sepatu, Sandal & Topi", popular: true },
      { id: 9, label: "Kelas 9 — Gadget, Komputer, Handphone, Elektronik & Aplikasi Software", popular: true },
      { id: 3, label: "Kelas 3 — Skincare, Kosmetik, Sabun, Parfum & Produk Perawatan Tubuh", popular: true },
      { id: 14, label: "Kelas 14 — Perhiasan, Emas, Permata & Jam Tangan" },
      { id: 18, label: "Kelas 18 — Kulit, Tas Kulit, Dompet, Koper & Payung" },
      { id: 20, label: "Kelas 20 — Mebel, Furnitur Rumah Tangga & Bingkai Gambar" },
      { id: 21, label: "Kelas 21 — Perkakas Dapur, Piring, Gelas, Wadah Masak & Sikat Gigi" },
      { id: 24, label: "Kelas 24 — Tekstil, Kain, Sprei Tempat Tidur & Selimut" },
      { id: 28, label: "Kelas 28 — Permainan, Mainan Anak, Video Game & Alat Olahraga" }
    ]
  },
  {
    group: "Barang: Kesehatan, Kimia & Industri (Kelas 1, 2, 4 - 8, 10 - 13, 15 - 17, 19, 22, 23, 26, 27)",
    classes: [
      { id: 5, label: "Kelas 5 — Farmasi, Obat-obatan Medis, Suplemen Kesehatan & Disinfektan" },
      { id: 10, label: "Kelas 10 — Alat Kesehatan Medis, Instrumen Bedah & Gigi" },
      { id: 16, label: "Kelas 16 — Kertas, Buku, Percetakan, Alat Tulis Kantor & Kemasan Box" },
      { id: 1, label: "Kelas 1 — Bahan Kimia Industri, Sains, Fotografi & Pupuk Pertanian" },
      { id: 2, label: "Kelas 2 — Cat, Pernis, Lapisan Pelindung & Pewarna Tekstil" },
      { id: 4, label: "Kelas 4 — Minyak Industri, Pelumas, Gemuk Mesin & Lilin" },
      { id: 6, label: "Kelas 6 — Logam Biasa, Pipa Besi, Gembok & Kunci Logam" },
      { id: 7, label: "Kelas 7 — Mesin Pabrik, Mesin Perkakas, Motor & Generator" },
      { id: 8, label: "Kelas 8 — Perkakas Tangan Manual, Pisau, Golok & Alat Potong" },
      { id: 11, label: "Kelas 11 — Peralatan Penerangan Lampu, Pemanas, Pendingin AC & Kulkas" },
      { id: 12, label: "Kelas 12 — Kendaraan, Mobil, Motor, Sepeda & Komponen Otomotif" },
      { id: 13, label: "Kelas 13 — Senjata Api, Amunisi, Bahan Peledak & Kembang Api" },
      { id: 15, label: "Kelas 15 — Alat Musik, Gitar, Piano & Aksesori Musik" },
      { id: 17, label: "Kelas 17 — Karet, Gasket, Bahan Isolasi Suhu/Listrik & Selang Fleksibel" },
      { id: 19, label: "Kelas 19 — Bahan Bangunan Non-Logam, Semen, Aspal & Kayu Olahan" },
      { id: 22, label: "Kelas 22: Tali, Tambang, Jaring, Tenda & Terpal" },
      { id: 23, label: "Kelas 23: Benang Jahit & Benang Rajut" },
      { id: 26, label: "Kelas 26: Renda, Bordir, Pita, Kancing & Ritsleting" },
      { id: 27, label: "Kelas 27: Karpet, Tikar, Keset & Wallpaper Dinding" }
    ]
  }
];

/**
 * Helper untuk merender elemen <optgroup> dan <option> secara rapi
 */
export function renderNiceClassOptions(selectedId = 42) {
  let html = '';
  NICE_CLASSES.forEach(grp => {
    html += `<optgroup label="${grp.group}" style="font-weight: 700; color: #7F1517; background-color: #FDF2F2;">`;
    grp.classes.forEach(c => {
      const isSelected = Number(c.id) === Number(selectedId) ? 'selected' : '';
      const tag = c.popular ? ' ★' : '';
      html += `<option value="${c.id}" ${isSelected} style="font-weight: normal; color: #1E293B; background-color: #FFFFFF; padding: 6px 12px;">${c.label}${tag}</option>`;
    });
    html += `</optgroup>`;
  });
  return html;
}

