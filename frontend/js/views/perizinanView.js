/**
 * View: Perizinan Usaha (NIB, Izin Edar, Halal, Konstruksi, Sektoral, Lingkungan)
 * Gaya disamakan dengan halaman Pendirian dan HKI.
 */

export function renderPerizinanView() {
  return `
    <div class="flex flex-col w-full">

      <!-- 1. HERO SECTION -->
      <section class="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-24 bg-transparent border-b border-slate-200/50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <!-- Kolom Kiri -->
            <div class="lg:col-span-7 space-y-6">
              <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                Urus NIB dan Izin Usaha, <span class="text-crimson-800">Tanpa Hambatan</span>
              </h1>

              <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-medium">
                Kami membantu mengurus NIB, izin edar, sertifikat halal, dan izin sektoral lainnya agar usaha Anda bisa beroperasi secara sah.
              </p>

              <!-- CTA Buttons -->
              <div class="flex flex-wrap items-center gap-4 pt-4">
                <a href="#/konsultasi?layanan=perizinan-oss" class="inline-flex items-center justify-center px-8 py-4 bg-crimson-800 hover:bg-crimson-900 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  <span>Konsultasi Gratis</span>
                  <i data-lucide="arrow-right" class="w-5 h-5 ml-2"></i>
                </a>
                <button type="button" data-scroll-to="simulasi-rba" class="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-200 hover:border-crimson-800 text-slate-800 hover:text-crimson-800 font-bold rounded-full transition-all">
                  Cek Kebutuhan Izin
                </button>
              </div>
            </div>

            <!-- Kolom Kanan: Foto -->
            <div class="lg:col-span-5">
              <div class="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <div class="relative h-80 bg-slate-900 overflow-hidden flex items-center justify-center">
                  <img src="assets/perizinan-hero.jpg" alt="Perizinan Usaha" class="w-full h-full object-cover opacity-80" onerror="this.src='https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop';"/>
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- 2. LAYANAN PERIZINAN -->
      <section class="py-20 lg:py-28 bg-slate-50/50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="max-w-2xl mb-14">
            <h2 class="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Pilih Jenis Perizinan
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

            <!-- NIB -->
            <div class="bg-white rounded-[2rem] p-8 border-2 border-crimson-800/20 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div>
                <div class="w-14 h-14 rounded-2xl bg-crimson-800 text-white flex items-center justify-center mb-6 shadow-md">
                  <i data-lucide="file-text" class="w-7 h-7"></i>
                </div>
                <h3 class="text-2xl font-bold text-slate-900">NIB</h3>
                <p class="text-sm font-bold text-crimson-800 mt-1">Nomor Induk Berusaha</p>
                <p class="text-sm text-slate-600 mt-4 leading-relaxed">
                  Identitas resmi usaha Anda untuk menjalankan kegiatan usaha, termasuk untuk keperluan impor.
                </p>
                <ul class="mt-6 space-y-3 text-sm font-medium text-slate-700">
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Pemilihan Bidang Usaha</span></li>
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Pengurusan Akun OSS</span></li>
                </ul>
              </div>
              <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span class="text-[10px] uppercase font-bold text-slate-400 block">Estimasi</span>
                  <span class="text-xl font-black text-slate-900">1 – 3 Hari</span>
                </div>
                <a href="#/konsultasi?layanan=perizinan-oss" class="w-12 h-12 rounded-full bg-crimson-800 hover:bg-crimson-900 text-white flex items-center justify-center shadow-md transition-transform hover:scale-105" aria-label="Pilih">
                  <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
              </div>
            </div>

            <!-- BPOM -->
            <div class="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div class="w-14 h-14 rounded-2xl bg-amber-50 text-gold-600 flex items-center justify-center mb-6">
                  <i data-lucide="flask-conical" class="w-7 h-7"></i>
                </div>
                <h3 class="text-2xl font-bold text-slate-900">Izin Edar BPOM</h3>
                <p class="text-sm font-bold text-crimson-800 mt-1">Makanan, Minuman &amp; Kosmetik</p>
                <p class="text-sm text-slate-600 mt-4 leading-relaxed">
                  Pendampingan pengurusan izin edar produk makanan, minuman, dan kosmetik hingga nomor izin terbit.
                </p>
                <ul class="mt-6 space-y-3 text-sm font-medium text-slate-700">
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Pemeriksaan Tempat Produksi</span></li>
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Pendaftaran Produk</span></li>
                </ul>
              </div>
              <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span class="text-[10px] uppercase font-bold text-slate-400 block">Estimasi</span>
                  <span class="text-xl font-black text-slate-900">14 – 30 Hari</span>
                </div>
                <a href="#/konsultasi?layanan=perizinan-oss" class="w-12 h-12 rounded-full bg-crimson-800 hover:bg-crimson-900 text-white flex items-center justify-center shadow-md transition-transform hover:scale-105" aria-label="Pilih">
                  <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
              </div>
            </div>

            <!-- Halal -->
            <div class="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div class="w-14 h-14 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center mb-6">
                  <i data-lucide="award" class="w-7 h-7"></i>
                </div>
                <h3 class="text-2xl font-bold text-slate-900">Sertifikat Halal</h3>
                <p class="text-sm font-bold text-crimson-800 mt-1">Produk Makanan &amp; Minuman</p>
                <p class="text-sm text-slate-600 mt-4 leading-relaxed">
                  Pengurusan sertifikat halal resmi, mulai dari penyusunan dokumen hingga pendampingan pemeriksaan.
                </p>
                <ul class="mt-6 space-y-3 text-sm font-medium text-slate-700">
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Penyusunan Dokumen</span></li>
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Pendampingan Pemeriksaan</span></li>
                </ul>
              </div>
              <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span class="text-[10px] uppercase font-bold text-slate-400 block">Estimasi</span>
                  <span class="text-xl font-black text-slate-900">14 – 21 Hari</span>
                </div>
                <a href="#/konsultasi?layanan=perizinan-oss" class="w-12 h-12 rounded-full bg-crimson-800 hover:bg-crimson-900 text-white flex items-center justify-center shadow-md transition-transform hover:scale-105" aria-label="Pilih">
                  <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
              </div>
            </div>

            <!-- Konstruksi -->
            <div class="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div class="w-14 h-14 rounded-2xl bg-amber-50 text-gold-600 flex items-center justify-center mb-6">
                  <i data-lucide="hard-hat" class="w-7 h-7"></i>
                </div>
                <h3 class="text-2xl font-bold text-slate-900">Izin Konstruksi</h3>
                <p class="text-sm font-bold text-crimson-800 mt-1">Kontraktor &amp; Tender Proyek</p>
                <p class="text-sm text-slate-600 mt-4 leading-relaxed">
                  Pengurusan sertifikat badan usaha dan sertifikat tenaga ahli untuk mengikuti tender proyek.
                </p>
                <ul class="mt-6 space-y-3 text-sm font-medium text-slate-700">
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Sertifikat Badan Usaha</span></li>
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Sertifikat Tenaga Ahli</span></li>
                </ul>
              </div>
              <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span class="text-[10px] uppercase font-bold text-slate-400 block">Estimasi</span>
                  <span class="text-xl font-black text-slate-900">14 – 25 Hari</span>
                </div>
                <a href="#/konsultasi?layanan=perizinan-oss" class="w-12 h-12 rounded-full bg-crimson-800 hover:bg-crimson-900 text-white flex items-center justify-center shadow-md transition-transform hover:scale-105" aria-label="Pilih">
                  <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
              </div>
            </div>

            <!-- Sektoral -->
            <div class="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div class="w-14 h-14 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center mb-6">
                  <i data-lucide="building" class="w-7 h-7"></i>
                </div>
                <h3 class="text-2xl font-bold text-slate-900">Izin Sektoral</h3>
                <p class="text-sm font-bold text-crimson-800 mt-1">Klinik, Pariwisata &amp; Aplikasi</p>
                <p class="text-sm text-slate-600 mt-4 leading-relaxed">
                  Izin khusus sesuai bidang usaha, seperti klinik, pariwisata, aplikasi digital, dan alat kesehatan.
                </p>
                <ul class="mt-6 space-y-3 text-sm font-medium text-slate-700">
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Pendaftaran Aplikasi Digital</span></li>
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Pemenuhan Syarat Teknis</span></li>
                </ul>
              </div>
              <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span class="text-[10px] uppercase font-bold text-slate-400 block">Estimasi</span>
                  <span class="text-xl font-black text-slate-900">10 – 20 Hari</span>
                </div>
                <a href="#/konsultasi?layanan=pse" class="w-12 h-12 rounded-full bg-crimson-800 hover:bg-crimson-900 text-white flex items-center justify-center shadow-md transition-transform hover:scale-105" aria-label="Pilih">
                  <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
              </div>
            </div>

            <!-- Lingkungan -->
            <div class="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div class="w-14 h-14 rounded-2xl bg-amber-50 text-gold-600 flex items-center justify-center mb-6">
                  <i data-lucide="leaf" class="w-7 h-7"></i>
                </div>
                <h3 class="text-2xl font-bold text-slate-900">Izin Lingkungan</h3>
                <p class="text-sm font-bold text-crimson-800 mt-1">Pabrik, Gudang &amp; Properti</p>
                <p class="text-sm text-slate-600 mt-4 leading-relaxed">
                  Dokumen pengelolaan lingkungan yang menjadi syarat izin untuk industri, pergudangan, dan properti.
                </p>
                <ul class="mt-6 space-y-3 text-sm font-medium text-slate-700">
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>AMDAL, UKL-UPL &amp; SPPL</span></li>
                  <li class="flex items-start gap-3"><i data-lucide="check" class="w-5 h-5 text-emerald-600 shrink-0"></i><span>Kesesuaian Tata Ruang</span></li>
                </ul>
              </div>
              <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span class="text-[10px] uppercase font-bold text-slate-400 block">Estimasi</span>
                  <span class="text-xl font-black text-slate-900">7 – 30 Hari</span>
                </div>
                <a href="#/konsultasi?layanan=pkkpr" class="w-12 h-12 rounded-full bg-crimson-800 hover:bg-crimson-900 text-white flex items-center justify-center shadow-md transition-transform hover:scale-105" aria-label="Pilih">
                  <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- 3. CEK KEBUTUHAN IZIN -->
      <section id="simulasi-rba" class="py-20 lg:py-28 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="bg-slate-50 rounded-[2.5rem] p-8 sm:p-12 border border-slate-200 shadow-md">
            <div class="max-w-2xl mb-10">
              <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Cek Kebutuhan Izin Usaha
              </h2>
              <p class="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed font-medium">
                Pilih bidang usaha, skala modal, dan lokasi untuk melihat perkiraan izin yang dibutuhkan.
              </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

              <!-- Input -->
              <div class="lg:col-span-6 space-y-5">
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1.5">Bidang Usaha</label>
                  <select id="rbaSectorSelect" style="font-size:15px;" class="w-full px-5 py-3.5 rounded-full bg-white border border-slate-200 text-slate-900 outline-none cursor-pointer focus:border-crimson-800">
                    <option value="fnb" style="font-size:16px; padding:8px;">Makanan, Minuman &amp; Restoran</option>
                    <option value="it" style="font-size:16px; padding:8px;">Teknologi, Software &amp; Aplikasi</option>
                    <option value="konstruksi" style="font-size:16px; padding:8px;">Konstruksi &amp; Kontraktor</option>
                    <option value="perdagangan" style="font-size:16px; padding:8px;">Perdagangan &amp; Ekspor-Impor</option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1.5">Skala Modal Usaha</label>
                  <select id="rbaScaleSelect" style="font-size:15px;" class="w-full px-5 py-3.5 rounded-full bg-white border border-slate-200 text-slate-900 outline-none cursor-pointer focus:border-crimson-800">
                    <option value="menengah" style="font-size:16px; padding:8px;">Menengah / Besar (Modal di atas Rp 5 Miliar)</option>
                    <option value="umk" style="font-size:16px; padding:8px;">Mikro &amp; Kecil (Modal hingga Rp 5 Miliar)</option>
                    <option value="pma" style="font-size:16px; padding:8px;">Penanaman Modal Asing (PMA)</option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1.5">Lokasi Usaha</label>
                  <select id="rbaLocationSelect" style="font-size:15px;" class="w-full px-5 py-3.5 rounded-full bg-white border border-slate-200 text-slate-900 outline-none cursor-pointer focus:border-crimson-800">
                    <option value="rdtr" style="font-size:16px; padding:8px;">Kawasan bisnis atau industri</option>
                    <option value="non-rdtr" style="font-size:16px; padding:8px;">Di luar kawasan bisnis atau industri</option>
                  </select>
                </div>
              </div>

              <!-- Hasil -->
              <div class="lg:col-span-6">
                <div class="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm space-y-6">
                  <div class="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
                    <div>
                      <span class="text-[10px] uppercase font-bold text-slate-400 block">Hasil</span>
                      <span id="rbaKbliLabel" class="text-sm font-bold text-slate-800">KBLI 56101 / 10799 • Restoran dan Pangan Olahan</span>
                    </div>
                    <span id="rbaRiskBadge" class="px-4 py-2 rounded-full bg-crimson-800 text-white text-xs font-extrabold">
                      Risiko Menengah Tinggi
                    </span>
                  </div>

                  <div>
                    <span class="text-[10px] uppercase font-bold text-slate-400 block">Perkiraan Waktu</span>
                    <p id="rbaDurationText" class="text-base font-extrabold text-slate-900 mt-1">14 – 21 Hari Kerja</p>
                  </div>

                  <div>
                    <span class="text-[10px] uppercase font-bold text-slate-400 block mb-3">Dokumen yang Dibutuhkan</span>
                    <div id="rbaDocsList" class="space-y-2.5">
                      <div class="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-800">
                        <span>NIB dan Akses Kepabeanan</span>
                        <i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600 shrink-0"></i>
                      </div>
                      <div class="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-800">
                        <span>Sertifikat Standar Terverifikasi</span>
                        <i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600 shrink-0"></i>
                      </div>
                      <div class="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-800">
                        <span>Dokumen Pengelolaan Lingkungan</span>
                        <i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600 shrink-0"></i>
                      </div>
                      <div class="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-800">
                        <span>Sertifikat Halal dan Izin Edar</span>
                        <i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600 shrink-0"></i>
                      </div>
                    </div>
                  </div>

                  <a href="#/konsultasi?layanan=perizinan-oss" class="inline-flex items-center justify-center w-full px-8 py-4 bg-crimson-800 hover:bg-crimson-900 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                    <span>Ajukan Perizinan</span>
                    <i data-lucide="arrow-right" class="w-5 h-5 ml-2"></i>
                  </a>
                </div>
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
              Alur 4 Langkah Perizinan
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-xl transition-all">
              <span class="absolute -top-6 -right-6 text-9xl font-black text-slate-200/50 group-hover:text-crimson-100 transition-colors pointer-events-none">1</span>
              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-crimson-800 text-white flex items-center justify-center mb-6 shadow-md">
                  <i data-lucide="search" class="w-8 h-8"></i>
                </div>
                <h4 class="text-xl font-bold text-slate-900 mb-3">Cek Kebutuhan Izin</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Kami tentukan izin apa saja yang dibutuhkan sesuai bidang usaha Anda.
                </p>
              </div>
            </div>

            <div class="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-xl transition-all">
              <span class="absolute -top-6 -right-6 text-9xl font-black text-slate-200/50 group-hover:text-crimson-100 transition-colors pointer-events-none">2</span>
              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-crimson-800 text-white flex items-center justify-center mb-6 shadow-md">
                  <i data-lucide="file-signature" class="w-8 h-8"></i>
                </div>
                <h4 class="text-xl font-bold text-slate-900 mb-3">Siapkan Dokumen</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Kami bantu menyiapkan dan memeriksa kelengkapan dokumen Anda.
                </p>
              </div>
            </div>

            <div class="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-xl transition-all">
              <span class="absolute -top-6 -right-6 text-9xl font-black text-slate-200/50 group-hover:text-crimson-100 transition-colors pointer-events-none">3</span>
              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-crimson-800 text-white flex items-center justify-center mb-6 shadow-md">
                  <i data-lucide="shield-check" class="w-8 h-8"></i>
                </div>
                <h4 class="text-xl font-bold text-slate-900 mb-3">Pengajuan Izin</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Kami ajukan permohonan ke instansi terkait dan memantau prosesnya.
                </p>
              </div>
            </div>

            <div class="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-xl transition-all">
              <span class="absolute -top-6 -right-6 text-9xl font-black text-slate-200/50 group-hover:text-crimson-100 transition-colors pointer-events-none">4</span>
              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-md">
                  <i data-lucide="folder-check" class="w-8 h-8"></i>
                </div>
                <h4 class="text-xl font-bold text-slate-900 mb-3">Izin Terbit</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Izin diserahkan dalam bentuk digital, siap dipakai untuk menjalankan usaha.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  `;
}

export function initPerizinanLogic() {
  const sectorSelect = document.getElementById('rbaSectorSelect');
  const scaleSelect = document.getElementById('rbaScaleSelect');
  const locationSelect = document.getElementById('rbaLocationSelect');

  const kbliLabel = document.getElementById('rbaKbliLabel');
  const riskBadge = document.getElementById('rbaRiskBadge');
  const durationText = document.getElementById('rbaDurationText');
  const docsList = document.getElementById('rbaDocsList');

  const presets = {
    fnb: {
      kbli: 'KBLI 56101 / 10799 • Restoran dan Pangan Olahan',
      risk: 'Risiko Menengah Tinggi',
      riskClass: 'bg-crimson-800 text-white',
      duration: '14 – 21 Hari Kerja',
      docs: [
        'NIB dan Akses Kepabeanan',
        'Sertifikat Standar Terverifikasi',
        'Dokumen Pengelolaan Lingkungan',
        'Sertifikat Halal dan Izin Edar'
      ]
    },
    it: {
      kbli: 'KBLI 62019 / 63122 • Software, Aplikasi dan Portal Web',
      risk: 'Risiko Rendah',
      riskClass: 'bg-emerald-700 text-white',
      duration: '2 – 5 Hari Kerja',
      docs: [
        'NIB',
        'Tanda Daftar Penyelenggara Sistem Elektronik',
        'Pernyataan Mandiri Lingkungan',
        'Pencatatan Hak Cipta dan Merek'
      ]
    },
    konstruksi: {
      kbli: 'KBLI 41011 / 42101 • Konstruksi Gedung dan Sipil',
      risk: 'Risiko Menengah Tinggi',
      riskClass: 'bg-crimson-800 text-white',
      duration: '14 – 25 Hari Kerja',
      docs: [
        'NIB Jasa Konstruksi',
        'Sertifikat Badan Usaha Konstruksi',
        'Sertifikat Kompetensi Tenaga Ahli',
        'Keanggotaan Asosiasi Konstruksi'
      ]
    },
    perdagangan: {
      kbli: 'KBLI 46100 / 46900 • Perdagangan Besar dan Distribusi',
      risk: 'Risiko Rendah',
      riskClass: 'bg-emerald-700 text-white',
      duration: '1 – 3 Hari Kerja',
      docs: [
        'NIB dan Angka Pengenal Impor',
        'Akses Kepabeanan',
        'Konfirmasi Kesesuaian Lokasi',
        'Pernyataan Pengelolaan Lingkungan'
      ]
    }
  };

  function updateSimulator() {
    const sec = sectorSelect?.value || 'fnb';
    const scale = scaleSelect?.value || 'menengah';
    const loc = locationSelect?.value || 'rdtr';
    const data = presets[sec] || presets.fnb;

    if (kbliLabel) kbliLabel.textContent = data.kbli + (scale === 'pma' ? ' (PMA)' : '');
    if (riskBadge) {
      riskBadge.textContent = scale === 'pma' ? 'Risiko Menengah Tinggi (PMA)' : data.risk;
      riskBadge.className = `px-4 py-2 rounded-full text-xs font-extrabold ${scale === 'pma' ? 'bg-crimson-800 text-white' : data.riskClass}`;
    }
    if (durationText) {
      durationText.textContent = loc === 'non-rdtr'
        ? data.duration + ' + kajian tata ruang'
        : data.duration;
    }
    if (docsList) {
      docsList.innerHTML = data.docs.map(d => `
        <div class="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-800">
          <span>${d}</span>
          <i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600 shrink-0"></i>
        </div>
      `).join('');
      if (window.lucide) window.lucide.createIcons();
    }
  }

  sectorSelect?.addEventListener('change', updateSimulator);
  scaleSelect?.addEventListener('change', updateSimulator);
  locationSelect?.addEventListener('change', updateSimulator);

  if (window.lucide) {
    window.lucide.createIcons();
  }
}