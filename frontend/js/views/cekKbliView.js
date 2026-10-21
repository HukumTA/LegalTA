/**
 * View: Cek KBLI 2020 & Risiko OSS-RBA (Public Tool - PP 5/2021)
 * Modernized to match the LEGALTA Crimson/Gold/Slate reference aesthetic.
 */

import { api } from '../api.js';
import { showToast } from '../components/toast.js';

export function renderCekKbliView() {
  return `
    <div class="flex flex-col w-full bg-[#FAFAFC]">
      <!-- Header -->
      <section class="bg-gradient-to-b from-white via-slate-50/40 to-white border-b border-slate-100">
        <div class="max-w-7xl mx-auto px-6 pt-12 pb-12">
          <div class="max-w-3xl space-y-4">
            <div class="inline-flex items-center gap-2 bg-crimson-50 border border-crimson-100 px-3.5 py-1.5 rounded-full text-crimson-800 text-xs font-bold uppercase tracking-wider">
              <i data-lucide="list-checks" class="w-3.5 h-3.5 text-crimson-700"></i>
              <span>Katalog KBLI 2020 Resmi BKPM &amp; OSS RBA</span>
            </div>
            <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-bold tracking-tight leading-tight">
              Pencarian Kode KBLI 2020 &amp; Ketentuan Tingkat Risiko OSS RBA
            </h1>
            <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
              Temukan kode klasifikasi baku lapangan usaha 5 digit yang tepat agar NIB, sertifikat standar, dan izin komersial operasional Anda tidak tertolak.
            </p>
          </div>

          <!-- Search Bar -->
          <div class="mt-8 bg-white p-6 rounded-3xl shadow-xl border border-slate-200/80 space-y-4">
            <div class="flex flex-col lg:flex-row gap-4">
              <div class="relative flex-1">
                <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
                <input type="text" id="kbliInput" placeholder="Cari nama usaha, kata kunci, atau 5-digit angka (cth: Software, Kafe, Konstruksi)..." class="w-full h-12 pl-12 pr-4 bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium rounded-xl outline-none focus:border-crimson-800">
              </div>
              <div class="w-full lg:w-72">
                <select id="kbliSectorSelect" class="w-full h-12 px-4 bg-slate-50 border border-slate-200 text-slate-900 text-sm font-semibold rounded-xl outline-none cursor-pointer focus:border-crimson-800">
                  <option value="all">Semua Sektor Industri</option>
                  <option value="J">Sektor Informasi &amp; Komunikasi (J)</option>
                  <option value="I">Akomodasi &amp; Makan Minum (I)</option>
                  <option value="G">Perdagangan Besar &amp; Eceran (G)</option>
                  <option value="F">Konstruksi &amp; Real Estat (F)</option>
                </select>
              </div>
              <button type="button" id="kbliSearchBtn" class="h-12 px-8 bg-crimson-800 hover:bg-crimson-900 text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-md shadow-crimson-800/20 transition-all shrink-0">
                <i data-lucide="filter" class="w-4 h-4"></i>
                <span>Telusuri</span>
              </button>
            </div>

            <!-- Quick Chips -->
            <div class="flex flex-wrap items-center gap-2 pt-2">
              <span class="text-[11px] uppercase tracking-wider text-slate-400 mr-1 font-bold">Populer:</span>
              <button type="button" class="kbli-chip px-3 py-1 bg-slate-100 hover:bg-crimson-50 hover:text-crimson-800 rounded-full text-xs text-slate-700 transition-colors font-semibold" data-keyword="Software">Aplikasi Bergerak (62019)</button>
              <button type="button" class="kbli-chip px-3 py-1 bg-slate-100 hover:bg-crimson-50 hover:text-crimson-800 rounded-full text-xs text-slate-700 transition-colors font-semibold" data-keyword="Kafe">Kafe / Coffee Shop (56303)</button>
              <button type="button" class="kbli-chip px-3 py-1 bg-slate-100 hover:bg-crimson-50 hover:text-crimson-800 rounded-full text-xs text-slate-700 transition-colors font-semibold" data-keyword="Perdagangan">Perdagangan Besar (46100)</button>
              <button type="button" class="kbli-chip px-3 py-1 bg-slate-100 hover:bg-crimson-50 hover:text-crimson-800 rounded-full text-xs text-slate-700 transition-colors font-semibold" data-keyword="Konstruksi">Gedung Konstruksi (41011)</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Results Grid -->
      <section class="max-w-7xl mx-auto px-6 py-12 w-full">
        <div class="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
          <h2 class="text-xl text-slate-900 font-extrabold">Hasil Penelusuran KBLI</h2>
          <span id="kbliCountBadge" class="text-xs bg-crimson-50 text-crimson-800 border border-crimson-100 px-3.5 py-1 rounded-full font-bold">Memuat...</span>
        </div>
        <div id="kbliListContainer" class="space-y-5"></div>
      </section>
    </div>
  `;
}

export function initCekKbliLogic() {
  const input = document.getElementById('kbliInput');
  const sectorSelect = document.getElementById('kbliSectorSelect');
  const searchBtn = document.getElementById('kbliSearchBtn');
  const countBadge = document.getElementById('kbliCountBadge');
  const listContainer = document.getElementById('kbliListContainer');
  const chips = document.querySelectorAll('.kbli-chip');

  async function fetchKbli(q, sector) {
    listContainer.innerHTML = `<div class="p-8 text-center text-slate-500 text-sm">Memuat data KBLI dari server...</div>`;
    try {
      const response = await api.searchKBLI(q, sector);
      if (response.success) {
        const items = response.data.results;
        countBadge.textContent = `${items.length} Kode Ditemukan`;

        if (items.length === 0) {
          listContainer.innerHTML = `<div class="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">Tidak ada kode KBLI yang cocok dengan kueri "${q}".</div>`;
          return;
        }

        let html = '';
        items.forEach(item => {
          let riskBadgeClass = 'bg-emerald-50 text-emerald-700 border border-emerald-200';
          let riskName = 'Rendah (R)';
          if (item.risk_level === 'MR') {
            riskBadgeClass = 'bg-amber-50 text-gold-700 border border-amber-200';
            riskName = 'Menengah Rendah (MR)';
          } else if (item.risk_level === 'MT') {
            riskBadgeClass = 'bg-orange-50 text-orange-800 border border-orange-200';
            riskName = 'Menengah Tinggi (MT)';
          } else if (item.risk_level === 'T') {
            riskBadgeClass = 'bg-crimson-50 text-crimson-800 border border-crimson-200';
            riskName = 'Tinggi (T)';
          }

          html += `
            <article class="bg-white rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow border border-slate-200/80 space-y-4">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div class="flex flex-wrap items-center gap-2.5">
                  <span class="text-base text-crimson-800 font-black px-3.5 py-1 bg-crimson-50 border border-crimson-100 rounded-xl font-mono">KBLI ${item.code}</span>
                  <span class="text-xs ${riskBadgeClass} px-3 py-1 rounded-full font-bold">Tingkat Risiko: ${riskName}</span>
                  <span class="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-semibold">Kategori ${item.category} — ${item.sector_name}</span>
                </div>
                <button type="button" onclick="navigator.clipboard.writeText('${item.code}'); showGlobalToast('Kode KBLI ${item.code} berhasil disalin!');" class="px-3.5 py-1.5 bg-slate-50 hover:bg-crimson-50 hover:text-crimson-800 text-slate-700 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors self-start sm:self-auto border border-slate-200">
                  <span class="material-symbols-outlined text-[15px]">content_copy</span>
                  <span>Salin Kode</span>
                </button>
              </div>

              <div>
                <h3 class="text-lg text-slate-900 font-extrabold">${item.title}</h3>
                <p class="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">${item.description}</p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <span class="text-[11px] text-crimson-800 uppercase font-extrabold tracking-wider block">Kewajiban Izin Usaha</span>
                  <p class="text-xs sm:text-sm text-slate-800 font-semibold mt-1">${item.permits_required}</p>
                </div>
                <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <span class="text-[11px] text-gold-600 uppercase font-extrabold tracking-wider block">Ketentuan Modal Asing (DPI)</span>
                  <p class="text-xs sm:text-sm text-slate-800 font-semibold mt-1">${item.dpi_rules}</p>
                </div>
              </div>
            </article>
          `;
        });

        listContainer.innerHTML = html;
      }
    } catch (e) {
      showToast('Gagal memuat KBLI: ' + e.message, 'error');
    }
  }

  searchBtn?.addEventListener('click', () => fetchKbli(input.value.trim(), sectorSelect.value));
  input?.addEventListener('input', () => fetchKbli(input.value.trim(), sectorSelect.value));
  sectorSelect?.addEventListener('change', () => fetchKbli(input.value.trim(), sectorSelect.value));

  chips.forEach(chip => {
    chip.addEventListener('click', function() {
      const kw = this.getAttribute('data-keyword');
      input.value = kw;
      fetchKbli(kw, sectorSelect.value);
    });
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }

  fetchKbli('', 'all');
}
