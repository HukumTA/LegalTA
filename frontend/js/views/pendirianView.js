/**
 * View: Pendirian Badan Usaha (PT, CV, PT Perorangan, PMA, Yayasan)
 */

export function renderPendirianView() {
  return `
    <div class="flex flex-col w-full">

      <!-- 1. HERO SECTION -->
      <section class="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-24 bg-transparent border-b border-slate-200/50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Kolom Kiri -->
            <div class="lg:col-span-7 space-y-6">
              <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                Dirikan PT, CV, atau PT Perorangan, <span class="text-crimson-800">Cepat & Tanpa Ribet</span>
              </h1>

              <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-medium">
                Kami mengurus seluruh birokrasi pendirian badan usaha yang terintegrasi penuh dengan sistem AHU Kemenkumham RI. Verifikasi 100% legal, tanpa antre, dipantau langsung dari HP Anda.
              </p>

              <!-- CTA Buttons -->
              <div class="flex flex-wrap items-center gap-4 pt-4">
                <a href="#/konsultasi?layanan=pt-standar" class="inline-flex items-center justify-center px-8 py-4 bg-crimson-800 hover:bg-crimson-900 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  <span>Konsultasi Gratis</span>
                  <i data-lucide="arrow-right" class="w-5 h-5 ml-2"></i>
                </a>
                <button type="button" data-scroll-to="katalog-entitas" class="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-200 hover:border-crimson-800 text-slate-800 hover:text-crimson-800 font-bold rounded-full transition-all">
                  Pilih Bentuk Usaha
                </button>
              </div>
            </div>

            <!-- Kolom Kanan: Foto -->
            <div class="lg:col-span-5">
              <div class="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <div class="relative h-80 bg-slate-900 overflow-hidden flex items-center justify-center">
                 <img src="assets/pendirian-hero.jpg" alt="Proses Verifikasi" class="w-full h-full object-cover opacity-80" onerror="this.src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop';"/>
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- 2. KATALOG ENTITAS HUKUM -->
      <section id="katalog-entitas" class="py-20 lg:py-28 bg-slate-50/50">
        <div class="max-w-7xl mx-auto px-6">
          
          <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div class="max-w-2xl">
              <h2 class="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Pilih Bentuk Badan Usaha Sesuai Skala Bisnis
              </h2>
            </div>

            <!-- Filter Tabs -->
            <div class="inline-flex items-center p-2 rounded-full bg-white border border-slate-200 shadow-sm self-start lg:self-end">
              <button type="button" class="entity-filter-btn px-6 py-2.5 rounded-full text-sm font-bold bg-crimson-800 text-white shadow-md transition-all" data-filter="all">Semua</button>
              <button type="button" class="entity-filter-btn px-6 py-2.5 rounded-full text-sm font-bold text-slate-600 hover:text-slate-900 transition-all" data-filter="umkm">Populer UMKM</button>
              <button type="button" class="entity-filter-btn px-6 py-2.5 rounded-full text-sm font-bold text-slate-600 hover:text-slate-900 transition-all" data-filter="korporasi">Korporasi</button>
            </div>
          </div>

          <!-- 4 Entity Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            <!-- PT Perorangan -->
            <div class="entity-card bg-white rounded-[2rem] p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between" data-category="umkm">
              <div>
                <div class="w-14 h-14 rounded-2xl bg-amber-50 text-gold-600 flex items-center justify-center mb-6">
                  <i data-lucide="user" class="w-7 h-7"></i>
                </div>
                <h3 class="text-2xl font-bold text-slate-900">PT Perorangan</h3>
                <p class="text-sm font-bold text-crimson-800 mt-1">Usaha Mikro &amp; Kecil</p>
                <p class="text-sm text-slate-600 mt-4 leading-relaxed">
                  Dirancang khusus untuk pendiri tunggal dengan pemisahan harta pribadi dan perusahaan secara sah.
                </p>
                <ul class="mt-6 space-y-3 text-sm font-medium text-slate-700">
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Cukup 1 Pemegang Saham</span></li>
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Bebas Tentukan Modal</span></li>
                </ul>
              </div>
              <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span class="text-[10px] uppercase font-bold text-slate-400 block">Mulai</span>
                  <span class="text-xl font-black text-slate-900">Rp 1,5 Jt</span>
                </div>
                <a href="#/konsultasi?layanan=pt-perorangan" class="w-12 h-12 rounded-full bg-crimson-800 hover:bg-crimson-900 text-white flex items-center justify-center shadow-md transition-transform hover:scale-105" aria-label="Pilih">
                  <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
              </div>
            </div>

            <!-- PT Standar -->
            <div class="entity-card bg-white rounded-[2rem] p-8 border-2 border-crimson-800/20 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col justify-between relative overflow-hidden" data-category="korporasi">
              <div class="absolute top-0 right-0 w-32 h-32 bg-crimson-100 opacity-50 blur-2xl rounded-full"></div>
              <div class="relative z-10">
                <div class="w-14 h-14 rounded-2xl bg-crimson-800 text-white flex items-center justify-center mb-6 shadow-md">
                  <i data-lucide="building-2" class="w-7 h-7"></i>
                </div>
                <h3 class="text-2xl font-bold text-slate-900">PT Standar / Umum</h3>
                <p class="text-sm font-bold text-crimson-800 mt-1">Lokal PMDN &amp; PMA</p>
                <p class="text-sm text-slate-600 mt-4 leading-relaxed">
                  Entitas badan hukum penuh dengan struktur saham untuk kemitraan B2B, tender, dan investor.
                </p>
                <ul class="mt-6 space-y-3 text-sm font-medium text-slate-700">
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Min. 2 Pemegang Saham</span></li>
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Akta Notaris &amp; SK Kemenkumham</span></li>
                </ul>
              </div>
              <div class="relative z-10 mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span class="text-[10px] uppercase font-bold text-slate-400 block">Mulai</span>
                  <span class="text-xl font-black text-slate-900">Rp 3,9 Jt</span>
                </div>
                <a href="#/konsultasi?layanan=pt-standar" class="w-12 h-12 rounded-full bg-crimson-800 hover:bg-crimson-900 text-white flex items-center justify-center shadow-md transition-transform hover:scale-105" aria-label="Pilih">
                  <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
              </div>
            </div>

            <!-- CV -->
            <div class="entity-card bg-white rounded-[2rem] p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between" data-category="umkm">
              <div>
                <div class="w-14 h-14 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center mb-6">
                  <i data-lucide="briefcase" class="w-7 h-7"></i>
                </div>
                <h3 class="text-2xl font-bold text-slate-900">CV (Commanditaire)</h3>
                <p class="text-sm font-bold text-crimson-800 mt-1">Persekutuan Komanditer</p>
                <p class="text-sm text-slate-600 mt-4 leading-relaxed">
                  Pilihan tepat bagi kemitraan bisnis keluarga, vendor pengadaan, dan perdagangan dengan administrasi ringan.
                </p>
                <ul class="mt-6 space-y-3 text-sm font-medium text-slate-700">
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Sekutu Aktif &amp; Pasif</span></li>
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Tanpa Ketentuan Modal</span></li>
                </ul>
              </div>
              <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span class="text-[10px] uppercase font-bold text-slate-400 block">Mulai</span>
                  <span class="text-xl font-black text-slate-900">Rp 2,8 Jt</span>
                </div>
                <a href="#/konsultasi?layanan=cv" class="w-12 h-12 rounded-full bg-crimson-800 hover:bg-crimson-900 text-white flex items-center justify-center shadow-md transition-transform hover:scale-105" aria-label="Pilih">
                  <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
              </div>
            </div>

            <!-- Yayasan -->
            <div class="entity-card bg-white rounded-[2rem] p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between" data-category="korporasi">
              <div>
                <div class="w-14 h-14 rounded-2xl bg-amber-50 text-gold-600 flex items-center justify-center mb-6">
                  <i data-lucide="heart-handshake" class="w-7 h-7"></i>
                </div>
                <h3 class="text-2xl font-bold text-slate-900">Yayasan &amp; Koperasi</h3>
                <p class="text-sm font-bold text-crimson-800 mt-1">Organisasi Nirlaba</p>
                <p class="text-sm text-slate-600 mt-4 leading-relaxed">
                  Badan hukum untuk tujuan sosial, kemanusiaan, pendidikan, atau kesejahteraan ekonomi kolektif.
                </p>
                <ul class="mt-6 space-y-3 text-sm font-medium text-slate-700">
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Pembina, Pengurus, Pengawas</span></li>
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Izin Operasional Khusus</span></li>
                </ul>
              </div>
              <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span class="text-[10px] uppercase font-bold text-slate-400 block">Mulai</span>
                  <span class="text-xl font-black text-slate-900">Rp 4,5 Jt</span>
                </div>
                <a href="#/konsultasi?layanan=yayasan" class="w-12 h-12 rounded-full bg-crimson-800 hover:bg-crimson-900 text-white flex items-center justify-center shadow-md transition-transform hover:scale-105" aria-label="Pilih">
                  <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- 3. ALUR 4 LANGKAH -->
      <section class="py-20 lg:py-28 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Alur 4 Langkah Pendirian Usaha
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-xl transition-all">
              <span class="absolute -top-6 -right-6 text-9xl font-black text-slate-200/50 group-hover:text-crimson-100 transition-colors pointer-events-none">1</span>
              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-crimson-800 text-white flex items-center justify-center mb-6 shadow-md">
                  <i data-lucide="search" class="w-8 h-8"></i>
                </div>
                <h4 class="text-xl font-bold text-slate-900 mb-3">Pengecekan Nama Usaha</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Kami cek ketersediaan nama usaha Anda dan tentukan bidang usaha yang sesuai.
                </p>
              </div>
            </div>

            <div class="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-xl transition-all">
              <span class="absolute -top-6 -right-6 text-9xl font-black text-slate-200/50 group-hover:text-crimson-100 transition-colors pointer-events-none">2</span>
              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-crimson-800 text-white flex items-center justify-center mb-6 shadow-md">
                  <i data-lucide="file-signature" class="w-8 h-8"></i>
                </div>
                <h4 class="text-xl font-bold text-slate-900 mb-3">Penyusunan Akta</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Notaris rekanan menyusun akta dan mengurus pengesahan dari Kementerian.
                </p>
              </div>
            </div>

            <div class="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-xl transition-all">
              <span class="absolute -top-6 -right-6 text-9xl font-black text-slate-200/50 group-hover:text-crimson-100 transition-colors pointer-events-none">3</span>
              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-crimson-800 text-white flex items-center justify-center mb-6 shadow-md">
                  <i data-lucide="shield-check" class="w-8 h-8"></i>
                </div>
                <h4 class="text-xl font-bold text-slate-900 mb-3">Perizinan &amp; NPWP</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Kami urus NIB, perizinan usaha, dan NPWP badan Anda.
                </p>
              </div>
            </div>

            <div class="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-xl transition-all">
              <span class="absolute -top-6 -right-6 text-9xl font-black text-slate-200/50 group-hover:text-crimson-100 transition-colors pointer-events-none">4</span>
              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-md">
                  <i data-lucide="folder-check" class="w-8 h-8"></i>
                </div>
                <h4 class="text-xl font-bold text-slate-900 mb-3">Dokumen Siap Beroperasi</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Dokumen legalitas fisik dan digital diserahkan, siap dipakai untuk buka rekening bank dan mulai usaha.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. PAKET PENDIRIAN -->
      <section class="py-20 lg:py-28 bg-slate-50/50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Gunakan Paket Pendirian
            </h2>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            <!-- Tier 1: Paket Kilat Pemula -->
            <div class="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-md flex flex-col justify-between">
              <div>
                <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Entitas Sederhana</span>
                <h3 class="text-2xl font-extrabold text-slate-900 mt-1 mb-2">Paket Kilat Pemula</h3>
                
                <div class="my-6">
                  <div class="flex items-baseline gap-1">
                    <span class="text-sm font-bold text-slate-500">Rp</span>
                    <span class="text-4xl font-black text-slate-900">2.499.000</span>
                  </div>
                  <p class="text-xs font-bold text-emerald-600 mt-2">Tanpa biaya tersembunyi</p>
                </div>

                <ul class="space-y-4 text-sm font-medium text-slate-700">
                  <li class="flex items-center gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Cek &amp; Reservasi Nama AHU</span></li>
                  <li class="flex items-center gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Akta Notaris &amp; SK Kemenkumham</span></li>
                  <li class="flex items-center gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>NPWP Badan &amp; SKT Pajak</span></li>
                  <li class="flex items-center gap-3 text-slate-300"><i data-lucide="x" class="w-5 h-5 shrink-0"></i><span>Layanan Virtual Office</span></li>
                </ul>
              </div>
              <a href="#/konsultasi" class="mt-10 w-full py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-sm text-center transition-colors">
                Pilih Paket Pemula
              </a>
            </div>

            <!-- Tier 2 (Highlighted): Paket Lengkap -->
            <div class="rounded-[2.5rem] p-10 text-white flex flex-col justify-between shadow-2xl shadow-crimson-900/40 relative overflow-hidden group transform lg:-translate-y-4" style="background: linear-gradient(160deg, #8F1A1C 0%, #5A0D0F 100%); border: 1px solid rgba(201,162,77,0.3);">
              <div class="absolute top-0 right-0 w-64 h-64 bg-[#E8C26A] opacity-20 blur-[80px] pointer-events-none"></div>

              <div class="relative z-10">
                <div class="flex items-center justify-between mb-4">
                  <span class="text-[11px] font-extrabold uppercase tracking-wider text-gold-400">Paling Populer</span>
                  <span class="px-3 py-1 rounded-full bg-gold-500 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-sm">Rekomendasi</span>
                </div>
                <h3 class="text-3xl font-extrabold text-white mt-1 mb-2">Paket Lengkap Siap Operasi</h3>
                
                <div class="my-6 p-5 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/15">
                  <div class="flex items-baseline gap-1">
                    <span class="text-sm font-bold text-gold-400">Rp</span>
                    <span class="text-4xl font-black text-white">4.890.000</span>
                  </div>
                  <p class="text-xs font-bold text-gold-400 mt-2">Termasuk PNBP Kemenkumham Resmi</p>
                </div>

                <ul class="space-y-4 text-sm font-medium text-white/90">
                  <li class="flex items-center gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-gold-400 shrink-0"></i><span>Seluruh Fasilitas Paket Pemula</span></li>
                  <li class="flex items-center gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-gold-400 shrink-0"></i><span>NIB OSS RBA Multi-KBLI</span></li>
                  <li class="flex items-center gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-gold-400 shrink-0"></i><span>Sertifikat Standar OSS &amp; SPPL</span></li>
                  <li class="flex items-center gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-gold-400 shrink-0"></i><span>Fast-Track Rekening Giro Bank</span></li>
                </ul>
              </div>

              <a href="#/konsultasi" class="relative z-10 mt-10 w-full py-4 rounded-full bg-gold-500 hover:bg-gold-400 text-[#5A0D0F] font-extrabold text-sm text-center shadow-xl transition-all flex items-center justify-center gap-2">
                <span>Pilih Paket Lengkap</span>
                <i data-lucide="arrow-right" class="w-5 h-5"></i>
              </a>
            </div>

            <!-- Tier 3: Paket Enterprise -->
            <div class="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-md flex flex-col justify-between">
              <div>
                <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Skala Korporat Khusus</span>
                <h3 class="text-2xl font-extrabold text-slate-900 mt-1 mb-2">Paket Enterprise</h3>
                
                <div class="my-6">
                  <div class="flex items-baseline gap-1">
                    <span class="text-sm font-bold text-slate-500">Rp</span>
                    <span class="text-4xl font-black text-slate-900">8.750.000</span>
                  </div>
                  <p class="text-xs font-bold text-emerald-600 mt-2">Dengan fasilitas operasional premium</p>
                </div>

                <ul class="space-y-4 text-sm font-medium text-slate-700">
                  <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Seluruh Fasilitas Paket Lengkap</span></li>
                  <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Layanan Virtual Office 1 Tahun (Kawasan Bisnis Strategis)</span></li>
                  <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Pendaftaran 1 Merek Dagang HKI</span></li>
                  <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Dedicated Corporate Legal Officer</span></li>
                </ul>
              </div>
              <a href="#/konsultasi" class="mt-10 w-full py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm text-center transition-colors">
                Pilih Paket Enterprise
              </a>
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
        b.classList.remove('bg-crimson-800', 'text-white', 'shadow-md');
        b.classList.add('text-slate-600', 'bg-transparent');
      });
      this.classList.add('bg-crimson-800', 'text-white', 'shadow-md');
      this.classList.remove('text-slate-600', 'bg-transparent');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}