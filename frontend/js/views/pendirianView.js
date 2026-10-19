/**
 * View: Pendirian Badan Usaha (PT, CV, PT Perorangan, PMA)
 */

export function renderPendirianView() {
  return `
    <div class="flex flex-col w-full">
      <!-- Hero -->
      <section class="relative w-full bg-surface-container-lowest px-6 lg:px-12 pt-14 pb-20 border-b border-surface-container-high">
        <div class="max-w-5xl mx-auto text-center space-y-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-fixed/50 text-secondary">
            <span class="material-symbols-outlined text-[16px]">verified</span>
            <span class="font-label-sm uppercase tracking-wider font-bold">Notariat Resmi Kemenkumham RI</span>
          </div>
          <h1 class="font-display-lg text-primary text-balance leading-tight">
            Pendirian Badan Usaha Cepat, Sah, dan Transparan Tanpa Biaya Tersembunyi
          </h1>
          <p class="font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Paket lengkap pendirian PT Standar, PT Perorangan UMKM, CV, hingga PT PMA. Draf akta notaris selesai dalam 24 jam dengan jaminan SK Kemenkumham bebas penolakan.
          </p>
        </div>
      </section>

      <!-- Packages Grid -->
      <section class="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- PT Standar -->
          <div class="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border-2 border-primary space-y-5 flex flex-col justify-between relative">
            <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white font-label-sm uppercase px-3 py-1 rounded-full font-bold">
              Paling Populer
            </div>
            <div class="space-y-4 pt-2">
              <span class="font-label-sm text-secondary uppercase font-bold tracking-wider">Skala Menengah / Korporasi</span>
              <h3 class="font-headline-sm text-primary font-bold">PT Standar (PMDN)</h3>
              <p class="font-body-sm text-on-surface-variant leading-relaxed">
                Struktur korporasi resmi untuk pebisnis profesional. Minimal 2 pendiri dengan pemisahan harta pribadi dan aset perusahaan.
              </p>
              <div class="pt-2">
                <span class="font-display-lg text-primary font-bold">Rp 4.900.000</span>
                <span class="font-body-sm text-on-surface-variant block">All-in Termasuk SK AHU &amp; NIB</span>
              </div>
              <ul class="space-y-2 text-on-surface-variant font-body-sm pt-2">
                <li class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[16px]">check_circle</span> Akta Notaris Otentik</li>
                <li class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[16px]">check_circle</span> SK Kemenkumham Resmi</li>
                <li class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[16px]">check_circle</span> NPWP &amp; SKT Pajak Badan</li>
                <li class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[16px]">check_circle</span> NIB OSS-RBA &amp; Sertifikat Standar</li>
              </ul>
            </div>
            <a href="#/konsultasi?layanan=pt-standar" class="w-full py-3 bg-primary text-on-primary font-label-md font-bold rounded-xl text-center shadow-md hover:bg-primary-container transition-all">
              Pilih PT Standar
            </a>
          </div>

          <!-- PT Perorangan -->
          <div class="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-surface-container-high space-y-5 flex flex-col justify-between">
            <div class="space-y-4">
              <span class="font-label-sm text-secondary uppercase font-bold tracking-wider">Khusus Usaha Mikro / UMKM</span>
              <h3 class="font-headline-sm text-primary font-bold">PT Perorangan</h3>
              <p class="font-body-sm text-on-surface-variant leading-relaxed">
                Badan hukum tanpa akta notaris bagi founder solo. Cukup 1 orang pemegang saham dengan modal setor bebas.
              </p>
              <div class="pt-2">
                <span class="font-display-lg text-primary font-bold">Rp 1.450.000</span>
                <span class="font-body-sm text-on-surface-variant block">Proses Instan 24 Jam</span>
              </div>
              <ul class="space-y-2 text-on-surface-variant font-body-sm pt-2">
                <li class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[16px]">check_circle</span> Sertifikat AHU Kemenkumham</li>
                <li class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[16px]">check_circle</span> NPWP Perusahaan Resmi</li>
                <li class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[16px]">check_circle</span> NIB OSS-RBA 13 Digit</li>
                <li class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[16px]">check_circle</span> Rekening Bank Korporat</li>
              </ul>
            </div>
            <a href="#/konsultasi?layanan=pt-perorangan" class="w-full py-3 bg-surface-container-high text-on-surface font-label-md font-bold rounded-xl text-center hover:bg-surface-container-highest transition-all">
              Pilih PT Perorangan
            </a>
          </div>

          <!-- CV Usaha -->
          <div class="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-surface-container-high space-y-5 flex flex-col justify-between">
            <div class="space-y-4">
              <span class="font-label-sm text-secondary uppercase font-bold tracking-wider">Persekutuan Komanditer</span>
              <h3 class="font-headline-sm text-primary font-bold">Pendirian CV</h3>
              <p class="font-body-sm text-on-surface-variant leading-relaxed">
                Cocok untuk tender proyek pemerintah skala menengah, jasa konsultan, logistik, dan perdagangan umum.
              </p>
              <div class="pt-2">
                <span class="font-display-lg text-primary font-bold">Rp 3.200.000</span>
                <span class="font-body-sm text-on-surface-variant block">Terdaftar Resmi AHU</span>
              </div>
              <ul class="space-y-2 text-on-surface-variant font-body-sm pt-2">
                <li class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[16px]">check_circle</span> Akta Notaris Pendirian CV</li>
                <li class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[16px]">check_circle</span> SK Pendaftaran Kemenkumham</li>
                <li class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[16px]">check_circle</span> NPWP Badan Usaha</li>
                <li class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[16px]">check_circle</span> NIB OSS RBA Lengkap</li>
              </ul>
            </div>
            <a href="#/konsultasi?layanan=cv" class="w-full py-3 bg-surface-container-high text-on-surface font-label-md font-bold rounded-xl text-center hover:bg-surface-container-highest transition-all">
              Pilih CV Usaha
            </a>
          </div>

          <!-- PT PMA -->
          <div class="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-surface-container-high space-y-5 flex flex-col justify-between">
            <div class="space-y-4">
              <span class="font-label-sm text-secondary uppercase font-bold tracking-wider">Penanaman Modal Asing</span>
              <h3 class="font-headline-sm text-primary font-bold">PT PMA (Asing)</h3>
              <p class="font-body-sm text-on-surface-variant leading-relaxed">
                Badan usaha resmi untuk investor atau WNA. Kepatuhan regulasi BKPM dengan modal setor minimum Rp 10 Miliar.
              </p>
              <div class="pt-2">
                <span class="font-display-lg text-primary font-bold">Rp 14.500.000</span>
                <span class="font-body-sm text-on-surface-variant block">Full Compliance BKPM</span>
              </div>
              <ul class="space-y-2 text-on-surface-variant font-body-sm pt-2">
                <li class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[16px]">check_circle</span> Akta Dwibahasa Notaris</li>
                <li class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[16px]">check_circle</span> SK Pengesahan Kemenkumham</li>
                <li class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[16px]">check_circle</span> Izin Berusaha OSS BKPM</li>
                <li class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary text-[16px]">check_circle</span> Rekomendasi VISA / ITAS Direksi</li>
              </ul>
            </div>
            <a href="#/konsultasi?layanan=pt-pma" class="w-full py-3 bg-surface-container-high text-on-surface font-label-md font-bold rounded-xl text-center hover:bg-surface-container-highest transition-all">
              Pilih PT PMA
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}
