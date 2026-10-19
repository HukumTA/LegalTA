/**
 * View: Home (Beranda)
 */

export function renderHomeView() {
  return `
    <div class="flex flex-col w-full">
      <!-- Hero Section -->
      <section class="relative w-full overflow-hidden bg-surface-container-lowest pt-14 pb-20 px-6 lg:px-12 border-b border-surface-container-high">
        <div class="absolute -top-24 right-0 w-96 h-96 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute top-1/2 -left-20 w-80 h-80 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none"></div>
        
        <div class="max-w-7xl mx-auto relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div class="lg:col-span-7 space-y-6">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-fixed/50 text-secondary">
                <span class="material-symbols-outlined text-[16px]">gavel</span>
                <span class="font-label-sm uppercase tracking-wider">Platform Legalitas Korporasi Terintegrasi</span>
              </div>
              <h1 class="font-display-lg text-primary text-balance leading-tight">
                Kepastian Hukum Bisnis Anda Dimulai dari Ekosistem Notariat Terpercaya
              </h1>
              <p class="font-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                Platform otomasi hukum korporasi pertama di Indonesia yang memadukan teknologi perizinan OSS-RBA, Ditjen AHU, dan pangkalan data HKI dengan akurasi notariat berintegritas tinggi.
              </p>
              <div class="flex flex-wrap items-center gap-4 pt-2">
                <a href="#/konsultasi" class="px-8 py-4 bg-primary text-on-primary font-label-lg rounded-xl shadow-md hover:bg-primary-container transition-all flex items-center gap-2 font-bold">
                  <span>Mulai Konsultasi Gratis</span>
                  <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
                </a>
                <a href="#/tracking" class="px-6 py-4 bg-surface-container-high text-on-surface font-label-lg rounded-xl hover:bg-surface-container-highest transition-all flex items-center gap-2 font-bold">
                  <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Live Tracking Order</span>
                </a>
              </div>
              <!-- Stat pills -->
              <div class="pt-6 border-t border-surface-container-high grid grid-cols-3 gap-4">
                <div>
                  <span class="font-display-lg text-primary font-bold">13.000+</span>
                  <p class="font-body-sm text-on-surface-variant">Entitas Berbadan Hukum</p>
                </div>
                <div>
                  <span class="font-display-lg text-secondary font-bold">50+</span>
                  <p class="font-body-sm text-on-surface-variant">Mitra Notaris Resmi</p>
                </div>
                <div>
                  <span class="font-display-lg text-primary font-bold">99.4%</span>
                  <p class="font-body-sm text-on-surface-variant">SK Bebas Penolakan</p>
                </div>
              </div>
            </div>

            <!-- Hero Right: Interactive Public Tools Card -->
            <div class="lg:col-span-5 bg-surface-container-low p-6 sm:p-8 rounded-3xl shadow-sm border border-surface-container-high space-y-6">
              <div class="flex items-center justify-between pb-4 border-b border-surface-container-high">
                <div class="flex items-center gap-2.5">
                  <span class="material-symbols-outlined text-secondary text-[24px]">construction</span>
                  <h3 class="font-headline-sm text-primary font-bold">Tools Legalitas Mandiri</h3>
                </div>
                <span class="font-label-sm bg-secondary-fixed text-on-secondary-fixed px-2.5 py-0.5 rounded-full font-bold">Gratis</span>
              </div>
              <p class="font-body-sm text-on-surface-variant">Cek persyaratan yuridis usaha Anda sebelum melakukan pengeluaran biaya permohonan resmi.</p>

              <div class="space-y-3">
                <a href="#/tools/cek-pt" class="p-4 rounded-2xl bg-surface-container-lowest hover:bg-primary-fixed/20 transition-all flex items-center justify-between border border-surface-container shadow-sm group">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-primary text-[24px]">corporate_fare</span>
                    <div>
                      <h4 class="font-label-lg text-on-surface font-bold group-hover:text-primary transition-colors">Cek Ketersediaan Nama PT</h4>
                      <p class="font-body-sm text-on-surface-variant">Validasi PP 43/2011 &amp; aturan 3 kata</p>
                    </div>
                  </div>
                  <span class="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>

                <a href="#/tools/cek-merek" class="p-4 rounded-2xl bg-surface-container-lowest hover:bg-primary-fixed/20 transition-all flex items-center justify-between border border-surface-container shadow-sm group">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-secondary text-[24px]">policy</span>
                    <div>
                      <h4 class="font-label-lg text-on-surface font-bold group-hover:text-secondary transition-colors">Cek Kemiripan Merek PDKI</h4>
                      <p class="font-body-sm text-on-surface-variant">Penelusuran fonetik 45 Kelas Nice</p>
                    </div>
                  </div>
                  <span class="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>

                <a href="#/tools/cek-kbli" class="p-4 rounded-2xl bg-surface-container-lowest hover:bg-primary-fixed/20 transition-all flex items-center justify-between border border-surface-container shadow-sm group">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-tertiary text-[24px]">menu_book</span>
                    <div>
                      <h4 class="font-label-lg text-on-surface font-bold group-hover:text-tertiary transition-colors">Kamus KBLI 2020 &amp; Risiko OSS</h4>
                      <p class="font-body-sm text-on-surface-variant">1.790+ kode sub-golongan &amp; izin PB-UMKU</p>
                    </div>
                  </div>
                  <span class="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4-Step Workflow Section (PRD 3.D) -->
      <section class="w-full bg-surface-container-low py-20 px-6 lg:px-12">
        <div class="max-w-7xl mx-auto space-y-16">
          <div class="text-center max-w-3xl mx-auto space-y-3">
            <span class="font-label-sm text-secondary uppercase tracking-widest font-bold bg-secondary-fixed/40 px-3 py-1 rounded-full">Alur Kerja 4 Langkah (PRD 3.D)</span>
            <h2 class="font-headline-xl text-primary">Kemudahan Pengurusan Legalitas Modern</h2>
            <p class="font-body-md text-on-surface-variant">Dari pemilihan layanan hingga akta fisik sampai di tangan Anda tanpa antre di kantor notaris konvensional.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm space-y-3">
              <span class="font-display-lg text-primary/20 leading-none block">01</span>
              <h4 class="font-headline-sm text-primary font-bold">1. Pilih Layanan</h4>
              <p class="font-body-sm text-on-surface-variant leading-relaxed">
                Telusuri 30+ jenis layanan legal dengan rincian biaya transparan tanpa mark-up atau biaya siluman.
              </p>
            </div>
            <div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm space-y-3">
              <span class="font-display-lg text-primary/20 leading-none block">02</span>
              <h4 class="font-headline-sm text-primary font-bold">2. Konsultasi Gratis</h4>
              <p class="font-body-sm text-on-surface-variant leading-relaxed">
                Terhubung dengan Personal Legal Assistant (PLA) berlisensi yang memandu formulasi anggaran dasar dan izin.
              </p>
            </div>
            <div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm space-y-3">
              <span class="font-display-lg text-primary/20 leading-none block">03</span>
              <h4 class="font-headline-sm text-primary font-bold">3. Kirim Dokumen Online</h4>
              <p class="font-body-sm text-on-surface-variant leading-relaxed">
                Unggah KTP, NPWP, dan syarat administratif via dashboard aman terenkripsi ISO 27001 standar perbankan.
              </p>
            </div>
            <div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm space-y-3">
              <span class="font-display-lg text-primary/20 leading-none block">04</span>
              <h4 class="font-headline-sm text-primary font-bold">4. Terima Hasil Digital</h4>
              <p class="font-body-sm text-on-surface-variant leading-relaxed">
                SK Kemenkumham, Akta Notaris, dan NIB OSS RBA terbit resmi dan dikirim secara digital maupun dokumen fisik.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Catalog Overview (PRD 3.A) -->
      <section class="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span class="font-label-sm text-secondary uppercase tracking-widest font-bold">Kategori Layanan Utama (PRD 3.A)</span>
            <h2 class="font-headline-xl text-primary mt-1">Solusi Hukum Lengkap untuk Segala Skala Usaha</h2>
          </div>
          <a href="#/konsultasi" class="font-label-lg text-primary hover:underline flex items-center gap-1 font-bold">
            <span>Lihat Seluruh Biaya Layanan</span>
            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container-high space-y-4 flex flex-col justify-between">
            <div class="space-y-3">
              <div class="w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center font-bold">
                <span class="material-symbols-outlined text-[24px]">corporate_fare</span>
              </div>
              <h3 class="font-headline-sm text-primary font-bold">Pendirian Badan Usaha</h3>
              <p class="font-body-sm text-on-surface-variant">PT Umum (PMDN), PT Perorangan UMKM, CV, PT PMA, dan Yayasan resmi Kemenkumham.</p>
            </div>
            <a href="#/layanan/pendirian" class="font-label-md text-secondary hover:underline flex items-center gap-1 font-bold pt-4">
              <span>Detail Paket Pendirian</span>
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>

          <div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container-high space-y-4 flex flex-col justify-between">
            <div class="space-y-3">
              <div class="w-12 h-12 rounded-xl bg-secondary-fixed text-secondary flex items-center justify-center font-bold">
                <span class="material-symbols-outlined text-[24px]">verified</span>
              </div>
              <h3 class="font-headline-sm text-primary font-bold">Perizinan Usaha OSS</h3>
              <p class="font-body-sm text-on-surface-variant">NIB OSS-RBA, Sertifikat Standar, PB-UMKU sektoral, PSE Kominfo, dan PKKPR Tata Ruang.</p>
            </div>
            <a href="#/layanan/perizinan" class="font-label-md text-secondary hover:underline flex items-center gap-1 font-bold pt-4">
              <span>Detail Perizinan Usaha</span>
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>

          <div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container-high space-y-4 flex flex-col justify-between">
            <div class="space-y-3">
              <div class="w-12 h-12 rounded-xl bg-tertiary-fixed text-tertiary flex items-center justify-center font-bold">
                <span class="material-symbols-outlined text-[24px]">edit_document</span>
              </div>
              <h3 class="font-headline-sm text-primary font-bold">Dokumen Perusahaan</h3>
              <p class="font-body-sm text-on-surface-variant">Perubahan Anggaran Dasar, Akta RUPS Notariil, Restrukturisasi Saham, dan Cabang.</p>
            </div>
            <a href="#/layanan/dokumen" class="font-label-md text-secondary hover:underline flex items-center gap-1 font-bold pt-4">
              <span>Detail Akta &amp; RUPS</span>
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>

          <div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container-high space-y-4 flex flex-col justify-between">
            <div class="space-y-3">
              <div class="w-12 h-12 rounded-xl bg-primary-fixed-dim text-primary flex items-center justify-center font-bold">
                <span class="material-symbols-outlined text-[24px]">policy</span>
              </div>
              <h3 class="font-headline-sm text-primary font-bold">Pendaftaran HKI DJKI</h3>
              <p class="font-body-sm text-on-surface-variant">Merek Dagang, Hak Cipta, Paten Teknologi, Desain Industri, dan Litigasi Sanggahan.</p>
            </div>
            <a href="#/layanan/hki" class="font-label-md text-secondary hover:underline flex items-center gap-1 font-bold pt-4">
              <span>Detail Registrasi HKI</span>
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      <!-- Live Tracking Teaser Banner (PRD 3.C) -->
      <section class="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div class="bg-primary text-on-primary rounded-3xl p-8 lg:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary/30 rounded-full blur-3xl pointer-events-none"></div>
          <div class="max-w-2xl space-y-3 relative z-10">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-on-primary/10 text-primary-fixed font-label-sm uppercase tracking-wider">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Client Tracking Dashboard
            </div>
            <h2 class="font-display-lg text-white">Transparansi Nyata di Setiap Tahap Pengesahan</h2>
            <p class="font-body-md text-primary-fixed-dim leading-relaxed">
              Klien LEGALTA dapat memantau status notariat, voucher AHU, draf akta, hingga penerbitan SK Menteri secara langsung melalui portal lacak berkas.
            </p>
          </div>
          <a href="#/tracking" class="px-8 py-4 bg-surface-container-lowest text-primary font-label-lg font-bold rounded-xl shadow-lg hover:bg-surface-container-low transition-all relative z-10 shrink-0">
            Buka Dasbor Tracking
          </a>
        </div>
      </section>
    </div>
  `;
}
