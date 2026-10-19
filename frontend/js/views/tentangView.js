/**
 * View: Tentang Kami & Tim Dewan Pimpinan (6 Profil)
 */

export function renderTentangView() {
  return `
    <div class="flex flex-col w-full">
      <!-- Section 1: Hero & Vision Narrative -->
      <section class="relative w-full bg-surface-container-lowest px-6 lg:px-12 pt-12 pb-20 overflow-hidden border-b border-surface-container-high">
        <div class="absolute -top-24 right-0 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-7xl mx-auto relative z-10 space-y-12">
          <div class="max-w-3xl space-y-4">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-fixed/60 text-primary">
              <span class="material-symbols-outlined text-[16px]">account_balance</span>
              <span class="font-label-sm uppercase tracking-wider font-bold">Tentang LEGALTA Indonesia</span>
            </div>
            <h1 class="font-display-lg text-primary text-balance leading-tight">
              Membangun Ekosistem Legalitas yang Transparan, Cepat, dan Adil Bagi Pengusaha Indonesia
            </h1>
            <p class="font-headline-md text-secondary italic font-display-lg">
              "Keseimbangan • Modern • Adil"
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-8 rounded-3xl bg-surface-container-low border border-surface-container-high space-y-4">
              <div class="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-md">
                <span class="material-symbols-outlined text-[26px]">visibility</span>
              </div>
              <h3 class="font-headline-lg text-primary font-bold">Visi Kami</h3>
              <p class="font-body-md text-on-surface-variant leading-relaxed">
                Menjadi katalisator transformasi hukum korporasi nomor satu di Asia Tenggara dengan mendemokratisasi akses legalitas usaha melalui kepastian regulasi, transparansi tanpa biaya tersembunyi, serta teknologi pengesahan mutakhir yang dapat diakses oleh UMKM hingga konglomerasi.
              </p>
            </div>
            <div class="p-8 rounded-3xl bg-surface-container-low border border-surface-container-high space-y-4">
              <div class="w-12 h-12 rounded-2xl bg-secondary text-white flex items-center justify-center shadow-md">
                <span class="material-symbols-outlined text-[26px]">flag</span>
              </div>
              <h3 class="font-headline-lg text-primary font-bold">Misi Strategis</h3>
              <p class="font-body-md text-on-surface-variant leading-relaxed">
                Menghapus friksi birokrasi legal di Indonesia dengan menyatukan notaris bersertifikasi resmi, praktisi hukum berpengalaman, dan sistem otomasi AHU Online serta OSS-RBA dalam satu orkestrasi digital yang presisi, aman, dan patuh pada kaidah perundang-undangan nasional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section: Leadership Team (The 6 Profiles) -->
      <section class="w-full bg-surface-container-lowest px-6 lg:px-12 py-20">
        <div class="max-w-7xl mx-auto space-y-12">
          <div class="text-center max-w-2xl mx-auto space-y-2">
            <span class="font-label-sm text-primary uppercase font-bold tracking-widest bg-primary-fixed/40 px-3 py-1 rounded-full">Kepemimpinan Eksekutif</span>
            <h2 class="font-headline-xl text-primary font-bold">Dewan Pimpinan LEGALTA</h2>
            <p class="font-body-md text-on-surface-variant">Para profesional berpengalaman lintas disiplin hukum korporasi, rekayasa perangkat lunak legal, dan strategi kepatuhan nasional.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- 1. Amirah Sridinanti -->
            <div class="bg-surface-container-low rounded-3xl overflow-hidden border border-surface-container-high flex flex-col justify-between">
              <div>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg0Mc2x4PoIYdBGuLU9TbsCUCpT4lFmufN_7c_3OSBV8jlMtOHKcYFwKQQdAOarCdNNTBGYwW9OzjlnJXBpRNlo0MmK-NKTCOFRohengCZX_W_6cTX0xJYRaX_Byj52UbHTSf9A3w0yzNBdAurlqEyHt8CYf_EUUC6gIu5JSpoojSOIeYKsYaMIU3-Z66ADd4_pqHPmspY1KQMCn_WypVzmCQUTy0oBX6cn-xlkCe-tHUUUOj0V0tmO_O5qMMd91rGcA" alt="Amirah Sridinanti" class="w-full aspect-[4/5] object-cover">
                <div class="p-6 space-y-2">
                  <h3 class="font-headline-sm text-primary font-bold">Amirah Sridinanti</h3>
                  <p class="font-label-md text-secondary font-semibold">Chief Executive Officer &amp; Co-Founder</p>
                  <p class="font-body-sm text-on-surface-variant leading-relaxed">
                    Memimpin visi strategis LEGALTA dalam merestrukturisasi ekosistem perizinan usaha di Indonesia dan kemitraan ventura.
                  </p>
                </div>
              </div>
            </div>

            <!-- 2. Wisnu Sudrajat -->
            <div class="bg-surface-container-low rounded-3xl overflow-hidden border border-surface-container-high flex flex-col justify-between">
              <div>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLEBCku3t3VVgcfdRichcey0zq7Uy8fsNesXF7JWAuBZbbGdsafql_Qldp5NmpJjJNqqP849P9AiA6TYBMtF1bGoAklpTvQWnb0rbUBublc6JhoCBVt-8HSzxLTQWJCY_CAcHdJSj5wrIy5WzISd9280TM9k8z6ZP9rfdVJ496FJRLTDOLPuQVWovwhbqEaOGHtBMA3fCie5jLg3-YkU28-CpV5vUZCW2scJhsqs9X2fZaTLoX_NFhfAkxnJ3TSoLiXg" alt="Wisnu Sudrajat" class="w-full aspect-[4/5] object-cover">
                <div class="p-6 space-y-2">
                  <h3 class="font-headline-sm text-primary font-bold">Wisnu Sudrajat</h3>
                  <p class="font-label-md text-secondary font-semibold">Chief Marketing Officer &amp; Growth Lead</p>
                  <p class="font-body-sm text-on-surface-variant leading-relaxed">
                    Mengarahkan positioning brand LEGALTA sebagai standar baku kepatuhan hukum bagi korporasi modern dan jutaan UMKM.
                  </p>
                </div>
              </div>
            </div>

            <!-- 3. Faiz -->
            <div class="bg-surface-container-low rounded-3xl overflow-hidden border border-surface-container-high flex flex-col justify-between">
              <div>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwaoHPRStRf_w5gCgv2zDqrlcfpltf7R7oNZqpyf_phUjngQmM1oRFEInNmrBOhMu9V_NgO2tVcO0Y15bLrn3tvNj16NXZMI57q6ZyWi2op9PsJghDYgXb8v2OLc6yfCPvbDuqUwUehx29AEV7ofisteecRUr5uxLOArX4j242lSo1f6WoJfFSOOchWqr2NXNNy0SaEwtAnuR1CUiOm1mB3uXy0hZMIF7qzlgHzk1hwvPPW9c-ftpfymskAPa_lxqU5Q" alt="Faiz" class="w-full aspect-[4/5] object-cover">
                <div class="p-6 space-y-2">
                  <h3 class="font-headline-sm text-primary font-bold">Faiz</h3>
                  <p class="font-label-md text-secondary font-semibold">Chief Technology Officer / Head of Product</p>
                  <p class="font-body-sm text-on-surface-variant leading-relaxed">
                    Arsitek utama engine otomasi dokumen legal dan integrasi API AHU &amp; OSS RBA dengan standar enkripsi perbankan ISO 27001.
                  </p>
                </div>
              </div>
            </div>

            <!-- 4. Eka Anugrah Syawal -->
            <div class="bg-surface-container-low rounded-3xl overflow-hidden border border-surface-container-high flex flex-col justify-between">
              <div>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDBBX4oYEjKj03BduiMzCJfrpECk6CvuiV_Vt7PBvlmxK8gJ1pHR1WqIjoIWV3O67FurU7hyRHf06W8BuL2UA9wl8RSq9sEc7tl8ccqLnN2SDH4vrXy_j0SDjL1BSKL5sQxuHTzUi8b6d2751Ig1wBp1Q38p12_g0OhRCnM00KmIFF7YelcLbnp3VfSJ9j1l_Y-ykHq8evDMzAqw6oPVMn9Ytg_QWErVJ6EcFPOJL7gqE3uAcOWNcuILKPzTQKfE_uRA" alt="Eka Anugrah Syawal" class="w-full aspect-[4/5] object-cover">
                <div class="p-6 space-y-2">
                  <h3 class="font-headline-sm text-primary font-bold">Eka Anugrah Syawal, S.H., M.Kn.</h3>
                  <p class="font-label-md text-secondary font-semibold">Chief Legal Officer &amp; Notary Counsel</p>
                  <p class="font-body-sm text-on-surface-variant leading-relaxed">
                    Mengawasi validitas yuridis instrumen hukum, klausul anggaran dasar, serta jaringan kantor notaris rekanan di 38 provinsi.
                  </p>
                </div>
              </div>
            </div>

            <!-- 5. Wildan -->
            <div class="bg-surface-container-low rounded-3xl overflow-hidden border border-surface-container-high flex flex-col justify-between">
              <div>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqsZ6ngVW8Z6CtogIwwkxrbHDdEEPIZVDqrlJqC4q9rup7_g9dDEeT4FQHmkkk47wiovPZTle2fRgdPld6xjnvjpT6Dz8ZbESbBvrGkHn-_g_Pc1mSbta4bPZxnZiKgJTVUeaets5ViUfr8YPmWTWzrK6dDJy5KZDLJPqt8Mtk0JwxiOZFcYtUjp2WON5wOnV4pmbGOZpM7C4lFR20RggLjfFpZ6eHjz1ZshpkLWydFK2IQyWhrgRgs3MR4RW3deetRg" alt="Wildan" class="w-full aspect-[4/5] object-cover">
                <div class="p-6 space-y-2">
                  <h3 class="font-headline-sm text-primary font-bold">Wildan</h3>
                  <p class="font-label-md text-secondary font-semibold">Head of Operations &amp; OSS Compliance</p>
                  <p class="font-body-sm text-on-surface-variant leading-relaxed">
                    Spesialis pemetaan KBLI 2020 presisi dan mitigasi risiko perizinan berbasis risiko OSS-RBA deviasi nol.
                  </p>
                </div>
              </div>
            </div>

            <!-- 6. Najwa -->
            <div class="bg-surface-container-low rounded-3xl overflow-hidden border border-surface-container-high flex flex-col justify-between">
              <div>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-Z30Zfg8uJB3aOLvO9XqC3TwP-vAZf0h_Ir39bA9SP54kzOeP62jZBolvPWJQXkWtTh9QvQAg6GyCtArctfeXkBY1SvQS023dXHCrNUWOe6D5tB6q4qWIOvKw3f-lKNuzdzrpDqoth0IR_XKzd0O-T9uCMIkCEccvOWhE1FcARDHbxTlmOYUtoVwsG4Dd_1iRyfond1cNXc5nQR6A4AF5OBc4h6lGHpA_IPMCCPAYq9s40mP29aEl9p_PXfz_QPJluQ" alt="Najwa" class="w-full aspect-[4/5] object-cover">
                <div class="p-6 space-y-2">
                  <h3 class="font-headline-sm text-primary font-bold">Najwa</h3>
                  <p class="font-label-md text-secondary font-semibold">Head of Client Relations &amp; Personal Legal Assistant</p>
                  <p class="font-body-sm text-on-surface-variant leading-relaxed">
                    Menjembatani konsultasi hukum beretika, empati, dan transparan bagi setiap klien dan pendampingan izin korporasi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Headquarters Section -->
      <section class="w-full bg-surface-container-low px-6 lg:px-12 py-16 border-t border-surface-container-high">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-7 space-y-4">
            <span class="font-label-sm text-secondary uppercase font-bold tracking-wider">Kantor Pusat Resmi</span>
            <h3 class="font-headline-lg text-primary font-bold">Beroperasi di Jantung Finansial SCBD Jakarta</h3>
            <p class="font-body-md text-on-surface-variant leading-relaxed">
              LEGALTA dioperasikan oleh <strong>PT Legalta Korporasi Indonesia</strong> dengan pengesahan SK Menteri Hukum dan HAM RI Nomor AHU-0048192.AH.01.01.Tahun 2023. Bertempat di Treasury Tower Lt. 18, District 8 SCBD Lot 28, Jakarta Selatan.
            </p>
          </div>
          <div class="lg:col-span-5">
            <div class="rounded-3xl overflow-hidden shadow-md h-64 border border-surface-container-high">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWdO8GYQ77-e-TrR3u3w6deooZIXNBcRJAGol9ovWYsM5YDVKznaN-i0Q4mQ7rHmnPpo2yfTrI5pCWIuRgcdWsSPKShyP8O3JyEbGYg7eKq8G9KP57TDzakgN1Tfbzm1nttO43QpugC-wLUMbpyybEY8aI0ao586rz7iR7cF09niYlqRVqAfJpMtCZW9N6Wzlctd6FtoDxkC0Nv6Z1xiifmsi18IyWwNWQZrmrNi6fL_h4djZ9ymbL" alt="SCBD Jakarta" class="w-full h-full object-cover">
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}
