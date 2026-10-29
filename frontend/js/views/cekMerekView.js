/**
 * View: Cek Merek (Public Tool)
 * Gaya disamakan dengan halaman Pendirian, HKI, Perizinan, dan Dokumen.
 */

import { api } from '../api.js';
import { showToast } from '../components/toast.js';

export function renderCekMerekView() {
  return `
    <div class="flex flex-col w-full">

      <!-- 1. HERO + FORM -->
      <section class="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-24 bg-transparent border-b border-slate-200/50">
        <div class="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            Cek Kemiripan Merek, <span class="text-crimson-800">Sebelum Mendaftar</span>
          </h1>
          <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            Periksa apakah nama merek Anda mirip dengan merek yang sudah terdaftar.
          </p>

          <div class="max-w-3xl mx-auto pt-4 text-left">
            <form id="merekSearchForm" class="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-200 space-y-5">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div class="md:col-span-5">
                  <label class="block text-xs font-bold text-slate-700 mb-1.5">Nama Merek</label>
                  <input type="text" id="merekInputName" value="" required placeholder="Contoh: Kopi Nusantara" class="w-full px-5 py-3.5 rounded-full bg-slate-50 border border-slate-200 text-sm font-bold text-slate-900 outline-none focus:border-crimson-800">
                </div>
                <div class="md:col-span-7">
                  <label class="block text-xs font-bold text-slate-700 mb-1.5">Kategori Kelas</label>
                  <select id="merekClassSelect" style="font-size:15px;" class="w-full px-5 py-3.5 rounded-full bg-slate-50 border border-slate-200 text-slate-900 outline-none cursor-pointer focus:border-crimson-800">
                    <option value="42" style="font-size:16px; padding:8px;">Kelas 42 — Teknologi &amp; Software</option>
                    <option value="35" style="font-size:16px; padding:8px;">Kelas 35 — Retail &amp; Bisnis</option>
                    <option value="43" style="font-size:16px; padding:8px;">Kelas 43 — Kafe, Restoran &amp; F&amp;B</option>
                    <option value="9" style="font-size:16px; padding:8px;">Kelas 9 — Elektronik &amp; Aplikasi</option>
                    <option value="25" style="font-size:16px; padding:8px;">Kelas 25 — Fashion &amp; Pakaian</option>
                    <option value="3" style="font-size:16px; padding:8px;">Kelas 3 — Kosmetik &amp; Skincare</option>
                    <option value="30" style="font-size:16px; padding:8px;">Kelas 30 — Kopi, Teh &amp; Pangan</option>
                  </select>
                </div>
              </div>
              <button type="submit" id="merekSubmitBtn" class="inline-flex items-center justify-center px-8 py-4 bg-crimson-800 hover:bg-crimson-900 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all gap-2">
                <span>Cek Sekarang</span>
                <i data-lucide="arrow-right" class="w-5 h-5"></i>
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- 2. HASIL -->
      <section class="max-w-6xl mx-auto px-6 py-12 w-full" id="merekResultContainer">
        <div id="merekResultCard" class="space-y-8">
          <div class="p-12 text-center bg-white rounded-[2rem] border border-slate-200 text-slate-500 text-sm">
            <i data-lucide="shield-search" class="w-10 h-10 mx-auto mb-3 text-slate-400"></i>
            <p class="font-bold text-slate-700">Ketik nama merek dan pilih kelas Nice di atas.</p>
            <p class="text-xs text-slate-400 mt-1">Hasil penelusuran kemiripan fonetik dan probabilitas kelolosan akan tampil di sini.</p>
          </div>
        </div>
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

  // Isi otomatis dari form cek merek di halaman HKI
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
    submitBtn.innerHTML = `<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i><span>Memeriksa...</span>`;
    if (window.lucide) window.lucide.createIcons();

    try {
      const response = await api.checkMerek(brandName, niceClass);
      if (response.success) {
        const d = response.data;
        const statusBadge = d.isAvailable
          ? `<span class="text-xs px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold">Bisa Didaftarkan</span>`
          : `<span class="text-xs px-4 py-1.5 rounded-full bg-crimson-100 text-crimson-800 font-extrabold">Risiko Ditolak ${d.rejectionRisk}</span>`;

        let tableRows = '';
        d.comparisons.forEach(c => {
          tableRows += `
            <tr class="hover:bg-slate-50 transition-colors border-b border-slate-100">
              <td class="py-4 px-5 font-bold text-slate-900">${c.brandName}</td>
              <td class="py-4 px-5 font-bold text-crimson-800">${c.niceClass}</td>
              <td class="py-4 px-5 text-slate-500">${c.appNumber}</td>
              <td class="py-4 px-5 text-slate-700">${c.owner}</td>
              <td class="py-4 px-5"><span class="text-xs font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded-full">${c.status}</span></td>
              <td class="py-4 px-5 text-right font-extrabold ${c.sameClass ? 'text-gold-600' : 'text-emerald-700'}">${c.conflictRisk}</td>
            </tr>
          `;
        });

        resultCard.innerHTML = `
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">

            <!-- Hasil -->
            <div class="lg:col-span-5 bg-white p-8 rounded-[2rem] shadow-md border border-slate-200 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between gap-2 flex-wrap">
                  <span class="text-[10px] font-bold uppercase text-slate-400">Tingkat Kemiripan</span>
                  ${statusBadge}
                </div>
                <div class="mt-6 flex items-baseline gap-3">
                  <span class="text-6xl leading-none text-crimson-800 font-black">${d.riskPercentage}%</span>
                  <span class="text-sm text-slate-600 font-bold">Risiko ${d.rejectionRisk}</span>
                </div>
                <div class="mt-8 pt-5 border-t border-slate-100">
                  <span class="text-sm text-slate-800 font-bold block mb-2">Peluang Lolos: ${d.passingProbability}%</span>
                  <div class="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div class="bg-crimson-800 h-full rounded-full" style="width: ${d.passingProbability}%"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Catatan Konsultan -->
            <div class="lg:col-span-7 bg-white p-8 rounded-[2rem] shadow-md border border-slate-200 flex flex-col justify-between gap-6">
              <div class="space-y-4">
                <div class="flex items-center justify-between gap-3 pb-4 border-b border-slate-100 flex-wrap">
                  <div>
                    <h4 class="text-lg text-slate-900 font-extrabold">Catatan Konsultan</h4>
                    <p class="text-sm text-slate-500">${d.legalOpinion.counselName} (${d.legalOpinion.counselRole})</p>
                  </div>
                  <span class="text-xs bg-amber-50 text-gold-700 px-4 py-1.5 rounded-full font-extrabold">${d.legalOpinion.recommendationTier}</span>
                </div>
                <p class="text-sm sm:text-base text-slate-600 leading-relaxed">${d.legalOpinion.statement}</p>
              </div>
              <div>
                <a href="#/konsultasi?layanan=merek" class="inline-flex items-center justify-center px-8 py-4 bg-crimson-800 hover:bg-crimson-900 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all gap-2">
                  <span>Daftarkan Merek</span>
                  <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Tabel Pembanding -->
          <div class="bg-white rounded-[2rem] shadow-md border border-slate-200 overflow-hidden">
            <div class="p-7 border-b border-slate-100">
              <h4 class="text-lg text-slate-900 font-extrabold">Merek Terdaftar yang Mirip</h4>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse text-sm">
                <thead>
                  <tr class="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase border-b border-slate-100">
                    <th class="py-4 px-5">Nama Merek</th>
                    <th class="py-4 px-5">Kelas</th>
                    <th class="py-4 px-5">No. Permohonan</th>
                    <th class="py-4 px-5">Pemilik</th>
                    <th class="py-4 px-5">Status</th>
                    <th class="py-4 px-5 text-right">Risiko Benturan</th>
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
          showToast('Pemeriksaan merek selesai.');
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

  if (window.lucide) {
    window.lucide.createIcons();
  }

  if (input?.value) {
    executeAnalysis(input.value.trim(), classSelect.value, Boolean(prefillBrand));
  }
}