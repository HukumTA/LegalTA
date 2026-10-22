/**
 * View: Home (Beranda)
 * Matches the user's reference HTML & visual design (Hero with floating cards,
 * Dropdown Simulasi Tools, Kenapa LEGALTA 3-card showcase, and Smartphone Live Tracking Mockup).
 */

export function renderHomeView() {
  return `
    <div class="flex flex-col w-full">

      <!-- 1. HERO SECTION -->
      <section id="home" class="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <!-- Subtle luxury decorative background blobs -->
        <div class="absolute top-0 right-1/4 w-96 h-96 bg-crimson-50/60 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div class="absolute bottom-10 left-10 w-80 h-80 bg-amber-50/70 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <!-- Kolom Kiri: Teks & CTA -->
            <div class="lg:col-span-7 space-y-6">
              <!-- Badge Kecil -->
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crimson-50 border border-crimson-100 text-crimson-800 text-xs font-bold tracking-wide uppercase">
                <span class="w-2 h-2 rounded-full bg-crimson-700 animate-pulse"></span>
                Tentang Kami &amp; Layanan Utama
              </div>

              <!-- Headline H1 Besar & Tebal -->
              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                Memudahkan legalitas untuk <span class="bg-crimson-100/90 text-crimson-900 px-3 py-0.5 rounded-lg border-b-2 border-crimson-700/40 inline-block">setiap pengusaha</span> Indonesia.
              </h1>

              <!-- Paragraf Deskriptif -->
              <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                Platform legaltech terpercaya untuk pendirian PT &amp; CV secara kilat, pengurusan perizinan berusaha OSS terintegrasi, hingga proteksi merek HKI. Cepat, transparan, dan dibimbing langsung oleh tim konsultan hukum berpengalaman.
              </p>

              <!-- 2 Tombol CTA -->
              <div class="flex flex-wrap items-center gap-4 pt-2">
                <a href="#/konsultasi" class="inline-flex items-center justify-center px-8 py-3.5 bg-crimson-800 hover:bg-crimson-900 text-white font-bold text-sm rounded-full shadow-lg shadow-crimson-800/25 hover:shadow-xl hover:shadow-crimson-800/35 transition-all transform hover:-translate-y-0.5">
                  <span>Konsultasi Gratis</span>
                  <i data-lucide="arrow-right" class="w-4 h-4 ml-2"></i>
                </a>
                <button type="button" data-scroll-to="kenapa-legalta" class="inline-flex items-center justify-center px-8 py-3.5 bg-white border-2 border-slate-300 hover:border-crimson-800 text-slate-800 hover:text-crimson-800 font-bold text-sm rounded-full transition-all">
                  Lihat Layanan
                </button>
              </div>

              <!-- Mini trust indicators -->
              <div class="pt-6 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium border-t border-slate-100">
                <div class="flex items-center gap-2">
                  <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i>
                  <span>100% Legal &amp; Sah SK Kemenkumham</span>
                </div>
                <div class="flex items-center gap-2">
                  <i data-lucide="clock" class="w-4 h-4 text-gold-600"></i>
                  <span>Proses Cepat 3-5 Hari Kerja</span>
                </div>
                <div class="flex items-center gap-2">
                  <i data-lucide="lock" class="w-4 h-4 text-crimson-700"></i>
                  <span>Garansi Kerahasiaan Dokumen</span>
                </div>
              </div>
            </div>

            <!-- Kolom Kanan: Foto Profesional & 2 Floating Badges -->
            <div class="lg:col-span-5 relative flex justify-center">
              <div class="relative w-full max-w-md lg:max-w-none">
                
                <!-- Outer aesthetic border frame with gold accent -->
                <div class="relative rounded-3xl p-2 bg-gradient-to-tr from-crimson-800/20 via-transparent to-amber-400/30 shadow-2xl">
                  <!-- Main Photo Container -->
                  <div class="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[4/3] bg-white shadow-inner flex items-center justify-center">
                    <img 
                      src="assets/home-hero.png" 
                      alt="Konsultan Legalitas LEGALTA" 
                      class="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-700"
                    >
                    <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </div>

                <!-- Floating Card 1 (Kiri Atas): Ikon Profil '13.000+ Bisnis terlayani' -->
                <div class="absolute -top-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-slate-100/80 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-20 animate-bounce" style="animation-duration: 4s;">
                  <div class="w-11 h-11 rounded-xl bg-crimson-50 text-crimson-800 flex items-center justify-center font-bold">
                    <i data-lucide="users" class="w-5 h-5 text-crimson-800"></i>
                  </div>
                  <div>
                    <p class="text-base font-extrabold text-slate-900 leading-tight">13.000+</p>
                    <p class="text-xs text-slate-500 font-medium">Bisnis terlayani</p>
                  </div>
                </div>

                <!-- Floating Card 2 (Kanan Bawah): Bintang Merah '4.9/5 Rating Google' -->
                <div class="absolute -bottom-6 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md border border-slate-100/80 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-20">
                  <div class="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center">
                    <i data-lucide="star" class="w-6 h-6 fill-crimson-700 text-crimson-700"></i>
                  </div>
                  <div>
                    <div class="flex items-center gap-1.5">
                      <span class="text-base font-extrabold text-slate-900 leading-tight">4.9/5</span>
                      <div class="flex text-crimson-700">
                        <i data-lucide="star" class="w-3 h-3 fill-current"></i>
                        <i data-lucide="star" class="w-3 h-3 fill-current"></i>
                        <i data-lucide="star" class="w-3 h-3 fill-current"></i>
                        <i data-lucide="star" class="w-3 h-3 fill-current"></i>
                        <i data-lucide="star" class="w-3 h-3 fill-current"></i>
                      </div>
                    </div>
                    <p class="text-xs text-slate-500 font-medium">Rating Google Review</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- 2. DROPDOWN SIMULASI (TOOLS) -->
      <section id="simulasi-tools" class="py-12 bg-slate-50 border-y border-slate-200/60 relative">
        <div class="max-w-7xl mx-auto px-6">
          
          <div class="flex flex-col items-center">
            <!-- Context Label -->
            <div class="text-center mb-5">
              <span class="text-xs font-bold uppercase tracking-wider text-crimson-800 bg-crimson-50 px-3.5 py-1 rounded-full border border-crimson-100">Fitur Unggulan Interaktif</span>
              <p class="text-sm text-slate-500 mt-2">Simulasi menu dropdown Tools yang siap pakai untuk akselerasi bisnis Anda</p>
            </div>

            <!-- Elemen Kotak Putih Melayang (Dropdown Simulasi Tools) -->
            <div class="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/80 p-3.5 transform transition-all hover:shadow-2xl">
              <!-- Dropdown Header Indicator -->
              <div class="px-4 py-2.5 mb-1 flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                <span class="flex items-center gap-2">
                  <i data-lucide="wrench" class="w-3.5 h-3.5 text-crimson-700"></i>
                  Menu Tools LEGALTA
                </span>
                <span class="text-[11px] text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full font-bold">Gratis Digunakan</span>
              </div>

              <!-- List Vertikal dengan Pembatas Garis Tipis -->
              <div class="divide-y divide-slate-100">
                
                <!-- Item 1: Cek Nama PT -->
                <a href="#/tools/cek-pt" class="group flex items-center justify-between p-3.5 rounded-xl hover:bg-slate-50 transition-colors">
                  <div class="flex items-center gap-3.5">
                    <div class="w-10 h-10 rounded-lg bg-crimson-50 group-hover:bg-crimson-800 transition-colors flex items-center justify-center text-crimson-800 group-hover:text-white">
                      <i data-lucide="building" class="w-5 h-5"></i>
                    </div>
                    <div>
                      <h4 class="text-sm font-bold text-slate-800 group-hover:text-crimson-800 transition-colors">Cek Nama PT</h4>
                      <p class="text-xs text-slate-500">Verifikasi ketersediaan nama PT di database AHU</p>
                    </div>
                  </div>
                  <i data-lucide="arrow-right" class="w-4 h-4 text-slate-300 group-hover:text-crimson-800 group-hover:translate-x-1 transition-all"></i>
                </a>

                <!-- Item 2: Cek Nama Merek -->
                <a href="#/tools/cek-merek" class="group flex items-center justify-between p-3.5 rounded-xl hover:bg-slate-50 transition-colors">
                  <div class="flex items-center gap-3.5">
                    <div class="w-10 h-10 rounded-lg bg-amber-50 group-hover:bg-gold-500 transition-colors flex items-center justify-center text-gold-600 group-hover:text-white">
                      <i data-lucide="shield-alert" class="w-5 h-5"></i>
                    </div>
                    <div>
                      <h4 class="text-sm font-bold text-slate-800 group-hover:text-crimson-800 transition-colors">Cek Nama Merek</h4>
                      <p class="text-xs text-slate-500">Cek potensi kemiripan merek di PDKI Ditjen KI</p>
                    </div>
                  </div>
                  <i data-lucide="arrow-right" class="w-4 h-4 text-slate-300 group-hover:text-crimson-800 group-hover:translate-x-1 transition-all"></i>
                </a>

                <!-- Item 3: Cek KBLI -->
                <a href="#/tools/cek-kbli" class="group flex items-center justify-between p-3.5 rounded-xl hover:bg-slate-50 transition-colors">
                  <div class="flex items-center gap-3.5">
                    <div class="w-10 h-10 rounded-lg bg-slate-100 group-hover:bg-slate-900 transition-colors flex items-center justify-center text-slate-700 group-hover:text-white">
                      <i data-lucide="file-spreadsheet" class="w-5 h-5"></i>
                    </div>
                    <div>
                      <h4 class="text-sm font-bold text-slate-800 group-hover:text-crimson-800 transition-colors">Cek KBLI</h4>
                      <p class="text-xs text-slate-500">Pencarian 5 digit kode KBLI 2020 &amp; izin risiko OSS</p>
                    </div>
                  </div>
                  <i data-lucide="arrow-right" class="w-4 h-4 text-slate-300 group-hover:text-crimson-800 group-hover:translate-x-1 transition-all"></i>
                </a>

              </div>
            </div>

          </div>

        </div>
      </section>

      <!-- 3. SECTION 'KENAPA LEGALTA' -->
      <section id="kenapa-legalta" class="py-20 lg:py-28 bg-white relative">
        <div class="max-w-7xl mx-auto px-6">
          
          <!-- Judul di tengah -->
          <div class="text-center max-w-2xl mx-auto mb-16">
            <span class="text-xs font-bold uppercase tracking-wider text-crimson-800 bg-crimson-50 border border-crimson-100 px-3.5 py-1.5 rounded-full inline-block mb-3">Keunggulan Layanan</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Fondasi legalitas bisnis
            </h2>
            <p class="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed">
              Kami mengkombinasikan teknologi cerdas dengan tim notaris dan advokat bersertifikasi untuk memberikan standar perlindungan hukum terbaik bagi bisnis Anda.
            </p>
          </div>

          <!-- Grid Berisi Kartu (3 Kolom) -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <!-- Kartu 1: Normal Putih -->
            <div class="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div class="w-12 h-12 rounded-xl bg-crimson-50 flex items-center justify-center text-crimson-800 mb-6 group-hover:scale-110 transition-transform">
                  <i data-lucide="zap" class="w-6 h-6"></i>
                </div>
                <h3 class="text-xl font-bold text-slate-900 mb-3">Proses Cepat &amp; Terlacak</h3>
                <p class="text-slate-600 text-sm leading-relaxed">
                  Dokumen perusahaan Anda diproses secara digital dan transparan. Pantau langsung progres notaris hingga pengesahan instansi tanpa jeda.
                </p>
              </div>
              <div class="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-semibold text-crimson-800">
                <span>Selesai mulai 3 hari kerja</span>
                <i data-lucide="check" class="w-4 h-4 ml-1"></i>
              </div>
            </div>

            <!-- Kartu 2 (Tengah - EFEK AKTIF): Background Merah Gelap dengan Teks Putih -->
            <div class="bg-crimson-800 rounded-2xl p-8 shadow-2xl shadow-crimson-900/30 text-white flex flex-col justify-between transform lg:-translate-y-2 relative overflow-hidden border border-crimson-700">
              <!-- Subtle Gold accent shine -->
              <div class="absolute -top-12 -right-12 w-40 h-40 bg-gold-400/20 rounded-full blur-2xl pointer-events-none"></div>

              <div>
                <div class="flex items-center justify-between mb-6">
                  <div class="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-gold-400">
                    <i data-lucide="user-check" class="w-6 h-6"></i>
                  </div>
                  <span class="px-2.5 py-1 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-400 text-[11px] font-bold tracking-wide uppercase">
                    Paling Favorit
                  </span>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">Personal Legal Assistant</h3>
                <p class="text-white/80 text-sm leading-relaxed">
                  Didampingi 1-on-1 oleh legal counsel profesional berdedikasi yang siap menjawab pertanyaan, menganalisis kontrak, dan memastikan kepatuhan regulasi usaha Anda.
                </p>
              </div>
              
              <a href="#/konsultasi" class="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-white/90 hover:text-gold-400 transition-colors">
                <span>Dukungan WhatsApp 24/7</span>
                <i data-lucide="arrow-right" class="w-4 h-4 text-gold-400"></i>
              </a>
            </div>

            <!-- Kartu 3: Normal Putih -->
            <div class="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div class="w-12 h-12 rounded-xl bg-crimson-50 flex items-center justify-center text-crimson-800 mb-6 group-hover:scale-110 transition-transform">
                  <i data-lucide="badge-dollar-sign" class="w-6 h-6"></i>
                </div>
                <h3 class="text-xl font-bold text-slate-900 mb-3">Biaya Transparan &amp; Pasti</h3>
                <p class="text-slate-600 text-sm leading-relaxed">
                  Semua paket layanan memiliki rincian biaya yang jelas tanpa hidden fee. Termasuk PNBP resmi negara dan akta notaris rekanan terpercaya.
                </p>
              </div>
              <div class="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-semibold text-crimson-800">
                <span>Tanpa Biaya Tersembunyi</span>
                <i data-lucide="check" class="w-4 h-4 ml-1"></i>
              </div>
            </div>

          </div>

          <!-- Additional mini feature strip -->
          <div class="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p class="text-2xl font-black text-slate-900">100% Sah</p>
              <p class="text-xs text-slate-500 mt-1">Sesuai UU Cipta Kerja &amp; Regulasi AHU</p>
            </div>
            <div>
              <p class="text-2xl font-black text-slate-900">50+ Rekanan</p>
              <p class="text-xs text-slate-500 mt-1">Notaris &amp; Konsultan HKI Terdaftar</p>
            </div>
            <div>
              <p class="text-2xl font-black text-slate-900">Garansi Revisi</p>
              <p class="text-xs text-slate-500 mt-1">Hingga SK Kemenkumham Resmi Terbit</p>
            </div>
          </div>

          <!-- Quick Navigation to 4 Core Services -->
          <div class="mt-16 pt-12 border-t border-slate-100">
            <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-crimson-800">Katalog Layanan Legalitas</span>
                <h3 class="text-2xl font-extrabold text-slate-900 mt-1">Solusi Hukum Lengkap Sesuai Kebutuhan Usaha</h3>
              </div>
              <a href="#/konsultasi" class="text-sm font-bold text-crimson-800 hover:text-crimson-900 inline-flex items-center gap-1.5">
                <span>Simulasi Kalkulator Biaya</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <a href="#/layanan/pendirian" class="group p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-crimson-800/40 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <div class="w-11 h-11 rounded-xl bg-crimson-50 text-crimson-800 group-hover:bg-crimson-800 group-hover:text-white transition-colors flex items-center justify-center mb-4">
                    <i data-lucide="building-2" class="w-5 h-5"></i>
                  </div>
                  <h4 class="text-base font-bold text-slate-900 group-hover:text-crimson-800 transition-colors">Pendirian Badan Usaha</h4>
                  <p class="text-xs text-slate-500 mt-1.5 leading-relaxed">PT Standar, PT Perorangan UMKM, CV, PT PMA, &amp; Yayasan.</p>
                </div>
                <span class="mt-5 pt-3 border-t border-slate-100 text-xs font-bold text-crimson-800 inline-flex items-center justify-between">
                  <span>Mulai Rp 1,5 Jt</span>
                  <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
                </span>
              </a>

              <a href="#/layanan/hki" class="group p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-crimson-800/40 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <div class="w-11 h-11 rounded-xl bg-amber-50 text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-colors flex items-center justify-center mb-4">
                    <i data-lucide="shield-check" class="w-5 h-5"></i>
                  </div>
                  <h4 class="text-base font-bold text-slate-900 group-hover:text-crimson-800 transition-colors">Pendaftaran HKI &amp; Merek</h4>
                  <p class="text-xs text-slate-500 mt-1.5 leading-relaxed">Proteksi Merek Dagang, Hak Cipta, Desain Industri &amp; Paten DJKI.</p>
                </div>
                <span class="mt-5 pt-3 border-t border-slate-100 text-xs font-bold text-crimson-800 inline-flex items-center justify-between">
                  <span>Mulai Rp 1,95 Jt</span>
                  <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
                </span>
              </a>

              <a href="#/layanan/perizinan" class="group p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-crimson-800/40 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <div class="w-11 h-11 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors flex items-center justify-center mb-4">
                    <i data-lucide="file-check" class="w-5 h-5"></i>
                  </div>
                  <h4 class="text-base font-bold text-slate-900 group-hover:text-crimson-800 transition-colors">Perizinan OSS &amp; PB-UMKU</h4>
                  <p class="text-xs text-slate-500 mt-1.5 leading-relaxed">NIB RBA, Izin Edar BPOM, Sertifikasi Halal, SBUJK &amp; PKKPR.</p>
                </div>
                <span class="mt-5 pt-3 border-t border-slate-100 text-xs font-bold text-crimson-800 inline-flex items-center justify-between">
                  <span>Mulai Rp 1,25 Jt</span>
                  <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
                </span>
              </a>

              <a href="#/layanan/dokumen" class="group p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-crimson-800/40 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <div class="w-11 h-11 rounded-xl bg-crimson-50 text-crimson-800 group-hover:bg-crimson-800 group-hover:text-white transition-colors flex items-center justify-center mb-4">
                    <i data-lucide="file-signature" class="w-5 h-5"></i>
                  </div>
                  <h4 class="text-base font-bold text-slate-900 group-hover:text-crimson-800 transition-colors">Dokumen &amp; Akta RUPS</h4>
                  <p class="text-xs text-slate-500 mt-1.5 leading-relaxed">Perubahan Anggaran Dasar, RUPS Notariil, &amp; Akuisisi Saham.</p>
                </div>
                <span class="mt-5 pt-3 border-t border-slate-100 text-xs font-bold text-crimson-800 inline-flex items-center justify-between">
                  <span>Mulai Rp 3,8 Jt</span>
                  <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
                </span>
              </a>
            </div>
          </div>

        </div>
      </section>

      <!-- 4. SECTION 'TRANSPARANSI PENUH (LIVE TRACKING)' -->
      <section class="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-6">
          
          <!-- Judul Tengah -->
          <div class="text-center max-w-2xl mx-auto mb-16">
            <span class="text-xs font-bold uppercase tracking-wider text-crimson-800 bg-crimson-50 border border-crimson-100 px-3.5 py-1.5 rounded-full inline-block mb-3">Live Tracking Otomatis</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Pantau progress legalitas dari HP Anda.
            </h2>
            <p class="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed">
              Tak perlu lagi menebak status dokumen legalitas Anda. Dapatkan update real-time langsung melalui dashboard interaktif di smartphone Anda.
            </p>
          </div>

          <!-- UI Mockup Layar HP di Tengah -->
          <div class="flex flex-col items-center">
            
            <!-- Mockup Smartphone Frame -->
            <div class="relative w-full max-w-[340px] sm:max-w-[360px] bg-slate-900 p-4 rounded-[44px] shadow-2xl border-4 border-slate-800 ring-1 ring-slate-700/50">
              
              <!-- Speaker Notch / Dynamic Island -->
              <div class="absolute top-7 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-end px-3">
                <span class="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
              </div>

              <!-- Screen Container -->
              <div class="w-full bg-white rounded-[32px] overflow-hidden pt-10 pb-6 px-5 border border-slate-100 flex flex-col relative min-h-[520px]">
                
                <!-- App Screen Header -->
                <div class="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div class="flex items-center gap-2">
                    <div class="w-7 h-7 rounded-lg bg-crimson-800 flex items-center justify-center text-white text-xs font-bold">
                      L
                    </div>
                    <div>
                      <h4 class="text-xs font-bold text-slate-900 leading-tight">LEGALTA Tracking</h4>
                      <p class="text-[10px] text-slate-400">Order #LEG-2025-0891</p>
                    </div>
                  </div>
                  <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>

                <!-- Case Summary Card inside Phone -->
                <div class="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span class="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Layanan Aktif</span>
                  <p class="text-xs font-bold text-slate-800 mt-0.5">Pendirian PT Perkasa Digital Nusantara</p>
                  <div class="w-full bg-slate-200 h-1.5 rounded-full mt-2.5 overflow-hidden">
                    <div class="bg-crimson-700 h-full rounded-full" style="width: 65%;"></div>
                  </div>
                  <div class="flex justify-between items-center mt-1 text-[10px] text-slate-500">
                    <span>Progress: 65%</span>
                    <span>Estimasi: 2 Hari</span>
                  </div>
                </div>

                <!-- Status List Vertikal Mockup -->
                <div class="mt-5 space-y-4 relative flex-1">
                  <!-- Vertical Connecting Line -->
                  <div class="absolute left-4 top-3 bottom-3 w-0.5 bg-slate-200 -z-0"></div>

                  <!-- Item 1: Konsultasi (DONE) -->
                  <div class="relative z-10 flex items-center justify-between bg-white p-2.5 rounded-xl border border-emerald-100 shadow-sm">
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-sm">
                        <i data-lucide="check" class="w-4 h-4 stroke-[3]"></i>
                      </div>
                      <div>
                        <h5 class="text-xs font-bold text-slate-800">Konsultasi</h5>
                        <p class="text-[10px] text-slate-400">KBLI &amp; struktur pemegang saham</p>
                      </div>
                    </div>
                    <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-100 text-emerald-800">
                      DONE
                    </span>
                  </div>

                  <!-- Item 2: Cek Nama PT (DONE) -->
                  <div class="relative z-10 flex items-center justify-between bg-white p-2.5 rounded-xl border border-emerald-100 shadow-sm">
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-sm">
                        <i data-lucide="check" class="w-4 h-4 stroke-[3]"></i>
                      </div>
                      <div>
                        <h5 class="text-xs font-bold text-slate-800">Cek Nama PT</h5>
                        <p class="text-[10px] text-slate-400">Persetujuan nama di Kemenkumham</p>
                      </div>
                    </div>
                    <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-100 text-emerald-800">
                      DONE
                    </span>
                  </div>

                  <!-- Item 3: Akta Notaris (Teks Merah, Badge JALAN) -->
                  <div class="relative z-10 flex items-center justify-between bg-crimson-50/70 p-2.5 rounded-xl border border-crimson-200 shadow-sm ring-1 ring-crimson-500/20">
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 rounded-full bg-crimson-700 text-white flex items-center justify-center animate-spin" style="animation-duration: 3s;">
                        <i data-lucide="loader-2" class="w-4 h-4"></i>
                      </div>
                      <div>
                        <h5 class="text-xs font-extrabold text-crimson-800">Akta Notaris</h5>
                        <p class="text-[10px] text-crimson-700 font-medium">Drafting &amp; tanda tangan elektronik</p>
                      </div>
                    </div>
                    <span class="px-2.5 py-0.5 rounded text-[10px] font-black bg-crimson-700 text-white tracking-wider animate-pulse">
                      JALAN
                    </span>
                  </div>

                  <!-- Item 4: Pengesahan AHU (Teks Abu-abu Transparan) -->
                  <div class="relative z-10 flex items-center justify-between bg-slate-50/60 p-2.5 rounded-xl border border-dashed border-slate-200 opacity-60">
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center">
                        <i data-lucide="clock" class="w-4 h-4"></i>
                      </div>
                      <div>
                        <h5 class="text-xs font-medium text-slate-400">Pengesahan AHU</h5>
                        <p class="text-[10px] text-slate-300">Penerbitan SK Menkumham &amp; NIB</p>
                      </div>
                    </div>
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-400">
                      PENDING
                    </span>
                  </div>

                </div>

                <!-- Bottom Home Indicator inside Phone -->
                <div class="mt-4 pt-3 flex justify-center">
                  <div class="w-24 h-1 bg-slate-300 rounded-full"></div>
                </div>

              </div>
            </div>

            <!-- Interactive CTA to open full Live Tracking -->
            <div class="mt-10">
              <a href="#/tracking" class="inline-flex items-center gap-2.5 px-7 py-3.5 bg-slate-900 hover:bg-crimson-800 text-white text-sm font-bold rounded-full shadow-lg transition-all transform hover:-translate-y-0.5">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Buka Portal Live Tracking Berkas</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  `;
}

export function initHomeLogic() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}
