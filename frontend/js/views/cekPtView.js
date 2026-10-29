/**
 * View: Cek Nama PT (Public Tool)
 * Gaya disamakan dengan halaman Pendirian, HKI, Perizinan, dan Dokumen.
 */

import { api } from '../api.js';
import { showToast } from '../components/toast.js';

export function renderCekPtView() {
  return `
    <div class="flex flex-col w-full">

      <!-- 1. HERO + FORM -->
      <section class="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-24 bg-transparent border-b border-slate-200/50">
        <div class="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            Cek Nama PT, <span class="text-crimson-800">Cepat & Mudah</span>
          </h1>
          <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            Periksa apakah nama PT yang Anda inginkan memenuhi syarat dan belum dipakai perusahaan lain.
          </p>

          <div class="max-w-3xl mx-auto pt-4">
            <form id="ptSearchForm" class="bg-white p-3 rounded-[2rem] shadow-xl border border-slate-200 flex flex-col sm:flex-row items-center gap-3">
              <div class="flex items-center gap-3 px-5 py-3.5 w-full flex-1 bg-slate-50 rounded-full border border-slate-200 focus-within:border-crimson-800 transition-colors">
                <span class="text-sm font-extrabold text-crimson-800">PT.</span>
                <input type="text" id="ptInputName" value="" placeholder="Contoh: Perkasa Digital Nusantara" required class="w-full bg-transparent border-none outline-none text-sm text-slate-900 font-bold">
              </div>
              <button type="submit" id="ptSubmitBtn" class="w-full sm:w-auto px-8 py-4 bg-crimson-800 hover:bg-crimson-900 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 shrink-0">
                <span>Cek Nama</span>
                <i data-lucide="arrow-right" class="w-5 h-5"></i>
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- 2. HASIL -->
      <section class="max-w-6xl mx-auto px-6 py-12 w-full" id="ptResultContainer">
        <div id="ptResultCard" class="space-y-8">
          <div class="p-12 text-center bg-white rounded-[2rem] border border-slate-200 text-slate-500 text-sm">
            <i data-lucide="search" class="w-10 h-10 mx-auto mb-3 text-slate-400"></i>
            <p class="font-bold text-slate-700">Masukkan usulan nama PT pada formulir di atas.</p>
            <p class="text-xs text-slate-400 mt-1">Sistem akan memvalidasi kepatuhan PP 43/2011 dan kemiripan nama terdaftar.</p>
          </div>
        </div>
      </section>

      <!-- 3. ATURAN PENAMAAN -->
      <section class="py-20 lg:py-28 bg-slate-50/50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              3 Aturan Penamaan PT
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all">
              <span class="absolute -top-6 -right-6 text-9xl font-black text-slate-200/50 group-hover:text-crimson-100 transition-colors pointer-events-none">1</span>
              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-crimson-800 text-white flex items-center justify-center mb-6 shadow-md">
                  <i data-lucide="type" class="w-8 h-8"></i>
                </div>
                <h4 class="text-xl font-bold text-slate-900 mb-3">Minimal 3 Kata</h4>
                <p class="text-sm text-slate-600 leading-relaxed">Nama PT lokal terdiri dari minimal 3 kata dalam Bahasa Indonesia.</p>
              </div>
            </div>

            <div class="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all">
              <span class="absolute -top-6 -right-6 text-9xl font-black text-slate-200/50 group-hover:text-crimson-100 transition-colors pointer-events-none">2</span>
              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-crimson-800 text-white flex items-center justify-center mb-6 shadow-md">
                  <i data-lucide="ban" class="w-8 h-8"></i>
                </div>
                <h4 class="text-xl font-bold text-slate-900 mb-3">Bukan Nama Lembaga Negara</h4>
                <p class="text-sm text-slate-600 leading-relaxed">Tidak boleh memakai nama kementerian, lembaga negara, atau aparat penegak hukum.</p>
              </div>
            </div>

            <div class="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all">
              <span class="absolute -top-6 -right-6 text-9xl font-black text-slate-200/50 group-hover:text-crimson-100 transition-colors pointer-events-none">3</span>
              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-md">
                  <i data-lucide="languages" class="w-8 h-8"></i>
                </div>
                <h4 class="text-xl font-bold text-slate-900 mb-3">Bahasa Indonesia</h4>
                <p class="text-sm text-slate-600 leading-relaxed">Nama berbahasa asing hanya diperbolehkan untuk PT penanaman modal asing.</p>
              </div>
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
    submitBtn.innerHTML = `<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i><span>Memeriksa...</span>`;
    if (window.lucide) window.lucide.createIcons();

    try {
      const response = await api.checkPTName(name);
      if (response.success) {
        const d = response.data;
        const statusBadge = d.isEligible
          ? `<span class="text-xs px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold">Memenuhi Syarat</span>`
          : `<span class="text-xs px-4 py-1.5 rounded-full bg-crimson-100 text-crimson-800 font-extrabold">Perlu Penyesuaian</span>`;

        const scoreColor = d.probability >= 80 ? 'text-emerald-600' : 'text-crimson-700';
        const iconOk = `<i data-lucide="check-circle-2" class="w-6 h-6 text-emerald-600"></i>`;
        const iconNo = `<i data-lucide="x-circle" class="w-6 h-6 text-crimson-700"></i>`;

        resultCard.innerHTML = `
          <!-- Status -->
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 bg-white rounded-[2rem] shadow-md border border-slate-200">
            <div class="flex items-center gap-5">
              <div class="w-16 h-16 rounded-2xl ${d.isEligible ? 'bg-emerald-50 text-emerald-600' : 'bg-crimson-50 text-crimson-700'} flex items-center justify-center shrink-0">
                <i data-lucide="${d.isEligible ? 'check-circle-2' : 'alert-triangle'}" class="w-8 h-8"></i>
              </div>
              <div>
                ${statusBadge}
                <h2 class="text-2xl text-slate-900 font-extrabold mt-2">${d.formattedPTName}</h2>
              </div>
            </div>
            <div class="bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100">
              <span class="text-[10px] text-slate-400 font-bold uppercase block">Peluang Disetujui</span>
              <span class="text-3xl font-black ${scoreColor}">${d.probability}%</span>
            </div>
          </div>

          <!-- 3 Pemeriksaan -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white p-7 rounded-[2rem] shadow-sm border border-slate-200 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold uppercase text-slate-400">Jumlah Kata</span>
                ${d.checks.wordCount ? iconOk : iconNo}
              </div>
              <h4 class="text-lg text-slate-900 font-extrabold">${d.wordCount} Kata</h4>
              <p class="text-sm text-slate-600 leading-relaxed">${d.checks.wordCount ? 'Sudah memenuhi minimal 3 kata.' : 'Kurang dari minimal 3 kata.'}</p>
            </div>

            <div class="bg-white p-7 rounded-[2rem] shadow-sm border border-slate-200 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold uppercase text-slate-400">Kemiripan Nama</span>
                ${d.checks.phoneticConflictLow ? iconOk : iconNo}
              </div>
              <h4 class="text-lg text-slate-900 font-extrabold">Kemiripan ${d.similarityScore}%</h4>
              <p class="text-sm text-slate-600 leading-relaxed">Nama terdekat: <strong class="text-slate-800">${d.closestMatch}</strong></p>
            </div>

            <div class="bg-white p-7 rounded-[2rem] shadow-sm border border-slate-200 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-bold uppercase text-slate-400">Kata Terlarang</span>
                ${d.checks.noForbiddenGovernmentTokens ? iconOk : iconNo}
              </div>
              <h4 class="text-lg text-slate-900 font-extrabold">${d.checks.noForbiddenGovernmentTokens ? 'Aman' : 'Ada Kata Terlarang'}</h4>
              <p class="text-sm text-slate-600 leading-relaxed">${d.checks.noForbiddenGovernmentTokens ? 'Tidak ada nama lembaga yang dilarang.' : 'Ada kata yang tidak boleh dipakai pada nama PT.'}</p>
            </div>
          </div>

          <!-- Saran & CTA -->
          <div class="rounded-[2.5rem] p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6" style="background: linear-gradient(160deg, #8F1A1C 0%, #5A0D0F 100%);">
            <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-[#E8C26A] opacity-20 blur-[100px] pointer-events-none"></div>
            <div class="max-w-xl relative z-10">
              <span class="text-[11px] font-extrabold uppercase tracking-wider text-gold-400">Saran</span>
              <p class="text-sm sm:text-base text-white/90 leading-relaxed mt-1">${d.legalAdvice}</p>
            </div>
            <a href="#/konsultasi?layanan=pt-standar" class="relative z-10 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-[#5A0D0F] text-sm font-extrabold rounded-full shadow-xl transition-all shrink-0 inline-flex items-center gap-2">
              <span>Pakai Nama Ini</span>
              <i data-lucide="arrow-right" class="w-5 h-5"></i>
            </a>
          </div>
        `;
        if (notify) {
          showToast('Pemeriksaan nama PT selesai.');
        }
      } else {
        showToast(response.message || 'Gagal memeriksa nama PT', 'error');
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

  if (window.lucide) {
    window.lucide.createIcons();
  }

  if (input?.value) {
    executeValidation(input.value.trim(), false);
  }
}