/**
 * View: Cek Merek PDKI (Public Tool - UU No. 20/2016)
 * Modernized to match the LEGALTA Crimson/Gold/Slate reference aesthetic.
 */

import { api } from '../api.js';
import { showToast } from '../components/toast.js';

export function renderCekMerekView() {
  return `
    <div class="flex flex-col w-full bg-[#FAFAFC]">
      <!-- Editorial Brand Research Header -->
      <section class="w-full bg-gradient-to-b from-white via-amber-50/20 to-white py-14 px-6 border-b border-slate-100">
        <div class="max-w-5xl mx-auto flex flex-col items-center text-center">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/70 text-gold-700 text-xs uppercase tracking-wider font-bold mb-5">
            <i data-lucide="shield-alert" class="w-3.5 h-3.5 text-gold-600"></i>
            <span>Pusat Riset Merek DJKI &amp; Validasi Substantif</span>
          </div>
          <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight max-w-4xl leading-tight">
            Cek Potensi Kemiripan Merek Dagang &amp; Jasa Sebelum Mendaftar
          </h1>
          <p class="text-sm sm:text-base text-slate-600 max-w-2xl mt-3 leading-relaxed">
            Hindari risiko penolakan mutlak dan relatif akibat persamaan pada pokoknya terhadap database resmi DJKI sebelum alokasi biaya permohonan.
          </p>

          <!-- Search Workbench -->
          <div class="w-full max-w-3xl mt-8 bg-white p-6 sm:p-7 rounded-3xl shadow-xl border border-slate-200/80 text-left">
            <form id="merekSearchForm" class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div class="md:col-span-7 space-y-1.5">
                  <label class="text-xs text-slate-700 font-bold">Nama Merek / Kata Kunci</label>
                  <input type="text" id="merekInputName" value="VOYAGER LABS" required placeholder="Masukkan calon nama brand..." class="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 outline-none focus:border-crimson-800">
                </div>
                <div class="md:col-span-5 space-y-1.5">
                  <label class="text-xs text-slate-700 font-bold">Klasifikasi Kelas Nice (1–45)</label>
                  <select id="merekClassSelect" class="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-semibold text-slate-900 outline-none cursor-pointer focus:border-crimson-800">
                    <option value="42">Kelas 42 — Riset Teknologi, Software &amp; IT</option>
                    <option value="35">Kelas 35 — Retail, E-Commerce &amp; Iklan</option>
                    <option value="43">Kelas 43 — Kafe, Restoran &amp; F&amp;B</option>
                    <option value="9">Kelas 9 — Perangkat Elektronik &amp; Apps</option>
                    <option value="25">Kelas 25 — Pakaian, Sepatu &amp; Fashion</option>
                    <option value="3">Kelas 3 — Kosmetik, Skincare &amp; Sabun</option>
                    <option value="30">Kelas 30 — Kopi, Teh, Rempah &amp; Makanan</option>
                  </select>
                </div>
              </div>
              <button type="submit" id="merekSubmitBtn" class="w-full py-3.5 bg-crimson-800 hover:bg-crimson-900 text-white text-sm font-bold rounded-xl shadow-md shadow-crimson-800/20 transition-all flex items-center justify-center gap-2">
                <i data-lucide="search-check" class="w-4 h-4"></i>
                <span>Analisis Kemiripan AI &amp; Pindai PDKI</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- Results Container -->
      <section class="max-w-6xl mx-auto px-6 py-12 w-full" id="merekResultContainer">
        <div id="merekResultCard" class="space-y-8"></div>
      </section>
    </div>
  `;
}

export function initCekMerekLogic() {
  const form = document.getElementById('merekSearchForm');
  const input = document.getElementById('merekInputName');
  const classSelect = document.getElementById('merekClassSelect');
  const submitBtn = document.getElementById('merekSubmitBtn');
  const resultCard = document.getElementById('merekResultCard');

  // Check if navigated from HKI Quick Diagnostic Tool
  const prefillBrand = sessionStorage.getItem('legalta_prefill_merek');
  const prefillClass = sessionStorage.getItem('legalta_prefill_class');
  if (prefillBrand && input) {
    input.value = prefillBrand;
    sessionStorage.removeItem('legalta_prefill_merek');
  }
  if (prefillClass && classSelect) {
    classSelect.value = prefillClass;
    sessionStorage.removeItem('legalta_prefill_class');
  }

  async function executeAnalysis(brandName, niceClass, notify = false) {
    if (!brandName) return;
    submitBtn.disabled = true;
    const originalBtn = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span class="material-symbols-outlined text-[18px] animate-spin">refresh</span><span>Memeriksa...</span>`;

    try {
      const response = await api.checkMerek(brandName, niceClass);
      if (response.success) {
        const d = response.data;
        const statusBadge = d.isAvailable 
          ? `<span class="text-[11px] uppercase px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-extrabold">Terbuka Untuk Didaftarkan</span>`
          : `<span class="text-[11px] uppercase px-3 py-1 rounded-full bg-crimson-100 text-crimson-800 font-extrabold">Risiko Penolakan ${d.rejectionRisk}</span>`;

        let tableRows = '';
        d.comparisons.forEach(c => {
          tableRows += `
            <tr class="hover:bg-slate-50 transition-colors border-b border-slate-100">
              <td class="py-3.5 px-4 font-bold text-slate-900">${c.brandName}</td>
              <td class="py-3.5 px-4 font-mono font-bold text-crimson-800">${c.niceClass}</td>
              <td class="py-3.5 px-4 font-mono text-slate-500">${c.appNumber}</td>
              <td class="py-3.5 px-4 text-slate-700">${c.owner}</td>
              <td class="py-3.5 px-4"><span class="text-[11px] font-bold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full">${c.status}</span></td>
              <td class="py-3.5 px-4 text-right font-extrabold ${c.sameClass ? 'text-gold-600' : 'text-emerald-700'}">${c.conflictRisk}</td>
            </tr>
          `;
        });

        resultCard.innerHTML = `
          <!-- Result Metric Top Card -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div class="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between gap-2">
                  <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Kalkulasi Kemiripan AI</span>
                  ${statusBadge}
                </div>
                <div class="mt-6 flex items-baseline gap-3">
                  <span class="text-5xl sm:text-6xl leading-none text-crimson-800 font-black">${d.riskPercentage}%</span>
                  <div class="flex flex-col">
                    <span class="text-sm text-gold-600 font-extrabold uppercase">Risiko: ${d.rejectionRisk}</span>
                    <span class="text-xs text-slate-500">Margin Pengecekan Merek</span>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100">
                  <span class="text-xs text-slate-800 font-bold block mb-1.5">Peluang Lolos Substantif: ${d.passingProbability}%</span>
                  <div class="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div class="bg-crimson-800 h-full rounded-full" style="width: ${d.passingProbability}%"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Strategic Legal Opinion Box -->
            <div class="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/80 space-y-4 flex flex-col justify-between">
              <div class="space-y-3">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div>
                    <h4 class="text-base text-slate-900 font-extrabold">Opini Konsultan HKI Terdaftar</h4>
                    <p class="text-xs text-slate-500">${d.legalOpinion.counselName} (${d.legalOpinion.counselRole})</p>
                  </div>
                  <span class="text-[11px] bg-amber-50 border border-amber-200 text-gold-700 px-3 py-1 rounded-full font-extrabold">${d.legalOpinion.recommendationTier}</span>
                </div>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${d.legalOpinion.statement}</p>
              </div>
              <div class="pt-2">
                <a href="#/konsultasi?layanan=merek" class="px-6 py-3 bg-crimson-800 hover:bg-crimson-900 text-white text-xs font-bold rounded-xl transition-colors inline-flex items-center gap-2 shadow-sm">
                  <span>Daftarkan Merek Bersama Tim Ahli</span>
                  <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Comparison Records Table -->
          <div class="bg-white rounded-3xl shadow-sm border border-slate-200/80 overflow-hidden">
            <div class="p-6 border-b border-slate-100">
              <h4 class="text-base text-slate-900 font-extrabold">Arsip Pembanding Terdaftar di PDKI</h4>
              <p class="text-xs text-slate-500 mt-0.5">Catatan merek dengan kedekatan leksikal di kelas terkait.</p>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr class="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-100">
                    <th class="py-3.5 px-4">Nama Merek</th>
                    <th class="py-3.5 px-4">Kelas</th>
                    <th class="py-3.5 px-4">No. Permohonan</th>
                    <th class="py-3.5 px-4">Pemilik Hak</th>
                    <th class="py-3.5 px-4">Status</th>
                    <th class="py-3.5 px-4 text-right">Potensi Benturan</th>
                  </tr>
                </thead>
                <tbody>
                  ${tableRows}
                </tbody>
              </table>
            </div>
          </div>
        `;
        if (notify) {
          showToast('Analisis kemiripan merek selesai.');
        }
      }
    } catch (e) {
      showToast('Gagal memeriksa merek: ' + e.message, 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtn;
      if (window.lucide) window.lucide.createIcons();
    }
  }

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    executeAnalysis(input.value.trim(), classSelect.value, true);
  });

  if (input?.value) {
    executeAnalysis(input.value.trim(), classSelect.value, Boolean(prefillBrand));
  }
}
