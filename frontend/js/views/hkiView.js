/**
 * View: Pendaftaran HKI (UU No. 20/2016 & UU No. 28/2014)
 * Matches Reference Design Image 4 (with clean Lucide icons, 5-Pillar Bento Grid,
 * Quick Diagnostic Tool, First-to-File Workflow, and 3 Pricing Tiers).
 */

import { navigateTo } from '../app.js';

export function renderHkiView() {
  return `
    <div class="flex flex-col w-full bg-[#FAFAFC]">

      <!-- 1. HERO SECTION (2 COLUMNS) -->
      <section class="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-white via-amber-50/20 to-white border-b border-slate-100">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Column (7 Cols) -->
            <div class="lg:col-span-7 space-y-6">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/70 text-gold-700 text-xs font-bold uppercase tracking-wider">
                <i data-lucide="shield-check" class="w-3.5 h-3.5 text-gold-600"></i>
                <span>Sentra Perlindungan HKI Resmi DJKI Kemenkumham</span>
              </div>

              <h1 class="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-slate-900 leading-[1.12] tracking-tight">
                Lindungi Merek Dagang, Hak Cipta, dan Paten Bisnis Anda.
              </h1>

              <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Cegah pembajakan brand, klaim sepihak kompetitor, dan pemblokiran marketplace secara hukum. Dapatkan sertifikat eksklusif DJKI dengan jaminan clearance hukum pra-pendaftaran oleh Konsultan HKI Bersertifikat resmi.
              </p>

              <!-- 3 Key Metrics Row -->
              <div class="grid grid-cols-3 gap-4 pt-2 max-w-xl">
                <div class="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200/70 shadow-sm">
                  <div class="w-9 h-9 rounded-xl bg-crimson-50 text-crimson-800 flex items-center justify-center shrink-0">
                    <i data-lucide="award" class="w-4 h-4"></i>
                  </div>
                  <div>
                    <span class="text-base sm:text-lg font-black text-slate-900 block leading-none">12.400+</span>
                    <span class="text-[11px] text-slate-500">Sertifikat Terbit</span>
                  </div>
                </div>

                <div class="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200/70 shadow-sm">
                  <div class="w-9 h-9 rounded-xl bg-amber-50 text-gold-600 flex items-center justify-center shrink-0">
                    <i data-lucide="zap" class="w-4 h-4"></i>
                  </div>
                  <div>
                    <span class="text-base sm:text-lg font-black text-slate-900 block leading-none">24 Jam</span>
                    <span class="text-[11px] text-slate-500">Proses E-Filing</span>
                  </div>
                </div>

                <div class="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200/70 shadow-sm">
                  <div class="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <i data-lucide="check-circle-2" class="w-4 h-4"></i>
                  </div>
                  <div>
                    <span class="text-base sm:text-lg font-black text-slate-900 block leading-none">98,4%</span>
                    <span class="text-[11px] text-slate-500">Lolos Substantif</span>
                  </div>
                </div>
              </div>

              <!-- CTA Buttons -->
              <div class="flex flex-wrap items-center gap-4 pt-2">
                <a href="#/konsultasi?layanan=merek" class="inline-flex items-center justify-center px-8 py-3.5 bg-crimson-800 hover:bg-crimson-900 text-white font-bold text-sm rounded-xl shadow-lg shadow-crimson-800/25 transition-all transform hover:-translate-y-0.5">
                  <span>Daftarkan Merek Sekarang</span>
                  <i data-lucide="arrow-right" class="w-4 h-4 ml-2"></i>
                </a>
                <button type="button" data-scroll-to="hki-quick-check" class="inline-flex items-center justify-center px-7 py-3.5 bg-white border border-slate-300 hover:border-crimson-800 text-slate-800 hover:text-crimson-800 font-bold text-sm rounded-xl transition-all gap-2">
                  <i data-lucide="search" class="w-4 h-4 text-gold-600"></i>
                  <span>Cek Kemiripan Merek Gratis</span>
                </button>
              </div>

              <div class="pt-3 flex items-center gap-2 text-xs text-slate-500 font-medium">
                <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i>
                <span>Didampingi Konsultan HKI Terdaftar Kemenkumham RI No. 0421-HKI/2023</span>
              </div>
            </div>

            <!-- Right Column: Certificate Showcase Card (5 Cols) -->
            <div class="lg:col-span-5 relative">
              <div class="bg-white rounded-3xl p-4 shadow-2xl border border-slate-100 relative">
                <!-- Header bar inside card -->
                <div class="flex items-center justify-between pb-3 px-1">
                  <span class="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <span class="w-2 h-2 rounded-full bg-crimson-700"></span>
                    Dokumen Kekayaan Intelektual
                  </span>
                  <span class="px-2.5 py-0.5 rounded-full bg-amber-50 text-gold-700 text-[10px] font-extrabold uppercase">100% Sah &amp; Tercatat</span>
                </div>

                <!-- Document Showcase: Framed Sertifikat Merek & LEGALTA Dossier Folder -->
                <div class="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-slate-900 via-[#1e1315] to-[#2d1215] p-3 sm:p-4 flex items-center justify-center border border-amber-900/30 shadow-inner group">
                  <!-- Ambient executive background pattern & warm lighting glow -->
                  <div class="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(176,133,20,0.22),transparent_70%)] pointer-events-none"></div>

                  <!-- Executive Mockup: Framed Certificate + Maroon Dossier -->
                  <div class="relative z-10 w-full h-full flex items-center justify-between gap-3 px-1 sm:px-2 pb-14">
                    <!-- 1. Gold-Framed Official Sertifikat Merek DJKI -->
                    <div class="relative flex-1 h-[94%] bg-[#FDFBF7] rounded-lg p-2.5 sm:p-3 shadow-2xl border-4 border-[#C8A24D] transform -rotate-1 hover:rotate-0 transition-transform duration-300 flex flex-col justify-between">
                      <!-- Ornate inner legal border -->
                      <div class="border border-[#C8A24D]/60 p-2 rounded flex flex-col items-center text-center h-full justify-between">
                        <!-- Top: Garuda & Official Heading -->
                        <div class="flex flex-col items-center w-full">
                          <div class="w-6 h-6 rounded-full bg-amber-50 border border-gold-500/50 flex items-center justify-center text-gold-700 mb-0.5">
                            <i data-lucide="award" class="w-3.5 h-3.5"></i>
                          </div>
                          <span class="text-[7.5px] sm:text-[8px] font-black uppercase tracking-widest text-slate-900 leading-none">REPUBLIK INDONESIA</span>
                          <span class="text-[6px] sm:text-[6.5px] font-bold uppercase tracking-wider text-slate-600 mt-0.5">KEMENTERIAN HUKUM DAN HAM</span>
                          <span class="text-[5.5px] font-medium text-slate-400">Direktorat Jenderal Kekayaan Intelektual</span>
                        </div>

                        <!-- Center: Certificate Title & Badge -->
                        <div class="my-1 py-1 px-2 border-y border-[#C8A24D]/35 w-full bg-amber-50/40">
                          <span class="text-[8.5px] sm:text-[9.5px] font-black tracking-wider text-crimson-900 uppercase block">SERTIFIKAT MEREK</span>
                          <span class="text-[6px] sm:text-[6.5px] text-slate-600 font-mono">No. Reg: IDM001092842 • Kelas 42 &amp; 35</span>
                        </div>

                        <!-- Bottom: Brand & Legal Verification Stamp -->
                        <div class="w-full flex items-center justify-between text-[6px] text-slate-700 px-1 pt-0.5">
                          <div class="text-left leading-tight">
                            <span class="block font-black text-slate-900 text-[7px]">LEGALTA™</span>
                            <span class="text-slate-500">Masa Berlaku: 10 Tahun</span>
                          </div>
                          <div class="w-5 h-5 rounded-full bg-crimson-800/10 border border-crimson-700/40 flex items-center justify-center text-crimson-800 shrink-0">
                            <i data-lucide="stamp" class="w-3 h-3"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- 2. Rich Maroon Leather LEGALTA Dossier Folder -->
                    <div class="w-24 sm:w-28 h-[88%] bg-gradient-to-b from-crimson-900 to-crimson-950 rounded-r-xl rounded-l-sm p-3 shadow-2xl border-l-4 border-crimson-800 flex flex-col justify-between transform rotate-2 hover:rotate-0 transition-transform duration-300">
                      <div class="flex items-center gap-1.5">
                        <span class="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                        <span class="text-[7px] font-extrabold text-gold-300 tracking-wider uppercase">Dossier HKI</span>
                      </div>
                      <div class="text-center my-auto py-2">
                        <span class="font-extrabold text-sm sm:text-base tracking-widest text-gold-400 block font-serif">LEGALTA</span>
                        <span class="text-[6.5px] uppercase tracking-widest text-gold-200/80 block mt-0.5">Kekayaan Intelektual</span>
                      </div>
                      <div class="text-[6.5px] text-white/50 text-right font-medium">
                        <span>DJKI RI</span>
                      </div>
                    </div>
                  </div>

                  <!-- Bottom Gradient Overlay with Official Legal Reference -->
                  <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-crimson-950 via-crimson-950/85 to-transparent pt-8 pb-3.5 px-4 sm:px-5 text-white z-20">
                    <div class="flex items-center justify-between">
                      <div>
                        <span class="text-[10px] uppercase tracking-widest text-gold-400 font-bold flex items-center gap-1.5">
                          <i data-lucide="shield-check" class="w-3.5 h-3.5 text-gold-400"></i>
                          Sertifikat Resmi DJKI
                        </span>
                        <h4 class="text-base sm:text-lg font-extrabold leading-snug text-white mt-0.5">Perlindungan Yuridis 10 Tahun</h4>
                        <p class="text-[11px] text-white/80 mt-0.5">UU No. 20/2016 tentang Merek dan Indikasi Geografis</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Status bar inside card -->
                <div class="mt-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div class="flex items-center justify-between text-xs">
                    <span class="font-semibold text-slate-600">Status Permohonan Terkini</span>
                    <span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-extrabold">Lolos Verifikasi</span>
                  </div>
                  <div class="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div class="bg-emerald-500 h-full rounded-full" style="width: 92%;"></div>
                  </div>
                  <div class="flex justify-between text-[10px] text-slate-400 mt-1.5">
                    <span>No. Agenda: JID2025048192</span>
                    <span>Estimasi Bukti Terbit: 24 Jam</span>
                  </div>
                </div>

                <!-- Floating First-to-File Pill -->
                <div class="mt-3 sm:mt-0 sm:absolute sm:-bottom-5 sm:-left-5 bg-white border border-slate-100 shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3 z-20">
                  <div class="w-9 h-9 rounded-xl bg-crimson-50 text-crimson-800 flex items-center justify-center shrink-0">
                    <i data-lucide="flame" class="w-4 h-4"></i>
                  </div>
                  <div>
                    <p class="text-xs font-extrabold text-slate-900">Asas First-to-File</p>
                    <p class="text-[11px] text-slate-500">Siapa cepat mendaftar, dialah pemilik sah</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- 2. QUICK DIAGNOSTIC TOOL: CEK KEMIRIPAN MEREK GRATIS -->
      <section id="hki-quick-check" class="py-10 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="bg-slate-50 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-5 space-y-2">
              <span class="text-[11px] font-extrabold uppercase tracking-wider text-crimson-800">Quick Diagnostic Tool</span>
              <h2 class="font-serif text-2xl sm:text-3xl font-bold text-slate-900">Cek Kemiripan Merek Gratis</h2>
              <p class="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Periksa apakah nama merek, logo, atau brand bisnis Anda berpotensi ditolak DJKI sebelum membayar biaya PNBP negara.
              </p>
            </div>

            <div class="lg:col-span-7">
              <form id="hkiQuickSearchForm" class="space-y-3">
                <div class="grid grid-cols-1 sm:grid-cols-12 gap-3">
                  <div class="sm:col-span-7">
                    <label class="block text-[11px] font-bold text-slate-700 mb-1">Nama Merek / Kata Kunci</label>
                    <input type="text" id="hkiQuickBrandInput" placeholder="Contoh: Kopi Nusantara, Legalta Tech..." required class="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 outline-none focus:border-crimson-800" />
                  </div>
                  <div class="sm:col-span-5">
                    <label class="block text-[11px] font-bold text-slate-700 mb-1">Kategori Kelas</label>
                    <select id="hkiQuickClassSelect" class="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 outline-none cursor-pointer focus:border-crimson-800">
                      <option value="42">Kelas 42 — Teknologi &amp; Software</option>
                      <option value="35">Kelas 35 — Retail &amp; Bisnis</option>
                      <option value="43">Kelas 43 — Kafe, Restoran &amp; F&amp;B</option>
                      <option value="30">Kelas 30 — Kopi, Teh &amp; Pangan</option>
                      <option value="25">Kelas 25 — Fashion &amp; Pakaian</option>
                      <option value="3">Kelas 3 — Kosmetik &amp; Skincare</option>
                    </select>
                  </div>
                </div>
                <div class="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
                  <button type="submit" class="px-7 py-3.5 bg-crimson-800 hover:bg-crimson-900 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all inline-flex items-center justify-center gap-2 shrink-0">
                    <i data-lucide="search" class="w-4 h-4"></i>
                    <span>Analisis Potensi Keberhasilan</span>
                  </button>
                  <span class="text-[11px] text-slate-400 leading-snug">
                    Terhubung ke simulasi pangkalan data Pangkalan Data Kekayaan Intelektual (PDKI).
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. 5 PILAR PERLINDUNGAN KEKAYAAN INTELEKTUAL (BENTO GRID) -->
      <section class="py-16 lg:py-20 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="max-w-2xl mb-12">
            <span class="text-xs font-bold uppercase tracking-wider text-crimson-800">Ruang Lingkup Perlindungan</span>
            <h2 class="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
              5 Pilar Perlindungan Kekayaan Intelektual
            </h2>
            <p class="text-sm text-slate-500 mt-2">
              Pilihan spesifikasi HKI yang disusun untuk membentengi aset tak berwujud (intangible assets) perusahaan Anda dari pelanggaran hak eksklusif komersial.
            </p>
          </div>

          <!-- Top Row: 2 Large Cards -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            
            <!-- Pillar 1: Merek Dagang & Jasa (7 Cols) -->
            <div class="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-6">
                  <div class="w-12 h-12 rounded-2xl bg-crimson-50 text-crimson-800 flex items-center justify-center">
                    <i data-lucide="badge-check" class="w-6 h-6"></i>
                  </div>
                  <span class="px-3 py-1 rounded-full bg-crimson-50 text-crimson-800 text-xs font-bold">Paling Populer</span>
                </div>
                <h3 class="font-serif text-2xl font-bold text-slate-900">Pendaftaran Merek Dagang &amp; Jasa</h3>
                <p class="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Perlindungan eksklusif nama brand, logo, slogan, atau kombinasi suara di 45 Kelas Nice Internasional. Meliputi evaluasi kemiripan substantif dan pendampingan hingga terbit sertifikat resmi DJKI (UU No. 20/2016).
                </p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  <div class="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                    <i data-lucide="search-check" class="w-4 h-4 text-crimson-700 shrink-0"></i>
                    <span>Analisis Fonetik &amp; Semantik</span>
                  </div>
                  <div class="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                    <i data-lucide="shield" class="w-4 h-4 text-crimson-700 shrink-0"></i>
                    <span>Pengawalan Masa Pengumuman</span>
                  </div>
                  <div class="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                    <i data-lucide="file-check-2" class="w-4 h-4 text-crimson-700 shrink-0"></i>
                    <span>Penerbitan Bukti Permohonan 24 Jam</span>
                  </div>
                  <div class="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                    <i data-lucide="calendar-check" class="w-4 h-4 text-crimson-700 shrink-0"></i>
                    <span>Kalender Proteksi 10 Tahun</span>
                  </div>
                </div>
              </div>

              <div class="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <span class="text-sm font-extrabold text-slate-900">Mulai Rp 1.950.000 <span class="text-xs font-normal text-slate-500">/ kelas</span></span>
                <a href="#/konsultasi?layanan=merek" class="text-xs font-bold text-crimson-800 hover:text-crimson-900 inline-flex items-center gap-1">
                  <span>Pilih Paket</span>
                  <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
              </div>
            </div>

            <!-- Pillar 2: Pendaftaran Hak Cipta (5 Cols) -->
            <div class="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-6">
                  <div class="w-12 h-12 rounded-2xl bg-amber-50 text-gold-600 flex items-center justify-center">
                    <i data-lucide="copyright" class="w-6 h-6"></i>
                  </div>
                  <span class="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">Kilat 1 Hari Kerja</span>
                </div>
                <h3 class="font-serif text-2xl font-bold text-slate-900">Pendaftaran Hak Cipta</h3>
                <p class="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Pencatatan resmi karya intelektual: kode sumber aplikasi/software, modul pelatihan, buku, fotografi, karya seni grafis, musik, dan desain arsitektur.
                </p>

                <ul class="mt-6 space-y-2.5 text-xs text-slate-600">
                  <li class="flex items-center gap-2.5"><i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Surat Pencatatan Ciptaan Elektronik E-HakCipta</span></li>
                  <li class="flex items-center gap-2.5"><i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Masa proteksi seumur hidup pencipta + 70 tahun</span></li>
                  <li class="flex items-center gap-2.5"><i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Penyusunan surat pengalihan hak cipta korporat</span></li>
                </ul>
              </div>

              <div class="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <span class="text-sm font-extrabold text-gold-600">Mulai Rp 1.250.000</span>
                <a href="#/konsultasi?layanan=merek" class="text-xs font-bold text-slate-800 hover:text-crimson-800 inline-flex items-center gap-1">
                  <span>Konsultasi</span>
                  <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
              </div>
            </div>

          </div>

          <!-- Bottom Row: 3 Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <!-- Pillar 3: Desain Industri -->
            <div class="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div class="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-5">
                  <i data-lucide="layers" class="w-5 h-5"></i>
                </div>
                <h4 class="font-serif text-xl font-bold text-slate-900">Desain Industri</h4>
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                  Melindungi kreasi bentuk, konfigurasi, komposisi garis atau warna berbentuk 3D atau 2D pada kemasan produk unik, perhiasan, hingga alat manufaktur.
                </p>
                <ul class="mt-4 space-y-1.5 text-xs text-slate-600">
                  <li>• Uji kebaruan (novelty audit)</li>
                  <li>• Pembuatan gambar teknis standar DJKI</li>
                </ul>
              </div>
              <div class="mt-5 pt-4 border-t border-slate-100 text-xs font-bold text-slate-500">
                Proteksi Eksklusif 10 Tahun
              </div>
            </div>

            <!-- Pillar 4: Paten & Paten Sederhana -->
            <div class="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5">
                  <i data-lucide="cpu" class="w-5 h-5"></i>
                </div>
                <h4 class="font-serif text-xl font-bold text-slate-900">Paten &amp; Paten Sederhana</h4>
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                  Perlindungan eksklusif atas invensi teknologi baru di bidang rekayasa mesin, formula kimia, metode produksi, atau alat kerja fungsional.
                </p>
                <ul class="mt-4 space-y-1.5 text-xs text-slate-600">
                  <li>• Drafting spesifikasi klaim &amp; abstrak paten</li>
                  <li>• Penelusuran Prior-Art di database Global</li>
                </ul>
              </div>
              <div class="mt-5 pt-4 border-t border-slate-100 text-xs font-bold text-slate-500">
                Perlindungan 20 Tahun (Paten) / 10 Tahun (Sederhana)
              </div>
            </div>

            <!-- Pillar 5: Penanganan Oposisi & Sanggahan -->
            <div class="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div class="w-10 h-10 rounded-xl bg-crimson-50 text-crimson-800 flex items-center justify-center mb-5">
                  <i data-lucide="scale" class="w-5 h-5"></i>
                </div>
                <h4 class="font-serif text-xl font-bold text-slate-900">Penanganan Oposisi &amp; Sanggahan</h4>
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                  Advokasi hukum apabila permohonan merek Anda mendapat Usulan Penolakan pemeriksa DJKI, disanggah pihak ketiga, atau banding ke Komisi Banding Merek.
                </p>
                <ul class="mt-4 space-y-1.5 text-xs text-slate-600">
                  <li>• Legal Opinion &amp; Argumentasi Bukti Pembeda</li>
                  <li>• Pendampingan Litigasi HKI Pengadilan Niaga</li>
                </ul>
              </div>
              <div class="mt-5 pt-4 border-t border-slate-100 text-xs font-bold text-crimson-700">
                Tenggat Waktu Ketat 30 Hari Kerja
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- 4. ALUR PERLINDUNGAN MEREK TERPADU -->
      <section class="py-20 bg-slate-50 border-y border-slate-200/60">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center max-w-2xl mx-auto mb-14">
            <span class="text-xs font-bold uppercase tracking-wider text-crimson-800">Metodologi Hukum</span>
            <h2 class="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
              Alur Perlindungan Merek Terpadu
            </h2>
            <p class="text-sm text-slate-500 mt-2">
              Tahapan terstruktur dari audit kemiripan hingga terbitnya sertifikat negara, dipantau secara real-time melalui sistem kami.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="w-8 h-8 rounded-full bg-crimson-800 text-white text-xs font-extrabold flex items-center justify-center">1</span>
                  <span class="text-[11px] font-semibold text-slate-400">Hari ke-1</span>
                </div>
                <h4 class="text-base font-bold text-slate-900">Penelusuran &amp; Audit</h4>
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                  Pengecekan kemiripan visual, fonetik, dan konseptual di database PDKI lintas kelas Nice untuk meminimalkan risiko penolakan.
                </p>
              </div>
              <div class="mt-5 pt-3 border-t border-slate-100">
                <span class="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-[10px] font-bold">Clearance Report</span>
              </div>
            </div>

            <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="w-8 h-8 rounded-full bg-crimson-800 text-white text-xs font-extrabold flex items-center justify-center">2</span>
                  <span class="text-[11px] font-semibold text-slate-400">Hari ke-2</span>
                </div>
                <h4 class="text-base font-bold text-slate-900">Pengajuan Resmi DJKI</h4>
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                  Pembayaran kode billing PNBP negara dan pengajuan dokumen permohonan ke sistem E-Filing DJKI untuk mengunci Tanggal Penerimaan (Filing Date).
                </p>
              </div>
              <div class="mt-5 pt-3 border-t border-slate-100">
                <span class="px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold">Hak Prioritas Aktif</span>
              </div>
            </div>

            <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="w-8 h-8 rounded-full bg-crimson-800 text-white text-xs font-extrabold flex items-center justify-center">3</span>
                  <span class="text-[11px] font-semibold text-slate-400">Bulan ke-1 s/d 2</span>
                </div>
                <h4 class="text-base font-bold text-slate-900">Masa Pengumuman Publik</h4>
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                  Publikasi permohonan di Berita Resmi Merek selama 2 bulan. Tim kami memantau penuh dan menyiapkan pembelaan jika ada oposisi.
                </p>
              </div>
              <div class="mt-5 pt-3 border-t border-slate-100">
                <span class="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-[10px] font-bold">Monitoring Pengumuman</span>
              </div>
            </div>

            <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="w-8 h-8 rounded-full bg-crimson-800 text-white text-xs font-extrabold flex items-center justify-center">4</span>
                  <span class="text-[11px] font-semibold text-slate-400">Tahap Akhir</span>
                </div>
                <h4 class="text-base font-bold text-slate-900">Pemeriksaan &amp; Sertifikat</h4>
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                  Pemeriksaan substantif oleh Pemeriksa Merek DJKI hingga penerbitan Sertifikat Merek resmi yang berlaku selama 10 tahun.
                </p>
              </div>
              <div class="mt-5 pt-3 border-t border-slate-100">
                <span class="px-2.5 py-1 rounded bg-amber-50 text-gold-700 text-[10px] font-bold">Sertifikat Resmi Terbit</span>
              </div>
            </div>
          </div>

          <!-- First-to-File Banner -->
          <div class="mt-8 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div class="flex items-center gap-3.5">
              <div class="w-10 h-10 rounded-xl bg-crimson-50 text-crimson-800 flex items-center justify-center shrink-0">
                <i data-lucide="alert-circle" class="w-5 h-5"></i>
              </div>
              <div>
                <h5 class="text-sm font-bold text-slate-900">Prinsip First-to-File di Indonesia</h5>
                <p class="text-xs text-slate-500">Hukum Indonesia memberikan hak merek kepada pihak pertama yang mendaftarkan, bukan pihak pertama yang memakai. Amankan nama brand Anda hari ini.</p>
              </div>
            </div>
            <a href="#/konsultasi?layanan=merek" class="px-5 py-2.5 rounded-xl bg-crimson-800 hover:bg-crimson-900 text-white text-xs font-bold shrink-0 transition-colors">
              Amankan Sekarang Sebelum Kompetitor
            </a>
          </div>
        </div>
      </section>

      <!-- 5. FAKTA YURIDIS KRUSIAL -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left: 3 Risk Alert Cards (5 Cols) -->
            <div class="lg:col-span-5 bg-slate-50 p-6 sm:p-7 rounded-3xl border border-slate-200/80 space-y-4">
              <h4 class="text-sm font-extrabold text-slate-900 pb-2 border-b border-slate-200">Risiko Fatal Menunda Pendaftaran Merek</h4>
              
              <div class="bg-white p-4 rounded-2xl border border-slate-200/70 shadow-sm space-y-1">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-extrabold text-crimson-800 flex items-center gap-1.5">
                    <i data-lucide="shield-x" class="w-4 h-4"></i>
                    Pembajakan Brand (Trademark Squatting)
                  </span>
                  <span class="text-[10px] font-bold text-slate-400">Risiko Tinggi</span>
                </div>
                <p class="text-xs text-slate-500 leading-relaxed">
                  Pihak lain dapat mendaftarkan nama bisnis Anda yang sedang berkembang, lalu melarang Anda menggunakan nama bisnis Anda sendiri.
                </p>
              </div>

              <div class="bg-white p-4 rounded-2xl border border-slate-200/70 shadow-sm space-y-1">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-extrabold text-gold-700 flex items-center gap-1.5">
                    <i data-lucide="gavel" class="w-4 h-4"></i>
                    Gugatan Ganti Rugi &amp; Pidana Merek
                  </span>
                  <span class="text-[10px] font-bold text-slate-400">Pasal 100 UU Merek</span>
                </div>
                <p class="text-xs text-slate-500 leading-relaxed">
                  Ancaman pidana denda hingga Rp 2 Miliar dan penarikan seluruh stok produk dari peredaran jika dianggap melanggar merek terdaftar.
                </p>
              </div>

              <div class="bg-white p-4 rounded-2xl border border-slate-200/70 shadow-sm space-y-1">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-extrabold text-crimson-800 flex items-center gap-1.5">
                    <i data-lucide="ban" class="w-4 h-4"></i>
                    Blokir Official Store &amp; Izin BPOM
                  </span>
                  <span class="text-[10px] font-bold text-slate-400">Kendala Komersial</span>
                </div>
                <p class="text-xs text-slate-500 leading-relaxed">
                  Pendaftaran toko resmi (Mall/Official Store), izin edar BPOM, dan kemitraan waralaba (franchise) wajib melampirkan Sertifikat/Bukti Merek DJKI.
                </p>
              </div>
            </div>

            <!-- Right: Editorial Narrative (7 Cols) -->
            <div class="lg:col-span-7 space-y-6">
              <span class="text-xs font-bold uppercase tracking-wider text-crimson-800">Fakta Yuridis Krusial</span>
              <h2 class="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Membangun Bisnis Tanpa Hak Merek Bagaikan Membangun Istana di Atas Tanah Sewa.
              </h2>
              <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
                Setiap tahun, lebih dari 30% permohonan merek yang diajukan secara mandiri tanpa audit konsultan HKI berakhir dengan <strong>penolakan permanen</strong> akibat persamaan pada pokoknya dengan merek terdahulu, sehingga biaya PNBP hangus dan waktu terbuang hingga belasan bulan.
              </p>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div class="space-y-1.5">
                  <h4 class="text-base font-extrabold text-slate-900">Aset Dapat Diwariskan &amp; Dilisensikan</h4>
                  <p class="text-xs text-slate-500 leading-relaxed">
                    Sertifikat merek adalah aset tak berwujud yang memiliki nilai valuasi finansial, dapat diwariskan, dijual, atau dijadikan dasar perjanjian royalti waralaba.
                  </p>
                </div>
                <div class="space-y-1.5">
                  <h4 class="text-base font-extrabold text-slate-900">Syarat Masuk Marketplace &amp; Ekspor</h4>
                  <p class="text-xs text-slate-500 leading-relaxed">
                    Bukti permohonan resmi (Filing Receipt) yang terbit dalam 24 jam langsung dapat digunakan untuk membuka Official Store di Shopee Mall, Tokopedia, dan TikTok Shop.
                  </p>
                </div>
              </div>

              <div class="pt-2">
                <a href="#/konsultasi?layanan=merek" class="inline-flex items-center gap-2 px-7 py-3.5 bg-crimson-800 hover:bg-crimson-900 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all">
                  <span>Pilih Paket Perlindungan Merek</span>
                  <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- 6. PAKET PENDAFTARAN MEREK LEGALTA -->
      <section class="py-20 bg-slate-50 border-t border-slate-200/60">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center max-w-2xl mx-auto mb-16">
            <span class="text-xs font-bold uppercase tracking-wider text-crimson-800">Transparansi Biaya &amp; Layanan</span>
            <h2 class="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
              Paket Pendaftaran Merek Legalta
            </h2>
            <p class="text-sm text-slate-500 mt-2">
              Sudah termasuk PNBP resmi negara Kemenkumham, jasa kuasa konsultan HKI, dan monitoring berkala tanpa biaya tersembunyi.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            <!-- HKI Basic -->
            <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Jalur UMKM Binaan</span>
                <h3 class="font-serif text-2xl font-bold text-slate-900 mt-1">HKI Basic</h3>
                <p class="text-xs text-slate-500 mt-2">Cocok untuk pelaku UMKM yang telah memiliki surat rekomendasi dinas terkait.</p>

                <div class="my-6">
                  <span class="text-[10px] uppercase tracking-wider text-slate-400 block">Biaya All-In</span>
                  <div class="flex items-baseline gap-1 mt-0.5">
                    <span class="text-3xl font-black text-slate-900">Rp 1.950.000</span>
                    <span class="text-xs text-slate-500">/ kelas</span>
                  </div>
                  <span class="inline-block mt-2 px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold">Termasuk PNBP UMKM Resmi</span>
                </div>

                <p class="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-3">Cakupan Layanan:</p>
                <ul class="space-y-2.5 text-xs text-slate-600">
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Penelusuran Merek 1 Kelas Nice</span></li>
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Asistensi Surat Rekomendasi UMKM</span></li>
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Pembiayaan PNBP Negara &amp; Jasa Kuasa HKI</span></li>
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Penerbitan Bukti Permohonan 24 Jam</span></li>
                  <li class="flex items-center gap-2 text-slate-300"><i data-lucide="x" class="w-4 h-4 shrink-0"></i><span>Penyusunan Sanggahan Usulan Penolakan</span></li>
                </ul>
              </div>

              <a href="#/konsultasi?layanan=merek" class="mt-8 w-full py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs text-center transition-colors">
                Pilih Paket Basic
              </a>
            </div>

            <!-- Protect Plus (Highlighted) -->
            <div class="bg-white rounded-3xl p-8 border-2 border-crimson-800 shadow-2xl flex flex-col justify-between relative transform lg:-translate-y-2">
              <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold-600 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                Direkomendasikan
              </div>

              <div>
                <span class="text-[11px] font-bold uppercase tracking-wider text-crimson-800">Reguler Umum &amp; PT/CV</span>
                <h3 class="font-serif text-2xl font-bold text-slate-900 mt-1">Protect Plus</h3>
                <p class="text-xs text-slate-500 mt-2">Solusi terpopuler untuk perusahaan &amp; brand komersial dengan proteksi menyeluruh.</p>

                <div class="my-6">
                  <span class="text-[10px] uppercase tracking-wider text-slate-400 block">Biaya All-In</span>
                  <div class="flex items-baseline gap-1 mt-0.5">
                    <span class="text-3xl font-black text-crimson-800">Rp 2.950.000</span>
                    <span class="text-xs text-slate-500">/ kelas</span>
                  </div>
                  <span class="inline-block mt-2 px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold">Termasuk Garansi Sanggahan Oposisi</span>
                </div>

                <p class="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-3">Semua di HKI Basic, ditambah:</p>
                <ul class="space-y-2.5 text-xs text-slate-700 font-medium">
                  <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-crimson-700 shrink-0"></i><span>Penelusuran Komprehensif Lintas Kelas</span></li>
                  <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-crimson-700 shrink-0"></i><span>Review Legal Opinion tertulis Konsultan HKI</span></li>
                  <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-crimson-700 shrink-0"></i><span>Monitoring Pengumuman Berita Resmi Merek</span></li>
                  <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-crimson-700 shrink-0"></i><span>Gratis 1x Tanggapan Usulan Penolakan</span></li>
                  <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-crimson-700 shrink-0"></i><span>Pengiriman Sertifikat Resmi &amp; Plakat Eksklusif</span></li>
                </ul>
              </div>

              <a href="#/konsultasi?layanan=merek" class="mt-8 w-full py-3.5 rounded-xl bg-crimson-800 hover:bg-crimson-900 text-white font-bold text-xs text-center shadow-lg transition-all">
                Amankan Merek Protect Plus
              </a>
            </div>

            <!-- Enterprise Bundle -->
            <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Korporasi &amp; Ekspansi Global</span>
                <h3 class="font-serif text-2xl font-bold text-slate-900 mt-1">Enterprise Bundle</h3>
                <p class="text-xs text-slate-500 mt-2">Proteksi multi-kelas untuk grup bisnis, waralaba (franchise), dan hak cipta logo korporat.</p>

                <div class="my-6">
                  <span class="text-[10px] uppercase tracking-wider text-slate-400 block">Biaya All-In</span>
                  <div class="flex items-baseline gap-1 mt-0.5">
                    <span class="text-3xl font-black text-slate-900">Rp 6.450.000</span>
                    <span class="text-xs text-slate-500">/ paket</span>
                  </div>
                  <span class="inline-block mt-2 px-2.5 py-0.5 rounded bg-amber-50 text-gold-700 text-[10px] font-bold">2 Kelas Merek + 1 Hak Cipta Logo</span>
                </div>

                <p class="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-3">Cakupan Eksklusif Korporat:</p>
                <ul class="space-y-2.5 text-xs text-slate-600">
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Pendaftaran Merek di 2 Kelas Nice Sekaligus</span></li>
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Pencatatan Hak Cipta Seni Logo &amp; Brand Guideline</span></li>
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Template Draf Perjanjian Lisensi Merek / Waralaba</span></li>
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Layanan Somasi Pelanggaran Merek Pihak Ketiga</span></li>
                  <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Dedicated Senior IP Counsel Prioritas</span></li>
                </ul>
              </div>

              <a href="#/konsultasi?layanan=merek" class="mt-8 w-full py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs text-center transition-colors">
                Konsultasi Enterprise Bundle
              </a>
            </div>

          </div>
        </div>
      </section>

      <!-- 7. FREQUENTLY ASKED QUESTIONS -->
      <section class="py-20 bg-white">
        <div class="max-w-3xl mx-auto px-6">
          <div class="text-center mb-12">
            <span class="text-xs font-bold uppercase tracking-wider text-crimson-800">Pertanyaan Populer</span>
            <h2 class="font-serif text-3xl font-bold text-slate-900 mt-1">
              Frequently Asked Questions
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 mt-2">
              Ketahui lebih lanjut mengenai prosedur hukum, durasi pemeriksaan, dan regulasi HKI di Indonesia.
            </p>
          </div>

          <div class="space-y-3.5">
            <div class="faq-item active bg-slate-50 rounded-2xl border border-slate-200/80 overflow-hidden">
              <button type="button" class="faq-toggle w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-crimson-800 transition-colors">
                <span>Berapa lama proses hingga sertifikat merek resmi terbit?</span>
                <i data-lucide="chevron-down" class="faq-icon w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0"></i>
              </button>
              <div class="faq-answer px-6">
                <p class="pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                  Bukti Permohonan Resmi (Filing Receipt) yang memberikan perlindungan hak prioritas terbit dalam <strong>24 jam</strong>. Sedangkan proses pemeriksaan formalitas, pengumuman publik (2 bulan), hingga pemeriksaan substantif oleh Pemeriksa DJKI memakan waktu sekitar 6–9 bulan sesuai ketentuan UU No. 20 Tahun 2016.
                </p>
              </div>
            </div>

            <div class="faq-item bg-slate-50 rounded-2xl border border-slate-200/80 overflow-hidden">
              <button type="button" class="faq-toggle w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-crimson-800 transition-colors">
                <span>Apa bedanya lambang TM (™) dan R (®)?</span>
                <i data-lucide="chevron-down" class="faq-icon w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0"></i>
              </button>
              <div class="faq-answer px-6">
                <p class="pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                  Simbol <strong>™ (Trademark)</strong> dapat langsung Anda gunakan begitu permohonan merek Anda diajukan ke DJKI (setelah Bukti Permohonan terbit dalam 24 jam). Sedangkan simbol <strong>® (Registered)</strong> digunakan setelah Sertifikat Merek resmi diterbitkan oleh Kemenkumham RI.
                </p>
              </div>
            </div>

            <div class="faq-item bg-slate-50 rounded-2xl border border-slate-200/80 overflow-hidden">
              <button type="button" class="faq-toggle w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-crimson-800 transition-colors">
                <span>Bagaimana jika permohonan merek saya mendapat usulan penolakan?</span>
                <i data-lucide="chevron-down" class="faq-icon w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0"></i>
              </button>
              <div class="faq-answer px-6">
                <p class="pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                  Dalam paket <strong>Protect Plus</strong> dan <strong>Enterprise</strong>, Konsultan HKI Terdaftar kami akan menyusun dan mengajukan Surat Tanggapan/Sanggahan Hukum secara gratis dalam batas waktu 30 hari kerja untuk mempertahankan argumen pembeda merek Anda di hadapan Pemeriksa DJKI.
                </p>
              </div>
            </div>

            <div class="faq-item bg-slate-50 rounded-2xl border border-slate-200/80 overflow-hidden">
              <button type="button" class="faq-toggle w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-crimson-800 transition-colors">
                <span>Apakah merek perorangan bisa diubah atas nama PT di kemudian hari?</span>
                <i data-lucide="chevron-down" class="faq-icon w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0"></i>
              </button>
              <div class="faq-answer px-6">
                <p class="pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                  Bisa. Hak atas Merek dapat dialihkan kepemilikannya dari nama pribadi (perorangan) ke badan hukum PT melalui mekanisme pencatatan Pengalihan Hak Merek (Assignment of Trademark) atau Perjanjian Lisensi di DJKI Kemenkumham.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 8. BOTTOM CTA BANNER -->
      <section class="pb-16 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="crimson-gradient-bg rounded-3xl p-8 sm:p-12 lg:p-14 text-white shadow-2xl relative overflow-hidden">
            <div class="absolute -right-16 -bottom-16 w-80 h-80 bg-gold-500/15 rounded-full blur-3xl pointer-events-none"></div>
            <div class="max-w-2xl space-y-5 relative z-10">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-gold-400 text-xs font-bold">
                <i data-lucide="shield-alert" class="w-3.5 h-3.5"></i>
                <span>Konsultasi Eksklusif</span>
              </div>
              <h2 class="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                Amankan Identitas Bisnis Anda Hari Ini.
              </h2>
              <p class="text-sm text-white/80 leading-relaxed">
                Jadwalkan diskusi bersama Konsultan HKI Terdaftar kami untuk menganalisis kelayakan merek dan merancang strategi perlindungan kekayaan intelektual bisnis Anda.
              </p>
              <div class="flex flex-wrap items-center gap-4 pt-2">
                <a href="#/konsultasi?layanan=merek" class="px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-crimson-900 font-extrabold text-xs sm:text-sm shadow-lg transition-all inline-flex items-center gap-2">
                  <span>Konsultasi HKI Gratis</span>
                  <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
                <!-- Silakan ganti href dengan nomor WhatsApp resmi: https://wa.me/[NOMOR] -->
                <a href="https://wa.me/?text=Halo%20LEGALTA,%20saya%20ingin%20konsultasi%20pendaftaran%20merek%20HKI" target="_blank" rel="noopener noreferrer" class="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all inline-flex items-center gap-2">
                  <i data-lucide="message-circle" class="w-4 h-4"></i>
                  <span>Hubungi via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  `;
}

export function initHkiLogic() {
  const form = document.getElementById('hkiQuickSearchForm');
  const brandInput = document.getElementById('hkiQuickBrandInput');
  const classSelect = document.getElementById('hkiQuickClassSelect');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const brand = brandInput?.value.trim();
    const cls = classSelect?.value || '42';
    if (brand) {
      sessionStorage.setItem('legalta_prefill_merek', brand);
      sessionStorage.setItem('legalta_prefill_class', cls);
    }
    navigateTo('/tools/cek-merek');
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}
