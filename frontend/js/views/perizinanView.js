/**
 * View: Perizinan Usaha OSS-RBA (PP 5/2021)
 */

export function renderPerizinanView() {
  return `
    <div class="flex flex-col w-full">
      <section class="relative w-full bg-surface-container-lowest px-6 lg:px-12 pt-14 pb-16 border-b border-surface-container-high">
        <div class="max-w-4xl mx-auto text-center space-y-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-fixed/50 text-secondary">
            <span class="material-symbols-outlined text-[16px]">verified</span>
            <span class="font-label-sm uppercase tracking-wider font-bold">Perizinan Berbasis Risiko PP 5/2021</span>
          </div>
          <h1 class="font-display-lg text-primary text-balance leading-tight">
            Operasikan Bisnis Legal Bebas Risiko Sanksi Administratif &amp; Penutupan
          </h1>
          <p class="font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Dari penerbitan NIB instan, Sertifikat Standar, izin PB-UMKU sektoral, pendaftaran PSE Kominfo, hingga pelaporan berkala LKPM BKPM.
          </p>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-surface-container-high space-y-4 flex flex-col justify-between">
            <div class="space-y-3">
              <span class="material-symbols-outlined text-primary text-[32px]">badge</span>
              <h3 class="font-headline-sm text-primary font-bold">NIB &amp; Akun OSS-RBA</h3>
              <p class="font-body-sm text-on-surface-variant">Penerbitan Nomor Induk Berusaha 13 digit untuk perorangan maupun badan usaha PT/CV, berlaku sebagai identitas legalitas.</p>
              <span class="font-headline-sm text-primary font-bold block pt-2">Mulai Rp 1.250.000</span>
            </div>
            <a href="#/konsultasi?layanan=perizinan-oss" class="w-full py-2.5 bg-primary text-on-primary font-label-md font-bold rounded-xl text-center hover:bg-primary-container transition-all">Ajukan NIB</a>
          </div>

          <div class="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-surface-container-high space-y-4 flex flex-col justify-between">
            <div class="space-y-3">
              <span class="material-symbols-outlined text-secondary text-[32px]">language</span>
              <h3 class="font-headline-sm text-primary font-bold">Pendaftaran PSE Kominfo</h3>
              <p class="font-body-sm text-on-surface-variant">Wajib bagi aplikasi mobile, platform SaaS, website e-commerce, portal konten, dan sistem pembayaran digital domestik.</p>
              <span class="font-headline-sm text-primary font-bold block pt-2">Mulai Rp 2.500.000</span>
            </div>
            <a href="#/konsultasi?layanan=pse" class="w-full py-2.5 bg-primary text-on-primary font-label-md font-bold rounded-xl text-center hover:bg-primary-container transition-all">Daftar PSE</a>
          </div>

          <div class="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-surface-container-high space-y-4 flex flex-col justify-between">
            <div class="space-y-3">
              <span class="material-symbols-outlined text-tertiary text-[32px]">apartment</span>
              <h3 class="font-headline-sm text-primary font-bold">Persetujuan PKKPR Tata Ruang</h3>
              <p class="font-body-sm text-on-surface-variant">Validasi kesesuaian lokasi kegiatan usaha terhadap Rencana Detail Tata Ruang (RDTR) kabupaten/kota se-Indonesia.</p>
              <span class="font-headline-sm text-primary font-bold block pt-2">Mulai Rp 3.000.000</span>
            </div>
            <a href="#/konsultasi?layanan=pkkpr" class="w-full py-2.5 bg-primary text-on-primary font-label-md font-bold rounded-xl text-center hover:bg-primary-container transition-all">Urus PKKPR</a>
          </div>
        </div>
      </section>
    </div>
  `;
}
