/**
 * View: Kontak & Kantor Pusat SCBD Jakarta
 */

import { showToast } from '../components/toast.js';

export function renderKontakView() {
  return `
    <div class="flex flex-col w-full">
      <section class="relative w-full bg-surface-container-lowest px-6 lg:px-12 pt-14 pb-16 border-b border-surface-container-high">
        <div class="max-w-4xl mx-auto text-center space-y-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-fixed/50 text-secondary">
            <span class="material-symbols-outlined text-[16px]">location_on</span>
            <span class="font-label-sm uppercase tracking-wider font-bold">Kantor Pusat SCBD Jakarta</span>
          </div>
          <h1 class="font-display-lg text-primary text-balance leading-tight">
            Hubungi Tim Notaris &amp; Advokat LEGALTA
          </h1>
          <p class="font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Kunjungi ruang konsultasi tatap muka kami di Treasury Tower SCBD atau hubungi hotline WhatsApp resmi.
          </p>
        </div>
      </section>

      <section class="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div class="lg:col-span-5 space-y-6">
            <div class="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-surface-container-high space-y-6">
              <h3 class="font-headline-sm text-primary font-bold">Informasi Kantor</h3>
              
              <div class="space-y-4 font-body-sm text-on-surface-variant">
                <div class="flex items-start gap-4">
                  <span class="material-symbols-outlined text-primary text-[24px]">apartment</span>
                  <div>
                    <h5 class="font-label-lg text-on-surface font-bold">Treasury Tower SCBD</h5>
                    <p class="mt-0.5 leading-relaxed">Lt. 18, District 8 SCBD Lot 28, Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan 12190</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <span class="material-symbols-outlined text-secondary text-[24px]">call</span>
                  <div>
                    <h5 class="font-label-lg text-on-surface font-bold">Telepon &amp; WhatsApp</h5>
                    <p class="mt-0.5">+62 812-8888-0192 (Fast Track)</p>
                    <p>+62 21-5088-9120 (Office Hunting)</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <span class="material-symbols-outlined text-tertiary text-[24px]">mail</span>
                  <div>
                    <h5 class="font-label-lg text-on-surface font-bold">Email</h5>
                    <p class="mt-0.5">halo@legalta.id</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <span class="material-symbols-outlined text-primary-container text-[24px]">schedule</span>
                  <div>
                    <h5 class="font-label-lg text-on-surface font-bold">Jam Operasional</h5>
                    <p class="mt-0.5">Senin – Jumat: 08.30 – 18.00 WIB</p>
                    <p>Sabtu: 09.00 – 14.00 WIB (Dengan Janji Temu)</p>
                  </div>
                </div>
              </div>

              <div class="pt-4 border-t border-surface-container-high flex flex-col gap-2.5">
                <a href="https://wa.me/6281288880192?text=Halo%20LEGALTA,%20saya%20ingin%20berkonsultasi" target="_blank" rel="noopener noreferrer" class="w-full py-3 bg-[#25D366] text-white font-label-md font-bold rounded-xl shadow-sm hover:brightness-105 transition-all flex items-center justify-center gap-2">
                  <span class="material-symbols-outlined text-[20px]">chat</span>
                  <span>Chat WhatsApp Tim Legal</span>
                </a>
              </div>
            </div>

            <!-- SCBD Visual Card -->
            <div class="rounded-3xl overflow-hidden shadow-md relative h-64 border border-surface-container-high">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWdO8GYQ77-e-TrR3u3w6deooZIXNBcRJAGol9ovWYsM5YDVKznaN-i0Q4mQ7rHmnPpo2yfTrI5pCWIuRgcdWsSPKShyP8O3JyEbGYg7eKq8G9KP57TDzakgN1Tfbzm1nttO43QpugC-wLUMbpyybEY8aI0ao586rz7iR7cF09niYlqRVqAfJpMtCZW9N6Wzlctd6FtoDxkC0Nv6Z1xiifmsi18IyWwNWQZrmrNi6fL_h4djZ9ymbL" alt="District 8 SCBD" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <p class="font-headline-sm font-bold">District 8 SCBD, Jakarta</p>
                <p class="font-body-sm text-white/80">Akses langsung dari Stasiun MRT Istora Mandiri</p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7 bg-surface-container-lowest p-8 sm:p-10 rounded-3xl shadow-sm border border-surface-container-high space-y-6">
            <div class="space-y-1 pb-4 border-b border-surface-container-high">
              <h3 class="font-headline-md text-primary font-bold">Kirim Pesan Langsung</h3>
              <p class="font-body-sm text-on-surface-variant">Tim representatif LEGALTA akan membalas pertanyaan Anda dalam &lt; 15 menit.</p>
            </div>

            <form id="spaInquiryForm" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1">
                  <label class="font-label-sm font-bold text-on-surface">Nama Lengkap *</label>
                  <input type="text" id="spaInqName" required placeholder="Bambang Sutrisno" class="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-surface-container-high font-body-md text-on-surface outline-none">
                </div>
                <div class="space-y-1">
                  <label class="font-label-sm font-bold text-on-surface">Nomor WhatsApp *</label>
                  <input type="tel" id="spaInqPhone" required placeholder="081289001234" class="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-surface-container-high font-body-md text-on-surface outline-none">
                </div>
              </div>
              <div class="space-y-1">
                <label class="font-label-sm font-bold text-on-surface">Email *</label>
                <input type="email" id="spaInqEmail" required placeholder="bambang@perusahaan.co.id" class="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-surface-container-high font-body-md text-on-surface outline-none">
              </div>
              <div class="space-y-1">
                <label class="font-label-sm font-bold text-on-surface">Pesan Pertanyaan *</label>
                <textarea id="spaInqMsg" required rows="4" placeholder="Tuliskan kendala perizinan atau pertanyaan hukum Anda..." class="w-full p-4 rounded-xl bg-surface-container-low border border-surface-container-high font-body-md text-on-surface outline-none"></textarea>
              </div>
              <button type="submit" class="w-full py-4 bg-primary text-on-primary font-label-lg font-bold rounded-xl shadow-md hover:bg-primary-container transition-all flex items-center justify-center gap-2">
                <span class="material-symbols-outlined text-[20px]">send</span>
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
      window.open(`https://wa.me/6281288880192?text=${encodeURIComponent(text)}`, '_blank');
    }, 600);
  });
}
