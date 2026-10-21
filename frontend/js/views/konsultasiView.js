/**
 * View: Konsultasi Gratis & Kalkulator Biaya Legalitas
 * Modernized to match the LEGALTA Crimson/Gold/Slate reference aesthetic.
 */

import { api } from '../api.js';
import { showToast } from '../components/toast.js';

export function renderKonsultasiView() {
  return `
    <div class="flex flex-col w-full bg-[#FAFAFC]">
      <section class="relative w-full bg-gradient-to-b from-white via-crimson-50/20 to-white px-6 pt-12 pb-14 border-b border-slate-100">
        <div class="max-w-4xl mx-auto text-center space-y-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crimson-50 border border-crimson-100 text-crimson-800 text-xs font-bold uppercase tracking-wider">
            <i data-lucide="headset" class="w-3.5 h-3.5 text-crimson-700"></i>
            <span>Konsultasi Awal Bebas Biaya</span>
          </div>
          <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
            Konsultasikan Pendirian, Izin, &amp; Legalitas Usaha Bersama Para Ahli
          </h1>
          <p class="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Dapatkan rekomendasi hukum dari Tim Notaris &amp; Personal Legal Assistant (PLA). Gratis biaya konsultasi awal tanpa komitmen.
          </p>
        </div>
      </section>

      <section class="max-w-7xl mx-auto px-6 py-12 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <!-- Left: Consultation Form (7 Cols) -->
          <div class="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl shadow-md border border-slate-200/80 space-y-6">
            <div class="space-y-1 pb-4 border-b border-slate-100">
              <h2 class="text-xl text-slate-900 font-extrabold">Formulir Penjadwalan Konsultasi</h2>
              <p class="text-xs sm:text-sm text-slate-500">Lengkapi data agar Personal Legal Assistant kami dapat menelaah kebutuhan Anda.</p>
            </div>

            <form id="spaConsultationForm" class="space-y-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div class="space-y-1.5">
                  <label for="spaClientName" class="text-xs text-slate-700 font-bold">Nama Lengkap *</label>
                  <input type="text" id="spaClientName" required placeholder="cth: Bambang Sutrisno" class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-crimson-800 text-slate-900 text-sm font-medium">
                </div>
                <div class="space-y-1.5">
                  <label for="spaClientPhone" class="text-xs text-slate-700 font-bold">Nomor WhatsApp Aktif *</label>
                  <input type="tel" id="spaClientPhone" required placeholder="cth: 081289001234" class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-crimson-800 text-slate-900 text-sm font-medium">
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div class="space-y-1.5">
                  <label for="spaClientEmail" class="text-xs text-slate-700 font-bold">Alamat Email *</label>
                  <input type="email" id="spaClientEmail" required placeholder="bambang@perusahaan.co.id" class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-crimson-800 text-slate-900 text-sm font-medium">
                </div>
                <div class="space-y-1.5">
                  <label for="spaClientCity" class="text-xs text-slate-700 font-bold">Kota Domisili Usaha</label>
                  <input type="text" id="spaClientCity" placeholder="cth: DKI Jakarta / Surabaya" class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-crimson-800 text-slate-900 text-sm font-medium">
                </div>
              </div>

              <div class="space-y-1.5">
                <label for="spaServiceSelect" class="text-xs text-slate-700 font-bold">Layanan Utama yang Dibutuhkan *</label>
                <select id="spaServiceSelect" class="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-crimson-800 text-slate-900 text-sm font-semibold cursor-pointer">
                  <option value="pt-standar">Pendirian PT Standar (PMDN) — Mulai Rp 4.890.000</option>
                  <option value="pt-perorangan">Pendirian PT Perorangan (UMKM) — Mulai Rp 1.500.000</option>
                  <option value="cv">Pendirian CV Usaha — Mulai Rp 2.800.000</option>
                  <option value="pt-pma">Pendirian PT PMA / Eksekutif — Mulai Rp 8.750.000</option>
                  <option value="merek">Pendaftaran Merek HKI DJKI — Mulai Rp 1.950.000</option>
                  <option value="perubahan-akta">Perubahan Akta &amp; Anggaran Dasar — Mulai Rp 4.500.000</option>
                  <option value="perizinan-oss">Perizinan Usaha OSS-RBA &amp; NIB — Mulai Rp 1.250.000</option>
                  <option value="pse">Pendaftaran PSE Kominfo / PB-UMKU — Mulai Rp 2.500.000</option>
                </select>
              </div>

              <div class="space-y-1.5">
                <label class="text-xs text-slate-700 font-bold">Metode Konsultasi</label>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label class="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-2.5 cursor-pointer hover:border-crimson-800 transition-colors">
                    <input type="radio" name="spaMethod" value="whatsapp" checked class="accent-crimson-800">
                    <span class="text-xs font-bold text-slate-800">WhatsApp Chat</span>
                  </label>
                  <label class="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-2.5 cursor-pointer hover:border-crimson-800 transition-colors">
                    <input type="radio" name="spaMethod" value="gmeet" class="accent-crimson-800">
                    <span class="text-xs font-bold text-slate-800">Google Meet</span>
                  </label>
                  <label class="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-2.5 cursor-pointer hover:border-crimson-800 transition-colors">
                    <input type="radio" name="spaMethod" value="office" class="accent-crimson-800">
                    <span class="text-xs font-bold text-slate-800">SCBD Jakarta</span>
                  </label>
                </div>
              </div>

              <div class="space-y-1.5">
                <label for="spaNotes" class="text-xs text-slate-700 font-bold">Deskripsi Kebutuhan</label>
                <textarea id="spaNotes" rows="3" placeholder="Tuliskan bidang usaha, perkiraan modal setor, atau kendala izin..." class="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-crimson-800 text-slate-900 text-sm"></textarea>
              </div>

              <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                <span class="text-xs text-slate-500 flex items-center gap-1.5">
                  <i data-lucide="lock" class="w-3.5 h-3.5 text-emerald-600"></i>
                  Data terenkripsi dan dijamin NDA
                </span>
                <button type="submit" id="spaSubmitConsultBtn" class="w-full sm:w-auto px-8 py-4 bg-crimson-800 hover:bg-crimson-900 text-white text-sm font-bold rounded-xl shadow-lg shadow-crimson-800/25 transition-all flex items-center justify-center gap-2">
                  <i data-lucide="send" class="w-4 h-4"></i>
                  <span>Jadwalkan Konsultasi</span>
                </button>
              </div>
            </form>
          </div>

          <!-- Right: Calculator & SLA Box (5 Cols) -->
          <div class="lg:col-span-5 space-y-6">
            <div class="bg-white p-6 sm:p-8 rounded-3xl shadow-md border border-slate-200/80 space-y-5">
              <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                <div class="flex items-center gap-2">
                  <i data-lucide="calculator" class="w-5 h-5 text-crimson-700"></i>
                  <h3 class="text-base text-slate-900 font-extrabold">Kalkulator Biaya Transparan</h3>
                </div>
                <span class="text-[11px] bg-amber-50 border border-amber-200 text-gold-700 px-2.5 py-0.5 rounded-full font-extrabold">Nol Mark-Up</span>
              </div>

              <div class="space-y-3 pt-1">
                <div class="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div>
                    <h5 id="spaCalcBaseTitle" class="text-xs sm:text-sm text-slate-900 font-bold">Pendirian PT Standar (PMDN)</h5>
                    <span class="text-[11px] text-slate-500">Akta Notaris + SK Menkumham + NIB OSS</span>
                  </div>
                  <span id="spaCalcBasePrice" class="text-xs sm:text-sm text-crimson-800 font-extrabold">Rp 4.890.000</span>
                </div>

                <label class="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-100 cursor-pointer transition-colors">
                  <div class="flex items-center gap-3">
                    <input type="checkbox" id="spaAddonVO" class="w-4 h-4 accent-crimson-800 rounded">
                    <div>
                      <h5 class="text-xs sm:text-sm text-slate-900 font-bold">Virtual Office SCBD Jakarta (1 Thn)</h5>
                      <span class="text-[11px] text-slate-500">Alamat prestisius &amp; mail handling</span>
                    </div>
                  </div>
                  <span class="text-xs text-gold-600 font-extrabold">+Rp 3.500.000</span>
                </label>

                <label class="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-100 cursor-pointer transition-colors">
                  <div class="flex items-center gap-3">
                    <input type="checkbox" id="spaAddonMerek" class="w-4 h-4 accent-crimson-800 rounded">
                    <div>
                      <h5 class="text-xs sm:text-sm text-slate-900 font-bold">Bundling Pendaftaran Merek HKI</h5>
                      <span class="text-[11px] text-slate-500">1 Kelas Nice (Diskon paket)</span>
                    </div>
                  </div>
                  <span class="text-xs text-gold-600 font-extrabold">+Rp 1.950.000</span>
                </label>
              </div>

              <div class="p-5 rounded-2xl crimson-gradient-bg text-white space-y-1 shadow-lg">
                <span class="text-[11px] text-gold-400 font-bold block uppercase tracking-wider">Total Estimasi Investasi Legalitas</span>
                <div class="flex items-baseline justify-between pt-1">
                  <span id="spaGrandTotal" class="text-2xl font-black text-white">Rp 4.890.000</span>
                  <span class="text-[11px] text-white/80 font-medium">Termasuk PNBP Resmi</span>
                </div>
              </div>
            </div>

            <!-- Fast SLA -->
            <div class="bg-white p-6 sm:p-7 rounded-3xl shadow-sm border border-slate-200/80 space-y-4">
              <h4 class="text-base text-slate-900 font-extrabold">Jaminan Pelayanan LEGALTA</h4>
              <div class="space-y-3.5">
                <div class="flex items-start gap-3.5">
                  <div class="w-9 h-9 rounded-xl bg-crimson-50 text-crimson-800 flex items-center justify-center shrink-0">
                    <i data-lucide="clock" class="w-4 h-4"></i>
                  </div>
                  <div>
                    <h5 class="text-xs sm:text-sm text-slate-900 font-bold">Respon Kilat &lt; 12 Menit</h5>
                    <p class="text-xs text-slate-500 mt-0.5">Tim paralegal on-duty segera menghubungi Anda via WhatsApp.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3.5">
                  <div class="w-9 h-9 rounded-xl bg-amber-50 text-gold-600 flex items-center justify-center shrink-0">
                    <i data-lucide="file-check-2" class="w-4 h-4"></i>
                  </div>
                  <div>
                    <h5 class="text-xs sm:text-sm text-slate-900 font-bold">Draf Notaris 24 Jam</h5>
                    <p class="text-xs text-slate-500 mt-0.5">Penyusunan anggaran dasar dan reservasi nama AHU diselesaikan tanpa antre.</p>
                  </div>
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
    'pt-standar': { name: 'Pendirian PT Standar (PMDN)', price: 4890000 },
    'pt-perorangan': { name: 'Pendirian PT Perorangan (UMKM)', price: 1500000 },
    'cv': { name: 'Pendirian CV Usaha', price: 2800000 },
    'pt-pma': { name: 'Pendirian PT PMA / Eksekutif', price: 8750000 },
    'merek': { name: 'Pendaftaran Merek HKI DJKI', price: 1950000 },
    'perubahan-akta': { name: 'Perubahan Akta & Anggaran Dasar', price: 4500000 },
    'perizinan-oss': { name: 'Perizinan Usaha OSS-RBA & NIB', price: 1250000 },
    'pse': { name: 'Pendaftaran PSE Kominfo / PB-UMKU', price: 2500000 }
  };

  // Pre-select service from hash query string if present (e.g. #/konsultasi?layanan=merek)
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
        showToast('Permohonan konsultasi tersimpan di server. Membuka WhatsApp...', 'success');
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
