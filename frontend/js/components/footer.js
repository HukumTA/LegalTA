/**
 * Footer Component
 * Redesigned with balanced 12-column placement, comfortable & readable font sizes (text-sm / text-base),
 * certified partner badge, and bottom spacing clearance for the floating WhatsApp button.
 */

export function renderFooter() {
  const container = document.getElementById('footer-container');
  if (!container) return;

  container.innerHTML = `
    <footer class="w-full bg-slate-900 text-white border-t border-slate-800 relative overflow-hidden">
      <!-- Top luxury accent line -->
      <div class="h-1 w-full bg-gradient-to-r from-crimson-800 via-gold-500 to-crimson-800"></div>

      <!-- Subtle decorative glow -->
      <div class="absolute -top-24 left-1/4 w-96 h-96 bg-crimson-900/20 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-24 sm:pb-14 relative z-10">
        <!-- Main 12-Column Footer Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          <!-- Col 1: Brand Identity (4 Cols) -->
          <div class="lg:col-span-4 space-y-5 pr-0 lg:pr-6">
            <a href="#/" class="inline-flex items-center gap-3.5 group">
              <div class="h-11 w-11 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <img src="assets/logo.png" alt="LEGALTA Logo" class="h-full w-full object-contain" />
              </div>
              <div class="flex flex-col">
                <span class="font-extrabold text-2xl text-white tracking-tight leading-none">LEGALTA</span>
                <span class="text-xs text-gold-400 font-bold uppercase tracking-wider mt-1">
                  Keseimbangan • Modern • Adil
                </span>
              </div>
            </a>

            <p class="text-sm text-slate-300 leading-relaxed">
              Platform otomasi hukum dan perizinan korporasi terintegrasi. Menyeimbangkan kepatuhan regulasi dengan kecepatan operasional bisnis modern di seluruh Indonesia.
            </p>

            <div class="pt-1">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/25 text-gold-400 text-xs font-bold tracking-wide">
                <i data-lucide="award" class="w-4 h-4 text-gold-400"></i>
                <span>Peradi &amp; INI Certified Partners</span>
              </div>
            </div>
          </div>

          <!-- Col 2: Layanan Legalitas (3 Cols) -->
          <div class="lg:col-span-3 space-y-4">
            <h4 class="text-sm font-bold uppercase tracking-wider text-white">Layanan Legalitas</h4>
            <ul class="space-y-3 text-sm text-slate-300">
              <li>
                <a href="#/layanan/pendirian" class="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-crimson-500"></span>
                  <span>Pendirian PT &amp; CV Resmi</span>
                </a>
              </li>
              <li>
                <a href="#/layanan/pendirian" class="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-crimson-500"></span>
                  <span>PT Perorangan &amp; PT PMA</span>
                </a>
              </li>
              <li>
                <a href="#/layanan/perizinan" class="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-crimson-500"></span>
                  <span>Perizinan OSS RBA &amp; PB-UMKU</span>
                </a>
              </li>
              <li>
                <a href="#/layanan/hki" class="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-crimson-500"></span>
                  <span>Pendaftaran Merek, Cipta &amp; Paten</span>
                </a>
              </li>
              <li>
                <a href="#/layanan/dokumen" class="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-crimson-500"></span>
                  <span>Perubahan Akta &amp; RUPS Notariil</span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Col 3: Tools Mandiri (2 Cols) -->
          <div class="lg:col-span-2 space-y-4">
            <h4 class="text-sm font-bold uppercase tracking-wider text-white">Tools Mandiri</h4>
            <ul class="space-y-3 text-sm text-slate-300">
              <li>
                <a href="#/tools/cek-pt" class="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Validasi Nama PT AHU
                </a>
              </li>
              <li>
                <a href="#/tools/cek-merek" class="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Cek Database PDKI Merek
                </a>
              </li>
              <li>
                <a href="#/tools/cek-kbli" class="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Katalog KBLI 2020 Terpadu
                </a>
              </li>
              <li>
                <a href="#/tracking" class="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2">
                  <span>Live Tracking Order</span>
                  <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </a>
              </li>
              <li>
                <a href="#/konsultasi" class="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Kalkulator Biaya Legalitas
                </a>
              </li>
            </ul>
          </div>

          <!-- Col 4: Kantor & Kontak (3 Cols) -->
          <div class="lg:col-span-3 space-y-4">
            <h4 class="text-sm font-bold uppercase tracking-wider text-white">Kantor &amp; Kontak</h4>
            <ul class="space-y-3.5 text-sm text-slate-300">
              <li class="flex items-start gap-3">
                <i data-lucide="map-pin" class="w-5 h-5 text-crimson-500 shrink-0 mt-0.5"></i>
                <span class="leading-relaxed">
                  Treasury Tower Lt. 18, District 8 SCBD,<br/>
                  Jl. Jend. Sudirman Kav. 52–53, Jakarta Selatan 12190
                </span>
              </li>
              <li class="flex items-center gap-3">
                <i data-lucide="mail" class="w-5 h-5 text-crimson-500 shrink-0"></i>
                <a href="mailto:halo@legalta.id" class="hover:text-white transition-colors">halo@legalta.id</a>
              </li>
              <li class="flex items-center gap-3">
                <i data-lucide="phone" class="w-5 h-5 text-crimson-500 shrink-0"></i>
                <a href="https://wa.me/6281288880192" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors font-medium">+62 812-8888-0192</a>
              </li>
            </ul>
          </div>

        </div>

        <!-- Bottom Bar: Copyright & Links (Padded on right for desktop so floating WA button never covers links) -->
        <div class="pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 text-sm text-slate-400 lg:pr-52">
          <p class="font-medium text-slate-300">&copy; 2025 LEGALTA Technology Indonesia. Seluruh hak cipta dilindungi undang-undang.</p>
          <div class="flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <a href="#/tentang-kami" class="hover:text-white transition-colors">Tentang Kami</a>
            <a href="#/kontak" class="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#/kontak" class="hover:text-white transition-colors">Syarat &amp; Ketentuan</a>
            <a href="#/tracking" class="hover:text-white transition-colors">Status Permohonan</a>
          </div>
        </div>

        <!-- Legal Disclaimer Note -->
        <div class="mt-6 pt-5 border-t border-slate-800/80 text-xs text-slate-400 leading-relaxed lg:pr-52">
          Disclaimer: LEGALTA (PT Legalta Korporasi Indonesia) adalah platform teknologi hukum terintegrasi. Penyusunan akta otentik, pengesahan badan hukum AHU, dan litigasi HKI dilaksanakan langsung oleh jaringan Notaris Rekanan Tersumpah (INI) serta Konsultan HKI &amp; Advokat Terdaftar (PERADI).
        </div>
      </div>
    </footer>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }
}
