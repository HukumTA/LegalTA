/**
 * View: Kontak
 */

import { showToast } from '../components/toast.js';

export function renderKontakView() {
  const inputCls = 'w-full px-5 py-3.5 rounded-full bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-crimson-800';

  return `
    <div class="flex flex-col w-full">

      <!-- 1. HERO -->
      <section class="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 bg-transparent border-b border-slate-200/50">
        <div class="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            Hubungi HUKUMTA, <span class="text-crimson-800">Kami Siap Membantu</span>
          </h1>
          <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            Kunjungi pusat operasional kami atau kirim pesan lewat WhatsApp.
          </p>
        </div>
      </section>

      <!-- 2. KONTAK -->
      <section class="py-16 lg:py-24 bg-slate-50/50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            <!-- Informasi -->
            <div class="lg:col-span-5 space-y-6">
              <div class="bg-white p-8 rounded-[2rem] shadow-md border border-slate-200 space-y-6">
                <h3 class="text-2xl text-slate-900 font-extrabold">Pusat Operasional</h3>

                <div class="space-y-5 text-sm text-slate-600">
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 rounded-2xl bg-crimson-800 text-white flex items-center justify-center shrink-0 shadow-md">
                      <i data-lucide="building-2" class="w-6 h-6"></i>
                    </div>
                    <div>
                      <h5 class="text-base text-slate-900 font-bold">Kawasan Kampus Universitas Hasanuddin</h5>
                      <p class="mt-0.5 leading-relaxed">Jl. Perintis Kemerdekaan Km. 10, Tamalanrea Indah, Kec. Tamalanrea, Kota Makassar, Sulawesi Selatan 90245</p>
                    </div>
                  </div>

                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 rounded-2xl bg-amber-50 text-gold-600 flex items-center justify-center shrink-0">
                      <i data-lucide="phone-call" class="w-6 h-6"></i>
                    </div>
                    <div>
                      <h5 class="text-base text-slate-900 font-bold">Telepon &amp; WhatsApp</h5>
                      <p class="mt-0.5">+62 411-5088-9120</p>
                    </div>
                  </div>

                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                      <i data-lucide="mail" class="w-6 h-6"></i>
                    </div>
                    <div>
                      <h5 class="text-base text-slate-900 font-bold">Email</h5>
                      <p class="mt-0.5">legalta.app@gmail.com</p>
                    </div>
                  </div>

                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 rounded-2xl bg-amber-50 text-gold-600 flex items-center justify-center shrink-0">
                      <i data-lucide="clock" class="w-6 h-6"></i>
                    </div>
                    <div>
                      <h5 class="text-base text-slate-900 font-bold">Jam Operasional</h5>
                      <p class="mt-0.5">Senin – Jumat: 08.30 – 18.00 WITA</p>
                      <p>Sabtu: 09.00 – 14.00 WITA (dengan janji temu)</p>
                    </div>
                  </div>
                </div>

                <!-- Silakan ganti href dengan nomor WhatsApp resmi: https://wa.me/[NOMOR] -->
                <a href="https://wa.me/?text=Halo%20HUKUMTA,%20saya%20ingin%20berkonsultasi" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center w-full px-8 py-4 bg-crimson-800 hover:bg-crimson-900 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  <span>Chat WhatsApp</span>
                  <i data-lucide="arrow-right" class="w-5 h-5 ml-2"></i>
                </a>
              </div>

              <!-- Foto kantor: otomatis disembunyikan kalau file belum ada -->
              <div id="kontakPhotoCard" class="rounded-[2rem] overflow-hidden shadow-lg border border-slate-200 h-64 bg-slate-900">
                <img src="assets/kontak.jpg" alt="Kantor HUKUMTA Makassar" class="w-full h-full object-cover" onerror="document.getElementById('kontakPhotoCard').style.display='none';">
              </div>
            </div>

            <!-- Form pesan -->
            <div class="lg:col-span-7 bg-white p-8 sm:p-10 rounded-[2rem] shadow-md border border-slate-200 space-y-6">
              <h3 class="text-2xl text-slate-900 font-extrabold pb-4 border-b border-slate-100">Kirim Pesan</h3>

              <form id="spaInquiryForm" class="space-y-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1.5">Nama Lengkap *</label>
                    <input type="text" id="spaInqName" required placeholder="Bambang Sutrisno" class="${inputCls}">
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1.5">Nomor WhatsApp *</label>
                    <input type="tel" id="spaInqPhone" required placeholder="081289001234" class="${inputCls}">
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1.5">Email *</label>
                  <input type="email" id="spaInqEmail" required placeholder="nama@perusahaan.co.id" class="${inputCls}">
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1.5">Pesan *</label>
                  <textarea id="spaInqMsg" required rows="4" placeholder="Tuliskan pertanyaan Anda..." class="w-full px-5 py-4 rounded-3xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-crimson-800"></textarea>
                </div>
                <button type="submit" class="inline-flex items-center justify-center px-8 py-4 bg-crimson-800 hover:bg-crimson-900 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  <span>Kirim via WhatsApp</span>
                  <i data-lucide="arrow-right" class="w-5 h-5 ml-2"></i>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  `;
}

export function initKontakLogic() {
  const form = document.getElementById('spaInquiryForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('spaInqName').value.trim();
    const phone = document.getElementById('spaInqPhone').value.trim();
    const email = document.getElementById('spaInqEmail').value.trim();
    const msg = document.getElementById('spaInqMsg').value.trim();

    const text = `Halo Tim HUKUMTA,\n\nSaya ingin berkonsultasi:\nNama: ${name}\nWhatsApp: ${phone}\nEmail: ${email}\nPesan: ${msg}\n\nMohon info lebih lanjut. Terima kasih!`;
    showToast('Membuka WhatsApp...');
    setTimeout(() => {
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    }, 600);
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}