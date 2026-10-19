/**
 * View: Pendaftaran HKI (UU No. 20/2016 & UU No. 28/2014)
 */

export function renderHkiView() {
  return `
    <div class="flex flex-col w-full">
      <section class="relative w-full bg-surface-container-lowest px-6 lg:px-12 pt-14 pb-16 border-b border-surface-container-high">
        <div class="max-w-4xl mx-auto text-center space-y-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-fixed/50 text-secondary">
            <span class="material-symbols-outlined text-[16px]">policy</span>
            <span class="font-label-sm uppercase tracking-wider font-bold">Konsultan HKI Terdaftar DJKI Kemenkumham</span>
          </div>
          <h1 class="font-display-lg text-primary text-balance leading-tight">
            Lindungi Aset Tak Berwujud Brand Anda Sebelum Diambil Pihak Lain
          </h1>
          <p class="font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Merek Dagang, Hak Cipta, Paten, dan Desain Industri dengan asas First-to-File. Diproses langsung oleh Konsultan HKI berlisensi resmi.
          </p>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-surface-container-high space-y-4 flex flex-col justify-between">
            <div class="space-y-3">
              <span class="material-symbols-outlined text-primary text-[32px]">policy</span>
              <h3 class="font-headline-sm text-primary font-bold">Pendaftaran Merek Dagang</h3>
              <p class="font-body-sm text-on-surface-variant">Perlindungan eksklusif nama brand dan logo selama 10 tahun di DJKI Kemenkumham. Termasuk riset kemiripan fonetik awal.</p>
              <span class="font-headline-sm text-primary font-bold block pt-2">Mulai Rp 2.450.000</span>
            </div>
            <a href="#/konsultasi?layanan=merek" class="w-full py-2.5 bg-primary text-on-primary font-label-md font-bold rounded-xl text-center hover:bg-primary-container transition-all">Daftar Merek</a>
          </div>

          <div class="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-surface-container-high space-y-4 flex flex-col justify-between">
            <div class="space-y-3">
              <span class="material-symbols-outlined text-secondary text-[32px]">copyright</span>
              <h3 class="font-headline-sm text-primary font-bold">Pencatatan Hak Cipta Cepat</h3>
              <p class="font-body-sm text-on-surface-variant">Mencatat karya intelektual: Software, aplikasi mobile, karya tulis, modul bisnis, dan seni grafis. Berlaku seumur hidup + 70 tahun.</p>
              <span class="font-headline-sm text-primary font-bold block pt-2">Mulai Rp 1.750.000</span>
            </div>
            <a href="#/konsultasi?layanan=hakcipta" class="w-full py-2.5 bg-primary text-on-primary font-label-md font-bold rounded-xl text-center hover:bg-primary-container transition-all">Catat Cipta</a>
          </div>

          <div class="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-surface-container-high space-y-4 flex flex-col justify-between">
            <div class="space-y-3">
              <span class="material-symbols-outlined text-tertiary text-[32px]">lightbulb</span>
              <h3 class="font-headline-sm text-primary font-bold">Paten &amp; Desain Industri</h3>
              <p class="font-body-sm text-on-surface-variant">Perlindungan invensi teknologi dan estetika desain produk fisik atau kemasan unik bersama tim spesialis perancang paten.</p>
              <span class="font-headline-sm text-primary font-bold block pt-2">Mulai Rp 3.500.000</span>
            </div>
            <a href="#/konsultasi?layanan=paten" class="w-full py-2.5 bg-primary text-on-primary font-label-md font-bold rounded-xl text-center hover:bg-primary-container transition-all">Konsultasi Paten</a>
          </div>
        </div>
      </section>
    </div>
  `;
}
