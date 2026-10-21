/**
 * View: Dokumen Perusahaan & RUPS (UU No. 40/2007 tentang Perseroan Terbatas)
 * Redesigned to match the cohesive LEGALTA modern editorial visual design.
 */

export function renderDokumenView() {
  return `
    <div class="flex flex-col w-full bg-[#FAFAFC]">

      <!-- 1. HERO SECTION (2 COLUMNS) -->
      <section class="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-white via-amber-50/20 to-white border-b border-slate-100">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Column (7 Cols) -->
            <div class="lg:col-span-7 space-y-6">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crimson-50 border border-crimson-100 text-crimson-800 text-xs font-bold uppercase tracking-wider">
                <i data-lucide="file-signature" class="w-3.5 h-3.5 text-crimson-700"></i>
                <span>Kepatuhan Notariat &amp; Korporasi (UU No. 40/2007)</span>
              </div>

              <h1 class="font-serif text-4xl sm:text-5xl lg:text-[52px] font-bold text-slate-900 leading-[1.12] tracking-tight">
                Perubahan Anggaran Dasar, Akta RUPS, &amp; Restrukturisasi Saham
              </h1>

              <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Penyusunan naskah hukum korporasi presisi tinggi, fasilitasi keabsahan Rapat Umum Pemegang Saham (RUPS), hingga pelaporan resmi ke Ditjen AHU Kemenkumham RI tanpa perlu antre di kantor notaris.
              </p>

              <!-- CTA Buttons -->
              <div class="flex flex-wrap items-center gap-4 pt-2">
                <a href="#/konsultasi?layanan=perubahan-akta" class="inline-flex items-center justify-center px-8 py-3.5 bg-crimson-800 hover:bg-crimson-900 text-white font-bold text-sm rounded-xl shadow-lg shadow-crimson-800/25 transition-all transform hover:-translate-y-0.5">
                  <span>Konsultasi Perubahan Akta</span>
                  <i data-lucide="arrow-right" class="w-4 h-4 ml-2"></i>
                </a>
                <button type="button" data-scroll-to="katalog-dokumen" class="inline-flex items-center justify-center px-7 py-3.5 bg-white border border-slate-300 hover:border-crimson-800 text-slate-800 hover:text-crimson-800 font-bold text-sm rounded-xl transition-all">
                  Lihat Katalog Layanan
                </button>
              </div>

              <!-- Trust Strip -->
              <div class="pt-5 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-semibold border-t border-slate-100">
                <div class="flex items-center gap-2">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600"></i>
                  <span>Sirkuler Pemegang Saham Digital</span>
                </div>
                <div class="flex items-center gap-2">
                  <i data-lucide="landmark" class="w-4 h-4 text-gold-600"></i>
                  <span>Penerbitan SK &amp; SP Data AHU</span>
                </div>
                <div class="flex items-center gap-2">
                  <i data-lucide="lock" class="w-4 h-4 text-crimson-700"></i>
                  <span>Perlindungan NDA Korporat</span>
                </div>
              </div>
            </div>

            <!-- Right Column: Corporate Deed Preview Card (5 Cols) -->
            <div class="lg:col-span-5">
              <div class="bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100 space-y-5">
                <div class="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <span class="text-[10px] font-extrabold uppercase tracking-wider text-crimson-700 block">Instrumen Notariil</span>
                    <h3 class="text-base font-extrabold text-slate-900">Cakupan Pengesahan AHU</h3>
                  </div>
                  <span class="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-extrabold uppercase">UU PT No. 40/2007</span>
                </div>

                <div class="space-y-3">
                  <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <div class="w-9 h-9 rounded-xl bg-crimson-50 text-crimson-800 flex items-center justify-center shrink-0">
                        <i data-lucide="file-edit" class="w-4 h-4"></i>
                      </div>
                      <div>
                        <h5 class="text-xs font-bold text-slate-900">Pasal 21 Ayat (2) — Persetujuan Menteri</h5>
                        <p class="text-[11px] text-slate-500">Perubahan Nama PT, Tempat Kedudukan, KBLI &amp; Modal Dasar</p>
                      </div>
                    </div>
                    <span class="px-2 py-0.5 rounded bg-crimson-50 text-crimson-800 text-[10px] font-bold">SK AHU</span>
                  </div>

                  <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <div class="w-9 h-9 rounded-xl bg-amber-50 text-gold-600 flex items-center justify-center shrink-0">
                        <i data-lucide="users" class="w-4 h-4"></i>
                      </div>
                      <div>
                        <h5 class="text-xs font-bold text-slate-900">Pasal 21 Ayat (3) — Pemberitahuan</h5>
                        <p class="text-[11px] text-slate-500">Pergantian Direksi, Komisaris, &amp; Peralihan Saham</p>
                      </div>
                    </div>
                    <span class="px-2 py-0.5 rounded bg-amber-50 text-gold-700 text-[10px] font-bold">SP DATA</span>
                  </div>

                  <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <div class="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                        <i data-lucide="handshake" class="w-4 h-4"></i>
                      </div>
                      <div>
                        <h5 class="text-xs font-bold text-slate-900">Keputusan Sirkuler (Pasal 91 UU PT)</h5>
                        <p class="text-[11px] text-slate-500">Sah mengikat tanpa rapat fisik (Circular Resolution)</p>
                      </div>
                    </div>
                    <span class="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold">100% SAH</span>
                  </div>
                </div>

                <div class="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/60 flex items-start gap-2.5 text-xs text-slate-700">
                  <i data-lucide="clock" class="w-4 h-4 text-gold-600 shrink-0 mt-0.5"></i>
                  <span>Draf Keputusan Sirkuler Pemegang Saham selesai dalam <strong class="text-slate-900">24 jam kerja</strong> setelah data diterima.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- 2. KATALOG LAYANAN DOKUMEN KORPORASI (6 CARDS) -->
      <section id="katalog-dokumen" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="max-w-2xl mb-12">
            <span class="text-xs font-bold uppercase tracking-wider text-crimson-800">Arsitektur Tata Kelola Korporat</span>
            <h2 class="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
              Layanan Perubahan Akta, RUPS &amp; Kontrak Bisnis
            </h2>
            <p class="text-sm text-slate-500 mt-2">
              Pastikan setiap aksi korporasi perusahaan Anda tercatat resmi di pangkalan data Ditjen AHU dan OSS RBA.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <!-- Card 1 -->
            <div class="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div class="w-11 h-11 rounded-2xl bg-crimson-50 text-crimson-800 flex items-center justify-center mb-5">
                  <i data-lucide="file-edit" class="w-5 h-5"></i>
                </div>
                <span class="px-2.5 py-0.5 rounded bg-crimson-50 text-crimson-800 text-[10px] font-bold uppercase">SK Menteri AHU</span>
                <h3 class="text-lg font-extrabold text-slate-900 mt-2">Perubahan Anggaran Dasar PT</h3>
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                  Amandemen klausul Anggaran Dasar yang memerlukan Persetujuan Menteri: perubahan nama PT, pindah domisili antar kota, penambahan KBLI 2020, dan peningkatan modal dasar.
                </p>
                <ul class="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600"></i><span>Akta Pernyataan Keputusan Rapat (PKR)</span></li>
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600"></i><span>Sinkronisasi Otomatis ke Akun OSS RBA</span></li>
                </ul>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="font-extrabold text-slate-900">Mulai Rp 4.500.000</span>
                <a href="#/konsultasi?layanan=perubahan-akta" class="font-bold text-crimson-800 hover:text-crimson-900 inline-flex items-center gap-1">
                  <span>Urus Perubahan</span>
                  <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div class="w-11 h-11 rounded-2xl bg-amber-50 text-gold-600 flex items-center justify-center mb-5">
                  <i data-lucide="user-cog" class="w-5 h-5"></i>
                </div>
                <span class="px-2.5 py-0.5 rounded bg-amber-50 text-gold-700 text-[10px] font-bold uppercase">SP Data Perseroan</span>
                <h3 class="text-lg font-extrabold text-slate-900 mt-2">Pergantian Direksi &amp; Komisaris</h3>
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                  Pengangkatan kembali, pemberhentian, atau perubahan susunan anggota Direksi dan Dewan Komisaris beserta pembaruan data Beneficial Owner (BO).
                </p>
                <ul class="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600"></i><span>Surat Penerimaan Pemberitahuan AHU</span></li>
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600"></i><span>Update Data Penanggung Jawab Pajak</span></li>
                </ul>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="font-extrabold text-slate-900">Mulai Rp 3.800.000</span>
                <a href="#/konsultasi?layanan=perubahan-akta" class="font-bold text-crimson-800 hover:text-crimson-900 inline-flex items-center gap-1">
                  <span>Pilih Layanan</span>
                  <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
              </div>
            </div>

            <!-- Card 3 -->
            <div class="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div class="w-11 h-11 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center mb-5">
                  <i data-lucide="pie-chart" class="w-5 h-5"></i>
                </div>
                <span class="px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-bold uppercase">Transaksi Korporat</span>
                <h3 class="text-lg font-extrabold text-slate-900 mt-2">Jual Beli Saham &amp; Akuisisi</h3>
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                  Pendampingan pengalihan hak atas saham (Share Transfer), masuknya investor baru, penyusunan Akta Jual Beli Saham Notariil, serta pengumuman surat kabar jika akuisisi.
                </p>
                <ul class="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600"></i><span>Akta Jual Beli Saham &amp; Daftar Pemegang Saham</span></li>
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600"></i><span>Kepatuhan Pre-Emptive Rights Pasal 58 UU PT</span></li>
                </ul>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="font-extrabold text-slate-900">Mulai Rp 5.000.000</span>
                <a href="#/konsultasi?layanan=perubahan-akta" class="font-bold text-crimson-800 hover:text-crimson-900 inline-flex items-center gap-1">
                  <span>Konsultasi Saham</span>
                  <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
              </div>
            </div>

            <!-- Card 4 -->
            <div class="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div class="w-11 h-11 rounded-2xl bg-crimson-50 text-crimson-800 flex items-center justify-center mb-5">
                  <i data-lucide="users" class="w-5 h-5"></i>
                </div>
                <span class="px-2.5 py-0.5 rounded bg-crimson-50 text-crimson-800 text-[10px] font-bold uppercase">Governance</span>
                <h3 class="text-lg font-extrabold text-slate-900 mt-2">Akta Berita Acara RUPS Notariil</h3>
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                  Kehadiran langsung Notaris Rekanan dalam forum RUPST / RUPSLB (fisik maupun telekonferensi) untuk mencatat risalah rapat dalam Akta Berita Acara (PKR/BAR).
                </p>
                <ul class="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600"></i><span>Validasi Kuorum Kehadiran &amp; Suara</span></li>
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600"></i><span>Pengesahan Laporan Tahunan &amp; Dividen</span></li>
                </ul>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="font-extrabold text-slate-900">Mulai Rp 4.200.000</span>
                <a href="#/konsultasi?layanan=perubahan-akta" class="font-bold text-crimson-800 hover:text-crimson-900 inline-flex items-center gap-1">
                  <span>Jadwalkan RUPS</span>
                  <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
              </div>
            </div>

            <!-- Card 5 -->
            <div class="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div class="w-11 h-11 rounded-2xl bg-amber-50 text-gold-600 flex items-center justify-center mb-5">
                  <i data-lucide="git-branch" class="w-5 h-5"></i>
                </div>
                <span class="px-2.5 py-0.5 rounded bg-amber-50 text-gold-700 text-[10px] font-bold uppercase">Ekspansi Regional</span>
                <h3 class="text-lg font-extrabold text-slate-900 mt-2">Akta Pembukaan Kantor Cabang</h3>
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                  Pembuatan Akta Pembukaan Kantor Cabang beserta Surat Kuasa Kepala Cabang, pendaftaran NPWP Cabang, dan penambahan lokasi usaha di NIB OSS RBA.
                </p>
                <ul class="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600"></i><span>Akta Cabang &amp; Pengangkatan Kepala Cabang</span></li>
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600"></i><span>Penambahan Lokasi Proyek di NIB OSS</span></li>
                </ul>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="font-extrabold text-slate-900">Mulai Rp 3.500.000</span>
                <a href="#/konsultasi?layanan=perubahan-akta" class="font-bold text-crimson-800 hover:text-crimson-900 inline-flex items-center gap-1">
                  <span>Buka Cabang</span>
                  <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
              </div>
            </div>

            <!-- Card 6 -->
            <div class="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div class="w-11 h-11 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5">
                  <i data-lucide="scroll-text" class="w-5 h-5"></i>
                </div>
                <span class="px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold uppercase">Corporate Counsel</span>
                <h3 class="text-lg font-extrabold text-slate-900 mt-2">Drafting Kontrak &amp; Shareholders Agreement</h3>
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                  Penyusunan dan peninjauan (review) Perjanjian Pemegang Saham (SHA), Perjanjian Kerja Sama (PKS), Perjanjian Kerahasiaan (NDA), dan Peraturan Perusahaan.
                </p>
                <ul class="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600"></i><span>Tersedia Bahasa Indonesia &amp; Bilingual</span></li>
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600"></i><span>Mitigasi Klausul Wanprestasi &amp; Sengketa</span></li>
                </ul>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="font-extrabold text-slate-900">Mulai Rp 2.500.000</span>
                <a href="#/konsultasi?layanan=perubahan-akta" class="font-bold text-crimson-800 hover:text-crimson-900 inline-flex items-center gap-1">
                  <span>Pesan Draf Kontrak</span>
                  <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- 3. FAQ ACCORDION -->
      <section class="py-20 bg-slate-50 border-t border-slate-200/60">
        <div class="max-w-3xl mx-auto px-6">
          <div class="text-center mb-12">
            <span class="text-xs font-bold uppercase tracking-wider text-crimson-800">Tanya Jawab Hukum Perseroan</span>
            <h2 class="font-serif text-3xl font-bold text-slate-900 mt-1">
              Pertanyaan Seputar Perubahan Akta &amp; RUPS
            </h2>
          </div>

          <div class="space-y-3.5">
            <div class="faq-item active bg-white rounded-2xl border border-slate-200/80 overflow-hidden">
              <button type="button" class="faq-toggle w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-crimson-800 transition-colors">
                <span>Apakah perubahan akta bisa dilakukan tanpa para pemegang saham berkumpul fisik?</span>
                <i data-lucide="chevron-down" class="faq-icon w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0"></i>
              </button>
              <div class="faq-answer px-6">
                <p class="pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  Sangat bisa! Berdasarkan <strong>Pasal 91 UU No. 40 Tahun 2007 tentang Perseroan Terbatas</strong>, pemegang saham dapat mengambil keputusan yang mengikat di luar RUPS fisik melalui mekanisme <strong>Keputusan Sirkuler (Circular Resolution)</strong> yang ditandatangani oleh seluruh pemegang saham, kemudian dituangkan ke dalam Akta Pernyataan Keputusan Rapat (PKR) oleh Notaris.
                </p>
              </div>
            </div>

            <div class="faq-item bg-white rounded-2xl border border-slate-200/80 overflow-hidden">
              <button type="button" class="faq-toggle w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-crimson-800 transition-colors">
                <span>Berapa lama masa jabatan Direksi dan Komisaris yang harus diperbarui di AHU?</span>
                <i data-lucide="chevron-down" class="faq-icon w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0"></i>
              </button>
              <div class="faq-answer px-6">
                <p class="pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  Umumnya Anggaran Dasar PT mengatur masa jabatan Direksi dan Dewan Komisaris selama <strong>5 tahun</strong>. Jika masa jabatan telah berakhir, wajib segera dibuatkan Akta Pengangkatan Kembali agar akun OSS RBA, perbankan, dan layanan perpajakan perusahaan tidak terblokir karena masa jabatan pengurus kedaluwarsa.
                </p>
              </div>
            </div>

            <div class="faq-item bg-white rounded-2xl border border-slate-200/80 overflow-hidden">
              <button type="button" class="faq-toggle w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-crimson-800 transition-colors">
                <span>Jika menambah kode KBLI baru, apakah wajib mengubah Akta Notaris?</span>
                <i data-lucide="chevron-down" class="faq-icon w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0"></i>
              </button>
              <div class="faq-answer px-6">
                <p class="pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  Apabila kode KBLI 2020 yang ingin ditambahkan belum tercantum di dalam Pasal 3 (Maksud dan Tujuan) Anggaran Dasar PT Anda, maka wajib dilakukan perubahan Pasal 3 Anggaran Dasar terlebih dahulu melalui Notaris dan SK Kemenkumham agar kode KBLI tersebut dapat ditarik ke dalam NIB OSS RBA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. BOTTOM CTA BANNER -->
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="crimson-gradient-bg rounded-3xl p-8 sm:p-12 lg:p-14 text-white shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative overflow-hidden">
            <div class="max-w-2xl space-y-3 relative z-10">
              <span class="text-xs font-extrabold uppercase tracking-wider text-gold-400">Notariat Korporat</span>
              <h2 class="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                Perlu Merestrukturisasi Saham atau Memperbarui Akta Perusahaan?
              </h2>
              <p class="text-xs sm:text-sm text-white/80 leading-relaxed">
                Kirimkan akta pendirian/perubahan terakhir Anda untuk ditelaah gratis oleh tim legal counsel dan notaris rekanan kami.
              </p>
            </div>
            <div class="flex flex-wrap items-center gap-3.5 relative z-10 shrink-0">
              <a href="#/konsultasi?layanan=perubahan-akta" class="px-7 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg transition-all inline-flex items-center gap-2">
                <span>Konsultasi Notariat</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  `;
}

export function initDokumenLogic() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}
