/**
 * HUKUMTA - Single Page Application (SPA) Core Router & Controller
 * Architecture: Monorepo Frontend Client (Single HTML entry point)
 */

import { renderNavbar } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { showToast } from './components/toast.js';

import { renderHomeView, initHomeLogic } from './views/homeView.js';
import { renderPendirianView, initPendirianLogic } from './views/pendirianView.js';
import { renderPerizinanView, initPerizinanLogic } from './views/perizinanView.js';
import { renderDokumenView, initDokumenLogic } from './views/dokumenView.js';
import { renderHkiView, initHkiLogic } from './views/hkiView.js';
import { renderCekPtView, initCekPtLogic } from './views/cekPtView.js';
import { renderCekMerekView, initCekMerekLogic } from './views/cekMerekView.js';
import { renderCekKbliView, initCekKbliLogic } from './views/cekKbliView.js';
import { renderTrackingView, initTrackingLogic } from './views/trackingView.js';
import { renderTentangView } from './views/tentangView.js';
import { renderKonsultasiView, initKonsultasiLogic } from './views/konsultasiView.js';
import { renderKontakView, initKontakLogic } from './views/kontakView.js';

// Route Mapping
const routes = {
  '/': { render: renderHomeView, init: initHomeLogic },
  '/layanan/pendirian': { render: renderPendirianView, init: initPendirianLogic },
  '/layanan/perizinan': { render: renderPerizinanView, init: initPerizinanLogic },
  '/layanan/dokumen': { render: renderDokumenView, init: initDokumenLogic },
  '/layanan/hki': { render: renderHkiView, init: initHkiLogic },
  '/tools/cek-pt': { render: renderCekPtView, init: initCekPtLogic },
  '/tools/cek-merek': { render: renderCekMerekView, init: initCekMerekLogic },
  '/tools/cek-kbli': { render: renderKbliRouter, init: initCekKbliLogic },
  '/tracking': { render: renderTrackingView, init: initTrackingLogic },
  '/tentang-kami': { render: renderTentangView },
  '/konsultasi': { render: renderKonsultasiView, init: initKonsultasiLogic },
  '/kontak': { render: renderKontakView, init: initKontakLogic }
};

function renderKbliRouter() {
  return renderCekKbliView();
}

function parseCurrentHash() {
  let hash = window.location.hash.slice(1); // remove '#'
  if (!hash || hash === '') {
    hash = '/';
  }
  // Support in-page anchor hashes on home (e.g., #simulasi-tools, #kenapa-legalta)
  if (!hash.startsWith('/')) {
    return '/';
  }
  // Remove query string if any for route matching
  const path = hash.split('?')[0];
  return path.startsWith('/') ? path : '/' + path;
}

export function navigateTo(path) {
  window.location.hash = path;
}

function initGlobalInteractiveElements() {
  // Initialize Lucide icons across the DOM
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Attach FAQ Accordion toggles
  document.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', function () {
      const item = this.closest('.faq-item');
      if (!item) return;
      const isOpen = item.classList.contains('active');
      // Close siblings in same container
      const parent = item.parentElement;
      if (parent) {
        parent.querySelectorAll('.faq-item.active').forEach(el => {
          if (el !== item) el.classList.remove('active');
        });
      }
      item.classList.toggle('active', !isOpen);
    });
  });

  // Smooth scroll for in-page section buttons (data-scroll-to="...")
  document.querySelectorAll('[data-scroll-to]').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-scroll-to');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function handleRoute() {
  const rawHash = window.location.hash.slice(1);
  // If user clicked an in-page section anchor like #simulasi-tools while already rendered
  if (rawHash && !rawHash.startsWith('/')) {
    const targetEl = document.getElementById(rawHash);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
  }

  const path = parseCurrentHash();
  const route = routes[path] || routes['/'];

  // Update navbar & active indicators
  renderNavbar(path);

  // Render view into main app container
  const appContainer = document.getElementById('app');
  if (appContainer) {
    appContainer.innerHTML = route.render();
  }

  // Render footer
  renderFooter();

  // Initialize global icons & accordions
  initGlobalInteractiveElements();

  // Run lifecycle init logic if exists
  if (route.init) {
    try {
      route.init();
    } catch (e) {
      console.error('[SPA Route Init Error]', e);
    }
  }

  // Scroll to top on route change
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Reveal body once initial route and Tailwind styles are mounted
  requestAnimationFrame(() => {
    document.body.classList.add('app-ready');
  });
}

// App Initialization
window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
  console.log('[HUKUMTA SPA] Monorepo frontend initialized successfully.');
});
