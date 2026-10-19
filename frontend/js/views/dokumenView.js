/**
 * View: Dokumen Perusahaan & RUPS (UU No. 40/2007)
 */

export function renderDokumenView() {
  return `
    <div class="flex flex-col w-full">
      <section class="relative w-full bg-surface-container-lowest px-6 lg:px-12 pt-14 pb-16 border-b border-surface-container-high">
        <div class="max-w-4xl mx-auto text-center space-y-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-fixed/50 text-secondary">
            <span class="material-symbols-outlined text-[16px]">edit_document</span>
            <span class="font-label-sm uppercase tracking-wider font-bold">Kepatuhan Notariat &amp; RUPS</span>
          </div>
          <h1 class="font-display-lg text-primary text-balance leading-tight">
            Perubahan Anggaran Dasar, RUPS Notariil, &amp; Restrukturisasi Saham
          </h1>
          <p class="font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Penyusunan naskah hukum berbobot tinggi, asistensi keabsahan rapat pemegang saham, serta pelaporan resmi ke Dirjen AHU Kemenkumham RI.
          </p>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-surface-container-high space-y-4 flex flex-col justify-between">
            <div class="space-y-3">
              <span class="material-symbols-outlined text-primary text-[32px]">edit_document</span>
              <h3 class="font-headline-sm text-primary font-bold">Perubahan Anggaran Dasar PT</h3>
              <p class="font-body-sm text-on-surface-variant">Amandemen klausul anggaran dasar: Pergantian direksi/komisaris, penyesuaian modal saham, penambahan KBLI 2020, dan domisili.</p>
              <span class="font-headline-sm text-primary font-bold block pt-2">Mulai Rp 4.500.000</span>
            </div>
            <a href="#/konsultasi?layanan=perubahan-akta" class="w-full py-2.5 bg-primary text-on-primary font-label-md font-bold rounded-xl text-center hover:bg-primary-container transition-all">Urus Perubahan AD</a>
          </div>

          <div class="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-surface-container-high space-y-4 flex flex-col justify-between">
            <div class="space-y-3">
              <span class="material-symbols-outlined text-secondary text-[32px]">groups</span>
              <h3 class="font-headline-sm text-primary font-bold">Akta Notaris &amp; Berita Acara RUPS</h3>
              <p class="font-body-sm text-on-surface-variant">Fasilitasi yuridis forum RUPS Tahunan (RUPST), RUPS Luar Biasa (RUPSLB), atau Keputusan Sirkuler Pemegang Saham resmi.</p>
              <span class="font-headline-sm text-primary font-bold block pt-2">Mulai Rp 3.800.000</span>
            </div>
            <a href="#/konsultasi?layanan=rups" class="w-full py-2.5 bg-primary text-on-primary font-label-md font-bold rounded-xl text-center hover:bg-primary-container transition-all">Fasilitasi RUPS</a>
          </div>

          <div class="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-surface-container-high space-y-4 flex flex-col justify-between">
            <div class="space-y-3">
              <span class="material-symbols-outlined text-tertiary text-[32px]">pie_chart</span>
              <h3 class="font-headline-sm text-primary font-bold">Jual Beli Saham &amp; Akuisisi</h3>
              <p class="font-body-sm text-on-surface-variant">Pendampingan pengalihan hak atas saham (Share Transfer), Akta Jual Beli Saham Notariil, penambahan investor baru, dan due diligence.</p>
              <span class="font-headline-sm text-primary font-bold block pt-2">Mulai Rp 5.000.000</span>
            </div>
            <a href="#/konsultasi?layanan=akuisisi" class="w-full py-2.5 bg-primary text-on-primary font-label-md font-bold rounded-xl text-center hover:bg-primary-container transition-all">Konsultasi Saham</a>
          </div>
        </div>
      </section>
    </div>
  `;
}
