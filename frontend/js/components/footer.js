/**
 * Footer Component
 * Update: Logo asli, slogan "Aksesibel untuk Semua", deskripsi akurat, "Tools Legalitas", Catatan Penting, dan penghapusan badge Peradi & INI.
 */

export function renderFooter() {
  const container = document.getElementById('footer-container');
  if (!container) return;

  container.innerHTML = `
    <footer class="w-full text-white border-t-[3px] border-[#E8C26A] relative overflow-hidden" style="background: radial-gradient(circle at 100% 100%, #4A0E11 0%, #0F172A 60%, #020617 100%);">
      <!-- Top luxury accent line -->
      <div class="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-crimson-800 via-gold-500 to-crimson-800"></div>

      <!-- Subtle decorative glow -->
      <div class="absolute -top-24 left-1/4 w-96 h-96 bg-crimson-900/20 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-24 sm:pb-14 relative z-10">
        <!-- Main 12-Column Footer Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          <!-- Col 1: Brand Identity (4 Cols) -->
          <div class="lg:col-span-4 space-y-5 pr-0 lg:pr-6">
            <a href="#/" class="inline-flex items-center gap-3.5 group">
              <div class="h-11 w-11 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <!-- Memanggil logo HUKUMTA yang asli -->
                <img src="assets/logo.png" alt="Logo HUKUMTA" class="h-full w-full object-contain" onerror="this.outerHTML='<span class=\\'text-crimson-800 font-black text-xl tracking-tighter\\'>H</span>'" />
              </div>
              <div class="flex flex-col">
                <span class="font-extrabold text-2xl text-white tracking-tight leading-none">HUKUMTA</span>
                <span class="text-[10px] text-[#E8C26A] font-black uppercase tracking-[0.15em] mt-1.5">
                  Aksesibel untuk Semua
                </span>
              </div>
            </a>

            <p class="text-sm text-slate-300 leading-relaxed font-medium text-justify lg:text-left">
              HUKUMTA adalah platform legaltech yang membantu masyarakat Indonesia mengurus legalitas dengan cepat, transparan, dan terpercaya. Mulai dari pendirian Perseroan Terbatas dan Persekutuan Komanditer, pengurusan perizinan berusaha melalui Online Single Submission, sampai pendaftaran dan perlindungan merek sebagai bagian dari Hak Kekayaan Intelektual.
            </p>
          </div>

          <!-- Col 2: Layanan Legalitas (3 Cols) -->
          <div class="lg:col-span-3 space-y-4">
            <h4 class="text-sm font-extrabold uppercase tracking-wider text-white">Layanan Legalitas</h4>
            <ul class="space-y-3.5 text-sm font-medium text-slate-300">
              <li>
                <a href="#/layanan/pendirian" class="hover:text-[#E8C26A] hover:translate-x-1 transition-all inline-flex items-center gap-2.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-crimson-600"></span>
                  <span>Pendirian PT &amp; CV Resmi</span>
                </a>
              </li>
              <li>
                <a href="#/layanan/pendirian" class="hover:text-[#E8C26A] hover:translate-x-1 transition-all inline-flex items-center gap-2.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-crimson-600"></span>
                  <span>PT Perorangan &amp; PT PMA</span>
                </a>
              </li>
              <li>
                <a href="#/layanan/perizinan" class="hover:text-[#E8C26A] hover:translate-x-1 transition-all inline-flex items-center gap-2.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-crimson-600"></span>
                  <span>Perizinan OSS RBA &amp; PB-UMKU</span>
                </a>
              </li>
              <li>
                <a href="#/layanan/hki" class="hover:text-[#E8C26A] hover:translate-x-1 transition-all inline-flex items-center gap-2.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-crimson-600"></span>
                  <span>Pendaftaran Merek, Cipta &amp; Paten</span>
                </a>
              </li>
              <li>
                <a href="#/layanan/dokumen" class="hover:text-[#E8C26A] hover:translate-x-1 transition-all inline-flex items-center gap-2.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-crimson-600"></span>
                  <span>Perubahan Akta &amp; RUPS Notariil</span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Col 3: Tools Legalitas (2 Cols) -->
          <div class="lg:col-span-2 space-y-4">
            <h4 class="text-sm font-extrabold uppercase tracking-wider text-white">Tools Legalitas</h4>
            <ul class="space-y-3.5 text-sm font-medium text-slate-300">
              <li>
                <a href="#/tools/cek-pt" class="hover:text-[#E8C26A] hover:translate-x-1 transition-all inline-block">
                  Validasi Nama PT AHU
                </a>
              </li>
              <li>
                <a href="#/tools/cek-merek" class="hover:text-[#E8C26A] hover:translate-x-1 transition-all inline-block">
                  Cek Database PDKI Merek
                </a>
              </li>
              <li>
                <a href="#/tools/cek-kbli" class="hover:text-[#E8C26A] hover:translate-x-1 transition-all inline-block">
                  Katalog KBLI 2020 Terpadu
                </a>
              </li>
              <li>
                <a href="#/tracking" class="hover:text-[#E8C26A] hover:translate-x-1 transition-all inline-flex items-center gap-2.5">
                  <span>Live Tracking Order</span>
                  <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </a>
              </li>
              <li>
                <a href="#/konsultasi" class="hover:text-[#E8C26A] hover:translate-x-1 transition-all inline-block">
                  Kalkulator Biaya Legalitas
                </a>
              </li>
            </ul>
          </div>

          <!-- Col 4: Kantor & Kontak (3 Cols) -->
          <div class="lg:col-span-3 space-y-4">
            <h4 class="text-sm font-extrabold uppercase tracking-wider text-white">Kantor &amp; Kontak</h4>
            <ul class="space-y-4 text-sm font-medium text-slate-300">
              <li class="flex items-start gap-3">
                <i data-lucide="map-pin" class="w-5 h-5 text-crimson-500 shrink-0 mt-0.5"></i>
                <span class="leading-relaxed">
                  <strong class="text-white block mb-0.5">Pusat Operasional HUKUMTA</strong>
                  Jl. Perintis Kemerdekaan Km. 10, Tamalanrea Indah, Kec. Tamalanrea, Kota Makassar, Sulawesi Selatan 90245
                </span>
              </li>
              <li class="flex items-center gap-3">
                <i data-lucide="mail" class="w-5 h-5 text-crimson-500 shrink-0"></i>
                <a href="mailto:legalta.app@gmail.com" class="hover:text-[#E8C26A] transition-colors">legalta.app@gmail.com</a>
              </li>
              <li class="flex items-center gap-3">
                <div class="w-5 h-5 flex items-center justify-center text-emerald-500 shrink-0">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.175.58 4.218 1.597 5.986l-1.605 5.856 6.035-1.583c1.705.93 3.655 1.47 5.728 1.47 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/>
                  </svg>
                </div>
                <!-- Pastikan mengisi link wa.me dengan nomor perusahaan -->
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" class="hover:text-emerald-400 transition-colors">Chat WhatsApp Resmi</a>
              </li>
            </ul>
          </div>

        </div>

        <!-- Bottom Bar: Copyright & Links -->
        <div class="pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 text-sm text-slate-400">
          <p class="font-medium text-slate-300">&copy; 2026 HUKUMTA Technology Indonesia. Seluruh hak cipta dilindungi undang-undang.</p>
          <div class="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#/tentang-kami" class="hover:text-white transition-colors">Tentang Kami</a>
            <a href="#/kontak" class="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#/kontak" class="hover:text-white transition-colors">Syarat &amp; Ketentuan</a>
            <a href="#/tracking" class="hover:text-white transition-colors">Status Permohonan</a>
          </div>
        </div>

        <!-- Legal Disclaimer Note -->
        <div class="mt-8 text-xs text-slate-500/80 leading-relaxed font-medium text-justify lg:text-left">
          <strong>Catatan Penting:</strong> HUKUMTA adalah platform teknologi hukum. Pembuatan akta otentik dilakukan oleh notaris yang berwenang, dan nasihat hukum diberikan oleh pihak yang berwenang di bidangnya. Informasi di situs ini bersifat umum dan tidak menggantikan nasihat hukum.
        </div>
      </div>
    </footer>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }
}