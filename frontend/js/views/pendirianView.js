/**
 * View: Pendirian Badan Usaha (PT, CV, PT Perorangan, PMA, Yayasan)
 * Matches Reference Design Image 3
 */

export function renderPendirianView() {
  return `
    <div class="flex flex-col w-full bg-[#FAFAFC]">

      <!-- 1. HERO SECTION (2 COLUMNS) -->
      <section class="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-white via-amber-50/20 to-white border-b border-slate-100">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Column (7 Cols) -->
            <div class="lg:col-span-7 space-y-6">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/60 text-gold-700 text-xs font-bold uppercase tracking-wider">
                <i data-lucide="award" class="w-3.5 h-3.5 text-gold-600"></i>
                <span>Layanan Pendirian Badan Usaha Resmi</span>
              </div>

              <h1 class="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-slate-900 leading-[1.12] tracking-tight">
                Dirikan PT, CV, atau PT Perorangan Resmi Cepat &amp; Tanpa Ribet
              </h1>

              <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Kami mengurus seluruh birokrasi pendirian badan usaha yang terintegrasi penuh dengan sistem Administrasi Hukum Umum (AHU) Kemenkumham RI. Proses terverifikasi 100% legal, tanpa antre, dan bisa dipantau dari mana saja.
              </p>

              <!-- Rating & SLA -->
              <div class="space-y-2.5 pt-1">
                <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <div class="flex text-gold-500">
                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  </div>
                  <span class="text-xs sm:text-sm font-bold text-slate-800">4.9/5 (13.000+ Badan Usaha Terdaftar)</span>
                </div>
                <div class="flex items-center gap-2 text-xs font-semibold text-crimson-800 pl-1">
                  <span class="w-2 h-2 rounded-full bg-crimson-700 animate-pulse"></span>
                  <span>SLA Kilat 24–72 Jam Pengerjaan Dokumen</span>
                </div>
              </div>

              <!-- CTA Buttons -->
              <div class="flex flex-wrap items-center gap-4 pt-2">
                <a href="#/konsultasi?layanan=pt-standar" class="inline-flex items-center justify-center px-8 py-3.5 bg-crimson-800 hover:bg-crimson-900 text-white font-bold text-sm rounded-xl shadow-lg shadow-crimson-800/25 transition-all transform hover:-translate-y-0.5">
                  <span>Konsultasi Gratis</span>
                  <i data-lucide="arrow-right" class="w-4 h-4 ml-2"></i>
                </a>
                <button type="button" data-scroll-to="katalog-entitas" class="inline-flex items-center justify-center px-7 py-3.5 bg-white border border-slate-300 hover:border-crimson-800 text-slate-800 hover:text-crimson-800 font-bold text-sm rounded-xl transition-all">
                  Bandingkan Tipe Entitas
                </button>
              </div>

              <!-- Bottom Trust Badges -->
              <div class="pt-5 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-semibold border-t border-slate-100">
                <div class="flex items-center gap-2">
                  <i data-lucide="shield-check" class="w-4 h-4 text-crimson-700"></i>
                  <span>Akta Notaris Tersumpah</span>
                </div>
                <div class="flex items-center gap-2">
                  <i data-lucide="landmark" class="w-4 h-4 text-gold-600"></i>
                  <span>SK Kemenkumham RI</span>
                </div>
                <div class="flex items-center gap-2">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600"></i>
                  <span>OSS RBA Compliant</span>
                </div>
              </div>
            </div>

            <!-- Right Column: Summary Dossier Card (5 Cols) -->
            <div class="lg:col-span-5">
              <div class="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
                <!-- Top Photo with Badge -->
                <div class="relative h-56 bg-slate-900 overflow-hidden">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDBBX4oYEjKj03BduiMzCJfrpECk6CvuiV_Vt7PBvlmxK8gJ1pHR1WqIjoIWV3O67FurU7hyRHf06W8BuL2UA9wl8RSq9sEc7tl8ccqLnN2SDH4vrXy_j0SDjL1BSKL5sQxuHTzUi8b6d2751Ig1wBp1Q38p12_g0OhRCnM00KmIFF7YelcLbnp3VfSJ9j1l_Y-ykHq8evDMzAqw6oPVMn9Ytg_QWErVJ6EcFPOJL7gqE3uAcOWNcuILKPzTQKfE_uRA" 
                    alt="Notaris & Konsultan LEGALTA" 
                    class="w-full h-full object-cover object-top"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                  <div class="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span class="text-[11px] font-bold text-slate-800">Notaris &amp; Konsultan Aktif</span>
                  </div>
                </div>

                <!-- Card Body: Ringkasan Layanan -->
                <div class="p-6 sm:p-7 space-y-5">
                  <div class="flex items-center justify-between">
                    <div>
                      <span class="text-[10px] font-extrabold uppercase tracking-wider text-crimson-700 block">Ringkasan Layanan</span>
                      <h3 class="text-base font-extrabold text-slate-900">Garansi Kelengkapan Berkas</h3>
                    </div>
                    <span class="px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-gold-700 text-[10px] font-extrabold uppercase">All-In-One</span>
                  </div>

                  <div class="space-y-2.5">
                    <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800">
                      <span class="flex items-center gap-2.5">
                        <i data-lucide="file-text" class="w-4 h-4 text-crimson-700"></i>
                        <span>Akta Pendirian Notaris &amp; SK Menkumham</span>
                      </span>
                      <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 shrink-0"></i>
                    </div>
                    <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800">
                      <span class="flex items-center gap-2.5">
                        <i data-lucide="globe" class="w-4 h-4 text-crimson-700"></i>
                        <span>NIB, Sertifikat Standar &amp; Hak Akses OSS</span>
                      </span>
                      <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 shrink-0"></i>
                    </div>
                    <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800">
                      <span class="flex items-center gap-2.5">
                        <i data-lucide="credit-card" class="w-4 h-4 text-crimson-700"></i>
                        <span>NPWP Badan Usaha &amp; SKT Pajak</span>
                      </span>
                      <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 shrink-0"></i>
                    </div>
                    <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800">
                      <span class="flex items-center gap-2.5">
                        <i data-lucide="key-round" class="w-4 h-4 text-crimson-700"></i>
                        <span>Akses Portal Korporasi &amp; E-FIN Pendiri</span>
                      </span>
                      <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 shrink-0"></i>
                    </div>
                  </div>

                  <div class="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/60 flex items-start gap-2.5 text-xs text-slate-700">
                    <i data-lucide="clock" class="w-4 h-4 text-gold-600 shrink-0 mt-0.5"></i>
                    <span>Estimasi penyelesaian dokumen rata-rata <strong class="text-slate-900">3 hari kerja</strong> setelah verifikasi nama PT disetujui.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- 2. KATALOG ENTITAS HUKUM -->
      <section id="katalog-entitas" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          
          <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div class="max-w-xl">
              <span class="text-xs font-bold uppercase tracking-wider text-crimson-800">Katalog Entitas Hukum</span>
              <h2 class="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
                Pilih Bentuk Badan Usaha Sesuai Skala Bisnis
              </h2>
              <p class="text-sm text-slate-500 mt-2">
                Setiap struktur badan hukum memiliki karakteristik perpajakan, tanggung jawab modal, dan fleksibilitas ekspansi yang berbeda.
              </p>
            </div>

            <!-- Filter Tabs -->
            <div class="inline-flex items-center p-1.5 rounded-xl bg-slate-100 border border-slate-200/70 self-start">
              <button type="button" class="entity-filter-btn px-4 py-2 rounded-lg text-xs font-bold bg-crimson-800 text-white shadow-sm transition-all" data-filter="all">Semua</button>
              <button type="button" class="entity-filter-btn px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 transition-all" data-filter="umkm">Populer UMKM</button>
              <button type="button" class="entity-filter-btn px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 transition-all" data-filter="korporasi">Korporasi &amp; Non-Profit</button>
            </div>
          </div>

          <!-- 4 Entity Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <!-- Card 1: PT Perorangan -->
            <div class="entity-card bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between" data-category="umkm">
              <div>
                <div class="flex items-center justify-between mb-5">
                  <div class="w-10 h-10 rounded-xl bg-amber-50 text-gold-600 flex items-center justify-center">
                    <i data-lucide="user" class="w-5 h-5"></i>
                  </div>
                  <span class="px-2.5 py-1 rounded-full bg-amber-50 text-gold-700 text-[11px] font-bold">1–2 Hari Kerja</span>
                </div>
                <h3 class="text-lg font-extrabold text-slate-900">PT Perorangan</h3>
                <p class="text-xs font-semibold text-crimson-700 mt-0.5">Usaha Mikro &amp; Kecil (UMK)</p>
                <p class="text-xs text-slate-500 mt-3 leading-relaxed">
                  Dirancang khusus oleh pemerintah untuk pendiri tunggal dengan pemisahan harta pribadi dan perusahaan secara sah.
                </p>
                <ul class="mt-5 pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
                  <li class="flex items-start gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Cukup 1 Pemegang Saham</span></li>
                  <li class="flex items-start gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Modal Dasar Fleksibel (Bebas Minimum)</span></li>
                  <li class="flex items-start gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Pernyataan pendirian langsung Kemenkumham</span></li>
                </ul>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span class="text-[10px] text-slate-400 block">Mulai dari</span>
                  <span class="text-base font-extrabold text-slate-900">Rp 1,5 Jt</span>
                </div>
                <a href="#/konsultasi?layanan=pt-perorangan" class="w-9 h-9 rounded-lg bg-crimson-800 hover:bg-crimson-900 text-white flex items-center justify-center shadow-sm transition-colors" aria-label="Pilih PT Perorangan">
                  <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
              </div>
            </div>

            <!-- Card 2: PT Standar / Umum -->
            <div class="entity-card bg-white rounded-2xl p-6 border-2 border-crimson-800/30 shadow-md hover:shadow-xl transition-all flex flex-col justify-between" data-category="korporasi">
              <div>
                <div class="flex items-center justify-between mb-5">
                  <div class="w-10 h-10 rounded-xl bg-crimson-50 text-crimson-800 flex items-center justify-center">
                    <i data-lucide="building-2" class="w-5 h-5"></i>
                  </div>
                  <span class="px-2.5 py-1 rounded-full bg-crimson-50 text-crimson-800 text-[11px] font-bold">Standar Korporasi</span>
                </div>
                <h3 class="text-lg font-extrabold text-slate-900">PT Standar / Umum</h3>
                <p class="text-xs font-semibold text-crimson-700 mt-0.5">Lokal PMDN &amp; PMA Asing</p>
                <p class="text-xs text-slate-500 mt-3 leading-relaxed">
                  Entitas badan hukum penuh dengan struktur kepemilikan saham untuk kemitraan B2B, tender besar, dan ekspansi investor.
                </p>
                <ul class="mt-5 pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
                  <li class="flex items-start gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Minimal 2 Pendiri / Pemegang Saham</span></li>
                  <li class="flex items-start gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Akta Notaris &amp; SK Kemenkumham RI</span></li>
                  <li class="flex items-start gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Struktur Direksi &amp; Komisaris Resmi</span></li>
                </ul>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span class="text-[10px] text-slate-400 block">Mulai dari</span>
                  <span class="text-base font-extrabold text-slate-900">Rp 3,9 Jt</span>
                </div>
                <a href="#/konsultasi?layanan=pt-standar" class="w-9 h-9 rounded-lg bg-crimson-800 hover:bg-crimson-900 text-white flex items-center justify-center shadow-sm transition-colors" aria-label="Pilih PT Standar">
                  <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
              </div>
            </div>

            <!-- Card 3: CV (Commanditaire) -->
            <div class="entity-card bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between" data-category="umkm">
              <div>
                <div class="flex items-center justify-between mb-5">
                  <div class="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
                    <i data-lucide="briefcase" class="w-5 h-5"></i>
                  </div>
                  <span class="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold">Tender &amp; Komersial</span>
                </div>
                <h3 class="text-lg font-extrabold text-slate-900">CV (Commanditaire)</h3>
                <p class="text-xs font-semibold text-crimson-700 mt-0.5">Persekutuan Komanditer Bisnis</p>
                <p class="text-xs text-slate-500 mt-3 leading-relaxed">
                  Pilihan tepat bagi kemitraan bisnis keluarga, jasa konsultansi, vendor pengadaan, dan perdagangan dengan administrasi ringan.
                </p>
                <ul class="mt-5 pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
                  <li class="flex items-start gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Sekutu Aktif &amp; Sekutu Pasif</span></li>
                  <li class="flex items-start gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Tanpa ketentuan modal dasar minimal</span></li>
                  <li class="flex items-start gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Proses pendaftaran cepat via AHU Online</span></li>
                </ul>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span class="text-[10px] text-slate-400 block">Mulai dari</span>
                  <span class="text-base font-extrabold text-slate-900">Rp 2,8 Jt</span>
                </div>
                <a href="#/konsultasi?layanan=cv" class="w-9 h-9 rounded-lg bg-crimson-800 hover:bg-crimson-900 text-white flex items-center justify-center shadow-sm transition-colors" aria-label="Pilih CV">
                  <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
              </div>
            </div>

            <!-- Card 4: Yayasan & Koperasi -->
            <div class="entity-card bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between" data-category="korporasi">
              <div>
                <div class="flex items-center justify-between mb-5">
                  <div class="w-10 h-10 rounded-xl bg-amber-50 text-gold-600 flex items-center justify-center">
                    <i data-lucide="heart-handshake" class="w-5 h-5"></i>
                  </div>
                  <span class="px-2.5 py-1 rounded-full bg-amber-50 text-gold-700 text-[11px] font-bold">Sosial &amp; Anggota</span>
                </div>
                <h3 class="text-lg font-extrabold text-slate-900">Yayasan &amp; Koperasi</h3>
                <p class="text-xs font-semibold text-crimson-700 mt-0.5">Organisasi Nirlaba &amp; Kolektif</p>
                <p class="text-xs text-slate-500 mt-3 leading-relaxed">
                  Badan hukum untuk tujuan sosial, kemanusiaan, keagamaan, pendidikan, atau kesejahteraan ekonomi anggota koperasi.
                </p>
                <ul class="mt-5 pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
                  <li class="flex items-start gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Struktur Pembina, Pengurus, Pengawas</span></li>
                  <li class="flex items-start gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Izin operasional kementerian terkait</span></li>
                  <li class="flex items-start gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Optimalisasi perpajakan yayasan sosial</span></li>
                </ul>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span class="text-[10px] text-slate-400 block">Mulai dari</span>
                  <span class="text-base font-extrabold text-slate-900">Rp 4,5 Jt</span>
                </div>
                <a href="#/konsultasi?layanan=pt-standar" class="w-9 h-9 rounded-lg bg-crimson-800 hover:bg-crimson-900 text-white flex items-center justify-center shadow-sm transition-colors" aria-label="Pilih Yayasan">
                  <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      <!-- 3. METODOLOGI OTOMASI HUKUM (ALUR 4 LANGKAH) -->
      <section class="py-20 bg-slate-50 border-y border-slate-200/60">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center max-w-2xl mx-auto mb-14">
            <span class="text-xs font-bold uppercase tracking-wider text-crimson-800">Metodologi Otomasi Hukum</span>
            <h2 class="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
              Alur 4 Langkah Pendirian Usaha LEGALTA
            </h2>
            <p class="text-sm text-slate-500 mt-2">
              Dari validasi nama hingga dokumen siap beroperasi, seluruh tahapan dapat dipantau secara real-time melalui dashboard terpadu.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-5">
                  <span class="w-9 h-9 rounded-full bg-crimson-800 text-white text-xs font-extrabold flex items-center justify-center">01</span>
                  <i data-lucide="search" class="w-4 h-4 text-slate-400"></i>
                </div>
                <h4 class="text-base font-bold text-slate-900">Pengecekan Nama &amp; Klasifikasi KBLI</h4>
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                  Validasi ketersediaan nama PT di database AHU Kemenkumham RI beserta pemetaan kode klasifikasi KBLI 2020 sesuai bidang operasional usaha Anda.
                </p>
              </div>
              <div class="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-crimson-800">
                <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                <span>Estimasi: 1–3 Jam Kerja</span>
              </div>
            </div>

            <div class="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-5">
                  <span class="w-9 h-9 rounded-full bg-crimson-800 text-white text-xs font-extrabold flex items-center justify-center">02</span>
                  <i data-lucide="file-signature" class="w-4 h-4 text-slate-400"></i>
                </div>
                <h4 class="text-base font-bold text-slate-900">Draf Akta &amp; SK Kemenkumham</h4>
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                  Penyusunan draf akta pendirian oleh Notaris Rekanan berwenang, persetujuan klausul para pendiri, dan pengesahan SK Menteri Hukum &amp; HAM.
                </p>
              </div>
              <div class="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-crimson-800">
                <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                <span>Estimasi: 1–2 Hari Kerja</span>
              </div>
            </div>

            <div class="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-5">
                  <span class="w-9 h-9 rounded-full bg-crimson-800 text-white text-xs font-extrabold flex items-center justify-center">03</span>
                  <i data-lucide="shield-check" class="w-4 h-4 text-slate-400"></i>
                </div>
                <h4 class="text-base font-bold text-slate-900">Penerbitan NIB &amp; NPWP Badan</h4>
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                  Integrasi langsung ke sistem OSS RBA (Online Single Submission) untuk penerbitan Nomor Induk Berusaha (NIB), izin PKKPR, dan NPWP Pajak Perusahaan.
                </p>
              </div>
              <div class="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-crimson-800">
                <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                <span>Estimasi: 1 Hari Kerja</span>
              </div>
            </div>

            <div class="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-5">
                  <span class="w-9 h-9 rounded-full bg-crimson-800 text-white text-xs font-extrabold flex items-center justify-center">04</span>
                  <i data-lucide="folder-check" class="w-4 h-4 text-slate-400"></i>
                </div>
                <h4 class="text-base font-bold text-slate-900">Dokumen Siap &amp; Rekening Bisnis</h4>
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                  Penyerahan seluruh bundel legalitas secara digital di Document Vault, pengiriman berkas fisik, serta fasilitasi pembukaan rekening giro bank korporat.
                </p>
              </div>
              <div class="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                <i data-lucide="check-circle" class="w-3.5 h-3.5"></i>
                <span>Siap Beroperasi Penuh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. KOMPARASI PAKET PENDIRIAN TRANSPARAN -->
      <section class="py-20 lg:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center max-w-2xl mx-auto mb-16">
            <span class="text-xs font-bold uppercase tracking-wider text-crimson-800">Transparansi Investasi Legal</span>
            <h2 class="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
              Komparasi Paket Pendirian Transparan
            </h2>
            <p class="text-sm text-slate-500 mt-2">
              Harga all-in tanpa biaya tersembunyi. Termasuk PNBP resmi negara dan jasa notaris rekanan terdaftar.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            <!-- Tier 1: Paket Kilat Pemula -->
            <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Entitas Sederhana</span>
                <h3 class="text-xl font-extrabold text-slate-900 mt-1">Paket Kilat Pemula</h3>
                <p class="text-xs text-slate-500 mt-2">Tepat bagi perintis usaha mikro yang membutuhkan legalitas dasar cepat dan efisien.</p>

                <div class="my-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div class="flex items-baseline gap-1">
                    <span class="text-xs font-bold text-slate-500">Rp</span>
                    <span class="text-3xl font-black text-slate-900">2.499.000</span>
                  </div>
                  <p class="text-[11px] text-slate-400 mt-1">Pembayaran satu kali • Tanpa biaya tersembunyi</p>
                </div>

                <p class="text-xs font-bold text-slate-800 mb-3">Termasuk Fasilitas:</p>
                <ul class="space-y-3 text-xs text-slate-600">
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Pengecekan &amp; Reservasi Nama AHU</span></li>
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Akta Notaris / Sertifikat AHU Resmi</span></li>
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>NPWP Badan Usaha &amp; SKT Dirjen Pajak</span></li>
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>NIB OSS RBA (Standar KBLI Tunggal)</span></li>
                  <li class="flex items-center gap-2.5 text-slate-300"><i data-lucide="x-circle" class="w-4 h-4 shrink-0"></i><span>Virtual Office SCBD 1 Tahun</span></li>
                  <li class="flex items-center gap-2.5 text-slate-300"><i data-lucide="x-circle" class="w-4 h-4 shrink-0"></i><span>Pendaftaran HKI Merek Dagang</span></li>
                </ul>
              </div>

              <a href="#/konsultasi?layanan=pt-perorangan" class="mt-8 w-full py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs text-center transition-colors">
                Pilih Paket Pemula
              </a>
            </div>

            <!-- Tier 2 (Highlighted Center): Paket Lengkap Siap Operasi -->
            <div class="bg-crimson-800 rounded-3xl p-8 shadow-2xl shadow-crimson-900/30 text-white flex flex-col justify-between transform lg:-translate-y-3 relative overflow-hidden border border-crimson-700">
              <div class="absolute -top-16 -right-16 w-48 h-48 bg-gold-400/20 rounded-full blur-2xl pointer-events-none"></div>

              <div>
                <div class="flex items-center justify-between">
                  <span class="text-[11px] font-extrabold uppercase tracking-wider text-gold-400">Paling Banyak Dipilih</span>
                  <span class="px-2.5 py-1 rounded-full bg-gold-500 text-slate-950 text-[10px] font-black uppercase tracking-wider">Most Popular</span>
                </div>
                <h3 class="text-xl font-extrabold text-white mt-2">Paket Lengkap Siap Operasi</h3>
                <p class="text-xs text-white/80 mt-2">Standar terbaik pendirian PT Umum (PMDN) bagi bisnis yang siap mengikuti tender &amp; ekspansi.</p>

                <div class="my-6 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15">
                  <div class="flex items-baseline gap-1">
                    <span class="text-xs font-bold text-gold-400">Rp</span>
                    <span class="text-3xl font-black text-white">4.890.000</span>
                  </div>
                  <p class="text-[11px] text-gold-400 font-semibold mt-1">Termasuk PNBP Kemenkumham Resmi</p>
                </div>

                <p class="text-xs font-bold text-white mb-3">Seluruh Paket Pemula Ditambah:</p>
                <ul class="space-y-3 text-xs text-white/90">
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-gold-400 shrink-0"></i><span>Akta Pendirian Notaris &amp; SK Menkumham Resmi</span></li>
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-gold-400 shrink-0"></i><span>NIB OSS RBA Multi-KBLI (Hingga 5 Bidang Usaha)</span></li>
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-gold-400 shrink-0"></i><span>NPWP Badan Usaha, E-FIN &amp; Akun DJP Online</span></li>
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-gold-400 shrink-0"></i><span>Sertifikat Standar OSS &amp; SPPL Lingkungan</span></li>
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-gold-400 shrink-0"></i><span>Fast-Track Rekening Giro Bank (Mandiri / BCA / BNI)</span></li>
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-gold-400 shrink-0"></i><span>Konsultasi Pajak Perdana 1 Jam Bersama Konsultan Pajak</span></li>
                </ul>
              </div>

              <a href="#/konsultasi?layanan=pt-standar" class="mt-8 w-full py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-slate-950 font-extrabold text-xs text-center shadow-lg transition-all flex items-center justify-center gap-2">
                <span>Mulai Pendirian Sekarang</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
            </div>

            <!-- Tier 3: Paket Eksekutif Enterprise -->
            <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Skala Korporat &amp; Startup</span>
                <h3 class="text-xl font-extrabold text-slate-900 mt-1">Paket Eksekutif Enterprise</h3>
                <p class="text-xs text-slate-500 mt-2">Lengkap dengan Virtual Office prestisius SCBD/Kuningan &amp; proteksi HKI Merek Dagang.</p>

                <div class="my-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div class="flex items-baseline gap-1">
                    <span class="text-xs font-bold text-slate-500">Rp</span>
                    <span class="text-3xl font-black text-slate-900">8.750.000</span>
                  </div>
                  <p class="text-[11px] text-slate-400 mt-1">Fasilitas operasional 1 tahun penuh</p>
                </div>

                <p class="text-xs font-bold text-slate-800 mb-3">Seluruh Paket Lengkap Ditambah:</p>
                <ul class="space-y-3 text-xs text-slate-600">
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Sewa Virtual Office 1 Tahun di Zona Komersial Resmi Jakarta Selatan</span></li>
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Surat Domisili Gedung &amp; Layanan Resepsionis Penanganan Surat</span></li>
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Pendaftaran 1 Merek Dagang HKI ke DJKI Kemenkumham RI</span></li>
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Template Draf Perjanjian Kerja Karyawan (PKWT) &amp; NDA</span></li>
                  <li class="flex items-center gap-2.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 shrink-0"></i><span>Dedicated Corporate Legal Officer Khusus</span></li>
                </ul>
              </div>

              <a href="#/konsultasi?layanan=pt-pma" class="mt-8 w-full py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs text-center transition-colors">
                Pilih Paket Eksekutif
              </a>
            </div>

          </div>

          <!-- 5. KEAMANAN DOKUMEN & DATA BANNER -->
          <div class="mt-14 p-6 sm:p-8 rounded-2xl bg-amber-50/70 border border-amber-200/70 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-crimson-800 text-gold-400 flex items-center justify-center shrink-0 shadow-md">
                <i data-lucide="shield-check" class="w-6 h-6"></i>
              </div>
              <div>
                <span class="text-[10px] font-extrabold uppercase tracking-wider text-crimson-800">Keamanan Dokumen &amp; Data</span>
                <h4 class="text-base font-bold text-slate-900 mt-0.5">Teknologi Enkripsi Data &amp; Tanda Tangan Elektronik Tersumpah</h4>
                <p class="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                  Seluruh berkas digital para Pendiri yang diproses melalui sistem LEGALTA dienkripsi dengan standar keamanan ISO 27001 dan disahkan oleh Notaris Rekanan resmi anggota Ikatan Notaris Indonesia (INI) demi keabsahan pembuktian hukum mutlak.
                </p>
              </div>
            </div>
            <div class="shrink-0 md:text-right border-t md:border-t-0 pt-3 md:pt-0 border-amber-200/60 w-full md:w-auto">
              <span class="text-[10px] uppercase tracking-wider text-slate-500 block">Mitra Notaris Terdaftar</span>
              <span class="text-sm font-black text-crimson-900">PERADI • INI • IPPAT</span>
            </div>
          </div>

        </div>
      </section>

      <!-- 6. FAQ ACCORDION SECTION -->
      <section class="py-20 bg-slate-50 border-t border-slate-200/60">
        <div class="max-w-3xl mx-auto px-6">
          <div class="text-center mb-12">
            <span class="text-xs font-bold uppercase tracking-wider text-crimson-800">Pusat Informasi Regulasi</span>
            <h2 class="font-serif text-3xl font-bold text-slate-900 mt-1">
              Pertanyaan Seputar Pendirian Badan Usaha
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 mt-2">
              Panduan hukum komprehensif untuk memastikan langkah pendirian bisnis Anda tepat sejak awal.
            </p>
          </div>

          <div class="space-y-3.5">
            <div class="faq-item active bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
              <button type="button" class="faq-toggle w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-crimson-800 transition-colors">
                <span>Apa perbedaan mendasar antara PT Perorangan dan PT Biasa (Umum)?</span>
                <i data-lucide="chevron-down" class="faq-icon w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0"></i>
              </button>
              <div class="faq-answer px-6">
                <p class="pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  <strong>PT Perorangan</strong> dikhususkan bagi pelaku Usaha Mikro dan Kecil (UMK) dengan cukup <strong>1 orang pendiri</strong> tanpa memerlukan akta notaris (cukup Pernyataan Pendirian elektronik di AHU). Sedangkan <strong>PT Biasa (Umum/PMDN)</strong> mewajibkan minimal <strong>2 orang pemegang saham</strong>, menggunakan Akta Otentik Notaris, serta cocok untuk kerja sama investor, tender besar, dan skala usaha menengah hingga korporasi.
                </p>
              </div>
            </div>

            <div class="faq-item bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
              <button type="button" class="faq-toggle w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-crimson-800 transition-colors">
                <span>Berapa modal minimal yang disetor untuk mendirikan PT di Indonesia?</span>
                <i data-lucide="chevron-down" class="faq-icon w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0"></i>
              </button>
              <div class="faq-answer px-6">
                <p class="pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  Berdasarkan PP No. 8 Tahun 2021 (turunan UU Cipta Kerja), besaran modal dasar PT ditentukan berdasarkan kesepakatan para pendiri. Namun dalam praktik perbankan dan klasifikasi OSS RBA, untuk PT lokal umumnya disarankan modal ditempatkan/disetor mulai Rp 10 juta – Rp 50 juta (Mikro/Kecil), sedangkan untuk PT PMA (Asing) wajib modal disetor minimal Rp 10 Miliar.
                </p>
              </div>
            </div>

            <div class="faq-item bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
              <button type="button" class="faq-toggle w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-crimson-800 transition-colors">
                <span>Apakah bisa mendirikan PT jika belum memiliki kantor fisik pribadi?</span>
                <i data-lucide="chevron-down" class="faq-icon w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0"></i>
              </button>
              <div class="faq-answer px-6">
                <p class="pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  Sangat bisa! Anda dapat menggunakan layanan <strong>Virtual Office (VO)</strong> resmi milik LEGALTA yang berada di zona komersial/perkantoran (seperti SCBD &amp; Kuningan Jakarta) sehingga patuh terhadap aturan zonasi RDTR/PKKPR tanpa harus menyewa gedung fisik yang mahal.
                </p>
              </div>
            </div>

            <div class="faq-item bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
              <button type="button" class="faq-toggle w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-crimson-800 transition-colors">
                <span>Dokumen apa saja yang harus disiapkan oleh para pendiri?</span>
                <i data-lucide="chevron-down" class="faq-icon w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0"></i>
              </button>
              <div class="faq-answer px-6">
                <p class="pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  Cukup siapkan foto/scan <strong>e-KTP</strong> dan <strong>NPWP Pribadi</strong> seluruh pemegang saham, direksi, dan komisaris, serta 3 alternatif usulan nama PT, komposisi saham, dan bidang usaha (KBLI 2020) yang dipilih.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. BOTTOM CTA BANNER -->
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="crimson-gradient-bg rounded-3xl p-8 sm:p-12 lg:p-14 text-white shadow-2xl relative overflow-hidden">
            <div class="absolute -right-16 -bottom-16 w-80 h-80 bg-gold-500/15 rounded-full blur-3xl pointer-events-none"></div>
            <div class="max-w-2xl space-y-5 relative z-10">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-gold-400 text-xs font-bold">
                <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
                <span>Advokat &amp; Notaris Siap Membantu</span>
              </div>
              <h2 class="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                Siap Memulai Langkah Bisnis dengan Fondasi Hukum Kokoh?
              </h2>
              <p class="text-sm text-white/80 leading-relaxed">
                Hindari sengketa pemegang saham dan penolakan perizinan di kemudian hari. Konsultasikan struktur badan usaha Anda bersama Personal Legal Assistant kami sekarang.
              </p>
              <div class="flex flex-wrap items-center gap-4 pt-2">
                <a href="#/konsultasi?layanan=pt-standar" class="px-7 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg transition-all inline-flex items-center gap-2">
                  <i data-lucide="message-square" class="w-4 h-4"></i>
                  <span>Hubungi Konsultan Legalta</span>
                </a>
                <a href="#/tools/cek-pt" class="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all">
                  Cek Nama PT Gratis
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  `;
}

export function initPendirianLogic() {
  const filterBtns = document.querySelectorAll('.entity-filter-btn');
  const cards = document.querySelectorAll('.entity-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const filter = this.getAttribute('data-filter');

      filterBtns.forEach(b => {
        b.classList.remove('bg-crimson-800', 'text-white', 'shadow-sm', 'font-bold');
        b.classList.add('text-slate-600', 'font-semibold');
      });
      this.classList.add('bg-crimson-800', 'text-white', 'shadow-sm', 'font-bold');
      this.classList.remove('text-slate-600', 'font-semibold');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.classList.remove('hidden');
          card.classList.add('flex');
        } else {
          card.classList.add('hidden');
          card.classList.remove('flex');
        }
      });
    });
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}
