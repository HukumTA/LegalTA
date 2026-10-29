/**
 * View: Cek Merek (Public Tool)
 * Desain modern HUKUMTA dengan Custom Selector Kelas Nice 1–45
 */

import { api } from '../api.js';
import { showToast } from '../components/toast.js';
import { renderCustomClassSelect, initCustomClassSelect } from '../components/customClassSelect.js';

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
            Periksa apakah nama merek Anda mirip dengan merek yang sudah terdaftar pada 45 Kelas Nice resmi DJKI.
          </p>

          <div class="max-w-3xl mx-auto pt-4 text-left">
            <form id="merekSearchForm" class="bg-white p-7 sm:p-8 rounded-[2.5rem] shadow-xl border border-slate-200/80 space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                
                <!-- Input Nama Merek -->
                <div class="md:col-span-5">
                  <label class="block text-xs font-bold text-slate-700 mb-2 flex items-center justify-between">
                    <span>Nama Merek</span>
                    <span class="text-[10px] text-slate-400 font-semibold">Teks / Kata</span>
                  </label>
                  <input type="text" id="merekInputName" value="" required placeholder="Contoh: Kopi Nusantara" class="w-full h-[58px] px-5 rounded-2xl sm:rounded-full bg-slate-50 hover:bg-slate-100/70 border border-slate-200 text-sm font-bold text-slate-900 outline-none focus:ring-2 focus:ring-crimson-800/20 focus:border-crimson-800 transition-all shadow-sm">
                </div>

                <!-- Custom Dropdown Kelas Nice 1–45 -->
                <div class="md:col-span-7">
                  <label class="block text-xs font-bold text-slate-700 mb-2 flex items-center justify-between">
                    <span>Klasifikasi Kelas Nice (1 s/d 45)</span>
                    <span class="text-[10px] font-bold text-crimson-800 bg-crimson-50 px-2 py-0.5 rounded-full border border-crimson-100">DJKI Urut 1–45</span>
                  </label>
                  ${renderCustomClassSelect('merekClassSelect', 42)}
                </div>

              </div>

              <!-- Baris Bawah: Tombol Cek -->
              <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-100">
                <span class="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                  <i data-lucide="shield-check" class="w-4 h-4 text-emerald-600 shrink-0"></i>
                  <span>Menggunakan algoritma fonetik Soundex &amp; basis data PDKI DJKI</span>
                </span>
                <button type="submit" id="merekSubmitBtn" class="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 bg-crimson-800 hover:bg-crimson-900 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all gap-2 shrink-0">
                  <span>Cek Sekarang</span>
                  <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </button>
              </div>
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
  const classInput = document.getElementById('merekClassSelect');
  const submitBtn = document.getElementById('merekSubmitBtn');
  const resultCard = document.getElementById('merekResultCard');
  const selectWrapper = document.getElementById('merekClassSelect-wrapper');

  // Inisialisasi Custom Selector Kelas Merek
  initCustomClassSelect('merekClassSelect');

  // Isi otomatis dari form cek merek di halaman HKI
  const prefillBrand = sessionStorage.getItem('legalta_prefill_merek');
  const prefillClass = sessionStorage.getItem('legalta_prefill_class');
  if (prefillBrand && input) {
    input.value = prefillBrand;
    sessionStorage.removeItem('legalta_prefill_merek');
  }
  if (prefillClass && selectWrapper?.setSelectedClass) {
    selectWrapper.setSelectedClass(prefillClass);
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
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-crimson-50 text-crimson-800 flex items-center justify-center font-bold">
                    <i data-lucide="scale" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 class="text-sm font-extrabold text-slate-900">${d.legalOpinion.counselName}</h4>
                    <span class="text-xs text-slate-500">${d.legalOpinion.counselRole}</span>
                  </div>
                </div>
                <div class="p-5 rounded-2xl bg-slate-50 border border-slate-100 text-sm text-slate-700 leading-relaxed font-medium">
                  ${d.legalOpinion.statement}
                </div>
              </div>
              <div class="flex items-center justify-between gap-4 flex-wrap pt-2 border-t border-slate-100">
                <span class="text-xs font-bold text-slate-500">${d.legalOpinion.recommendationTier}</span>
                <a href="#/konsultasi?layanan=merek" class="px-6 py-2.5 bg-crimson-800 hover:bg-crimson-900 text-white text-xs font-bold rounded-full transition-colors inline-flex items-center gap-2">
                  <span>Daftarkan Merek</span>
                  <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
              </div>
            </div>

          </div>

          <!-- Merek Terdaftar Mirip -->
          <div class="bg-white rounded-[2rem] shadow-md border border-slate-200 overflow-hidden">
            <div class="p-6 sm:p-8 border-b border-slate-100 flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 class="text-xl font-extrabold text-slate-900">Perbandingan Merek Terdaftar</h3>
                <p class="text-xs text-slate-500 mt-1">Data merek terdaftar yang berpotensi menjadi pembanding di DJKI</p>
              </div>
              <span class="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">Kelas Nice ${d.niceClass}</span>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full text-left text-sm">
                <thead>
                  <tr class="bg-slate-50/70 border-b border-slate-200 text-slate-700 font-extrabold text-xs">
                    <th class="py-4 px-5">Nama Merek</th>
                    <th class="py-4 px-5">Kelas</th>
                    <th class="py-4 px-5">No. Permohonan</th>
                    <th class="py-4 px-5">Pemilik</th>
                    <th class="py-4 px-5">Status</th>
                    <th class="py-4 px-5 text-right">Potensi Konflik</th>
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
    const valClass = classInput?.value || '42';
    executeAnalysis(input.value.trim(), valClass, true);
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }

  if (prefillBrand) {
    const valClass = classInput?.value || '42';
    executeAnalysis(input.value.trim(), valClass, true);
  }
}
