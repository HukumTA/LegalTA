/**
 * View: Home (Beranda)
 * Update: Judul Keunggulan HUKUMTA dibuat besar, tebal, dan tegas (tanpa deskripsi/badge kecil).
 */

export function renderHomeView() {
  return `
    <div class="flex flex-col w-full">

      <!-- 1. HERO SECTION -->
      <section id="home" class="px-4 sm:px-6 pt-4 pb-6">
        <div class="relative max-w-7xl mx-auto rounded-[28px] overflow-hidden text-white shadow-2xl shadow-crimson-900/25" style="background: radial-gradient(ellipse at 72% 30%, #A32426 0%, #6B0F11 42%, #2B0708 100%);">
          <img src="assets/Timbangan.jpg" alt="" aria-hidden="true" class="absolute inset-0 w-full h-full object-cover opacity-[0.12] pointer-events-none">
          <div class="absolute -top-28 -right-24 w-[26rem] h-[26rem] rounded-full bg-[#E8C26A]/25 blur-3xl pointer-events-none"></div>
          <div class="absolute -bottom-32 -left-24 w-[24rem] h-[24rem] rounded-full bg-crimson-500/30 blur-3xl pointer-events-none"></div>

          <div class="relative px-6 sm:px-10 lg:px-14 pt-12 pb-10 lg:pt-16">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              <div class="lg:col-span-7 space-y-6">
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                  Legalitas usaha jadi <span class="text-[#E8C26A]"> lebih mudah </span> untuk setiap pengusaha
                </h1>
                <p class="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl font-normal">
                  HUKUMTA adalah platform legaltech yang membantu pengusaha Indonesia mengurus legalitas usaha dengan cepat, transparan, dan terpercaya. Mulai dari pendirian PT dan CV, pengurusan perizinan berusaha melalui OSS, hingga pendaftaran dan perlindungan merek (HKI).
                </p>
                <div class="flex flex-wrap items-center gap-4 pt-2">
                  <a href="#/konsultasi" class="inline-flex items-center justify-center px-8 py-3.5 bg-[#C9A24D] hover:bg-[#D9B35E] text-[#1F1600] font-bold text-sm rounded-full transition-colors">
                    <span>Konsultasi Gratis</span>
                    <i data-lucide="arrow-right" class="w-4 h-4 ml-2"></i>
                  </a>
                  <button type="button" data-scroll-to="kenapa-legalta" class="inline-flex items-center justify-center px-8 py-3.5 border border-white/40 hover:bg-white/10 text-white font-bold text-sm rounded-full transition-colors">
                    Lihat Layanan
                  </button>
                </div>
                <div class="flex items-center gap-2 text-xs text-white/70 font-medium">
                  <i data-lucide="lock" class="w-4 h-4 text-[#E8C26A]"></i>
                  <span>Garansi Kerahasiaan Dokumen</span>
                </div>
              </div>
              <div class="lg:col-span-5 flex justify-center">
                <div class="relative w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden border-4 border-[#C9A24D]/60 bg-[#FFF7ED] aspect-[4/3] flex items-center justify-center shadow-lg">
                  <img src="assets/home-hero.jpg" alt="Konsultan Legalitas HUKUMTA" class="w-full h-full object-cover object-top">
                </div>
              </div>
            </div>

            <div class="mt-12 pt-6 border-t border-white/20 grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <p class="text-3xl lg:text-4xl font-extrabold text-white leading-tight">0+</p>
                <p class="text-xs text-white/70 font-medium mt-1">Bisnis terlayani</p>
              </div>
              <div>
                <p class="text-3xl lg:text-4xl font-extrabold text-white leading-tight">0/5</p>
                <p class="text-xs text-white/70 font-medium mt-1">Rating Google Review</p>
              </div>
              <div>
                <p class="text-3xl lg:text-4xl font-extrabold text-white leading-tight">3-5</p>
                <p class="text-xs text-white/70 font-medium mt-1">Hari Kerja, Proses Cepat</p>
              </div>
              <div>
                <p class="text-3xl lg:text-4xl font-extrabold text-white leading-tight">100%</p>
                <p class="text-xs text-white/70 font-medium mt-1">Sah sesuai SK Kemenkumham</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. TOOLS UNGGULAN -->
      <section id="simulasi-tools" class="py-16 lg:py-24 bg-section-rose relative overflow-hidden">
        <div class="absolute top-10 -left-20 w-72 h-72 rounded-full bg-[#E8C26A]/20 blur-3xl pointer-events-none"></div>

        <div class="relative max-w-7xl mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <!-- Kiri -->
            <div class="lg:col-span-5 space-y-5 text-center lg:text-left">
              <h2 class="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
                Tools Unggulan HUKUMTA
              </h2>
              <p class="text-stone-600 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                Fitur-fitur gratis dan siap digunakan untuk membantu operasional legalitas bisnis Anda.
              </p>
            </div>
            <!-- Kanan -->
            <div class="lg:col-span-7 space-y-4">
              <a href="#/tools/cek-pt" class="group block p-5 sm:p-6 rounded-2xl bg-white border border-stone-100 shadow-sm hover:shadow-xl hover:scale-[1.01] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-crimson-50/0 to-crimson-50/0 group-hover:to-crimson-50/50 transition-colors"></div>
                <div class="relative flex items-center justify-between">
                  <div class="flex items-center gap-5">
                    <div class="w-14 h-14 rounded-2xl bg-crimson-50 text-crimson-800 group-hover:bg-crimson-800 group-hover:text-white transition-colors flex items-center justify-center shrink-0 shadow-sm">
                      <i data-lucide="building" class="w-6 h-6"></i>
                    </div>
                    <h4 class="text-xl font-extrabold text-stone-900 group-hover:text-crimson-800 transition-colors">Cek Nama PT</h4>
                  </div>
                  <span class="w-10 h-10 rounded-full border-2 border-[#C9A24D] text-[#9A7B2F] group-hover:bg-[#C9A24D] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                    <i data-lucide="arrow-up-right" class="w-5 h-5"></i>
                  </span>
                </div>
              </a>
              <a href="#/tools/cek-merek" class="group block p-5 sm:p-6 rounded-2xl bg-white border border-stone-100 shadow-sm hover:shadow-xl hover:scale-[1.01] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-crimson-50/0 to-crimson-50/0 group-hover:to-crimson-50/50 transition-colors"></div>
                <div class="relative flex items-center justify-between">
                  <div class="flex items-center gap-5">
                    <div class="w-14 h-14 rounded-2xl bg-crimson-50 text-crimson-800 group-hover:bg-crimson-800 group-hover:text-white transition-colors flex items-center justify-center shrink-0 shadow-sm">
                      <i data-lucide="shield-alert" class="w-6 h-6"></i>
                    </div>
                    <h4 class="text-xl font-extrabold text-stone-900 group-hover:text-crimson-800 transition-colors">Cek Merek</h4>
                  </div>
                  <span class="w-10 h-10 rounded-full border-2 border-[#C9A24D] text-[#9A7B2F] group-hover:bg-[#C9A24D] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                    <i data-lucide="arrow-up-right" class="w-5 h-5"></i>
                  </span>
                </div>
              </a>
              <a href="#/tools/cek-kbli" class="group block p-5 sm:p-6 rounded-2xl bg-white border border-stone-100 shadow-sm hover:shadow-xl hover:scale-[1.01] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-crimson-50/0 to-crimson-50/0 group-hover:to-crimson-50/50 transition-colors"></div>
                <div class="relative flex items-center justify-between">
                  <div class="flex items-center gap-5">
                    <div class="w-14 h-14 rounded-2xl bg-crimson-50 text-crimson-800 group-hover:bg-crimson-800 group-hover:text-white transition-colors flex items-center justify-center shrink-0 shadow-sm">
                      <i data-lucide="file-spreadsheet" class="w-6 h-6"></i>
                    </div>
                    <h4 class="text-xl font-extrabold text-stone-900 group-hover:text-crimson-800 transition-colors">Cek KBLI</h4>
                  </div>
                  <span class="w-10 h-10 rounded-full border-2 border-[#C9A24D] text-[#9A7B2F] group-hover:bg-[#C9A24D] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                    <i data-lucide="arrow-up-right" class="w-5 h-5"></i>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div class="divider-glow max-w-5xl mx-auto w-full"></div>

      <!-- 3. KATALOG LAYANAN (Grid Sejajar) -->
      <section class="px-4 sm:px-6 py-8 lg:py-12">
        <div class="relative overflow-hidden max-w-7xl mx-auto rounded-[28px] text-white py-12 lg:py-16 bg-section-dark shadow-2xl shadow-crimson-900/25">
          <div class="absolute -bottom-32 -left-24 w-[24rem] h-[24rem] rounded-full bg-crimson-500/25 blur-3xl pointer-events-none"></div>

          <!-- Header -->
          <div class="relative flex flex-col mb-12 px-8 sm:px-12 lg:px-16 text-center lg:text-left">
            <div>
              <span class="inline-block text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/80 border border-white/20 px-4 py-1.5 rounded-full mb-4">Katalog Layanan Legalitas</span>
            </div>
            <h3 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-2xl mx-auto lg:mx-0">
              Solusi Hukum Lengkap Sesuai Kebutuhan Usaha
            </h3>
          </div>

          <!-- Grid 4 Kolom -->
          <div class="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8 sm:px-12 lg:px-16 pb-8">
            <a href="#/layanan/pendirian" class="group p-8 rounded-[1.5rem] bg-white text-stone-900 shadow-xl hover:shadow-crimson-500/40 hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div class="w-16 h-16 rounded-2xl bg-crimson-50 text-crimson-800 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-crimson-800 group-hover:text-white transition-all shadow-sm">
                <i data-lucide="building-2" class="w-8 h-8"></i>
              </div>
              <h4 class="text-2xl font-bold text-stone-900 group-hover:text-crimson-800 transition-colors leading-snug">Pendirian Badan Usaha</h4>
              <p class="text-base text-stone-500 mt-4 leading-relaxed flex-grow">PT Standar, PT Perorangan UMKM, CV, PT PMA, &amp; Yayasan Terdaftar.</p>
              <div class="mt-8 pt-5 border-t border-stone-100 flex justify-end">
                <span class="w-10 h-10 rounded-full border border-stone-200 text-stone-400 group-hover:border-crimson-800 group-hover:text-crimson-800 flex items-center justify-center transition-colors">
                  <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </span>
              </div>
            </a>

            <a href="#/layanan/hki" class="group p-8 rounded-[1.5rem] bg-white text-stone-900 shadow-xl hover:shadow-crimson-500/40 hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div class="w-16 h-16 rounded-2xl bg-crimson-50 text-crimson-800 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-crimson-800 group-hover:text-white transition-all shadow-sm">
                <i data-lucide="shield-check" class="w-8 h-8"></i>
              </div>
              <h4 class="text-2xl font-bold text-stone-900 group-hover:text-crimson-800 transition-colors leading-snug">Pendaftaran HKI &amp; Merek</h4>
              <p class="text-base text-stone-500 mt-4 leading-relaxed flex-grow">Proteksi Merek Dagang, Hak Cipta, Desain Industri &amp; Paten via DJKI.</p>
              <div class="mt-8 pt-5 border-t border-stone-100 flex justify-end">
                <span class="w-10 h-10 rounded-full border border-stone-200 text-stone-400 group-hover:border-crimson-800 group-hover:text-crimson-800 flex items-center justify-center transition-colors">
                  <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </span>
              </div>
            </a>

            <a href="#/layanan/perizinan" class="group p-8 rounded-[1.5rem] bg-white text-stone-900 shadow-xl hover:shadow-crimson-500/40 hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div class="w-16 h-16 rounded-2xl bg-crimson-50 text-crimson-800 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-crimson-800 group-hover:text-white transition-all shadow-sm">
                <i data-lucide="file-check" class="w-8 h-8"></i>
              </div>
              <h4 class="text-2xl font-bold text-stone-900 group-hover:text-crimson-800 transition-colors leading-snug">Perizinan OSS &amp; PB-UMKU</h4>
              <p class="text-base text-stone-500 mt-4 leading-relaxed flex-grow">NIB RBA, Izin Edar BPOM, Sertifikasi Halal, SBUJK &amp; PKKPR.</p>
              <div class="mt-8 pt-5 border-t border-stone-100 flex justify-end">
                <span class="w-10 h-10 rounded-full border border-stone-200 text-stone-400 group-hover:border-crimson-800 group-hover:text-crimson-800 flex items-center justify-center transition-colors">
                  <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </span>
              </div>
            </a>

            <a href="#/layanan/dokumen" class="group p-8 rounded-[1.5rem] bg-white text-stone-900 shadow-xl hover:shadow-crimson-500/40 hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div class="w-16 h-16 rounded-2xl bg-crimson-50 text-crimson-800 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-crimson-800 group-hover:text-white transition-all shadow-sm">
                <i data-lucide="file-signature" class="w-8 h-8"></i>
              </div>
              <h4 class="text-2xl font-bold text-stone-900 group-hover:text-crimson-800 transition-colors leading-snug">Dokumen &amp; Akta RUPS</h4>
              <p class="text-base text-stone-500 mt-4 leading-relaxed flex-grow">Perubahan Anggaran Dasar, RUPS Notariil, &amp; Restrukturisasi Saham.</p>
              <div class="mt-8 pt-5 border-t border-stone-100 flex justify-end">
                <span class="w-10 h-10 rounded-full border border-stone-200 text-stone-400 group-hover:border-crimson-800 group-hover:text-crimson-800 flex items-center justify-center transition-colors">
                  <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- 4. SECTION KEUNGGULAN (Asimetris dengan Judul Tegas Besar) -->
      <section id="kenapa-legalta" class="py-16 lg:py-24 relative overflow-hidden" style="background-color: #FFF7ED; background-image: radial-gradient(rgba(123,21,23,0.12) 1.2px, transparent 1.2px); background-size: 22px 22px;">
        <div class="max-w-7xl mx-auto px-6">
          
          <!-- Judul Tunggal, Tebal, dan Raksasa -->
          <div class="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight uppercase">
              KEUNGGULAN HUKUMTA
            </h2>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            <!-- Kartu Besar (Personal Legal Assistant) -->
            <div class="lg:col-span-7 rounded-[2.5rem] p-10 lg:p-14 text-white flex flex-col justify-between shadow-2xl shadow-crimson-900/40 relative overflow-hidden group" style="background: linear-gradient(160deg, #8F1A1C 0%, #5A0D0F 100%); border: 1px solid rgba(201,162,77,0.3);">
              <div class="absolute top-0 right-0 w-64 h-64 bg-[#E8C26A] opacity-20 blur-[80px] group-hover:opacity-40 transition-opacity duration-700"></div>
              
              <div class="relative z-10">
                <div class="flex items-center gap-4 mb-8">
                  <div class="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-[#E8C26A] shadow-inner backdrop-blur-sm">
                    <i data-lucide="user-check" class="w-8 h-8"></i>
                  </div>
                  <span class="px-4 py-2 rounded-full bg-[#C9A24D] text-[#1F1600] text-xs font-black tracking-[0.1em] uppercase shadow-sm">Paling Favorit</span>
                </div>
                <h3 class="text-3xl lg:text-4xl font-extrabold text-white mb-6 leading-tight">Personal Legal Assistant</h3>
                <p class="text-white/80 text-lg leading-relaxed max-w-md">
                  Setiap klien didampingi 1-on-1 oleh legal counsel profesional yang siap menjawab pertanyaan operasional dan memastikan kepatuhan regulasi.
                </p>
              </div>
              
              <!-- CTA Jadwalkan Sekarang dengan Ikon Besar -->
              <a href="#/konsultasi" class="relative z-10 mt-12 pt-8 border-t border-white/20 flex items-center justify-between group/btn">
                <span class="text-lg sm:text-xl font-extrabold text-white group-hover/btn:text-[#E8C26A] transition-colors">Jadwalkan Sekarang Juga!</span>
                <div class="w-14 h-14 rounded-full bg-[#C9A24D] flex items-center justify-center text-[#5A0D0F] group-hover/btn:bg-white group-hover/btn:scale-110 group-hover/btn:shadow-xl transition-all duration-300">
                  <i data-lucide="arrow-right" class="w-7 h-7 stroke-[3]"></i>
                </div>
              </a>
            </div>

            <!-- Kolom Kanan -->
            <div class="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
              <div class="bg-white rounded-[2rem] p-8 lg:p-10 border border-stone-200 shadow-md flex-1 flex flex-col justify-center hover:shadow-xl transition-shadow group">
                <div class="flex items-center gap-5 mb-5">
                  <div class="w-14 h-14 rounded-2xl bg-crimson-50 flex items-center justify-center text-crimson-800 group-hover:bg-crimson-800 group-hover:text-white transition-colors shadow-sm">
                    <i data-lucide="zap" class="w-7 h-7"></i>
                  </div>
                  <h3 class="text-2xl font-bold text-stone-900">Proses Cepat &amp; Terlacak</h3>
                </div>
                <p class="text-stone-600 text-base leading-relaxed mb-6">
                  Pantau langsung progres notaris hingga pengesahan instansi melalui dashboard tanpa harus menunggu kabar tidak pasti.
                </p>
                <div class="mt-auto flex items-center text-sm font-bold text-emerald-600 bg-emerald-50 w-max px-4 py-2 rounded-lg">
                  <i data-lucide="check-circle-2" class="w-4 h-4 mr-2"></i>
                  Selesai mulai 3 hari kerja
                </div>
              </div>

              <div class="bg-white rounded-[2rem] p-8 lg:p-10 border border-stone-200 shadow-md flex-1 flex flex-col justify-center hover:shadow-xl transition-shadow group">
                <div class="flex items-center gap-5 mb-5">
                  <div class="w-14 h-14 rounded-2xl bg-crimson-50 flex items-center justify-center text-crimson-800 group-hover:bg-crimson-800 group-hover:text-white transition-colors shadow-sm">
                    <i data-lucide="badge-dollar-sign" class="w-7 h-7"></i>
                  </div>
                  <h3 class="text-2xl font-bold text-stone-900">Biaya Transparan</h3>
                </div>
                <p class="text-stone-600 text-base leading-relaxed mb-6">
                  Rincian biaya jelas di awal kontrak tanpa hidden fee. Sudah termasuk PNBP resmi negara dan honorarium akta notaris rekanan.
                </p>
                <div class="mt-auto flex items-center text-sm font-bold text-emerald-600 bg-emerald-50 w-max px-4 py-2 rounded-lg">
                  <i data-lucide="check-circle-2" class="w-4 h-4 mr-2"></i>
                  Pasti & Bebas Pungli
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. LIVE TRACKING -->
      <section class="py-16 lg:py-28 relative overflow-hidden bg-white">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div class="space-y-8 text-center lg:text-left z-10">
            <span class="inline-block text-[10px] font-extrabold uppercase tracking-[0.2em] text-crimson-800 bg-crimson-50 border border-crimson-100 px-5 py-2 rounded-full shadow-sm">Live Tracking Otomatis</span>
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-tight">
              Pantau progress legalitas dari HP Anda.
            </h2>
            <a href="#/tracking" class="inline-flex items-center gap-3 px-8 py-4 bg-crimson-800 hover:bg-crimson-900 hover:scale-105 hover:shadow-lg hover:shadow-crimson-900/30 text-white font-bold rounded-full transition-all duration-300 mt-4">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Buka Portal Live Tracking</span>
            </a>
          </div>

          <div class="flex justify-center lg:justify-end relative">
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-crimson-100/50 to-transparent blur-3xl transform rotate-12 scale-150"></div>
            
            <div class="relative w-full max-w-[320px] rounded-[3rem] shadow-2xl border-[6px] border-[#313131] bg-black p-1.5 rotate-2 hover:rotate-0 transition-transform duration-500 ease-out z-10">
              <div class="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-white/20 rounded-[2.5rem] pointer-events-none z-50"></div>
              <div class="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-40 flex items-center justify-end px-3">
                <span class="w-2 h-2 rounded-full bg-slate-800 shadow-[inset_0_0_2px_rgba(255,255,255,0.2)]"></span>
              </div>

              <div class="w-full bg-slate-50 rounded-[2.5rem] overflow-hidden pt-12 pb-6 px-4 border border-stone-200 relative min-h-[580px]">
                <div class="flex items-center justify-between pb-4 border-b border-stone-200">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-crimson-800 flex items-center justify-center text-white font-bold shadow-md">L</div>
                    <div>
                      <h4 class="text-sm font-black text-stone-900">Tracking Berkas</h4>
                      <p class="text-[10px] text-stone-400 font-bold">#LEG-2026-0891</p>
                    </div>
                  </div>
                </div>

                <div class="mt-6 space-y-5 relative">
                  <div class="absolute left-[1.15rem] top-3 bottom-3 w-0.5 bg-stone-200 -z-0"></div>

                  <div class="relative z-10 flex items-center bg-white p-3 rounded-2xl border border-emerald-100 shadow-sm gap-4">
                    <div class="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
                      <i data-lucide="check" class="w-5 h-5 stroke-[3]"></i>
                    </div>
                    <div>
                      <h5 class="text-sm font-bold text-stone-800">Cek Nama PT</h5>
                      <p class="text-[11px] text-stone-400">Persetujuan di Kemenkumham</p>
                    </div>
                  </div>

                  <div class="relative z-10 flex items-center bg-crimson-50 p-3 rounded-2xl border border-crimson-200 shadow-md ring-2 ring-crimson-500/20 gap-4">
                    <div class="w-10 h-10 rounded-full bg-crimson-700 text-white flex items-center justify-center animate-pulse">
                      <i data-lucide="loader-2" class="w-5 h-5"></i>
                    </div>
                    <div>
                      <h5 class="text-sm font-extrabold text-crimson-800">Akta Notaris</h5>
                      <p class="text-[11px] text-crimson-700 font-semibold">Tanda tangan elektronik</p>
                    </div>
                  </div>

                  <div class="relative z-10 flex items-center bg-stone-50/80 p-3 rounded-2xl border border-dashed border-stone-200 gap-4 opacity-50">
                    <div class="w-10 h-10 rounded-full bg-stone-200 text-stone-400 flex items-center justify-center">
                      <i data-lucide="clock" class="w-5 h-5"></i>
                    </div>
                    <div>
                      <h5 class="text-sm font-bold text-stone-500">Pengesahan AHU</h5>
                      <p class="text-[11px] text-stone-400">Penerbitan SK Menkumham</p>
                    </div>
                  </div>
                </div>
                <div class="absolute bottom-2 left-0 right-0 flex justify-center pb-2">
                  <div class="w-20 h-1.5 bg-stone-800/20 rounded-full"></div>
                </div>
              </div>
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