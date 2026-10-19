/**
 * View: Cek Nama PT (Public Tool - PP 43/2011)
 */

import { api } from '../api.js';
import { showToast } from '../components/toast.js';

export function renderCekPtView() {
  return `
    <div class="flex flex-col w-full">
      <!-- Hero Header -->
      <section class="relative w-full bg-surface-container-lowest px-6 lg:px-12 pt-12 pb-16 border-b border-surface-container-high">
        <div class="max-w-4xl mx-auto text-center space-y-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-fixed/60 text-primary">
            <span class="material-symbols-outlined text-[16px]">verified</span>
            <span class="font-label-sm uppercase tracking-wider">Validasi Administrasi Hukum Umum (PP No. 43/2011)</span>
          </div>
          <h1 class="font-display-lg text-primary text-balance leading-tight">
            Cek Ketersediaan &amp; Kelayakan Nama PT Anda Secara Instan
          </h1>
          <p class="font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Sistem pengujian berbasis aturan Ditjen AHU Kemenkumham RI: Minimal 3 kata dalam Bahasa Indonesia, bebas kata terlarang, dan nihil konflik homonim perseroan aktif.
          </p>
        </div>

        <!-- Search Input Card -->
        <div class="max-w-3xl mx-auto mt-8 bg-surface-container-low p-3 rounded-2xl shadow-md border border-surface-container-high">
          <form id="ptSearchForm" class="flex flex-col sm:flex-row items-center gap-3">
            <div class="flex items-center gap-3 px-4 py-3 w-full flex-1 bg-surface-container-lowest rounded-xl border border-surface-container">
              <span class="font-label-md font-bold text-secondary uppercase tracking-wider">PT.</span>
              <input type="text" id="ptInputName" value="Perkasa Digital Nusantara" placeholder="Masukkan usulan nama PT (cth: Perkasa Digital Nusantara)..." required class="w-full bg-transparent border-none outline-none font-body-md text-on-surface font-semibold">
            </div>
            <button type="submit" id="ptSubmitBtn" class="w-full sm:w-auto px-8 py-4 bg-primary text-on-primary font-label-lg font-bold rounded-xl shadow-md hover:bg-primary-container transition-all flex items-center justify-center gap-2 shrink-0">
              <span class="material-symbols-outlined text-[20px]">search_check</span>
              <span>Uji Nama PT</span>
            </button>
          </form>
        </div>
      </section>

      <!-- Live Analysis Result Section -->
      <section class="max-w-6xl mx-auto px-6 lg:px-12 py-12" id="ptResultContainer">
        <!-- Result card will be rendered here by JS -->
        <div id="ptResultCard" class="space-y-8"></div>
      </section>

      <!-- Educational Prohibitions Grid -->
      <section class="w-full bg-surface-container-low py-16 px-6 lg:px-12">
        <div class="max-w-6xl mx-auto space-y-12">
          <div class="text-center max-w-3xl mx-auto space-y-2">
            <span class="font-label-sm text-secondary uppercase font-bold tracking-widest">Kaidah Hukum Mutlak</span>
            <h3 class="font-headline-xl text-primary font-bold">5 Hal yang Dilarang dalam Penamaan PT</h3>
            <p class="font-body-md text-on-surface-variant">Berdasarkan Pasal 5 Peraturan Pemerintah No. 43 Tahun 2011.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm space-y-2">
              <span class="font-display-lg text-primary/20 leading-none block">01</span>
              <h4 class="font-headline-sm text-on-surface font-bold">Kurang dari 3 Kata</h4>
              <p class="font-body-sm text-on-surface-variant">Bagi PT PMDN lokal, wajib terdiri atas minimal 3 kata berbahasa Indonesia. Contoh gagal: PT Sinar Abadi.</p>
            </div>
            <div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm space-y-2">
              <span class="font-display-lg text-primary/20 leading-none block">02</span>
              <h4 class="font-headline-sm text-on-surface font-bold">Menyerupai Instansi Lembaga Negara</h4>
              <p class="font-body-sm text-on-surface-variant">Dilarang memakai singkatan atau nama yang menyerupai lembaga pemerintah seperti KPK, Kementerian, atau Pajak.</p>
            </div>
            <div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm space-y-2">
              <span class="font-display-lg text-primary/20 leading-none block">03</span>
              <h4 class="font-headline-sm text-on-surface font-bold">Bahasa Asing untuk PT Lokal</h4>
              <p class="font-body-sm text-on-surface-variant">Seluruh saham WNI mutlak berbahasa Indonesia. Unsur bahasa asing hanya diperbolehkan untuk PT PMA.</p>
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

  async function executeValidation(name) {
    if (!name) return;
    submitBtn.disabled = true;
    const originalBtn = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span class="material-symbols-outlined text-[20px] animate-spin">refresh</span><span>Menganalisis PP 43/2011...</span>`;

    try {
      const response = await api.checkPTName(name);
      if (response.success) {
        const d = response.data;
        const statusBadge = d.isEligible 
          ? `<span class="font-label-sm uppercase px-3 py-1 rounded-full bg-[#DCFCE7] text-[#166534] font-bold">Tersedia &amp; Memenuhi Syarat</span>`
          : `<span class="font-label-sm uppercase px-3 py-1 rounded-full bg-error-container text-error font-bold">Perlu Penyesuaian</span>`;

        const scoreColor = d.probability >= 80 ? 'text-secondary' : 'text-error';

        resultCard.innerHTML = `
          <!-- Status Banner -->
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 sm:p-8 bg-surface-container-lowest rounded-3xl shadow-sm border border-surface-container-high">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 rounded-2xl ${d.isEligible ? 'bg-[#DCFCE7] text-[#166534]' : 'bg-error-container text-error'} flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-[36px]">${d.isEligible ? 'check_circle' : 'warning'}</span>
              </div>
              <div>
                <div class="flex items-center gap-2">
                  ${statusBadge}
                  <span class="font-label-sm text-on-surface-variant">Simulasi Algoritma AHU</span>
                </div>
                <h2 class="font-headline-lg text-primary font-bold mt-1">${d.formattedPTName}</h2>
              </div>
            </div>
            <div class="flex items-center gap-4 bg-surface-container-low p-4 rounded-2xl border border-surface-container">
              <div class="text-right">
                <span class="font-label-sm text-on-surface-variant block">Peluang Disetujui</span>
                <span class="font-headline-lg font-bold ${scoreColor}">${d.probability}%</span>
              </div>
            </div>
          </div>

          <!-- 3-Pillar Audit Breakdown -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container-high space-y-3">
              <div class="flex items-center justify-between">
                <span class="font-label-sm uppercase tracking-wider text-on-surface-variant">Syarat 3 Kata</span>
                <span class="material-symbols-outlined ${d.checks.wordCount ? 'text-emerald-600' : 'text-error'}">${d.checks.wordCount ? 'check_circle' : 'cancel'}</span>
              </div>
              <h4 class="font-headline-sm text-on-surface font-bold">${d.wordCount} Suku Kata Terdeteksi</h4>
              <p class="font-body-sm text-on-surface-variant">${d.checks.wordCount ? 'Memenuhi ketentuan minimal 3 kata mandiri.' : 'Jumlah kata kurang dari ketentuan minimal 3 kata.'}</p>
            </div>

            <div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container-high space-y-3">
              <div class="flex items-center justify-between">
                <span class="font-label-sm uppercase tracking-wider text-on-surface-variant">Konflik Homonim</span>
                <span class="material-symbols-outlined ${d.checks.phoneticConflictLow ? 'text-emerald-600' : 'text-error'}">${d.checks.phoneticConflictLow ? 'check_circle' : 'cancel'}</span>
              </div>
              <h4 class="font-headline-sm text-on-surface font-bold">Kemiripan: ${d.similarityScore}%</h4>
              <p class="font-body-sm text-on-surface-variant">Data pembanding terdekat: <strong>${d.closestMatch}</strong></p>
            </div>

            <div class="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container-high space-y-3">
              <div class="flex items-center justify-between">
                <span class="font-label-sm uppercase tracking-wider text-on-surface-variant">Norma &amp; Etika</span>
                <span class="material-symbols-outlined ${d.checks.noForbiddenGovernmentTokens ? 'text-emerald-600' : 'text-error'}">${d.checks.noForbiddenGovernmentTokens ? 'check_circle' : 'cancel'}</span>
              </div>
              <h4 class="font-headline-sm text-on-surface font-bold">${d.checks.noForbiddenGovernmentTokens ? 'Bebas Larangan' : 'Mengandung Larangan'}</h4>
              <p class="font-body-sm text-on-surface-variant">${d.checks.noForbiddenGovernmentTokens ? 'Tidak ditemukan frasa instansi/lembaga terlarang.' : 'Terdapat frasa yang dilarang undang-undang.'}</p>
            </div>
          </div>

          <!-- Legal Opinion Note & Reservation Action -->
          <div class="bg-primary text-on-primary rounded-3xl p-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div class="space-y-2 max-w-xl">
              <h3 class="font-headline-sm text-white font-bold">Rekomendasi Notaris Rekanan:</h3>
              <p class="font-body-sm text-primary-fixed leading-relaxed">${d.legalAdvice}</p>
            </div>
            <a href="#/konsultasi?layanan=pt-standar" class="px-6 py-3.5 bg-surface-container-lowest text-primary font-label-lg font-bold rounded-xl shadow-md hover:bg-surface-container-low transition-all shrink-0">
              Reservasi Nama Ini via Notaris
            </a>
          </div>
        `;
        showToast('Validasi nama PT selesai dianalisis.');
      } else {
        showToast(response.message || 'Gagal memvalidasi nama PT', 'error');
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
    executeValidation(input.value.trim());
  });

  // Run initial test
  if (input?.value) {
    executeValidation(input.value.trim());
  }
}
