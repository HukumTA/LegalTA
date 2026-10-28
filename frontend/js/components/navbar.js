/**
 * Navbar & Mobile Drawer Component
 * Matches HUKUMTA Modern Reference Design (Sticky Header, Dropdowns with Icons, Capsule CTA)
 * Includes hard safeguard against initial load mobile/tablet popup flash.
 */

export function renderNavbar(activePath = '/') {
  const container = document.getElementById('navbar-container');
  if (!container) return;

  container.innerHTML = `
    <header class="w-full bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm transition-all">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <!-- Kiri: Logo & Tagline -->
        <a href="#/" class="flex items-center gap-3 group">
          <img src="assets/logo.png" alt="HUKUMTA Logo" class="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          <div class="flex flex-col">
            <div class="flex items-center gap-1.5">
              <span class="font-extrabold text-2xl tracking-tight text-slate-900 leading-tight">HUKUMTA</span>
              <span class="text-[10px] font-bold text-crimson-800 uppercase bg-crimson-50 border border-crimson-100 px-1.5 py-0.5 rounded leading-none">ID</span>
            </div>
            <span class="text-[10px] font-semibold tracking-wider uppercase text-slate-500">Aksesibel untuk semua</span>
          </div>
        </a>

        <!-- Tengah: Link Navigasi Desktop -->
        <nav class="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
          <a href="#/" class="${activePath === '/' ? 'text-crimson-800 font-bold' : 'hover:text-crimson-800'} transition-colors">Home</a>
          
          <!-- Dropdown Layanan -->
          <div class="relative nav-dropdown-group group py-2">
            <button type="button" class="dropdown-trigger flex items-center gap-1.5 ${activePath.startsWith('/layanan') ? 'text-crimson-800 font-bold' : 'hover:text-crimson-800'} transition-colors focus:outline-none" aria-haspopup="true">
              <span>Layanan</span>
              <i data-lucide="chevron-down" class="dropdown-chevron w-4 h-4 text-slate-400 group-hover:text-crimson-800 transition-transform duration-200"></i>
            </button>
            <div class="nav-dropdown-panel absolute top-full left-0 pt-2 w-72 z-50">
              <div class="bg-white rounded-2xl shadow-2xl border border-slate-100 py-2.5 overflow-hidden">
                <a href="#/layanan/pendirian" class="flex items-center gap-3 px-4 py-2.5 text-xs ${activePath === '/layanan/pendirian' ? 'bg-crimson-50/70 text-crimson-800 font-bold' : 'text-slate-700 hover:bg-slate-50 hover:text-crimson-800'} transition-colors">
                  <div class="w-8 h-8 rounded-lg bg-crimson-50 flex items-center justify-center text-crimson-700 shrink-0">
                    <i data-lucide="building-2" class="w-4 h-4"></i>
                  </div>
                  <div>
                    <span class="block font-semibold text-slate-900">Pendirian PT &amp; CV</span>
                    <span class="text-[11px] text-slate-400">PT Umum, Perorangan &amp; PMA</span>
                  </div>
                </a>
                <a href="#/layanan/hki" class="flex items-center gap-3 px-4 py-2.5 text-xs ${activePath === '/layanan/hki' ? 'bg-crimson-50/70 text-crimson-800 font-bold' : 'text-slate-700 hover:bg-slate-50 hover:text-crimson-800'} transition-colors">
                  <div class="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-gold-600 shrink-0">
                    <i data-lucide="shield-check" class="w-4 h-4"></i>
                  </div>
                  <div>
                    <span class="block font-semibold text-slate-900">Pendaftaran HKI &amp; Merek</span>
                    <span class="text-[11px] text-slate-400">Merek Dagang, Cipta &amp; Paten</span>
                  </div>
                </a>
                <a href="#/layanan/perizinan" class="flex items-center gap-3 px-4 py-2.5 text-xs ${activePath === '/layanan/perizinan' ? 'bg-crimson-50/70 text-crimson-800 font-bold' : 'text-slate-700 hover:bg-slate-50 hover:text-crimson-800'} transition-colors">
                  <div class="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <i data-lucide="file-check" class="w-4 h-4"></i>
                  </div>
                  <div>
                    <span class="block font-semibold text-slate-900">Perizinan Usaha OSS &amp; PB-UMKU</span>
                    <span class="text-[11px] text-slate-400">NIB RBA, BPOM, Halal &amp; PKKPR</span>
                  </div>
                </a>
                <a href="#/layanan/dokumen" class="flex items-center gap-3 px-4 py-2.5 text-xs ${activePath === '/layanan/dokumen' ? 'bg-crimson-50/70 text-crimson-800 font-bold' : 'text-slate-700 hover:bg-slate-50 hover:text-crimson-800'} transition-colors">
                  <div class="w-8 h-8 rounded-lg bg-crimson-50 flex items-center justify-center text-crimson-800 shrink-0">
                    <i data-lucide="file-signature" class="w-4 h-4"></i>
                  </div>
                  <div>
                    <span class="block font-semibold text-slate-900">Dokumen Perusahaan &amp; RUPS</span>
                    <span class="text-[11px] text-slate-400">Perubahan Akta &amp; Akuisisi Saham</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <!-- Dropdown Tools Legalitas -->
          <div class="relative nav-dropdown-group group py-2">
            <button type="button" class="dropdown-trigger flex items-center gap-1.5 ${activePath.startsWith('/tools') ? 'text-crimson-800 font-bold' : 'hover:text-crimson-800'} transition-colors focus:outline-none" aria-haspopup="true">
              <span>Tools Legalitas</span>
              <i data-lucide="chevron-down" class="dropdown-chevron w-4 h-4 text-slate-400 group-hover:text-crimson-800 transition-transform duration-200"></i>
            </button>
            <div class="nav-dropdown-panel absolute top-full left-0 pt-2 w-72 z-50">
              <div class="bg-white rounded-2xl shadow-2xl border border-slate-100 py-2.5 overflow-hidden">
                <div class="px-4 py-1.5 mb-1 flex items-center justify-between border-b border-slate-100">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Tools Interaktif</span>
                  <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">Gratis</span>
                </div>
                <a href="#/tools/cek-pt" class="flex items-center gap-3 px-4 py-2.5 text-xs ${activePath === '/tools/cek-pt' ? 'bg-crimson-50/70 text-crimson-800 font-bold' : 'text-slate-700 hover:bg-slate-50 hover:text-crimson-800'} transition-colors">
                  <div class="w-8 h-8 rounded-lg bg-crimson-50 flex items-center justify-center text-crimson-700 shrink-0">
                    <i data-lucide="search" class="w-4 h-4"></i>
                  </div>
                  <div>
                    <span class="block font-semibold text-slate-900">Cek Ketersediaan Nama PT</span>
                    <span class="text-[11px] text-slate-400">Validasi AHU &amp; PP 43/2011</span>
                  </div>
                </a>
                <a href="#/tools/cek-merek" class="flex items-center gap-3 px-4 py-2.5 text-xs ${activePath === '/tools/cek-merek' ? 'bg-crimson-50/70 text-crimson-800 font-bold' : 'text-slate-700 hover:bg-slate-50 hover:text-crimson-800'} transition-colors">
                  <div class="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-gold-600 shrink-0">
                    <i data-lucide="shield-alert" class="w-4 h-4"></i>
                  </div>
                  <div>
                    <span class="block font-semibold text-slate-900">Cek Nama Merek (PDKI)</span>
                    <span class="text-[11px] text-slate-400">Deteksi kemiripan 45 Kelas Nice</span>
                  </div>
                </a>
                <a href="#/tools/cek-kbli" class="flex items-center gap-3 px-4 py-2.5 text-xs ${activePath === '/tools/cek-kbli' ? 'bg-crimson-50/70 text-crimson-800 font-bold' : 'text-slate-700 hover:bg-slate-50 hover:text-crimson-800'} transition-colors">
                  <div class="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <i data-lucide="list-checks" class="w-4 h-4"></i>
                  </div>
                  <div>
                    <span class="block font-semibold text-slate-900">Cek Klasifikasi KBLI 2020</span>
                    <span class="text-[11px] text-slate-400">5 digit KBLI &amp; tingkat risiko OSS</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <a href="#/tracking" class="flex items-center gap-1.5 ${activePath === '/tracking' ? 'text-crimson-800 font-bold' : 'hover:text-crimson-800'} transition-colors">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Live Tracking</span>
          </a>

          <a href="#/tentang-kami" class="${activePath === '/tentang-kami' ? 'text-crimson-800 font-bold' : 'hover:text-crimson-800'} transition-colors">Tentang Kami</a>
          <a href="#/kontak" class="${activePath === '/kontak' ? 'text-crimson-800 font-bold' : 'hover:text-crimson-800'} transition-colors">Kontak</a>
        </nav>

        <!-- Kanan: Tombol Kapsul Merah Gelap & Mobile Menu Button -->
        <div class="flex items-center gap-3">
          <a href="#/konsultasi" class="hidden sm:inline-flex items-center justify-center px-6 py-2.5 bg-crimson-800 hover:bg-crimson-900 text-white font-semibold text-sm rounded-full shadow-md shadow-crimson-800/20 hover:shadow-lg hover:shadow-crimson-800/30 transition-all transform hover:-translate-y-0.5">
            Konsultasi Gratis
          </a>
          <button id="mobileMenuToggle" type="button" class="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors" aria-label="Buka Menu">
            <i data-lucide="menu" class="w-6 h-6"></i>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Overlay & Drawer (Strictly hidden via CSS until .is-open is added) -->
    <div id="mobileOverlay" class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 transition-opacity duration-200"></div>
    <div id="mobileDrawer" class="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 flex-col justify-between overflow-y-auto border-l border-slate-100">
      <div class="p-6">
        <div class="flex items-center justify-between pb-5 border-b border-slate-100">
          <div class="flex items-center gap-2.5">
            <img src="assets/logo.png" alt="Logo HUKUMTA" class="h-9 w-auto object-contain" />
            <div class="flex flex-col">
              <span class="font-extrabold text-lg text-slate-900 tracking-tight leading-none">HUKUMTA</span>
              <span class="text-[9px] font-semibold uppercase tracking-wider text-slate-400 mt-0.5">LegalTech Indonesia</span>
            </div>
          </div>
          <button id="closeMobileDrawer" type="button" class="p-2 rounded-lg text-slate-500 hover:bg-slate-100" aria-label="Tutup Menu">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <div class="py-4 space-y-1">
          <a href="#/" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold ${activePath === '/' ? 'bg-crimson-50 text-crimson-800' : 'text-slate-700 hover:bg-slate-50'}">
            <i data-lucide="home" class="w-4 h-4"></i>
            <span>Home</span>
          </a>
          
          <div>
            <button type="button" class="mobile-accordion-btn w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
              <span class="flex items-center gap-3">
                <i data-lucide="briefcase" class="w-4 h-4 text-crimson-700"></i>
                <span>Layanan Legalitas</span>
              </span>
              <i data-lucide="chevron-down" class="w-4 h-4 text-slate-400 transition-transform"></i>
            </button>
            <div class="mobile-accordion-content hidden pl-9 pr-2 pt-1 space-y-1">
              <a href="#/layanan/pendirian" class="block px-3 py-2 rounded-lg text-xs font-medium text-slate-600 hover:text-crimson-800 hover:bg-slate-50">Pendirian PT &amp; CV</a>
              <a href="#/layanan/hki" class="block px-3 py-2 rounded-lg text-xs font-medium text-slate-600 hover:text-crimson-800 hover:bg-slate-50">Pendaftaran HKI &amp; Merek</a>
              <a href="#/layanan/perizinan" class="block px-3 py-2 rounded-lg text-xs font-medium text-slate-600 hover:text-crimson-800 hover:bg-slate-50">Perizinan OSS &amp; PB-UMKU</a>
              <a href="#/layanan/dokumen" class="block px-3 py-2 rounded-lg text-xs font-medium text-slate-600 hover:text-crimson-800 hover:bg-slate-50">Dokumen Perusahaan &amp; RUPS</a>
            </div>
          </div>

          <div>
            <button type="button" class="mobile-accordion-btn w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
              <span class="flex items-center gap-3">
                <i data-lucide="wrench" class="w-4 h-4 text-gold-600"></i>
                <span>Tools Legalitas</span>
              </span>
              <i data-lucide="chevron-down" class="w-4 h-4 text-slate-400 transition-transform"></i>
            </button>
            <div class="mobile-accordion-content hidden pl-9 pr-2 pt-1 space-y-1">
              <a href="#/tools/cek-pt" class="block px-3 py-2 rounded-lg text-xs font-medium text-slate-600 hover:text-crimson-800 hover:bg-slate-50">Cek Ketersediaan Nama PT</a>
              <a href="#/tools/cek-merek" class="block px-3 py-2 rounded-lg text-xs font-medium text-slate-600 hover:text-crimson-800 hover:bg-slate-50">Cek Kemiripan Merek (PDKI)</a>
              <a href="#/tools/cek-kbli" class="block px-3 py-2 rounded-lg text-xs font-medium text-slate-600 hover:text-crimson-800 hover:bg-slate-50">Kamus KBLI 2020 &amp; Risiko</a>
            </div>
          </div>

          <a href="#/tracking" class="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold ${activePath === '/tracking' ? 'bg-crimson-50 text-crimson-800' : 'text-slate-700 hover:bg-slate-50'}">
            <span class="flex items-center gap-3">
              <i data-lucide="activity" class="w-4 h-4 text-emerald-600"></i>
              <span>Live Tracking Order</span>
            </span>
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          </a>

          <a href="#/tentang-kami" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold ${activePath === '/tentang-kami' ? 'bg-crimson-50 text-crimson-800' : 'text-slate-700 hover:bg-slate-50'}">
            <i data-lucide="users" class="w-4 h-4"></i>
            <span>Tentang Kami</span>
          </a>
          <a href="#/kontak" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold ${activePath === '/kontak' ? 'bg-crimson-50 text-crimson-800' : 'text-slate-700 hover:bg-slate-50'}">
            <i data-lucide="map-pin" class="w-4 h-4"></i>
            <span>Kontak &amp; Kantor SCBD</span>
          </a>
        </div>
      </div>

      <div class="p-6 border-t border-slate-100 bg-slate-50">
        <a href="#/konsultasi" class="block w-full py-3 bg-crimson-800 hover:bg-crimson-900 text-white text-sm font-bold rounded-full text-center shadow-md transition-all">
          Konsultasi Gratis
        </a>
      </div>
    </div>
  `;

  // Desktop dropdown interactions (hover with grace delay + click toggle)
  const dropdownGroups = document.querySelectorAll('.nav-dropdown-group');

  dropdownGroups.forEach(group => {
    const trigger = group.querySelector('.dropdown-trigger');
    const panel = group.querySelector('.nav-dropdown-panel');
    let closeTimer = null;

    // Hover with grace period so trackpad users don't lose hover
    group.addEventListener('mouseenter', () => {
      if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
      }
      group.classList.add('is-hovered');
    });

    group.addEventListener('mouseleave', () => {
      closeTimer = setTimeout(() => {
        group.classList.remove('is-hovered');
      }, 180);
    });

    // Click to lock open/toggle
    trigger?.addEventListener('click', (e) => {
      e.stopPropagation();
      const wasOpen = group.classList.contains('is-open');
      dropdownGroups.forEach(g => g.classList.remove('is-open', 'is-hovered'));
      if (!wasOpen) {
        group.classList.add('is-open');
      }
    });

    // Close when clicking any link inside panel
    panel?.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        dropdownGroups.forEach(g => g.classList.remove('is-open', 'is-hovered'));
      });
    });
  });

  // Close dropdowns on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown-group')) {
      dropdownGroups.forEach(g => g.classList.remove('is-open', 'is-hovered'));
    }
  });

  // Attach mobile drawer interactions
  const menuToggle = document.getElementById('mobileMenuToggle');
  const closeDrawer = document.getElementById('closeMobileDrawer');
  const overlay = document.getElementById('mobileOverlay');
  const drawer = document.getElementById('mobileDrawer');

  function openMenu() {
    overlay?.classList.add('is-open');
    drawer?.classList.add('is-open');
  }

  function closeMenu() {
    overlay?.classList.remove('is-open');
    drawer?.classList.remove('is-open');
  }

  menuToggle?.addEventListener('click', openMenu);
  closeDrawer?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);

  drawer?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  drawer?.querySelectorAll('.mobile-accordion-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const content = this.nextElementSibling;
      if (content) {
        content.classList.toggle('hidden');
      }
    });
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}
