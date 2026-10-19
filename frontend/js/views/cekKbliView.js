/**
 * View: Cek KBLI 2020 & Risiko OSS-RBA (Public Tool - PP 5/2021)
 */

import { api } from '../api.js';
import { showToast } from '../components/toast.js';

export function renderCekKbliView() {
  return `
    <div class="flex flex-col w-full">
      <!-- Header -->
      <section class="max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-8">
        <div class="max-w-4xl space-y-4">
          <div class="inline-flex items-center gap-2 bg-secondary-fixed/40 px-3.5 py-1.5 rounded-full">
            <span class="material-symbols-outlined text-[16px] text-secondary">verified_user</span>
            <span class="font-label-sm text-on-secondary-fixed-variant uppercase tracking-wider font-bold">Katalog KBLI 2020 Resmi BKPM &amp; OSS RBA</span>
          </div>
          <h1 class="font-headline-xl text-primary font-bold tracking-tight">
            Pencarian Kode KBLI 2020 &amp; Ketentuan Tingkat Risiko OSS RBA
          </h1>
          <p class="font-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
            Temukan kode klasifikasi baku lapangan usaha 5 digit yang tepat agar NIB, sertifikat standar, dan izin komersial operasional Anda tidak tertolak.
          </p>
        </div>

        <!-- Search Bar -->
        <div class="mt-8 bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-surface-container-high space-y-4">
          <div class="flex flex-col lg:flex-row gap-4">
            <div class="relative flex-1">
              <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[22px]">search</span>
              <input type="text" id="kbliInput" placeholder="Cari nama usaha, kata kunci, atau 5-digit angka (cth: Software, Kafe, Konstruksi)..." class="w-full h-12 pl-12 pr-4 bg-surface-container-low text-on-surface font-body-md rounded-xl outline-none focus:ring-2 focus:ring-primary/20">
            </div>
            <div class="w-full lg:w-72">
              <select id="kbliSectorSelect" class="w-full h-12 px-4 bg-surface-container-low text-on-surface font-body-md rounded-xl outline-none cursor-pointer">
                <option value="all">Semua Sektor Industri</option>
                <option value="J">Sektor Informasi &amp; Komunikasi (J)</option>
                <option value="I">Akomodasi &amp; Makan Minum (I)</option>
                <option value="G">Perdagangan Besar &amp; Eceran (G)</option>
                <option value="F">Konstruksi &amp; Real Estat (F)</option>
              </select>
            </div>
            <button type="button" id="kbliSearchBtn" class="h-12 px-8 bg-primary hover:bg-primary-container text-on-primary font-label-lg font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all shrink-0">
              <span class="material-symbols-outlined text-[20px]">filter_alt</span>
              <span>Telusuri</span>
            </button>
          </div>

          <!-- Quick Chips -->
          <div class="flex flex-wrap items-center gap-2 pt-2 text-on-surface-variant">
            <span class="font-label-sm uppercase tracking-wider text-outline mr-2 font-bold">Populer:</span>
            <button type="button" class="kbli-chip px-3 py-1 bg-surface-container rounded-full font-label-sm text-on-surface hover:bg-primary-fixed hover:text-primary transition-colors font-medium" data-keyword="Software">Aplikasi Bergerak (62019)</button>
            <button type="button" class="kbli-chip px-3 py-1 bg-surface-container rounded-full font-label-sm text-on-surface hover:bg-primary-fixed hover:text-primary transition-colors font-medium" data-keyword="Kafe">Kafe / Coffee Shop (56303)</button>
            <button type="button" class="kbli-chip px-3 py-1 bg-surface-container rounded-full font-label-sm text-on-surface hover:bg-primary-fixed hover:text-primary transition-colors font-medium" data-keyword="Perdagangan">Perdagangan Besar (46100)</button>
            <button type="button" class="kbli-chip px-3 py-1 bg-surface-container rounded-full font-label-sm text-on-surface hover:bg-primary-fixed hover:text-primary transition-colors font-medium" data-keyword="Konstruksi">Gedung Konstruksi (41011)</button>
          </div>
        </div>
      </section>

      <!-- Results Grid -->
      <section class="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        <div class="flex items-center justify-between pb-4 border-b border-surface-container-high mb-6">
          <h2 class="font-headline-md text-primary font-bold">Hasil Penelusuran KBLI</h2>
          <span id="kbliCountBadge" class="font-label-sm bg-surface-container-high text-on-surface px-3 py-1 rounded-full font-bold">Memuat...</span>
        </div>
        <div id="kbliListContainer" class="space-y-6"></div>
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
    listContainer.innerHTML = `<div class="p-8 text-center text-on-surface-variant font-body-sm">Memuat data KBLI dari server...</div>`;
    try {
      const response = await api.searchKBLI(q, sector);
      if (response.success) {
        const items = response.data.results;
        countBadge.textContent = `${items.length} Ditemukan`;

        if (items.length === 0) {
          listContainer.innerHTML = `<div class="p-8 text-center bg-surface-container-lowest rounded-2xl border border-surface-container-high text-on-surface-variant">Tidak ada kode KBLI yang cocok dengan kueri "${q}".</div>`;
          return;
        }

        let html = '';
        items.forEach(item => {
          let riskBadgeClass = 'bg-[#DCFCE7] text-[#166534]';
          let riskName = 'Rendah (R)';
          if (item.risk_level === 'MR') {
            riskBadgeClass = 'bg-[#FEF3C7] text-[#92400E]';
            riskName = 'Menengah Rendah (MR)';
          } else if (item.risk_level === 'MT') {
            riskBadgeClass = 'bg-[#FFEDD5] text-[#9A3412]';
            riskName = 'Menengah Tinggi (MT)';
          } else if (item.risk_level === 'T') {
            riskBadgeClass = 'bg-error-container text-error';
            riskName = 'Tinggi (T)';
          }

          html += `
            <article class="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 shadow-sm border border-surface-container-high space-y-4">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-surface-container-high">
                <div class="flex flex-wrap items-center gap-3">
                  <span class="font-headline-md text-primary font-bold px-3 py-1 bg-primary-fixed/40 rounded-xl">KBLI ${item.code}</span>
                  <span class="font-label-sm ${riskBadgeClass} px-3 py-1 rounded-full font-bold">Tingkat Risiko: ${riskName}</span>
                  <span class="font-label-sm bg-surface-container text-on-surface-variant px-2.5 py-1 rounded-full font-medium">Kategori ${item.category} — ${item.sector_name}</span>
                </div>
                <button type="button" onclick="navigator.clipboard.writeText('${item.code}'); showGlobalToast('Kode KBLI ${item.code} berhasil disalin!');" class="px-3 py-1.5 bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-sm font-bold rounded-lg flex items-center gap-1.5 transition-colors self-start sm:self-auto border border-surface-container">
                  <span class="material-symbols-outlined text-[16px]">content_copy</span>
                  <span>Salin Kode</span>
                </button>
              </div>

              <div>
                <h3 class="font-headline-sm text-on-surface font-bold">${item.title}</h3>
                <p class="font-body-sm text-on-surface-variant mt-2 leading-relaxed">${item.description}</p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div class="bg-surface-container-low p-4 rounded-xl border border-surface-container">
                  <span class="font-label-sm text-primary uppercase font-bold tracking-wider block">Kewajiban Izin Usaha</span>
                  <p class="font-body-sm text-on-surface font-medium mt-1">${item.permits_required}</p>
                </div>
                <div class="bg-surface-container-low p-4 rounded-xl border border-surface-container">
                  <span class="font-label-sm text-secondary uppercase font-bold tracking-wider block">Ketentuan Modal Asing (DPI)</span>
                  <p class="font-body-sm text-on-surface font-medium mt-1">${item.dpi_rules}</p>
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

  // Initial load
  fetchKbli('', 'all');
}
