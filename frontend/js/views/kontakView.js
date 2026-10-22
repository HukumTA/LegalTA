/**
 * View: Kontak & Kantor Pusat SCBD Jakarta
 * Modernized to match the LEGALTA Crimson/Gold/Slate reference aesthetic.
 */

import { showToast } from '../components/toast.js';

export function renderKontakView() {
  return `
    <div class="flex flex-col w-full bg-[#FAFAFC]">
      <section class="relative w-full bg-gradient-to-b from-white via-amber-50/20 to-white px-6 pt-12 pb-16 border-b border-slate-100">
        <div class="max-w-4xl mx-auto text-center space-y-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crimson-50 border border-crimson-100 text-crimson-800 text-xs font-bold uppercase tracking-wider">
            <i data-lucide="map-pin" class="w-3.5 h-3.5 text-crimson-700"></i>
            <span>Kantor Pusat SCBD Jakarta</span>
          </div>
          <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
            Hubungi Tim Notaris &amp; Advokat LEGALTA
          </h1>
          <p class="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Kunjungi ruang konsultasi tatap muka kami di Treasury Tower SCBD atau hubungi hotline WhatsApp resmi untuk respon instan.
          </p>
        </div>
      </section>

      <section class="max-w-7xl mx-auto px-6 py-16 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div class="lg:col-span-5 space-y-6">
            <div class="bg-white p-8 rounded-3xl shadow-md border border-slate-200/80 space-y-6">
              <h3 class="text-lg text-slate-900 font-extrabold">Informasi Kantor</h3>
              
              <div class="space-y-4 text-xs sm:text-sm text-slate-600">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-crimson-50 text-crimson-800 flex items-center justify-center shrink-0">
                    <i data-lucide="building-2" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <h5 class="text-sm text-slate-900 font-bold">Treasury Tower SCBD</h5>
                    <p class="mt-0.5 leading-relaxed">Lt. 18, District 8 SCBD Lot 28, Jl. Jend. Sudirman Kav. 52–53, Jakarta Selatan 12190</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-amber-50 text-gold-600 flex items-center justify-center shrink-0">
                    <i data-lucide="phone-call" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <h5 class="text-sm text-slate-900 font-bold">Telepon &amp; WhatsApp</h5>
                    <p class="mt-0.5 font-semibold text-slate-800">WhatsApp Resmi (Fast Track)</p>
                    <p>+62 21-5088-9120 (Office Hunting)</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <i data-lucide="mail" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <h5 class="text-sm text-slate-900 font-bold">Email</h5>
                    <p class="mt-0.5">halo@legalta.id</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <i data-lucide="clock" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <h5 class="text-sm text-slate-900 font-bold">Jam Operasional</h5>
                    <p class="mt-0.5">Senin – Jumat: 08.30 – 18.00 WIB</p>
                    <p>Sabtu: 09.00 – 14.00 WIB (Dengan Janji Temu)</p>
                  </div>
                </div>
              </div>

              <div class="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                <!-- Silakan ganti href dengan nomor WhatsApp resmi: https://wa.me/[NOMOR] -->
                <a href="https://wa.me/?text=Halo%20LEGALTA,%20saya%20ingin%20berkonsultasi" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2">
                  <i data-lucide="message-circle" class="w-4 h-4"></i>
                  <span>Chat WhatsApp Tim Legal</span>
                </a>
              </div>
            </div>

            <!-- SCBD Visual Card -->
            <div class="rounded-3xl overflow-hidden shadow-lg relative h-64 border border-slate-200">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWdO8GYQ77-e-TrR3u3w6deooZIXNBcRJAGol9ovWYsM5YDVKznaN-i0Q4mQ7rHmnPpo2yfTrI5pCWIuRgcdWsSPKShyP8O3JyEbGYg7eKq8G9KP57TDzakgN1Tfbzm1nttO43QpugC-wLUMbpyybEY8aI0ao586rz7iR7cF09niYlqRVqAfJpMtCZW9N6Wzlctd6FtoDxkC0Nv6Z1xiifmsi18IyWwNWQZrmrNi6fL_h4djZ9ymbL" alt="District 8 SCBD" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-6 text-white">
                <p class="text-base font-extrabold">District 8 SCBD, Jakarta</p>
                <p class="text-xs text-white/80 mt-0.5">Akses langsung dari Stasiun MRT Istora Mandiri</p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl shadow-md border border-slate-200/80 space-y-6">
            <div class="space-y-1 pb-4 border-b border-slate-100">
              <h3 class="text-xl text-slate-900 font-extrabold">Kirim Pesan Langsung</h3>
              <p class="text-xs sm:text-sm text-slate-500">Tim representatif LEGALTA akan membalas pertanyaan Anda dalam &lt; 15 menit.</p>
            </div>

            <form id="spaInquiryForm" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                  <label class="text-xs font-bold text-slate-700">Nama Lengkap *</label>
                  <input type="text" id="spaInqName" required placeholder="Bambang Sutrisno" class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-crimson-800">
                </div>
                <div class="space-y-1.5">
                  <label class="text-xs font-bold text-slate-700">Nomor WhatsApp *</label>
                  <input type="tel" id="spaInqPhone" required placeholder="081289001234" class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-crimson-800">
                </div>
              </div>
              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-700">Email *</label>
                <input type="email" id="spaInqEmail" required placeholder="bambang@perusahaan.co.id" class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-crimson-800">
              </div>
              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-700">Pesan Pertanyaan *</label>
                <textarea id="spaInqMsg" required rows="4" placeholder="Tuliskan kendala perizinan atau pertanyaan hukum Anda..." class="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-crimson-800"></textarea>
              </div>
              <button type="submit" class="w-full py-4 bg-crimson-800 hover:bg-crimson-900 text-white text-sm font-bold rounded-xl shadow-lg shadow-crimson-800/20 transition-all flex items-center justify-center gap-2">
                <i data-lucide="send" class="w-4 h-4"></i>
                <span>Kirim Pesan via WhatsApp</span>
              </button>
            </form>
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

    const text = `Halo Tim LEGALTA,\n\nSaya ingin berkonsultasi:\n- Nama: ${name}\n- WhatsApp: ${phone}\n- Email: ${email}\n- Pesan: ${msg}\n\nMohon info lebih lanjut. Terima kasih!`;
    showToast('Pesan dirangkum. Membuka WhatsApp Legal...');
    setTimeout(() => {
      // Silakan ganti href dengan nomor WhatsApp resmi: https://wa.me/[NOMOR]
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    }, 600);
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}
