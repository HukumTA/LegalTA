/**
 * View: Konsultasi Gratis & Kalkulator Biaya Legalitas
 */

import { api } from '../api.js';
import { showToast } from '../components/toast.js';

export function renderKonsultasiView() {
  return `
    <div class="flex flex-col w-full">
      <section class="relative w-full bg-surface-container-lowest px-6 lg:px-12 pt-12 pb-16 border-b border-surface-container-high">
        <div class="max-w-4xl mx-auto text-center space-y-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-fixed/60 text-primary">
            <span class="material-symbols-outlined text-[16px]">support_agent</span>
            <span class="font-label-sm uppercase tracking-wider font-bold">Konsultasi Awal Bebas Biaya</span>
          </div>
          <h1 class="font-display-lg text-primary text-balance leading-tight">
            Konsultasikan Pendirian, Izin, &amp; Legalitas Usaha Bersama Para Ahli
          </h1>
          <p class="font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Dapatkan rekomendasi hukum dari Tim Notaris &amp; Personal Legal Assistant (PLA). Gratis biaya konsultasi awal tanpa komitmen.
          </p>
        </div>
      </section>

      <section class="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <!-- Left: Consultation Form (7 Cols) -->
          <div class="lg:col-span-7 bg-surface-container-lowest p-8 sm:p-10 rounded-3xl shadow-sm border border-surface-container-high space-y-6">
            <div class="space-y-1 pb-4 border-b border-surface-container-high">
              <h2 class="font-headline-md text-primary font-bold">Formulir Penjadwalan Konsultasi</h2>
              <p class="font-body-sm text-on-surface-variant">Lengkapi data agar Personal Legal Assistant kami dapat menelaah kebutuhan Anda.</p>
            </div>

            <form id="spaConsultationForm" class="space-y-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div class="space-y-2">
                  <label for="spaClientName" class="font-label-md text-on-surface font-bold">Nama Lengkap *</label>
                  <input type="text" id="spaClientName" required placeholder="cth: Bambang Sutrisno" class="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface font-body-md">
                </div>
                <div class="space-y-2">
                  <label for="spaClientPhone" class="font-label-md text-on-surface font-bold">Nomor WhatsApp Aktif *</label>
                  <input type="tel" id="spaClientPhone" required placeholder="cth: 081289001234" class="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface font-body-md">
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div class="space-y-2">
                  <label for="spaClientEmail" class="font-label-md text-on-surface font-bold">Alamat Email *</label>
                  <input type="email" id="spaClientEmail" required placeholder="bambang@perusahaan.co.id" class="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface font-body-md">
                </div>
                <div class="space-y-2">
                  <label for="spaClientCity" class="font-label-md text-on-surface font-bold">Kota Domisili Usaha</label>
                  <input type="text" id="spaClientCity" placeholder="cth: DKI Jakarta / Surabaya" class="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface font-body-md">
                </div>
              </div>

              <div class="space-y-2">
                <label for="spaServiceSelect" class="font-label-md text-on-surface font-bold">Layanan Utama yang Dibutuhkan *</label>
                <select id="spaServiceSelect" class="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface font-body-md cursor-pointer">
                  <option value="pt-standar">Pendirian PT Standar (PMDN) — Mulai Rp 4.900.000</option>
                  <option value="pt-perorangan">Pendirian PT Perorangan (UMKM) — Mulai Rp 1.450.000</option>
                  <option value="cv">Pendirian CV Usaha — Mulai Rp 3.200.000</option>
                  <option value="pt-pma">Pendirian PT PMA (Modal Asing) — Mulai Rp 14.500.000</option>
                  <option value="merek">Pendaftaran Merek HKI DJKI — Mulai Rp 2.450.000</option>
                  <option value="perubahan-akta">Perubahan Akta &amp; Anggaran Dasar — Mulai Rp 4.500.000</option>
                  <option value="perizinan-oss">Perizinan Usaha OSS-RBA &amp; NIB — Mulai Rp 1.250.000</option>
                  <option value="pse">Pendaftaran PSE Kominfo — Mulai Rp 2.500.000</option>
                </select>
              </div>

              <div class="space-y-2">
                <label class="font-label-md text-on-surface font-bold">Metode Konsultasi</label>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label class="p-3.5 rounded-xl border border-surface-container-high bg-surface-container-low flex items-center gap-2 cursor-pointer hover:bg-surface-container">
                    <input type="radio" name="spaMethod" value="whatsapp" checked class="text-primary accent-primary">
                    <span class="font-body-sm font-semibold text-on-surface">WhatsApp Chat</span>
                  </label>
                  <label class="p-3.5 rounded-xl border border-surface-container-high bg-surface-container-low flex items-center gap-2 cursor-pointer hover:bg-surface-container">
                    <input type="radio" name="spaMethod" value="gmeet" class="text-primary accent-primary">
                    <span class="font-body-sm font-semibold text-on-surface">Google Meet</span>
                  </label>
                  <label class="p-3.5 rounded-xl border border-surface-container-high bg-surface-container-low flex items-center gap-2 cursor-pointer hover:bg-surface-container">
                    <input type="radio" name="spaMethod" value="office" class="text-primary accent-primary">
                    <span class="font-body-sm font-semibold text-on-surface">SCBD Jakarta</span>
                  </label>
                </div>
              </div>

              <div class="space-y-2">
                <label for="spaNotes" class="font-label-md text-on-surface font-bold">Deskripsi Kebutuhan</label>
                <textarea id="spaNotes" rows="3" placeholder="Tuliskan bidang usaha, perkiraan modal setor, atau kendala izin..." class="w-full p-4 rounded-xl bg-surface-container-low border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface font-body-md"></textarea>
              </div>

              <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span class="font-body-sm text-on-surface-variant">Data terenkripsi dan dijamin NDA</span>
                <button type="submit" id="spaSubmitConsultBtn" class="w-full sm:w-auto px-8 py-4 bg-primary text-on-primary font-label-lg font-bold rounded-xl shadow-md hover:bg-primary-container transition-all flex items-center justify-center gap-2">
                  <span class="material-symbols-outlined text-[20px]">send</span>
                  <span>Jadwalkan Konsultasi</span>
                </button>
              </div>
            </form>
          </div>

          <!-- Right: Calculator & SLA Box (5 Cols) -->
          <div class="lg:col-span-5 space-y-6">
            <div class="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm border border-surface-container-high space-y-5">
              <div class="flex items-center justify-between pb-3 border-b border-surface-container-high">
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-secondary text-[22px]">calculate</span>
                  <h3 class="font-headline-sm text-primary font-bold">Kalkulator Biaya Transparan</h3>
                </div>
                <span class="font-label-sm bg-secondary-fixed text-on-secondary-fixed px-2.5 py-0.5 rounded-full font-bold">Nol Mark-Up</span>
              </div>

              <div class="space-y-2.5 pt-2">
                <div class="flex items-center justify-between p-3 rounded-xl bg-surface-container-low">
                  <div>
                    <h5 id="spaCalcBaseTitle" class="font-label-md text-on-surface font-bold">Pendirian PT Standar (PMDN)</h5>
                    <span class="font-body-sm text-on-surface-variant">Akta Notaris + SK Menkumham + NIB OSS</span>
                  </div>
                  <span id="spaCalcBasePrice" class="font-label-md text-primary font-bold">Rp 4.900.000</span>
                </div>

                <label class="flex items-center justify-between p-3 rounded-xl bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
                  <div class="flex items-center gap-2.5">
                    <input type="checkbox" id="spaAddonVO" class="w-4 h-4 text-primary accent-primary rounded">
                    <div>
                      <h5 class="font-label-md text-on-surface font-bold">Virtual Office SCBD Jakarta (1 Thn)</h5>
                      <span class="font-body-sm text-on-surface-variant">Alamat prestisius &amp; mail handling</span>
                    </div>
                  </div>
                  <span class="font-label-sm text-secondary font-bold">+Rp 3.500.000</span>
                </label>

                <label class="flex items-center justify-between p-3 rounded-xl bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
                  <div class="flex items-center gap-2.5">
                    <input type="checkbox" id="spaAddonMerek" class="w-4 h-4 text-primary accent-primary rounded">
                    <div>
                      <h5 class="font-label-md text-on-surface font-bold">Bundling Pendaftaran Merek HKI</h5>
                      <span class="font-body-sm text-on-surface-variant">1 Kelas Nice (Diskon paket)</span>
                    </div>
                  </div>
                  <span class="font-label-sm text-secondary font-bold">+Rp 2.100.000</span>
                </label>
              </div>

              <div class="p-4 rounded-2xl bg-primary text-on-primary space-y-1">
                <span class="font-label-sm text-primary-fixed block uppercase tracking-wider">Total Estimasi Investasi Legalitas</span>
                <div class="flex items-baseline justify-between">
                  <span id="spaGrandTotal" class="font-headline-lg font-bold text-white">Rp 4.900.000</span>
                  <span class="font-label-sm text-primary-fixed-dim">Termasuk PNBP Resmi</span>
                </div>
              </div>
            </div>

            <!-- Fast SLA -->
            <div class="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-surface-container-high space-y-4">
              <h4 class="font-headline-sm text-primary font-bold">Jaminan Pelayanan LEGALTA</h4>
              <div class="space-y-3">
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-secondary text-[20px] mt-0.5">timer</span>
                  <div>
                    <h5 class="font-label-md text-on-surface font-bold">Respon Kilat &lt; 12 Menit</h5>
                    <p class="font-body-sm text-on-surface-variant">Tim paralegal on-duty segera menghubungi Anda via WhatsApp.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-secondary text-[20px] mt-0.5">assignment_turned_in</span>
                  <div>
                    <h5 class="font-label-md text-on-surface font-bold">Draf Notaris 24 Jam</h5>
                    <p class="font-body-sm text-on-surface-variant">Penyusunan anggaran dasar dan reservasi nama AHU diselesaikan tanpa antre.</p>
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
    'pt-standar': { name: 'Pendirian PT Standar (PMDN)', price: 4900000 },
    'pt-perorangan': { name: 'Pendirian PT Perorangan (UMKM)', price: 1450000 },
    'cv': { name: 'Pendirian CV Usaha', price: 3200000 },
    'pt-pma': { name: 'Pendirian PT PMA (Modal Asing)', price: 14500000 },
    'merek': { name: 'Pendaftaran Merek HKI DJKI', price: 2450000 },
    'perubahan-akta': { name: 'Perubahan Akta & Anggaran Dasar', price: 4500000 },
    'perizinan-oss': { name: 'Perizinan Usaha OSS-RBA & NIB', price: 1250000 },
    'pse': { name: 'Pendaftaran PSE Kominfo', price: 2500000 }
  };

  function updateCalc() {
    const s = prices[serviceSelect.value] || prices['pt-standar'];
    baseTitle.textContent = s.name;
    basePrice.textContent = 'Rp ' + s.price.toLocaleString('id-ID');

    let total = s.price;
    if (addonVO?.checked) total += 3500000;
    if (addonMerek?.checked) total += 2100000;

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

  updateCalc();
}
