/**
 * View: Pendaftaran HKI (Merek, Hak Cipta, Desain Industri, Paten)
 * Gaya disamakan dengan halaman Pendirian.
 */

import { navigateTo } from '../app.js';

export function renderHkiView() {
  return `
    <div class="flex flex-col w-full">

      <!-- 1. HERO SECTION -->
      <section class="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-24 bg-transparent border-b border-slate-200/50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <!-- Kolom Kiri -->
            <div class="lg:col-span-7 space-y-6">
              <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                Daftarkan Merek, Hak Cipta, dan Paten, <span class="text-crimson-800">Aman & Terarah</span>
              </h1>

              <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-medium">
                Kami mengurus pendaftaran kekayaan intelektual bisnis Anda ke DJKI, mulai dari pengecekan kemiripan hingga sertifikat terbit, didampingi konsultan HKI.
              </p>

              <!-- CTA Buttons -->
              <div class="flex flex-wrap items-center gap-4 pt-4">
                <a href="#/konsultasi?layanan=merek" class="inline-flex items-center justify-center px-8 py-4 bg-crimson-800 hover:bg-crimson-900 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  <span>Konsultasi Gratis</span>
                  <i data-lucide="arrow-right" class="w-5 h-5 ml-2"></i>
                </a>
                <button type="button" data-scroll-to="hki-quick-check" class="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-200 hover:border-crimson-800 text-slate-800 hover:text-crimson-800 font-bold rounded-full transition-all">
                  Cek Kemiripan Merek
                </button>
              </div>
            </div>

            <!-- Kolom Kanan: Foto -->
            <div class="lg:col-span-5">
              <div class="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <div class="relative h-80 bg-slate-900 overflow-hidden flex items-center justify-center">
                  <img src="assets/hki-hero.jpg" alt="Pendaftaran HKI" class="w-full h-full object-cover opacity-80" onerror="this.src='https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop';"/>
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- 2. CEK KEMIRIPAN MEREK -->
      <section id="hki-quick-check" class="py-20 lg:py-28 bg-slate-50/50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-slate-200 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div class="lg:col-span-4 space-y-3">
              <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Cek Kemiripan Merek
              </h2>
              <p class="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                Periksa dulu apakah nama merek Anda berpotensi ditolak sebelum mendaftar.
              </p>
            </div>

            <div class="lg:col-span-8">
              <form id="hkiQuickSearchForm" class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  <div class="sm:col-span-5">
                    <label class="block text-xs font-bold text-slate-700 mb-1.5">Nama Merek</label>
                    <input type="text" id="hkiQuickBrandInput" placeholder="Contoh: Kopi Nusantara" required class="w-full px-5 py-3.5 rounded-full bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-crimson-800" />
                  </div>
                  <div class="sm:col-span-7">
                    <label class="block text-xs font-bold text-slate-700 mb-1.5">Kategori Kelas</label>
                    <select id="hkiQuickClassSelect" style="font-size:15px;" class="w-full px-5 py-3.5 rounded-full bg-slate-50 border border-slate-200 text-slate-900 outline-none cursor-pointer focus:border-crimson-800">
                      <option value="42" style="font-size:16px; padding:8px;">Kelas 42 — Teknologi &amp; Software</option>
                      <option value="35" style="font-size:16px; padding:8px;">Kelas 35 — Retail &amp; Bisnis</option>
                      <option value="43" style="font-size:16px; padding:8px;">Kelas 43 — Kafe, Restoran &amp; F&amp;B</option>
                      <option value="30" style="font-size:16px; padding:8px;">Kelas 30 — Kopi, Teh &amp; Pangan</option>
                      <option value="25" style="font-size:16px; padding:8px;">Kelas 25 — Fashion &amp; Pakaian</option>
                      <option value="3" style="font-size:16px; padding:8px;">Kelas 3 — Kosmetik &amp; Skincare</option>
                    </select>
                  </div>
                </div>
                <button type="submit" class="inline-flex items-center justify-center px-8 py-4 bg-crimson-800 hover:bg-crimson-900 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  <span>Cek Sekarang</span>
                  <i data-lucide="arrow-right" class="w-5 h-5 ml-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. LAYANAN HKI -->
      <section class="py-20 lg:py-28 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="max-w-2xl mb-14">
            <h2 class="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Pilih Jenis Perlindungan HKI
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

            <!-- Merek -->
            <div class="bg-white rounded-[2rem] p-8 border-2 border-crimson-800/20 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div>
                <div class="w-14 h-14 rounded-2xl bg-crimson-800 text-white flex items-center justify-center mb-6 shadow-md">
                  <i data-lucide="badge-check" class="w-7 h-7"></i>
                </div>
                <h3 class="text-2xl font-bold text-slate-900">Merek</h3>
                <p class="text-sm font-bold text-crimson-800 mt-1">Nama, Logo &amp; Slogan</p>
                <p class="text-sm text-slate-600 mt-4 leading-relaxed">
                  Melindungi nama brand, logo, dan slogan bisnis Anda agar tidak dipakai atau didaftarkan pihak lain.
                </p>
                <ul class="mt-6 space-y-3 text-sm font-medium text-slate-700">
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Pengecekan Kemiripan</span></li>
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Berlaku 10 Tahun</span></li>
                </ul>
              </div>
              <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span class="text-[10px] uppercase font-bold text-slate-400 block">Mulai / kelas</span>
                  <span class="text-xl font-black text-slate-900">Rp 1,95 Jt</span>
                </div>
                <a href="#/konsultasi?layanan=merek" class="w-12 h-12 rounded-full bg-crimson-800 hover:bg-crimson-900 text-white flex items-center justify-center shadow-md transition-transform hover:scale-105" aria-label="Pilih">
                  <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
              </div>
            </div>

            <!-- Hak Cipta -->
            <div class="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div class="w-14 h-14 rounded-2xl bg-amber-50 text-gold-600 flex items-center justify-center mb-6">
                  <i data-lucide="copyright" class="w-7 h-7"></i>
                </div>
                <h3 class="text-2xl font-bold text-slate-900">Hak Cipta</h3>
                <p class="text-sm font-bold text-crimson-800 mt-1">Karya &amp; Konten</p>
                <p class="text-sm text-slate-600 mt-4 leading-relaxed">
                  Pencatatan resmi untuk aplikasi, buku, foto, desain grafis, musik, dan karya kreatif lainnya.
                </p>
                <ul class="mt-6 space-y-3 text-sm font-medium text-slate-700">
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Surat Pencatatan Ciptaan</span></li>
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Pencipta + 70 Tahun</span></li>
                </ul>
              </div>
              <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span class="text-[10px] uppercase font-bold text-slate-400 block">Mulai</span>
                  <span class="text-xl font-black text-slate-900">Rp 1,25 Jt</span>
                </div>
                <a href="#/konsultasi?layanan=merek" class="w-12 h-12 rounded-full bg-crimson-800 hover:bg-crimson-900 text-white flex items-center justify-center shadow-md transition-transform hover:scale-105" aria-label="Pilih">
                  <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
              </div>
            </div>

            <!-- Desain Industri -->
            <div class="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div class="w-14 h-14 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center mb-6">
                  <i data-lucide="layers" class="w-7 h-7"></i>
                </div>
                <h3 class="text-2xl font-bold text-slate-900">Desain Industri</h3>
                <p class="text-sm font-bold text-crimson-800 mt-1">Bentuk &amp; Tampilan Produk</p>
                <p class="text-sm text-slate-600 mt-4 leading-relaxed">
                  Melindungi bentuk, pola, atau warna produk seperti kemasan, perhiasan, dan peralatan.
                </p>
                <ul class="mt-6 space-y-3 text-sm font-medium text-slate-700">
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Pengecekan Kebaruan</span></li>
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Berlaku 10 Tahun</span></li>
                </ul>
              </div>
              <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span class="text-[10px] uppercase font-bold text-slate-400 block">Harga</span>
                  <span class="text-xl font-black text-slate-900">Konsultasi</span>
                </div>
                <a href="#/konsultasi?layanan=merek" class="w-12 h-12 rounded-full bg-crimson-800 hover:bg-crimson-900 text-white flex items-center justify-center shadow-md transition-transform hover:scale-105" aria-label="Pilih">
                  <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
              </div>
            </div>

            <!-- Paten -->
            <div class="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div class="w-14 h-14 rounded-2xl bg-amber-50 text-gold-600 flex items-center justify-center mb-6">
                  <i data-lucide="cpu" class="w-7 h-7"></i>
                </div>
                <h3 class="text-2xl font-bold text-slate-900">Paten</h3>
                <p class="text-sm font-bold text-crimson-800 mt-1">Penemuan &amp; Teknologi</p>
                <p class="text-sm text-slate-600 mt-4 leading-relaxed">
                  Melindungi penemuan baru di bidang alat, mesin, formula, atau metode produksi.
                </p>
                <ul class="mt-6 space-y-3 text-sm font-medium text-slate-700">
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Penyusunan Klaim &amp; Abstrak</span></li>
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Paten 20 Tahun, Sederhana 10 Tahun</span></li>
                </ul>
              </div>
              <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span class="text-[10px] uppercase font-bold text-slate-400 block">Harga</span>
                  <span class="text-xl font-black text-slate-900">Konsultasi</span>
                </div>
                <a href="#/konsultasi?layanan=merek" class="w-12 h-12 rounded-full bg-crimson-800 hover:bg-crimson-900 text-white flex items-center justify-center shadow-md transition-transform hover:scale-105" aria-label="Pilih">
                  <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- 4. ALUR 4 LANGKAH -->
      <section class="py-20 lg:py-28 bg-slate-50/50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Alur 4 Langkah Pendaftaran Merek
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-xl transition-all">
              <span class="absolute -top-6 -right-6 text-9xl font-black text-slate-200/50 group-hover:text-crimson-100 transition-colors pointer-events-none">1</span>
              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-crimson-800 text-white flex items-center justify-center mb-6 shadow-md">
                  <i data-lucide="search" class="w-8 h-8"></i>
                </div>
                <h4 class="text-xl font-bold text-slate-900 mb-3">Pengecekan Merek</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Kami cek apakah merek Anda mirip dengan merek yang sudah terdaftar.
                </p>
              </div>
            </div>

            <div class="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-xl transition-all">
              <span class="absolute -top-6 -right-6 text-9xl font-black text-slate-200/50 group-hover:text-crimson-100 transition-colors pointer-events-none">2</span>
              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-crimson-800 text-white flex items-center justify-center mb-6 shadow-md">
                  <i data-lucide="file-signature" class="w-8 h-8"></i>
                </div>
                <h4 class="text-xl font-bold text-slate-900 mb-3">Pengajuan ke DJKI</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Kami siapkan berkas dan ajukan permohonan Anda secara resmi.
                </p>
              </div>
            </div>

            <div class="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-xl transition-all">
              <span class="absolute -top-6 -right-6 text-9xl font-black text-slate-200/50 group-hover:text-crimson-100 transition-colors pointer-events-none">3</span>
              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-crimson-800 text-white flex items-center justify-center mb-6 shadow-md">
                  <i data-lucide="megaphone" class="w-8 h-8"></i>
                </div>
                <h4 class="text-xl font-bold text-slate-900 mb-3">Masa Pengumuman</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Permohonan diumumkan selama 2 bulan. Kami pantau jika ada pihak yang keberatan.
                </p>
              </div>
            </div>

            <div class="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-xl transition-all">
              <span class="absolute -top-6 -right-6 text-9xl font-black text-slate-200/50 group-hover:text-crimson-100 transition-colors pointer-events-none">4</span>
              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-md">
                  <i data-lucide="folder-check" class="w-8 h-8"></i>
                </div>
                <h4 class="text-xl font-bold text-slate-900 mb-3">Sertifikat Terbit</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Setelah pemeriksaan selesai, sertifikat merek diterbitkan dan berlaku 10 tahun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. PAKET PENDAFTARAN MEREK -->
      <section class="py-20 lg:py-28 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center max-w-5xl mx-auto mb-16">
            <h2 class="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight md:whitespace-nowrap">
              Gunakan Paket Pendaftaran Kami
            </h2>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

            <!-- Tier 1: HKI Basic -->
            <div class="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-md flex flex-col justify-between">
              <div>
                <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Pelaku UMKM</span>
                <h3 class="text-2xl font-extrabold text-slate-900 mt-1 mb-2">HKI Basic</h3>

                <div class="my-6">
                  <div class="flex items-baseline gap-1">
                    <span class="text-sm font-bold text-slate-500">Rp</span>
                    <span class="text-4xl font-black text-slate-900">1.950.000</span>
                    <span class="text-xs font-bold text-slate-500">/ kelas</span>
                  </div>
                  <p class="text-xs font-bold text-emerald-600 mt-2">Sudah termasuk biaya resmi negara</p>
                </div>

                <ul class="space-y-4 text-sm font-medium text-slate-700">
                  <li class="flex items-center gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Pengecekan Merek 1 Kelas</span></li>
                  <li class="flex items-center gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Bantuan Surat Rekomendasi UMKM</span></li>
                  <li class="flex items-center gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Pengajuan ke DJKI</span></li>
                  <li class="flex items-center gap-3 text-slate-300"><i data-lucide="x" class="w-5 h-5 shrink-0"></i><span>Tanggapan Usulan Penolakan</span></li>
                </ul>
              </div>
              <a href="#/konsultasi?layanan=merek" class="mt-10 w-full py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-sm text-center transition-colors">
                Pilih Paket Basic
              </a>
            </div>

            <!-- Tier 2 (Highlighted): Protect Plus -->
            <div class="rounded-[2.5rem] p-10 text-white flex flex-col justify-between shadow-2xl shadow-crimson-900/40 relative overflow-hidden group transform lg:-translate-y-4" style="background: linear-gradient(160deg, #8F1A1C 0%, #5A0D0F 100%); border: 1px solid rgba(201,162,77,0.3);">
              <div class="absolute top-0 right-0 w-64 h-64 bg-[#E8C26A] opacity-20 blur-[80px] pointer-events-none"></div>

              <div class="relative z-10">
                <div class="flex items-center justify-between mb-4">
                  <span class="text-[11px] font-extrabold uppercase tracking-wider text-gold-400">Paling Populer</span>
                </div>
                <h3 class="text-3xl font-extrabold text-white mt-1 mb-2">Protect Plus</h3>

                <div class="my-6 p-5 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/15">
                  <div class="flex items-baseline gap-1">
                    <span class="text-sm font-bold text-gold-400">Rp</span>
                    <span class="text-4xl font-black text-white">2.950.000</span>
                    <span class="text-xs font-bold text-gold-400">/ kelas</span>
                  </div>
                  <p class="text-xs font-bold text-gold-400 mt-2">Sudah termasuk biaya resmi negara</p>
                </div>

                <ul class="space-y-4 text-sm font-medium text-white/90">
                  <li class="flex items-center gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-gold-400 shrink-0"></i><span>Seluruh Fasilitas HKI Basic</span></li>
                  <li class="flex items-center gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-gold-400 shrink-0"></i><span>Pengecekan Lintas Kelas</span></li>
                  <li class="flex items-center gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-gold-400 shrink-0"></i><span>Pantau Masa Pengumuman</span></li>
                  <li class="flex items-center gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-gold-400 shrink-0"></i><span>1x Tanggapan Usulan Penolakan</span></li>
                </ul>
              </div>

              <a href="#/konsultasi?layanan=merek" class="relative z-10 mt-10 w-full py-4 rounded-full bg-gold-500 hover:bg-gold-400 text-[#5A0D0F] font-extrabold text-sm text-center shadow-xl transition-all flex items-center justify-center gap-2">
                <span>Pilih Protect Plus</span>
                <i data-lucide="arrow-right" class="w-5 h-5"></i>
              </a>
            </div>

            <!-- Tier 3: Enterprise Bundle -->
            <div class="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-md flex flex-col justify-between">
              <div>
                <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Grup Bisnis &amp; Waralaba</span>
                <h3 class="text-2xl font-extrabold text-slate-900 mt-1 mb-2">Enterprise Bundle</h3>

                <div class="my-6">
                  <div class="flex items-baseline gap-1">
                    <span class="text-sm font-bold text-slate-500">Rp</span>
                    <span class="text-4xl font-black text-slate-900">6.450.000</span>
                    <span class="text-xs font-bold text-slate-500">/ paket</span>
                  </div>
                  <p class="text-xs font-bold text-emerald-600 mt-2">2 kelas merek + 1 hak cipta logo</p>
                </div>

                <ul class="space-y-4 text-sm font-medium text-slate-700">
                  <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Seluruh Fasilitas Protect Plus</span></li>
                  <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Pendaftaran Merek di 2 Kelas</span></li>
                  <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Pencatatan Hak Cipta Logo</span></li>
                  <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Draf Perjanjian Lisensi / Waralaba</span></li>
                </ul>
              </div>
              <a href="#/konsultasi?layanan=merek" class="mt-10 w-full py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm text-center transition-colors">
                Pilih Enterprise Bundle
              </a>
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