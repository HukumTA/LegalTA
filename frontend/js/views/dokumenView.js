/**
 * View: Dokumen Perusahaan & RUPS (Perubahan Akta, Direksi, Saham, RUPS, Cabang, Kontrak)
 * Gaya disamakan dengan halaman Pendirian, HKI, dan Perizinan.
 */

export function renderDokumenView() {
  return `
    <div class="flex flex-col w-full">

      <!-- 1. HERO SECTION -->
      <section class="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-24 bg-transparent border-b border-slate-200/50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <!-- Kolom Kiri -->
            <div class="lg:col-span-7 space-y-6">
              <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                Ubah Akta dan Urus RUPS, <span class="text-crimson-800">Tanpa Antre</span>
              </h1>

              <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-medium">
                Kami membantu perubahan anggaran dasar, pergantian pengurus, jual beli saham, hingga penyusunan kontrak bisnis untuk perusahaan Anda.
              </p>

              <!-- CTA Buttons -->
              <div class="flex flex-wrap items-center gap-4 pt-4">
                <a href="#/konsultasi?layanan=perubahan-akta" class="inline-flex items-center justify-center px-8 py-4 bg-crimson-800 hover:bg-crimson-900 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  <span>Konsultasi Gratis</span>
                  <i data-lucide="arrow-right" class="w-5 h-5 ml-2"></i>
                </a>
                <button type="button" data-scroll-to="katalog-dokumen" class="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-200 hover:border-crimson-800 text-slate-800 hover:text-crimson-800 font-bold rounded-full transition-all">
                  Lihat Layanan
                </button>
              </div>
            </div>

            <!-- Kolom Kanan: Foto -->
            <div class="lg:col-span-5">
              <div class="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <div class="relative h-80 bg-slate-900 overflow-hidden flex items-center justify-center">
                  <img src="assets/dokumen-hero.jpg" alt="Dokumen Perusahaan" class="w-full h-full object-cover opacity-80" onerror="this.src='https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop';"/>
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- 2. KATALOG LAYANAN -->
      <section id="katalog-dokumen" class="py-20 lg:py-28 bg-slate-50/50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="max-w-2xl mb-14">
            <h2 class="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Pilih Layanan Dokumen Perusahaan
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

            <!-- Perubahan Anggaran Dasar -->
            <div class="bg-white rounded-[2rem] p-8 border-2 border-crimson-800/20 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div>
                <div class="w-14 h-14 rounded-2xl bg-crimson-800 text-white flex items-center justify-center mb-6 shadow-md">
                  <i data-lucide="file-edit" class="w-7 h-7"></i>
                </div>
                <h3 class="text-2xl font-bold text-slate-900">Perubahan Anggaran Dasar</h3>
                <p class="text-sm font-bold text-crimson-800 mt-1">Nama, Alamat, Bidang Usaha &amp; Modal</p>
                <p class="text-sm text-slate-600 mt-4 leading-relaxed">
                  Ubah isi akta perusahaan, seperti nama PT, pindah kota, tambah bidang usaha, atau naikkan modal dasar.
                </p>
                <ul class="mt-6 space-y-3 text-sm font-medium text-slate-700">
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Akta Perubahan</span></li>
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Pengesahan Kementerian</span></li>
                </ul>
              </div>
              <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span class="text-[10px] uppercase font-bold text-slate-400 block">Mulai</span>
                  <span class="text-xl font-black text-slate-900">Rp 4,5 Jt</span>
                </div>
                <a href="#/konsultasi?layanan=perubahan-akta" class="w-12 h-12 rounded-full bg-crimson-800 hover:bg-crimson-900 text-white flex items-center justify-center shadow-md transition-transform hover:scale-105" aria-label="Pilih">
                  <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
              </div>
            </div>

            <!-- Direksi & Komisaris -->
            <div class="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div class="w-14 h-14 rounded-2xl bg-amber-50 text-gold-600 flex items-center justify-center mb-6">
                  <i data-lucide="user-cog" class="w-7 h-7"></i>
                </div>
                <h3 class="text-2xl font-bold text-slate-900">Direksi &amp; Komisaris</h3>
                <p class="text-sm font-bold text-crimson-800 mt-1">Pergantian Pengurus</p>
                <p class="text-sm text-slate-600 mt-4 leading-relaxed">
                  Pengangkatan, pemberhentian, atau pergantian susunan Direksi dan Komisaris perusahaan.
                </p>
                <ul class="mt-6 space-y-3 text-sm font-medium text-slate-700">
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Akta Pergantian Pengurus</span></li>
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Pembaruan Data Perusahaan</span></li>
                </ul>
              </div>
              <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span class="text-[10px] uppercase font-bold text-slate-400 block">Mulai</span>
                  <span class="text-xl font-black text-slate-900">Rp 3,8 Jt</span>
                </div>
                <a href="#/konsultasi?layanan=perubahan-akta" class="w-12 h-12 rounded-full bg-crimson-800 hover:bg-crimson-900 text-white flex items-center justify-center shadow-md transition-transform hover:scale-105" aria-label="Pilih">
                  <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
              </div>
            </div>

            <!-- Jual Beli Saham -->
            <div class="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div class="w-14 h-14 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center mb-6">
                  <i data-lucide="pie-chart" class="w-7 h-7"></i>
                </div>
                <h3 class="text-2xl font-bold text-slate-900">Jual Beli Saham</h3>
                <p class="text-sm font-bold text-crimson-800 mt-1">Pengalihan &amp; Investor Baru</p>
                <p class="text-sm text-slate-600 mt-4 leading-relaxed">
                  Pendampingan pengalihan saham, masuknya investor baru, dan penyusunan akta jual beli saham.
                </p>
                <ul class="mt-6 space-y-3 text-sm font-medium text-slate-700">
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Akta Jual Beli Saham</span></li>
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Daftar Pemegang Saham Baru</span></li>
                </ul>
              </div>
              <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span class="text-[10px] uppercase font-bold text-slate-400 block">Mulai</span>
                  <span class="text-xl font-black text-slate-900">Rp 5 Jt</span>
                </div>
                <a href="#/konsultasi?layanan=perubahan-akta" class="w-12 h-12 rounded-full bg-crimson-800 hover:bg-crimson-900 text-white flex items-center justify-center shadow-md transition-transform hover:scale-105" aria-label="Pilih">
                  <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
              </div>
            </div>

            <!-- RUPS -->
            <div class="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div class="w-14 h-14 rounded-2xl bg-amber-50 text-gold-600 flex items-center justify-center mb-6">
                  <i data-lucide="users" class="w-7 h-7"></i>
                </div>
                <h3 class="text-2xl font-bold text-slate-900">Akta RUPS</h3>
                <p class="text-sm font-bold text-crimson-800 mt-1">Rapat Pemegang Saham</p>
                <p class="text-sm text-slate-600 mt-4 leading-relaxed">
                  Notaris hadir di rapat pemegang saham, langsung maupun online, dan mencatat hasilnya dalam akta resmi.
                </p>
                <ul class="mt-6 space-y-3 text-sm font-medium text-slate-700">
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Pemeriksaan Kehadiran &amp; Suara</span></li>
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Berita Acara Rapat</span></li>
                </ul>
              </div>
              <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span class="text-[10px] uppercase font-bold text-slate-400 block">Mulai</span>
                  <span class="text-xl font-black text-slate-900">Rp 4,2 Jt</span>
                </div>
                <a href="#/konsultasi?layanan=perubahan-akta" class="w-12 h-12 rounded-full bg-crimson-800 hover:bg-crimson-900 text-white flex items-center justify-center shadow-md transition-transform hover:scale-105" aria-label="Pilih">
                  <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
              </div>
            </div>

            <!-- Kantor Cabang -->
            <div class="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div class="w-14 h-14 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center mb-6">
                  <i data-lucide="git-branch" class="w-7 h-7"></i>
                </div>
                <h3 class="text-2xl font-bold text-slate-900">Kantor Cabang</h3>
                <p class="text-sm font-bold text-crimson-800 mt-1">Ekspansi ke Kota Lain</p>
                <p class="text-sm text-slate-600 mt-4 leading-relaxed">
                  Pembuatan akta pembukaan kantor cabang dan surat kuasa untuk kepala cabang.
                </p>
                <ul class="mt-6 space-y-3 text-sm font-medium text-slate-700">
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Akta Pembukaan Cabang</span></li>
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Pengangkatan Kepala Cabang</span></li>
                </ul>
              </div>
              <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span class="text-[10px] uppercase font-bold text-slate-400 block">Mulai</span>
                  <span class="text-xl font-black text-slate-900">Rp 3,5 Jt</span>
                </div>
                <a href="#/konsultasi?layanan=perubahan-akta" class="w-12 h-12 rounded-full bg-crimson-800 hover:bg-crimson-900 text-white flex items-center justify-center shadow-md transition-transform hover:scale-105" aria-label="Pilih">
                  <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
              </div>
            </div>

            <!-- Kontrak -->
            <div class="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div class="w-14 h-14 rounded-2xl bg-amber-50 text-gold-600 flex items-center justify-center mb-6">
                  <i data-lucide="scroll-text" class="w-7 h-7"></i>
                </div>
                <h3 class="text-2xl font-bold text-slate-900">Kontrak Bisnis</h3>
                <p class="text-sm font-bold text-crimson-800 mt-1">Penyusunan &amp; Peninjauan</p>
                <p class="text-sm text-slate-600 mt-4 leading-relaxed">
                  Penyusunan dan peninjauan perjanjian pemegang saham, kerja sama, kerahasiaan, dan peraturan perusahaan.
                </p>
                <ul class="mt-6 space-y-3 text-sm font-medium text-slate-700">
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Bahasa Indonesia &amp; Bilingual</span></li>
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Klausul Sengketa &amp; Wanprestasi</span></li>
                </ul>
              </div>
              <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span class="text-[10px] uppercase font-bold text-slate-400 block">Mulai</span>
                  <span class="text-xl font-black text-slate-900">Rp 2,5 Jt</span>
                </div>
                <a href="#/konsultasi?layanan=perubahan-akta" class="w-12 h-12 rounded-full bg-crimson-800 hover:bg-crimson-900 text-white flex items-center justify-center shadow-md transition-transform hover:scale-105" aria-label="Pilih">
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
              Alur 4 Langkah Perubahan Dokumen
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-xl transition-all">
              <span class="absolute -top-6 -right-6 text-9xl font-black text-slate-200/50 group-hover:text-crimson-100 transition-colors pointer-events-none">1</span>
              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-crimson-800 text-white flex items-center justify-center mb-6 shadow-md">
                  <i data-lucide="search" class="w-8 h-8"></i>
                </div>
                <h4 class="text-xl font-bold text-slate-900 mb-3">Konsultasi &amp; Telaah</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Kami pelajari akta perusahaan Anda dan tentukan perubahan yang dibutuhkan.
                </p>
              </div>
            </div>

            <div class="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-xl transition-all">
              <span class="absolute -top-6 -right-6 text-9xl font-black text-slate-200/50 group-hover:text-crimson-100 transition-colors pointer-events-none">2</span>
              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-crimson-800 text-white flex items-center justify-center mb-6 shadow-md">
                  <i data-lucide="file-signature" class="w-8 h-8"></i>
                </div>
                <h4 class="text-xl font-bold text-slate-900 mb-3">Penyusunan Draf</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Notaris rekanan menyusun draf akta dan keputusan pemegang saham.
                </p>
              </div>
            </div>

            <div class="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-xl transition-all">
              <span class="absolute -top-6 -right-6 text-9xl font-black text-slate-200/50 group-hover:text-crimson-100 transition-colors pointer-events-none">3</span>
              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-crimson-800 text-white flex items-center justify-center mb-6 shadow-md">
                  <i data-lucide="shield-check" class="w-8 h-8"></i>
                </div>
                <h4 class="text-xl font-bold text-slate-900 mb-3">Penandatanganan</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Akta ditandatangani, lalu kami urus pengesahan atau pelaporannya ke Kementerian.
                </p>
              </div>
            </div>

            <div class="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-xl transition-all">
              <span class="absolute -top-6 -right-6 text-9xl font-black text-slate-200/50 group-hover:text-crimson-100 transition-colors pointer-events-none">4</span>
              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-md">
                  <i data-lucide="folder-check" class="w-8 h-8"></i>
                </div>
                <h4 class="text-xl font-bold text-slate-900 mb-3">Dokumen Selesai</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Akta dan surat pengesahan diserahkan dalam bentuk fisik dan digital.
                </p>
              </div>
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