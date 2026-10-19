/**
 * View: Cek Merek PDKI (Public Tool - UU No. 20/2016)
 */

import { api } from '../api.js';
import { showToast } from '../components/toast.js';

export function renderCekMerekView() {
  return `
    <div class="flex flex-col w-full">
      <!-- Editorial Brand Research Header -->
      <section class="w-full bg-surface-container-lowest py-16 px-6 lg:px-12 border-b border-surface-container-high">
        <div class="max-w-5xl mx-auto flex flex-col items-center text-center">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm uppercase tracking-wider mb-6">
            <span class="material-symbols-outlined text-[16px]">policy</span>
            Pusat Riset Merek DJKI &amp; Validasi Substantif
          </div>
          <h1 class="font-display-lg text-primary tracking-tight max-w-4xl">
            Cek Potensi Kemiripan Merek Dagang &amp; Jasa Sebelum Mendaftar
          </h1>
          <p class="font-body-lg text-on-surface-variant max-w-2xl mt-4">
            Hindari risiko penolakan mutlak dan relatif akibat persamaan pada pokoknya terhadap database resmi DJKI sebelum alokasi biaya permohonan.
          </p>

          <!-- Search Workbench -->
          <div class="w-full max-w-3xl mt-10 bg-surface-container-low p-6 rounded-3xl shadow-sm border border-surface-container-high text-left">
            <form id="merekSearchForm" class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div class="md:col-span-7 space-y-1">
                  <label class="font-label-sm text-on-surface font-bold">Nama Merek / Kata Kunci</label>
                  <input type="text" id="merekInputName" value="VOYAGER LABS" required placeholder="Masukkan calon nama brand..." class="w-full px-4 py-3 bg-surface-container-lowest rounded-xl border border-surface-container font-body-md text-on-surface outline-none">
                </div>
                <div class="md:col-span-5 space-y-1">
                  <label class="font-label-sm text-on-surface font-bold">Klasifikasi Kelas Nice (1-45)</label>
                  <select id="merekClassSelect" class="w-full px-4 py-3 bg-surface-container-lowest rounded-xl border border-surface-container font-body-md text-on-surface outline-none cursor-pointer">
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
              <button type="submit" id="merekSubmitBtn" class="w-full py-3.5 bg-primary text-on-primary font-label-lg font-bold rounded-xl shadow-md hover:bg-primary-container transition-all flex items-center justify-center gap-2">
                <span class="material-symbols-outlined text-[20px]">psychology</span>
                <span>Analisis Kemiripan AI &amp; Pindai PDKI</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- Results Container -->
      <section class="max-w-6xl mx-auto px-6 lg:px-12 py-12" id="merekResultContainer">
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

  async function executeAnalysis(brandName, niceClass) {
    if (!brandName) return;
    submitBtn.disabled = true;
    const originalBtn = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span class="material-symbols-outlined text-[20px] animate-spin">refresh</span><span>Memindai Pangkalan Data DJKI...</span>`;

    try {
      const response = await api.checkMerek(brandName, niceClass);
      if (response.success) {
        const d = response.data;
        const statusBadge = d.isAvailable 
          ? `<span class="font-label-sm uppercase px-3 py-1 rounded-full bg-[#DCFCE7] text-[#166534] font-bold">Terbuka Untuk Didaftarkan</span>`
          : `<span class="font-label-sm uppercase px-3 py-1 rounded-full bg-error-container text-error font-bold">Risiko Penolakan ${d.rejectionRisk}</span>`;

        let tableRows = '';
        d.comparisons.forEach(c => {
          tableRows += `
            <tr class="hover:bg-surface-container-low/60 transition-colors border-b border-surface-container-high">
              <td class="py-3.5 px-4 font-bold text-primary">${c.brandName}</td>
              <td class="py-3.5 px-4 font-mono font-medium">${c.niceClass}</td>
              <td class="py-3.5 px-4 font-mono text-on-surface-variant">${c.appNumber}</td>
              <td class="py-3.5 px-4">${c.owner}</td>
              <td class="py-3.5 px-4"><span class="font-label-sm bg-surface-container-high px-2 py-0.5 rounded">${c.status}</span></td>
              <td class="py-3.5 px-4 text-right font-bold ${c.sameClass ? 'text-secondary' : 'text-emerald-700'}">${c.conflictRisk}</td>
            </tr>
          `;
        });

        resultCard.innerHTML = `
          <!-- Result Metric Top Card -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div class="lg:col-span-5 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm border border-surface-container-high flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between">
                  <span class="font-label-sm uppercase tracking-wider text-on-surface-variant">Kalkulasi Kemiripan AI</span>
                  ${statusBadge}
                </div>
                <div class="mt-6 flex items-baseline gap-3">
                  <span class="font-display-lg text-[64px] leading-none text-primary font-bold">${d.riskPercentage}%</span>
                  <div class="flex flex-col">
                    <span class="font-label-lg text-secondary font-bold uppercase">Risiko: ${d.rejectionRisk}</span>
                    <span class="font-body-sm text-on-surface-variant">Margin Pengecekan Merek</span>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-surface-container-high">
                  <span class="font-label-sm text-on-surface font-bold block mb-1">Peluang Lolos Substantif: ${d.passingProbability}%</span>
                  <div class="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
                    <div class="bg-primary h-full rounded-full" style="width: ${d.passingProbability}%"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Strategic Legal Opinion Box -->
            <div class="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm border border-surface-container-high space-y-4">
              <div class="flex items-center justify-between pb-3 border-b border-surface-container-high">
                <div>
                  <h4 class="font-headline-sm text-primary font-bold">Opini Konsultan HKI Terdaftar</h4>
                  <p class="font-label-sm text-on-surface-variant">${d.legalOpinion.counselName} (${d.legalOpinion.counselRole})</p>
                </div>
                <span class="font-label-sm bg-secondary-fixed text-on-secondary-fixed px-2.5 py-1 rounded-full font-bold">${d.legalOpinion.recommendationTier}</span>
              </div>
              <p class="font-body-sm text-on-surface leading-relaxed">${d.legalOpinion.statement}</p>
              <div class="pt-2">
                <a href="#/konsultasi?layanan=merek" class="px-6 py-2.5 bg-primary text-on-primary font-label-md font-bold rounded-xl hover:bg-primary-container transition-colors inline-block">
                  Daftarkan Merek Bersama Tim Ahli
                </a>
              </div>
            </div>
          </div>

          <!-- Comparison Records Table -->
          <div class="bg-surface-container-lowest rounded-3xl shadow-sm border border-surface-container-high overflow-hidden">
            <div class="p-6 border-b border-surface-container-high">
              <h4 class="font-headline-sm text-primary font-bold">Arsip Pembanding Terdaftar di PDKI</h4>
              <p class="font-body-sm text-on-surface-variant">Catatan merek dengan kedekatan leksikal di kelas terkait.</p>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse font-body-sm">
                <thead>
                  <tr class="bg-surface-container-low font-label-md text-on-surface-variant uppercase tracking-wider">
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
        showToast('Hasil riset kemiripan merek PDKI berhasil dimuat.');
      }
    } catch (e) {
      showToast('Koneksi ke backend gagal: ' + e.message, 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtn;
    }
  }

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    executeAnalysis(input.value.trim(), classSelect.value);
  });

  if (input?.value) {
    executeAnalysis(input.value.trim(), classSelect.value);
  }
}
