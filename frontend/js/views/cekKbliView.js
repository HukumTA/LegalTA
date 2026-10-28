/**
 * View: Cek KBLI (Public Tool)
 * Gaya disamakan dengan halaman Pendirian, HKI, Perizinan, dan Dokumen.
 */

import { api } from '../api.js';
import { showToast } from '../components/toast.js';

export function renderCekKbliView() {
  return `
    <div class="flex flex-col w-full">

      <!-- 1. HERO + PENCARIAN -->
      <section class="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-24 bg-transparent border-b border-slate-200/50">
        <div class="max-w-5xl mx-auto px-6 text-center space-y-6">
          <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            Cari Kode KBLI, <span class="text-crimson-800">Sesuai Usaha Anda</span>
          </h1>
          <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            Temukan kode bidang usaha yang tepat dan lihat izin apa saja yang dibutuhkan.
          </p>

          <div class="pt-4 text-left">
            <div class="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-200 space-y-5">
              <div class="flex flex-col lg:flex-row gap-4">
                <div class="relative flex-1">
                  <i data-lucide="search" class="w-5 h-5 text-slate-400 absolute left-5 top-1/2 -translate-y-1/2"></i>
                  <input type="text" id="kbliInput" placeholder="Cari nama usaha atau kode (cth: Software, Kafe)" class="w-full h-14 pl-14 pr-5 bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium rounded-full outline-none focus:border-crimson-800">
                </div>
                <div class="w-full lg:w-80">
                  <select id="kbliSectorSelect" style="font-size:15px;" class="w-full h-14 px-5 bg-slate-50 border border-slate-200 text-slate-900 rounded-full outline-none cursor-pointer focus:border-crimson-800">
                    <option value="all" style="font-size:16px; padding:8px;">Semua Bidang Usaha</option>
                    <option value="J" style="font-size:16px; padding:8px;">Informasi &amp; Komunikasi</option>
                    <option value="I" style="font-size:16px; padding:8px;">Penginapan &amp; Makan Minum</option>
                    <option value="G" style="font-size:16px; padding:8px;">Perdagangan</option>
                    <option value="F" style="font-size:16px; padding:8px;">Konstruksi &amp; Properti</option>
                  </select>
                </div>
                <button type="button" id="kbliSearchBtn" class="h-14 px-8 bg-crimson-800 hover:bg-crimson-900 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2 shrink-0">
                  <span>Cari</span>
                  <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </button>
              </div>

              <div class="flex flex-wrap items-center gap-2">
                <span class="text-xs font-bold text-slate-400 mr-1">Populer:</span>
                <button type="button" class="kbli-chip px-4 py-1.5 bg-slate-100 hover:bg-crimson-50 hover:text-crimson-800 rounded-full text-sm text-slate-700 transition-colors font-semibold" data-keyword="Software">Aplikasi</button>
                <button type="button" class="kbli-chip px-4 py-1.5 bg-slate-100 hover:bg-crimson-50 hover:text-crimson-800 rounded-full text-sm text-slate-700 transition-colors font-semibold" data-keyword="Kafe">Kafe</button>
                <button type="button" class="kbli-chip px-4 py-1.5 bg-slate-100 hover:bg-crimson-50 hover:text-crimson-800 rounded-full text-sm text-slate-700 transition-colors font-semibold" data-keyword="Perdagangan">Perdagangan</button>
                <button type="button" class="kbli-chip px-4 py-1.5 bg-slate-100 hover:bg-crimson-50 hover:text-crimson-800 rounded-full text-sm text-slate-700 transition-colors font-semibold" data-keyword="Konstruksi">Konstruksi</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. HASIL -->
      <section class="max-w-7xl mx-auto px-6 py-12 w-full">
        <div class="flex items-center justify-between pb-4 border-b border-slate-200 mb-8">
          <h2 class="text-2xl text-slate-900 font-extrabold">Hasil Pencarian</h2>
          <span id="kbliCountBadge" class="text-sm bg-crimson-50 text-crimson-800 px-4 py-1.5 rounded-full font-bold">Memuat...</span>
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
    listContainer.innerHTML = `<div class="p-8 text-center text-slate-500 text-sm">Memuat data KBLI...</div>`;
    try {
      const response = await api.searchKBLI(q, sector);
      if (response.success) {
        const items = response.data.results;
        countBadge.textContent = `${items.length} Kode Ditemukan`;

        if (items.length === 0) {
          listContainer.innerHTML = `<div class="p-10 text-center bg-white rounded-[2rem] border border-slate-200 text-slate-500 text-sm">Tidak ada kode KBLI yang cocok dengan "${q}".</div>`;
          return;
        }

        let html = '';
        items.forEach(item => {
          let riskBadgeClass = 'bg-emerald-50 text-emerald-700';
          let riskName = 'Rendah';
          if (item.risk_level === 'MR') {
            riskBadgeClass = 'bg-amber-50 text-gold-700';
            riskName = 'Menengah Rendah';
          } else if (item.risk_level === 'MT') {
            riskBadgeClass = 'bg-orange-50 text-orange-800';
            riskName = 'Menengah Tinggi';
          } else if (item.risk_level === 'T') {
            riskBadgeClass = 'bg-crimson-50 text-crimson-800';
            riskName = 'Tinggi';
          }

          html += `
            <article class="bg-white rounded-[2rem] p-8 shadow-md hover:shadow-xl transition-all border border-slate-200 space-y-5">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
                <div class="flex flex-wrap items-center gap-2.5">
                  <span class="text-base text-crimson-800 font-black px-4 py-1.5 bg-crimson-50 rounded-full">KBLI ${item.code}</span>
                  <span class="text-xs ${riskBadgeClass} px-4 py-1.5 rounded-full font-bold">Risiko ${riskName}</span>
                  <span class="text-xs bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full font-semibold">${item.sector_name}</span>
                </div>
                <button type="button" class="kbli-copy px-5 py-2.5 bg-slate-100 hover:bg-crimson-50 hover:text-crimson-800 text-slate-700 text-sm font-bold rounded-full inline-flex items-center gap-2 transition-colors self-start sm:self-auto" data-code="${item.code}">
                  <i data-lucide="copy" class="w-4 h-4"></i>
                  <span>Salin Kode</span>
                </button>
              </div>

              <div>
                <h3 class="text-xl text-slate-900 font-extrabold">${item.title}</h3>
                <p class="text-sm text-slate-600 mt-2 leading-relaxed">${item.description}</p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <span class="text-[10px] text-crimson-800 uppercase font-extrabold block">Izin yang Dibutuhkan</span>
                  <p class="text-sm text-slate-800 font-semibold mt-1.5">${item.permits_required}</p>
                </div>
                <div class="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <span class="text-[10px] text-gold-600 uppercase font-extrabold block">Ketentuan Modal Asing</span>
                  <p class="text-sm text-slate-800 font-semibold mt-1.5">${item.dpi_rules}</p>
                </div>
              </div>
            </article>
          `;
        });

        listContainer.innerHTML = html;

        listContainer.querySelectorAll('.kbli-copy').forEach(btn => {
          btn.addEventListener('click', () => {
            const code = btn.getAttribute('data-code');
            navigator.clipboard?.writeText(code);
            showToast(`Kode KBLI ${code} berhasil disalin.`);
          });
        });

        if (window.lucide) window.lucide.createIcons();
      }
    } catch (e) {
      showToast('Gagal memuat KBLI: ' + e.message, 'error');
    }
  }

  searchBtn?.addEventListener('click', () => fetchKbli(input.value.trim(), sectorSelect.value));
  input?.addEventListener('input', () => fetchKbli(input.value.trim(), sectorSelect.value));
  sectorSelect?.addEventListener('change', () => fetchKbli(input.value.trim(), sectorSelect.value));

  chips.forEach(chip => {
    chip.addEventListener('click', function () {
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