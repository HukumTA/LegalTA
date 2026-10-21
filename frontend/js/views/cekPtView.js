/**
 * View: Cek Nama PT (Public Tool - PP 43/2011)
 * Modernized to match the LEGALTA Crimson/Gold/Slate reference aesthetic.
 */

import { api } from '../api.js';
import { showToast } from '../components/toast.js';

export function renderCekPtView() {
  return `
    <div class="flex flex-col w-full bg-[#FAFAFC]">
      <!-- Hero Header -->
      <section class="relative overflow-hidden bg-gradient-to-b from-white via-crimson-50/20 to-white px-6 pt-12 pb-16 border-b border-slate-100">
        <div class="max-w-4xl mx-auto text-center space-y-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crimson-50 border border-crimson-100 text-crimson-800 text-xs font-bold uppercase tracking-wider">
            <i data-lucide="shield-check" class="w-3.5 h-3.5 text-crimson-700"></i>
            <span>Validasi Administrasi Hukum Umum (PP No. 43/2011)</span>
          </div>
          <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
            Cek Ketersediaan &amp; Kelayakan Nama PT Anda Secara Instan
          </h1>
          <p class="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Sistem pengujian berbasis aturan Ditjen AHU Kemenkumham RI: Minimal 3 kata dalam Bahasa Indonesia, bebas kata terlarang, dan nihil konflik homonim perseroan aktif.
          </p>
        </div>

        <!-- Search Input Card -->
        <div class="max-w-3xl mx-auto mt-8 bg-white p-3 rounded-2xl shadow-xl border border-slate-200/80">
          <form id="ptSearchForm" class="flex flex-col sm:flex-row items-center gap-3">
            <div class="flex items-center gap-3 px-4 py-3.5 w-full flex-1 bg-slate-50 rounded-xl border border-slate-200/80 focus-within:border-crimson-800 transition-colors">
              <span class="text-xs font-extrabold text-crimson-800 uppercase tracking-wider bg-crimson-50 px-2.5 py-1 rounded-md border border-crimson-100">PT.</span>
              <input type="text" id="ptInputName" value="Perkasa Digital Nusantara" placeholder="Masukkan usulan nama PT (cth: Perkasa Digital Nusantara)..." required class="w-full bg-transparent border-none outline-none text-sm text-slate-900 font-bold">
            </div>
            <button type="submit" id="ptSubmitBtn" class="w-full sm:w-auto px-8 py-4 bg-crimson-800 hover:bg-crimson-900 text-white text-sm font-bold rounded-xl shadow-md shadow-crimson-800/20 transition-all flex items-center justify-center gap-2 shrink-0">
              <i data-lucide="search" class="w-4 h-4"></i>
              <span>Uji Nama PT</span>
            </button>
          </form>
        </div>
      </section>

      <!-- Live Analysis Result Section -->
      <section class="max-w-6xl mx-auto px-6 py-12 w-full" id="ptResultContainer">
        <div id="ptResultCard" class="space-y-8"></div>
      </section>

      <!-- Educational Prohibitions Grid -->
      <section class="w-full bg-white py-16 px-6 border-t border-slate-100">
        <div class="max-w-6xl mx-auto space-y-10">
          <div class="text-center max-w-2xl mx-auto space-y-2">
            <span class="text-xs text-crimson-800 uppercase font-bold tracking-wider">Kaidah Hukum Mutlak</span>
            <h3 class="font-serif text-2xl sm:text-3xl text-slate-900 font-bold">3 Aturan Utama Penamaan PT (PP No. 43/2011)</h3>
            <p class="text-xs sm:text-sm text-slate-500">Pastikan nama perseroan Anda mematuhi pedoman mutlak Kemenkumham RI berikut.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200/70 space-y-2.5">
              <span class="w-9 h-9 rounded-xl bg-crimson-800 text-white text-xs font-extrabold flex items-center justify-center">01</span>
              <h4 class="text-base text-slate-900 font-bold">Minimal 3 Kata Bahasa Indonesia</h4>
              <p class="text-xs text-slate-600 leading-relaxed">Bagi PT PMDN (lokal), wajib terdiri atas minimal 3 kata berbahasa Indonesia yang baku dan bukan angka. Contoh ditolak: PT Sinar Abadi.</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200/70 space-y-2.5">
              <span class="w-9 h-9 rounded-xl bg-crimson-800 text-white text-xs font-extrabold flex items-center justify-center">02</span>
              <h4 class="text-base text-slate-900 font-bold">Bebas Nama Lembaga Negara</h4>
              <p class="text-xs text-slate-600 leading-relaxed">Dilarang memakai singkatan atau nama yang menyerupai lembaga negara, kementerian, aparat penegak hukum, atau badan internasional.</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200/70 space-y-2.5">
              <span class="w-9 h-9 rounded-xl bg-crimson-800 text-white text-xs font-extrabold flex items-center justify-center">03</span>
              <h4 class="text-base text-slate-900 font-bold">Bahasa Asing Khusus PT PMA</h4>
              <p class="text-xs text-slate-600 leading-relaxed">Perseroan yang seluruh sahamnya dimiliki WNI wajib menggunakan Bahasa Indonesia. Unsur bahasa asing hanya diizinkan bagi PT PMA.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function initCekPtLogic() {
  const form = document.getElementById('ptSearchForm');
  const input = document.getElementById('ptInputName');
  const submitBtn = document.getElementById('ptSubmitBtn');
  const resultCard = document.getElementById('ptResultCard');

  async function executeValidation(name, notify = false) {
    if (!name) return;
    submitBtn.disabled = true;
    const originalBtn = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span class="material-symbols-outlined text-[18px] animate-spin">refresh</span><span>Memeriksa...</span>`;

    try {
      const response = await api.checkPTName(name);
      if (response.success) {
        const d = response.data;
        const statusBadge = d.isEligible 
          ? `<span class="text-[11px] uppercase px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-extrabold">Tersedia &amp; Memenuhi Syarat</span>`
          : `<span class="text-[11px] uppercase px-3 py-1 rounded-full bg-crimson-100 text-crimson-800 font-extrabold">Perlu Penyesuaian</span>`;

        const scoreColor = d.probability >= 80 ? 'text-emerald-600' : 'text-crimson-700';

        resultCard.innerHTML = `
          <!-- Status Banner -->
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 sm:p-8 bg-white rounded-3xl shadow-md border border-slate-200/80">
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 rounded-2xl ${d.isEligible ? 'bg-emerald-50 text-emerald-600' : 'bg-crimson-50 text-crimson-700'} flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-[32px]">${d.isEligible ? 'check_circle' : 'warning'}</span>
              </div>
              <div>
                <div class="flex flex-wrap items-center gap-2">
                  ${statusBadge}
                  <span class="text-xs text-slate-400 font-semibold">Simulasi Algoritma AHU</span>
                </div>
                <h2 class="text-xl sm:text-2xl text-slate-900 font-extrabold mt-1.5">${d.formattedPTName}</h2>
              </div>
            </div>
            <div class="flex items-center gap-4 bg-slate-50 px-5 py-3.5 rounded-2xl border border-slate-200/70">
              <div class="text-left md:text-right">
                <span class="text-[11px] text-slate-400 font-bold uppercase tracking-wider block">Peluang Disetujui</span>
                <span class="text-2xl font-black ${scoreColor}">${d.probability}%</span>
              </div>
            </div>
          </div>

          <!-- 3-Pillar Audit Breakdown -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Syarat 3 Kata</span>
                <span class="material-symbols-outlined ${d.checks.wordCount ? 'text-emerald-600' : 'text-crimson-700'}">${d.checks.wordCount ? 'check_circle' : 'cancel'}</span>
              </div>
              <h4 class="text-base text-slate-900 font-extrabold">${d.wordCount} Suku Kata Terdeteksi</h4>
              <p class="text-xs text-slate-500 leading-relaxed">${d.checks.wordCount ? 'Memenuhi ketentuan minimal 3 kata mandiri dalam Bahasa Indonesia.' : 'Jumlah kata kurang dari ketentuan minimal 3 kata.'}</p>
            </div>

            <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Konflik Homonim</span>
                <span class="material-symbols-outlined ${d.checks.phoneticConflictLow ? 'text-emerald-600' : 'text-crimson-700'}">${d.checks.phoneticConflictLow ? 'check_circle' : 'cancel'}</span>
              </div>
              <h4 class="text-base text-slate-900 font-extrabold">Kemiripan: ${d.similarityScore}%</h4>
              <p class="text-xs text-slate-500 leading-relaxed">Data pembanding terdekat: <strong class="text-slate-800">${d.closestMatch}</strong></p>
            </div>

            <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Norma &amp; Etika</span>
                <span class="material-symbols-outlined ${d.checks.noForbiddenGovernmentTokens ? 'text-emerald-600' : 'text-crimson-700'}">${d.checks.noForbiddenGovernmentTokens ? 'check_circle' : 'cancel'}</span>
              </div>
              <h4 class="text-base text-slate-900 font-extrabold">${d.checks.noForbiddenGovernmentTokens ? 'Bebas Larangan' : 'Mengandung Larangan'}</h4>
              <p class="text-xs text-slate-500 leading-relaxed">${d.checks.noForbiddenGovernmentTokens ? 'Tidak ditemukan frasa instansi/lembaga terlarang.' : 'Terdapat frasa yang dilarang undang-undang.'}</p>
            </div>
          </div>

          <!-- Legal Opinion Note & Reservation Action -->
          <div class="crimson-gradient-bg text-white rounded-3xl p-7 sm:p-8 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div class="space-y-1.5 max-w-xl">
              <span class="text-[11px] font-bold uppercase tracking-wider text-gold-400">Rekomendasi Notaris Rekanan</span>
              <p class="text-xs sm:text-sm text-white/90 leading-relaxed">${d.legalAdvice}</p>
            </div>
            <a href="#/konsultasi?layanan=pt-standar" class="px-6 py-3.5 bg-gold-500 hover:bg-gold-400 text-slate-950 text-xs sm:text-sm font-extrabold rounded-xl shadow-md transition-all shrink-0">
              Reservasi Nama Ini via Notaris
            </a>
          </div>
        `;
        if (notify) {
          showToast('Validasi nama PT selesai.');
        }
      } else {
        showToast(response.message || 'Gagal memvalidasi nama PT', 'error');
      }
    } catch (e) {
      showToast('Gagal memeriksa nama PT: ' + e.message, 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtn;
      if (window.lucide) window.lucide.createIcons();
    }
  }

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    executeValidation(input.value.trim(), true);
  });

  if (input?.value) {
    executeValidation(input.value.trim(), false);
  }
}
