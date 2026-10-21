/**
 * Navbar & Mobile Drawer Component
 */

export function renderNavbar(activePath = '/') {
  const container = document.getElementById('navbar-container');
  if (!container) return;

  const isActive = (path) => activePath === path || (path !== '/' && activePath.startsWith(path));

  container.innerHTML = `
    <header class="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div class="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="#/" class="flex items-center gap-3 group">
          <img src="assets/logo.png" alt="Logo LEGALTA" class="h-10 w-auto object-contain transition-transform group-hover:scale-105" />
          <div class="flex flex-col justify-center">
            <div class="flex items-center gap-1.5">
              <span class="font-headline-sm text-primary tracking-tight font-bold text-xl leading-none">LEGALTA</span>
              <span class="text-[10px] font-bold text-secondary uppercase bg-secondary-fixed/50 px-1.5 py-0.5 rounded leading-none">ID</span>
            </div>
            <span class="text-[11px] text-on-surface-variant font-medium tracking-wider hidden sm:inline-block mt-1">KESEIMBANGAN • MODERN • ADIL</span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden xl:flex items-center gap-space-md">
          <a class="px-3 py-2 rounded-lg font-label-lg transition-colors ${activePath === '/' ? 'bg-primary-container text-on-primary font-bold' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'}" href="#/">Home</a>
          
          <!-- Layanan Dropdown -->
          <div class="relative group">
            <button class="flex items-center gap-1 px-3 py-2 rounded-lg font-label-lg transition-colors ${activePath.startsWith('/layanan') ? 'bg-primary-container text-on-primary font-bold' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'}" type="button">
              Layanan <span class="material-symbols-outlined text-[18px]">expand_more</span>
            </button>
            <div class="absolute left-0 top-full hidden group-hover:block w-64 pt-2">
              <div class="bg-surface-container-lowest rounded-xl shadow-[0_8px_24px_-4px_rgba(15,23,42,0.08)] p-space-xs border border-surface-container-high">
                <a class="block px-4 py-2.5 rounded-lg font-body-sm transition-colors ${activePath === '/layanan/pendirian' ? 'bg-primary-container text-on-primary font-bold' : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'}" href="#/layanan/pendirian">Pendirian Badan Usaha</a>
                <a class="block px-4 py-2.5 rounded-lg font-body-sm transition-colors ${activePath === '/layanan/perizinan' ? 'bg-primary-container text-on-primary font-bold' : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'}" href="#/layanan/perizinan">Perizinan Usaha</a>
                <a class="block px-4 py-2.5 rounded-lg font-body-sm transition-colors ${activePath === '/layanan/dokumen' ? 'bg-primary-container text-on-primary font-bold' : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'}" href="#/layanan/dokumen">Dokumen Perusahaan</a>
                <a class="block px-4 py-2.5 rounded-lg font-body-sm transition-colors ${activePath === '/layanan/hki' ? 'bg-primary-container text-on-primary font-bold' : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'}" href="#/layanan/hki">Pendaftaran HKI</a>
              </div>
            </div>
          </div>

          <!-- Tools Legalitas Dropdown -->
          <div class="relative group">
            <button class="flex items-center gap-1 px-3 py-2 rounded-lg font-label-lg transition-colors ${activePath.startsWith('/tools') ? 'bg-primary-container text-on-primary font-bold' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'}" type="button">
              Tools Legalitas <span class="material-symbols-outlined text-[18px]">expand_more</span>
            </button>
            <div class="absolute left-0 top-full hidden group-hover:block w-60 pt-2">
              <div class="bg-surface-container-lowest rounded-xl shadow-[0_8px_24px_-4px_rgba(15,23,42,0.08)] p-space-xs border border-surface-container-high">
                <a class="block px-4 py-2.5 rounded-lg font-body-sm transition-colors ${activePath === '/tools/cek-pt' ? 'bg-primary-container text-on-primary font-bold' : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'}" href="#/tools/cek-pt">Cek Nama PT</a>
                <a class="block px-4 py-2.5 rounded-lg font-body-sm transition-colors ${activePath === '/tools/cek-merek' ? 'bg-primary-container text-on-primary font-bold' : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'}" href="#/tools/cek-merek">Cek Nama Merek</a>
                <a class="block px-4 py-2.5 rounded-lg font-body-sm transition-colors ${activePath === '/tools/cek-kbli' ? 'bg-primary-container text-on-primary font-bold' : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'}" href="#/tools/cek-kbli">Cek KBLI 2020</a>
              </div>
            </div>
          </div>

          <a class="px-3 py-2 rounded-lg font-label-lg transition-colors flex items-center gap-1.5 ${activePath === '/tracking' ? 'bg-primary-container text-on-primary font-bold' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'}" href="#/tracking">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Tracking Order</span>
          </a>

          <a class="px-3 py-2 rounded-lg font-label-lg transition-colors ${activePath === '/tentang-kami' ? 'bg-primary-container text-on-primary font-bold' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'}" href="#/tentang-kami">Tentang Kami</a>
          <a class="px-3 py-2 rounded-lg font-label-lg transition-colors ${activePath === '/kontak' ? 'bg-primary-container text-on-primary font-bold' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'}" href="#/kontak">Kontak</a>
        </nav>

        <div class="flex items-center gap-space-sm">
          <a class="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-primary text-on-primary font-label-lg rounded-full shadow-[0_1px_3px_rgba(15,23,42,0.04)] hover:bg-primary-container hover:text-on-primary transition-all font-bold" href="#/konsultasi">Konsultasi Gratis</a>
          <button id="mobileMenuToggle" class="xl:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors" aria-label="Buka Menu">
            <span class="material-symbols-outlined text-[26px]">menu</span>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Overlay & Drawer -->
    <div id="mobileOverlay" class="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 hidden opacity-0 transition-opacity duration-300"></div>
    <div id="mobileDrawer" class="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-surface-container-lowest shadow-2xl z-50 transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col justify-between overflow-y-auto">
      <div class="p-6">
        <div class="flex items-center justify-between pb-6 border-b border-surface-container-high">
          <div class="flex items-center gap-2.5">
            <img src="assets/logo.png" alt="Logo LEGALTA" class="h-9 w-auto object-contain" />
            <span class="font-headline-sm font-bold text-primary tracking-tight text-lg">LEGALTA</span>
          </div>
          <button id="closeMobileDrawer" class="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container" aria-label="Tutup Menu">
            <span class="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        <div class="py-4 space-y-1">
          <a href="#/" class="block px-4 py-2.5 rounded-lg font-label-lg text-on-surface hover:bg-surface-container transition-colors ${activePath === '/' ? 'text-primary font-bold bg-primary-fixed/30' : ''}">Home</a>
          
          <div>
            <button type="button" class="mobile-accordion-btn w-full flex items-center justify-between px-4 py-2.5 rounded-lg font-label-lg text-on-surface hover:bg-surface-container transition-colors">
              <span>Layanan</span>
              <span class="material-symbols-outlined text-[20px] transition-transform">expand_more</span>
            </button>
            <div class="mobile-accordion-content hidden pl-4 pt-1 space-y-1">
              <a href="#/layanan/pendirian" class="block px-4 py-2 rounded-lg font-body-sm text-on-surface-variant hover:bg-surface-container">Pendirian Badan Usaha</a>
              <a href="#/layanan/perizinan" class="block px-4 py-2 rounded-lg font-body-sm text-on-surface-variant hover:bg-surface-container">Perizinan Usaha</a>
              <a href="#/layanan/dokumen" class="block px-4 py-2 rounded-lg font-body-sm text-on-surface-variant hover:bg-surface-container">Dokumen Perusahaan</a>
              <a href="#/layanan/hki" class="block px-4 py-2 rounded-lg font-body-sm text-on-surface-variant hover:bg-surface-container">Pendaftaran HKI</a>
            </div>
          </div>

          <div>
            <button type="button" class="mobile-accordion-btn w-full flex items-center justify-between px-4 py-2.5 rounded-lg font-label-lg text-on-surface hover:bg-surface-container transition-colors">
              <span>Tools Legalitas</span>
              <span class="material-symbols-outlined text-[20px] transition-transform">expand_more</span>
            </button>
            <div class="mobile-accordion-content hidden pl-4 pt-1 space-y-1">
              <a href="#/tools/cek-pt" class="block px-4 py-2 rounded-lg font-body-sm text-on-surface-variant hover:bg-surface-container">Cek Nama PT</a>
              <a href="#/tools/cek-merek" class="block px-4 py-2 rounded-lg font-body-sm text-on-surface-variant hover:bg-surface-container">Cek Nama Merek</a>
              <a href="#/tools/cek-kbli" class="block px-4 py-2 rounded-lg font-body-sm text-on-surface-variant hover:bg-surface-container">Cek KBLI 2020</a>
            </div>
          </div>

          <a href="#/tracking" class="flex items-center justify-between px-4 py-2.5 rounded-lg font-label-lg text-on-surface hover:bg-surface-container transition-colors ${activePath === '/tracking' ? 'text-primary font-bold bg-primary-fixed/30' : ''}">
            <span>Tracking Order</span>
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
          </a>

          <a href="#/tentang-kami" class="block px-4 py-2.5 rounded-lg font-label-lg text-on-surface hover:bg-surface-container transition-colors ${activePath === '/tentang-kami' ? 'text-primary font-bold bg-primary-fixed/30' : ''}">Tentang Kami</a>
          <a href="#/kontak" class="block px-4 py-2.5 rounded-lg font-label-lg text-on-surface hover:bg-surface-container transition-colors ${activePath === '/kontak' ? 'text-primary font-bold bg-primary-fixed/30' : ''}">Kontak</a>
        </div>
      </div>
      <div class="p-6 border-t border-surface-container-high bg-surface-container-low">
        <a href="#/konsultasi" class="block w-full py-3 bg-primary text-on-primary font-label-lg rounded-xl text-center shadow-md hover:bg-primary-container transition-all font-bold">Konsultasi Gratis</a>
      </div>
    </div>
  `;

  // Attach mobile drawer interactions
  const menuToggle = document.getElementById('mobileMenuToggle');
  const closeDrawer = document.getElementById('closeMobileDrawer');
  const overlay = document.getElementById('mobileOverlay');
  const drawer = document.getElementById('mobileDrawer');

  function openMenu() {
    overlay.classList.remove('hidden');
    setTimeout(() => {
      overlay.classList.remove('opacity-0');
      drawer.classList.remove('translate-x-full');
    }, 10);
  }

  function closeMenu() {
    overlay.classList.add('opacity-0');
    drawer.classList.add('translate-x-full');
    setTimeout(() => {
      overlay.classList.add('hidden');
    }, 300);
  }

  menuToggle?.addEventListener('click', openMenu);
  closeDrawer?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);

  // Close drawer on link click
  drawer?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Accordion toggle in mobile drawer
  drawer?.querySelectorAll('.mobile-accordion-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const icon = this.querySelector('.material-symbols-outlined');
      if (content) {
        content.classList.toggle('hidden');
        if (icon) {
          icon.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
        }
      }
    });
  });
}
