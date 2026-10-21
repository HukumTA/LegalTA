/**
 * Footer Component
 */

export function renderFooter() {
  const container = document.getElementById('footer-container');
  if (!container) return;

  container.innerHTML = `
    <footer class="w-full bg-tertiary text-white pt-16 pb-12 border-t border-surface-container-high/10">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-surface-container-high/10">
          <div class="md:col-span-1 space-y-4">
            <div class="flex items-center gap-3">
              <div class="h-11 w-11 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-md">
                <img src="assets/logo.png" alt="LEGALTA Logo" class="h-full w-full object-contain" />
              </div>
              <span class="font-headline-sm font-bold text-2xl text-white tracking-tight">LEGALTA</span>
            </div>
            <p class="font-body-sm text-tertiary-fixed-dim leading-relaxed">Platform LegalTech modern yang memberikan kepastian hukum bagi pebisnis, UMKM, dan startup di seluruh Indonesia.</p>
            <p class="font-label-sm text-secondary-container font-semibold uppercase tracking-wider">Keseimbangan • Modern • Adil</p>
          </div>
          <div class="space-y-4">
            <h4 class="font-label-sm font-bold uppercase tracking-wider text-tertiary-fixed mb-4">Layanan Utama</h4>
            <ul class="space-y-2.5 font-body-sm text-tertiary-fixed-dim">
              <li><a class="hover:text-white transition-colors" href="#/layanan/pendirian">Pendirian PT &amp; CV</a></li>
              <li><a class="hover:text-white transition-colors" href="#/layanan/perizinan">Perizinan OSS RBA</a></li>
              <li><a class="hover:text-white transition-colors" href="#/layanan/hki">Pendaftaran Merek HKI</a></li>
              <li><a class="hover:text-white transition-colors" href="#/layanan/dokumen">Perubahan Akta &amp; Saham</a></li>
            </ul>
          </div>
          <div class="space-y-4">
            <h4 class="font-label-sm font-bold uppercase tracking-wider text-tertiary-fixed mb-4">Tools Cepat</h4>
            <ul class="space-y-2.5 font-body-sm text-tertiary-fixed-dim">
              <li><a class="hover:text-white transition-colors" href="#/tools/cek-pt">Cek Nama PT Resmi</a></li>
              <li><a class="hover:text-white transition-colors" href="#/tools/cek-merek">Cek Database PDKI Merek</a></li>
              <li><a class="hover:text-white transition-colors" href="#/tools/cek-kbli">Kamus KBLI 2020</a></li>
              <li><a class="hover:text-white transition-colors" href="#/tracking">Live Tracking Order</a></li>
            </ul>
          </div>
          <div class="space-y-4">
            <h4 class="font-label-sm font-bold uppercase tracking-wider text-tertiary-fixed mb-4">Hubungi Kami</h4>
            <ul class="space-y-3 font-body-sm text-tertiary-fixed-dim">
              <li class="flex items-center gap-2.5"><span class="material-symbols-outlined text-[18px] text-primary-fixed-dim">location_on</span><span>Treasury Tower Lt. 18, SCBD Jakarta Selatan</span></li>
              <li class="flex items-center gap-2.5"><span class="material-symbols-outlined text-[18px] text-primary-fixed-dim">mail</span><span>halo@legalta.id</span></li>
              <li class="flex items-center gap-2.5"><span class="material-symbols-outlined text-[18px] text-primary-fixed-dim">call</span><span>+62 812-8888-0192</span></li>
            </ul>
          </div>
        </div>
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-tertiary-fixed-dim font-body-sm gap-4">
          <p>© 2025 LEGALTA Indonesia. Seluruh hak cipta dilindungi undang-undang.</p>
          <div class="flex gap-6">
            <a class="hover:text-white transition-colors" href="#/tentang-kami">Tentang Kami</a>
            <a class="hover:text-white transition-colors" href="#/kontak">Kontak</a>
            <a class="hover:text-white transition-colors" href="#/tracking">Status Permohonan</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
