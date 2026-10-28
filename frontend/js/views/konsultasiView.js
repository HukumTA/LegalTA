/**
 * View: Konsultasi Gratis & Kalkulator Biaya
 */

import { api } from '../api.js';
import { showToast } from '../components/toast.js';

export function renderKonsultasiView() {
  const inputCls = 'w-full px-5 py-3.5 rounded-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-crimson-800 text-slate-900 text-sm font-medium';

  return `
    <div class="flex flex-col w-full">

      <!-- 1. HERO -->
      <section class="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 bg-transparent border-b border-slate-200/50">
        <div class="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            Konsultasi Gratis, <span class="text-crimson-800">Tanpa Komitmen</span>
          </h1>
          <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            Ceritakan kebutuhan legalitas usaha Anda, tim kami akan membantu menentukan langkah yang tepat.
          </p>
        </div>
      </section>

      <!-- 2. FORM + KALKULATOR -->
      <section class="py-16 lg:py-24 bg-slate-50/50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            <!-- Form -->
            <div class="lg:col-span-7 bg-white p-8 sm:p-10 rounded-[2rem] shadow-md border border-slate-200 space-y-6">
              <h2 class="text-2xl text-slate-900 font-extrabold pb-4 border-b border-slate-100">Jadwalkan Konsultasi</h2>

              <form id="spaConsultationForm" class="space-y-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label for="spaClientName" class="block text-xs text-slate-700 font-bold mb-1.5">Nama Lengkap *</label>
                    <input type="text" id="spaClientName" required placeholder="Contoh: Bambang Sutrisno" class="${inputCls}">
                  </div>
                  <div>
                    <label for="spaClientPhone" class="block text-xs text-slate-700 font-bold mb-1.5">Nomor WhatsApp *</label>
                    <input type="tel" id="spaClientPhone" required placeholder="Contoh: 081289001234" class="${inputCls}">
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label for="spaClientEmail" class="block text-xs text-slate-700 font-bold mb-1.5">Email *</label>
                    <input type="email" id="spaClientEmail" required placeholder="nama@perusahaan.co.id" class="${inputCls}">
                  </div>
                  <div>
                    <label for="spaClientCity" class="block text-xs text-slate-700 font-bold mb-1.5">Kota Usaha</label>
                    <input type="text" id="spaClientCity" placeholder="Contoh: Makassar" class="${inputCls}">
                  </div>
                </div>

                <div>
                  <label for="spaServiceSelect" class="block text-xs text-slate-700 font-bold mb-1.5">Layanan yang Dibutuhkan *</label>
                  <select id="spaServiceSelect" style="font-size:15px;" class="w-full px-5 py-3.5 rounded-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-crimson-800 text-slate-900 cursor-pointer">
                    <option value="pt-standar" style="font-size:16px; padding:8px;">Pendirian PT Standar — Mulai Rp 4.890.000</option>
                    <option value="pt-perorangan" style="font-size:16px; padding:8px;">Pendirian PT Perorangan — Mulai Rp 1.500.000</option>
                    <option value="cv" style="font-size:16px; padding:8px;">Pendirian CV — Mulai Rp 2.800.000</option>
                    <option value="pt-pma" style="font-size:16px; padding:8px;">Pendirian PT PMA — Mulai Rp 8.750.000</option>
                    <option value="merek" style="font-size:16px; padding:8px;">Pendaftaran Merek — Mulai Rp 1.950.000</option>
                    <option value="perubahan-akta" style="font-size:16px; padding:8px;">Perubahan Akta — Mulai Rp 4.500.000</option>
                    <option value="perizinan-oss" style="font-size:16px; padding:8px;">Perizinan Usaha &amp; NIB — Mulai Rp 1.250.000</option>
                    <option value="pse" style="font-size:16px; padding:8px;">Pendaftaran Aplikasi Digital (PSE) — Mulai Rp 2.500.000</option>
                  </select>
                </div>

                <div>
                  <span class="block text-xs text-slate-700 font-bold mb-1.5">Metode Konsultasi</span>
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <label class="px-5 py-3.5 rounded-full border border-slate-200 bg-slate-50 flex items-center gap-2.5 cursor-pointer hover:border-crimson-800 transition-colors">
                      <input type="radio" name="spaMethod" value="whatsapp" checked class="accent-crimson-800">
                      <span class="text-sm font-bold text-slate-800">WhatsApp</span>
                    </label>
                    <label class="px-5 py-3.5 rounded-full border border-slate-200 bg-slate-50 flex items-center gap-2.5 cursor-pointer hover:border-crimson-800 transition-colors">
                      <input type="radio" name="spaMethod" value="gmeet" class="accent-crimson-800">
                      <span class="text-sm font-bold text-slate-800">Google Meet</span>
                    </label>
                    <label class="px-5 py-3.5 rounded-full border border-slate-200 bg-slate-50 flex items-center gap-2.5 cursor-pointer hover:border-crimson-800 transition-colors">
                      <input type="radio" name="spaMethod" value="office" class="accent-crimson-800">
                      <span class="text-sm font-bold text-slate-800">Datang ke Kantor</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label for="spaNotes" class="block text-xs text-slate-700 font-bold mb-1.5">Kebutuhan Anda</label>
                  <textarea id="spaNotes" rows="3" placeholder="Ceritakan singkat bidang usaha atau kendala yang dihadapi..." class="w-full px-5 py-4 rounded-3xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-crimson-800 text-slate-900 text-sm"></textarea>
                </div>

                <button type="submit" id="spaSubmitConsultBtn" class="inline-flex items-center justify-center px-8 py-4 bg-crimson-800 hover:bg-crimson-900 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  <span>Jadwalkan Konsultasi</span>
                  <i data-lucide="arrow-right" class="w-5 h-5 ml-2"></i>
                </button>
              </form>
            </div>

            <!-- Kalkulator -->
            <div class="lg:col-span-5">
              <div class="bg-white p-8 rounded-[2rem] shadow-md border border-slate-200 space-y-5">
                <h3 class="text-2xl text-slate-900 font-extrabold pb-4 border-b border-slate-100">Perkiraan Biaya</h3>

                <div class="space-y-3">
                  <div class="flex items-center justify-between gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <h5 id="spaCalcBaseTitle" class="text-sm text-slate-900 font-bold">Pendirian PT Standar</h5>
                    <span id="spaCalcBasePrice" class="text-sm text-crimson-800 font-extrabold shrink-0">Rp 4.890.000</span>
                  </div>

                  <label class="flex items-center justify-between gap-3 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-100 cursor-pointer transition-colors">
                    <div class="flex items-center gap-3">
                      <input type="checkbox" id="spaAddonVO" class="w-4 h-4 accent-crimson-800">
                      <h5 class="text-sm text-slate-900 font-bold">Virtual Office 1 Tahun</h5>
                    </div>
                    <span class="text-sm text-slate-600 font-extrabold shrink-0">+Rp 3.500.000</span>
                  </label>

                  <label class="flex items-center justify-between gap-3 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-100 cursor-pointer transition-colors">
                    <div class="flex items-center gap-3">
                      <input type="checkbox" id="spaAddonMerek" class="w-4 h-4 accent-crimson-800">
                      <h5 class="text-sm text-slate-900 font-bold">Pendaftaran Merek 1 Kelas</h5>
                    </div>
                    <span class="text-sm text-slate-600 font-extrabold shrink-0">+Rp 1.950.000</span>
                  </label>
                </div>

                <div class="rounded-3xl p-6 text-white" style="background: linear-gradient(160deg, #8F1A1C 0%, #5A0D0F 100%);">
                  <span class="text-xs text-gold-400 font-bold block">Total Perkiraan</span>
                  <span id="spaGrandTotal" class="text-3xl font-black text-white block mt-1">Rp 4.890.000</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  `;
}

export function initKonsultasiLogic() {
  const form = document.getElementById('spaConsultationForm');
  const serviceSelect = document.getElementById('spaServiceSelect');
  const baseTitle = document.getElementById('spaCalcBaseTitle');
  const basePrice = document.getElementById('spaCalcBasePrice');
  const grandTotal = document.getElementById('spaGrandTotal');
  const addonVO = document.getElementById('spaAddonVO');
  const addonMerek = document.getElementById('spaAddonMerek');

  const prices = {
    'pt-standar': { name: 'Pendirian PT Standar', price: 4890000 },
    'pt-perorangan': { name: 'Pendirian PT Perorangan', price: 1500000 },
    'cv': { name: 'Pendirian CV', price: 2800000 },
    'pt-pma': { name: 'Pendirian PT PMA', price: 8750000 },
    'merek': { name: 'Pendaftaran Merek', price: 1950000 },
    'perubahan-akta': { name: 'Perubahan Akta', price: 4500000 },
    'perizinan-oss': { name: 'Perizinan Usaha & NIB', price: 1250000 },
    'pse': { name: 'Pendaftaran Aplikasi Digital (PSE)', price: 2500000 }
  };

  // Pilih layanan otomatis dari link, contoh: #/konsultasi?layanan=merek
  const hashParts = window.location.hash.split('?');
  if (hashParts[1] && serviceSelect) {
    const params = new URLSearchParams(hashParts[1]);
    const layananParam = params.get('layanan');
    if (layananParam && prices[layananParam]) {
      serviceSelect.value = layananParam;
    }
  }

  function updateCalc() {
    if (!serviceSelect) return;
    const s = prices[serviceSelect.value] || prices['pt-standar'];
    baseTitle.textContent = s.name;
    basePrice.textContent = 'Rp ' + s.price.toLocaleString('id-ID');

    let total = s.price;
    if (addonVO?.checked) total += 3500000;
    if (addonMerek?.checked) total += 1950000;

    grandTotal.textContent = 'Rp ' + total.toLocaleString('id-ID');
  }

  serviceSelect?.addEventListener('change', updateCalc);
  addonVO?.addEventListener('change', updateCalc);
  addonMerek?.addEventListener('change', updateCalc);

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const payload = {
      name: document.getElementById('spaClientName').value.trim(),
      phone: document.getElementById('spaClientPhone').value.trim(),
      email: document.getElementById('spaClientEmail').value.trim(),
      city: document.getElementById('spaClientCity').value.trim(),
      service: serviceSelect.value,
      method: document.querySelector('input[name="spaMethod"]:checked')?.value || 'whatsapp',
      notes: document.getElementById('spaNotes').value.trim()
    };

    try {
      const res = await api.submitConsultation(payload);
      if (res.success) {
        showToast('Permohonan tersimpan. Membuka WhatsApp...', 'success');
        if (res.data && res.data.whatsappLink) {
          setTimeout(() => {
            window.open(res.data.whatsappLink, '_blank');
          }, 600);
        }
      }
    } catch (err) {
      showToast('Gagal mengirim formulir: ' + err.message, 'error');
    }
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }

  updateCalc();
}