/**
 * LEGALTA - Single Page Application (SPA) Core Router & Controller
 * Architecture: Monorepo Frontend Client (Single HTML entry point)
 */

import { renderNavbar } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { showToast } from './components/toast.js';

import { renderHomeView } from './views/homeView.js';
import { renderPendirianView } from './views/pendirianView.js';
import { renderPerizinanView } from './views/perizinanView.js';
import { renderDokumenView } from './views/dokumenView.js';
import { renderHkiView } from './views/hkiView.js';
import { renderCekPtView, initCekPtLogic } from './views/cekPtView.js';
import { renderCekMerekView, initCekMerekLogic } from './views/cekMerekView.js';
import { renderCekKbliView, initCekKbliLogic } from './views/cekKbliView.js';
import { renderTrackingView, initTrackingLogic } from './views/trackingView.js';
import { renderTentangView } from './views/tentangView.js';
import { renderKonsultasiView, initKonsultasiLogic } from './views/konsultasiView.js';
import { renderKontakView, initKontakLogic } from './views/kontakView.js';

// Route Mapping
const routes = {
  '/': { render: renderHomeView },
  '/layanan/pendirian': { render: renderPendirianView },
  '/layanan/perizinan': { render: renderPerizinanView },
  '/layanan/dokumen': { render: renderDokumenView },
  '/layanan/hki': { render: renderHkiView },
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
  // Remove query string if any for route matching
  const path = hash.split('?')[0];
  return path.startsWith('/') ? path : '/' + path;
}

export function navigateTo(path) {
  window.location.hash = path;
}

function handleRoute() {
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

  // Run lifecycle init logic if exists
  if (route.init) {
    try {
      route.init();
    } catch (e) {
      console.error('[SPA Route Init Error]', e);
    }
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// App Initialization
window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
  console.log('[LEGALTA SPA] Monorepo frontend initialized successfully.');
});
