/**
 * View: Tentang Kami & Tim Dewan Pimpinan (6 Profil)
 * Modernized to match the LEGALTA Crimson/Gold/Slate reference aesthetic.
 */

export function renderTentangView() {
  return `
    <div class="flex flex-col w-full bg-[#FAFAFC]">
      <!-- Section 1: Hero & Vision Narrative -->
      <section class="relative w-full bg-gradient-to-b from-white via-amber-50/20 to-white px-6 pt-14 pb-20 overflow-hidden border-b border-slate-100">
        <div class="max-w-7xl mx-auto relative z-10 space-y-12">
          <div class="max-w-3xl space-y-4">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crimson-50 border border-crimson-100 text-crimson-800 text-xs font-bold uppercase tracking-wider">
              <i data-lucide="landmark" class="w-3.5 h-3.5 text-crimson-700"></i>
              <span>Tentang LEGALTA Indonesia</span>
            </div>
            <h1 class="font-serif text-4xl sm:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
              Membangun Ekosistem Legalitas yang Transparan, Cepat, dan Adil Bagi Pengusaha Indonesia
            </h1>
            <p class="font-serif text-xl text-gold-600 italic font-semibold">
              "Keseimbangan • Modern • Adil"
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
              <div class="w-12 h-12 rounded-2xl bg-crimson-800 text-white flex items-center justify-center shadow-md">
                <i data-lucide="eye" class="w-6 h-6"></i>
              </div>
              <h3 class="font-serif text-2xl text-slate-900 font-bold">Visi Kami</h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Menjadi katalisator transformasi hukum korporasi nomor satu di Asia Tenggara dengan mendemokratisasi akses legalitas usaha melalui kepastian regulasi, transparansi tanpa biaya tersembunyi, serta teknologi pengesahan mutakhir yang dapat diakses oleh UMKM hingga konglomerasi.
              </p>
            </div>
            <div class="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
              <div class="w-12 h-12 rounded-2xl bg-gold-600 text-white flex items-center justify-center shadow-md">
                <i data-lucide="flag" class="w-6 h-6"></i>
              </div>
              <h3 class="font-serif text-2xl text-slate-900 font-bold">Misi Strategis</h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Menghapus friksi birokrasi legal di Indonesia dengan menyatukan notaris bersertifikasi resmi, praktisi hukum berpengalaman, dan sistem otomasi AHU Online serta OSS-RBA dalam satu orkestrasi digital yang presisi, aman, dan patuh pada kaidah perundang-undangan nasional.
              </p>
            </div>
          </div>

          <!-- Brand Identity & Logo Philosophy Showcase -->
          <div class="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div class="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <img src="assets/logo.png" alt="Lambang Resmi LEGALTA" class="h-44 w-auto object-contain drop-shadow-md" />
                <span class="mt-3 text-xs uppercase tracking-widest text-gold-600 font-bold">Identitas Resmi LEGALTA</span>
              </div>
              <div class="lg:col-span-8 space-y-4">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-gold-700 text-xs font-bold uppercase tracking-wider">
                  <i data-lucide="scale" class="w-3.5 h-3.5"></i>
                  <span>Filosofi Lambang</span>
                </div>
                <h3 class="font-serif text-2xl sm:text-3xl text-slate-900 font-bold">Dualitas Keadilan: Sinergi Merah Ketegasan &amp; Emas Integritas</h3>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Lambang resmi <strong>LEGALTA</strong> memvisualisasikan timbangan keadilan modern yang menyatu dengan siluet monogram dinamis huruf <strong>"L"</strong>. Belahan warna merah marun melambangkan keberanian, ketegasan yuridis, dan perlindungan hak hukum klien; sedangkan gradasi emas metalik merepresentasikan kemuliaan profesi notariat, kemakmuran mitra usaha, dan integritas etika yang luhur.
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                  <div class="space-y-1">
                    <span class="text-sm font-extrabold text-crimson-800 block">Keseimbangan</span>
                    <span class="text-xs text-slate-500">Harmonisasi regulasi pemerintah dan akselerasi bisnis klien.</span>
                  </div>
                  <div class="space-y-1">
                    <span class="text-sm font-extrabold text-gold-600 block">Modern</span>
                    <span class="text-xs text-slate-500">Integrasi teknologi pangkalan data Ditjen AHU, OSS-RBA, &amp; PDKI.</span>
                  </div>
                  <div class="space-y-1">
                    <span class="text-sm font-extrabold text-crimson-800 block">Adil</span>
                    <span class="text-xs text-slate-500">Transparansi tarif legalitas tanpa biaya tersembunyi bagi semua.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section: Leadership Team (The 6 Profiles) -->
      <section class="w-full bg-white px-6 py-20">
        <div class="max-w-7xl mx-auto space-y-12">
          <div class="text-center max-w-2xl mx-auto space-y-2">
            <span class="text-xs text-crimson-800 uppercase font-bold tracking-wider bg-crimson-50 border border-crimson-100 px-3.5 py-1 rounded-full">Kepemimpinan Eksekutif</span>
            <h2 class="font-serif text-3xl sm:text-4xl text-slate-900 font-bold pt-1">Dewan Pimpinan LEGALTA</h2>
            <p class="text-sm text-slate-500">Para profesional berpengalaman lintas disiplin hukum korporasi, rekayasa perangkat lunak legal, dan strategi kepatuhan nasional.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- 1. Amirah Sridinanti -->
            <div class="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div class="overflow-hidden aspect-[4/5] bg-slate-200">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg0Mc2x4PoIYdBGuLU9TbsCUCpT4lFmufN_7c_3OSBV8jlMtOHKcYFwKQQdAOarCdNNTBGYwW9OzjlnJXBpRNlo0MmK-NKTCOFRohengCZX_W_6cTX0xJYRaX_Byj52UbHTSf9A3w0yzNBdAurlqEyHt8CYf_EUUC6gIu5JSpoojSOIeYKsYaMIU3-Z66ADd4_pqHPmspY1KQMCn_WypVzmCQUTy0oBX6cn-xlkCe-tHUUUOj0V0tmO_O5qMMd91rGcA" alt="Amirah Sridinanti" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="p-6 space-y-1.5">
                  <h3 class="text-lg text-slate-900 font-extrabold">Amirah Sridinanti</h3>
                  <p class="text-xs text-crimson-800 font-bold uppercase tracking-wide">Chief Executive Officer &amp; Co-Founder</p>
                  <p class="text-xs text-slate-600 leading-relaxed pt-1">
                    Memimpin visi strategis LEGALTA dalam merestrukturisasi ekosistem perizinan usaha di Indonesia dan kemitraan ventura.
                  </p>
                </div>
              </div>
            </div>

            <!-- 2. Wisnu Sudrajat -->
            <div class="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div class="overflow-hidden aspect-[4/5] bg-slate-200">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLEBCku3t3VVgcfdRichcey0zq7Uy8fsNesXF7JWAuBZbbGdsafql_Qldp5NmpJjJNqqP849P9AiA6TYBMtF1bGoAklpTvQWnb0rbUBublc6JhoCBVt-8HSzxLTQWJCY_CAcHdJSj5wrIy5WzISd9280TM9k8z6ZP9rfdVJ496FJRLTDOLPuQVWovwhbqEaOGHtBMA3fCie5jLg3-YkU28-CpV5vUZCW2scJhsqs9X2fZaTLoX_NFhfAkxnJ3TSoLiXg" alt="Wisnu Sudrajat" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="p-6 space-y-1.5">
                  <h3 class="text-lg text-slate-900 font-extrabold">Wisnu Sudrajat</h3>
                  <p class="text-xs text-crimson-800 font-bold uppercase tracking-wide">Chief Marketing Officer &amp; Growth Lead</p>
                  <p class="text-xs text-slate-600 leading-relaxed pt-1">
                    Mengarahkan positioning brand LEGALTA sebagai standar baku kepatuhan hukum bagi korporasi modern dan jutaan UMKM.
                  </p>
                </div>
              </div>
            </div>

            <!-- 3. Faiz -->
            <div class="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div class="overflow-hidden aspect-[4/5] bg-slate-200">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwaoHPRStRf_w5gCgv2zDqrlcfpltf7R7oNZqpyf_phUjngQmM1oRFEInNmrBOhMu9V_NgO2tVcO0Y15bLrn3tvNj16NXZMI57q6ZyWi2op9PsJghDYgXb8v2OLc6yfCPvbDuqUwUehx29AEV7ofisteecRUr5uxLOArX4j242lSo1f6WoJfFSOOchWqr2NXNNy0SaEwtAnuR1CUiOm1mB3uXy0hZMIF7qzlgHzk1hwvPPW9c-ftpfymskAPa_lxqU5Q" alt="Faiz" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="p-6 space-y-1.5">
                  <h3 class="text-lg text-slate-900 font-extrabold">Faiz</h3>
                  <p class="text-xs text-crimson-800 font-bold uppercase tracking-wide">Head of Operations &amp; OSS Compliance</p>
                  <p class="text-xs text-slate-600 leading-relaxed pt-1">
                    Spesialis pemetaan KBLI 2020 presisi dan mitigasi risiko perizinan berbasis risiko OSS-RBA deviasi nol.
                  </p>
                </div>
              </div>
            </div>

            <!-- 4. Eka Anugrah Syawal -->
            <div class="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div class="overflow-hidden aspect-[4/5] bg-slate-200">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDBBX4oYEjKj03BduiMzCJfrpECk6CvuiV_Vt7PBvlmxK8gJ1pHR1WqIjoIWV3O67FurU7hyRHf06W8BuL2UA9wl8RSq9sEc7tl8ccqLnN2SDH4vrXy_j0SDjL1BSKL5sQxuHTzUi8b6d2751Ig1wBp1Q38p12_g0OhRCnM00KmIFF7YelcLbnp3VfSJ9j1l_Y-ykHq8evDMzAqw6oPVMn9Ytg_QWErVJ6EcFPOJL7gqE3uAcOWNcuILKPzTQKfE_uRA" alt="Eka Anugrah Syawal" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="p-6 space-y-1.5">
                  <h3 class="text-lg text-slate-900 font-extrabold">Eka Anugrah Syawal, S.H., M.Kn.</h3>
                  <p class="text-xs text-crimson-800 font-bold uppercase tracking-wide">Chief Legal Officer &amp; Notary Counsel</p>
                  <p class="text-xs text-slate-600 leading-relaxed pt-1">
                    Mengawasi validitas yuridis instrumen hukum, klausul anggaran dasar, serta jaringan kantor notaris rekanan di 38 provinsi.
                  </p>
                </div>
              </div>
            </div>

            <!-- 5. Wildan -->
            <div class="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div class="overflow-hidden aspect-[4/5] bg-slate-200">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqsZ6ngVW8Z6CtogIwwkxrbHDdEEPIZVDqrlJqC4q9rup7_g9dDEeT4FQHmkkk47wiovPZTle2fRgdPld6xjnvjpT6Dz8ZbESbBvrGkHn-_g_Pc1mSbta4bPZxnZiKgJTVUeaets5ViUfr8YPmWTWzrK6dDJy5KZDLJPqt8Mtk0JwxiOZFcYtUjp2WON5wOnV4pmbGOZpM7C4lFR20RggLjfFpZ6eHjz1ZshpkLWydFK2IQyWhrgRgs3MR4RW3deetRg" alt="Wildan" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="p-6 space-y-1.5">
                  <h3 class="text-lg text-slate-900 font-extrabold">Wildan</h3>
                  <p class="text-xs text-crimson-800 font-bold uppercase tracking-wide">Chief Technology Officer / Head of Product</p>
                  <p class="text-xs text-slate-600 leading-relaxed pt-1">
                    Arsitek utama engine otomasi dokumen legal dan integrasi API AHU &amp; OSS RBA dengan standar enkripsi perbankan ISO 27001.
                  </p>
                </div>
              </div>
            </div>

            <!-- 6. Najwa -->
            <div class="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div class="overflow-hidden aspect-[4/5] bg-slate-200">
                  <img src="assets/najwa.jpg" alt="Najwa" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="p-6 space-y-1.5">
                  <h3 class="text-lg text-slate-900 font-extrabold">Najwa</h3>
                  <p class="text-xs text-crimson-800 font-bold uppercase tracking-wide">Head of Client Relations &amp; PLA</p>
                  <p class="text-xs text-slate-600 leading-relaxed pt-1">
                    Menjembatani konsultasi hukum beretika, empati, dan transparan bagi setiap klien dan pendampingan izin korporasi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Headquarters Section -->
      <section class="w-full bg-slate-50 px-6 py-16 border-t border-slate-200/70">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-7 space-y-4">
            <span class="text-xs text-crimson-800 uppercase font-bold tracking-wider">Kantor Pusat Resmi</span>
            <h3 class="font-serif text-2xl sm:text-3xl text-slate-900 font-bold">Beroperasi di Jantung Finansial SCBD Jakarta</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              LEGALTA dioperasikan oleh <strong>PT Legalta Korporasi Indonesia</strong> dengan pengesahan SK Menteri Hukum dan HAM RI Nomor AHU-0048192.AH.01.01.Tahun 2023. Bertempat di Treasury Tower Lt. 18, District 8 SCBD Lot 28, Jakarta Selatan.
            </p>
          </div>
          <div class="lg:col-span-5">
            <div class="rounded-3xl overflow-hidden shadow-lg h-64 border border-slate-200">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWdO8GYQ77-e-TrR3u3w6deooZIXNBcRJAGol9ovWYsM5YDVKznaN-i0Q4mQ7rHmnPpo2yfTrI5pCWIuRgcdWsSPKShyP8O3JyEbGYg7eKq8G9KP57TDzakgN1Tfbzm1nttO43QpugC-wLUMbpyybEY8aI0ao586rz7iR7cF09niYlqRVqAfJpMtCZW9N6Wzlctd6FtoDxkC0Nv6Z1xiifmsi18IyWwNWQZrmrNi6fL_h4djZ9ymbL" alt="SCBD Jakarta" class="w-full h-full object-cover">
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}
