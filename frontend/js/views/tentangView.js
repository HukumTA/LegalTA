/**
 * View: Tentang Kami HUKUMTA
 */

const HERO_IMAGE = "assets/hero.jpg";

const ADDRESS = "Jl. Perintis Kemerdekaan Km. 10, Tamalanrea Indah, Kecamatan Tamalanrea, Kota Makassar, Sulawesi Selatan 90245";
const MAP_EMBED = `https://www.google.com/maps?q=Universitas+Hasanuddin+Makassar&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=Universitas+Hasanuddin+Makassar`;

const SERVICES = [
  {
    icon: "building-2",
    title: "Pendirian Perseroan Terbatas dan Persekutuan Komanditer",
    desc: "Mulai usaha dengan badan hukum yang sah.",
    items: ["Perseroan Terbatas umum", "Perseroan Terbatas perseorangan", "Penanaman Modal Asing"],
  },
  {
    icon: "badge-check",
    title: "Pendaftaran Hak Kekayaan Intelektual dan Merek",
    desc: "Lindungi nama, karya, dan temuanmu.",
    items: ["Merek dagang", "Hak cipta", "Paten"],
  },
  {
    icon: "file-check-2",
    title: "Perizinan Usaha melalui Online Single Submission",
    desc: "Urus izin supaya usahamu boleh berjalan.",
    items: [
      "Nomor Induk Berusaha",
      "Izin Badan Pengawas Obat dan Makanan",
      "Sertifikasi Halal",
      "Persetujuan Kesesuaian Kegiatan Pemanfaatan Ruang",
    ],
  },
  {
    icon: "file-text",
    title: "Dokumen Perusahaan dan Rapat Umum Pemegang Saham",
    desc: "Rapikan dokumen saat perusahaan berubah.",
    items: ["Perubahan akta", "Akuisisi saham"],
  },
];

const INVENTOR = {
  name: "Dr. Muhammad Irwan, S.H., M.H.",
  role: "Inventor",
  photo: "assets/irwan.jpg",
};

const TEAM = [
  { name: "Amirah Sridinanti", role: "Chief Executive Officer", photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg0Mc2x4PoIYdBGuLU9TbsCUCpT4lFmufN_7c_3OSBV8jlMtOHKcYFwKQQdAOarCdNNTBGYwW9OzjlnJXBpRNlo0MmK-NKTCOFRohengCZX_W_6cTX0xJYRaX_Byj52UbHTSf9A3w0yzNBdAurlqEyHt8CYf_EUUC6gIu5JSpoojSOIeYKsYaMIU3-Z66ADd4_pqHPmspY1KQMCn_WypVzmCQUTy0oBX6cn-xlkCe-tHUUUOj0V0tmO_O5qMMd91rGcA" },
  { name: "Abdul Farah Husein Rantisi Dewa", role: "Chief Product Officer", photo: "assets/farah.jpg" },
  { name: "Wisnu Sudrajat", role: "Chief Marketing Officer", photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLEBCku3t3VVgcfdRichcey0zq7Uy8fsNesXF7JWAuBZbbGdsafql_Qldp5NmpJjJNqqP849P9AiA6TYBMtF1bGoAklpTvQWnb0rbUBublc6JhoCBVt-8HSzxLTQWJCY_CAcHdJSj5wrIy5WzISd9280TM9k8z6ZP9rfdVJ496FJRLTDOLPuQVWovwhbqEaOGHtBMA3fCie5jLg3-YkU28-CpV5vUZCW2scJhsqs9X2fZaTLoX_NFhfAkxnJ3TSoLiXg" },
  { name: "Andi Nurul Mazidah", role: "Chief Financial Officer", photo: "assets/nurul.jpg" },
  { name: "Eka Anugrah Syawal", role: "Chief Legal Officer", photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDBBX4oYEjKj03BduiMzCJfrpECk6CvuiV_Vt7PBvlmxK8gJ1pHR1WqIjoIWV3O67FurU7hyRHf06W8BuL2UA9wl8RSq9sEc7tl8ccqLnN2SDH4vrXy_j0SDjL1BSKL5sQxuHTzUi8b6d2751Ig1wBp1Q38p12_g0OhRCnM00KmIFF7YelcLbnp3VfSJ9j1l_Y-ykHq8evDMzAqw6oPVMn9Ytg_QWErVJ6EcFPOJL7gqE3uAcOWNcuILKPzTQKfE_uRA" },
  { name: "Najwa As Salsabila", role: "Chief Legal Officer", photo: "assets/najwa.jpg" },
  { name: "M. Wildan Humaidi S. Budi", role: "Chief Technology Officer", photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqsZ6ngVW8Z6CtogIwwkxrbHDdEEPIZVDqrlJqC4q9rup7_g9dDEeT4FQHmkkk47wiovPZTle2fRgdPld6xjnvjpT6Dz8ZbESbBvrGkHn-_g_Pc1mSbta4bPZxnZiKgJTVUeaets5ViUfr8YPmWTWzrK6dDJy5KZDLJPqt8Mtk0JwxiOZFcYtUjp2WON5wOnV4pmbGOZpM7C4lFR20RggLjfFpZ6eHjz1ZshpkLWydFK2IQyWhrgRgs3MR4RW3deetRg" },
  { name: "Faiz Ahmad Fachri", role: "Chief Technology Officer", photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwaoHPRStRf_w5gCgv2zDqrlcfpltf7R7oNZqpyf_phUjngQmM1oRFEInNmrBOhMu9V_NgO2tVcO0Y15bLrn3tvNj16NXZMI57q6ZyWi2op9PsJghDYgXb8v2OLc6yfCPvbDuqUwUehx29AEV7ofisteecRUr5uxLOArX4j242lSo1f6WoJfFSOOchWqr2NXNNy0SaEwtAnuR1CUiOm1mB3uXy0hZMIF7qzlgHzk1hwvPPW9c-ftpfymskAPa_lxqU5Q" },
];

function initials(name) {
  return name
    .replace(/^Dr\.\s*/i, "")
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

function personCard(p, big = false) {
  return `
    <article class="${big ? "w-full max-w-xs mx-auto" : "w-full"}">
      <div class="relative overflow-hidden rounded-2xl aspect-[4/5] bg-slate-200">
        <img src="${p.photo}" alt="${p.name}" loading="lazy"
             class="w-full h-full object-cover object-top"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
        <div class="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-crimson-800 to-crimson-900">
          <span class="font-serif text-4xl font-bold text-amber-200">${initials(p.name)}</span>
        </div>
      </div>
      <div class="pt-3 space-y-0.5 text-center">
        <h3 class="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">${p.name}</h3>
        <p class="text-xs text-crimson-800 font-semibold uppercase tracking-wider">${p.role}</p>
      </div>
    </article>`;
}

function serviceCard(s) {
  return `
    <div class="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 space-y-4 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-crimson-200 transition-all duration-300 cursor-pointer z-10">
      <div class="absolute inset-0 bg-gradient-to-br from-crimson-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      <div class="flex items-center gap-4">
        <div class="shrink-0 w-12 h-12 rounded-2xl bg-crimson-800 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-crimson-700 group-hover:shadow-lg group-hover:shadow-crimson-900/20 transition-all duration-300">
          <i data-lucide="${s.icon}" class="w-6 h-6"></i>
        </div>
        <h3 class="text-base sm:text-lg font-extrabold text-slate-900 leading-snug group-hover:text-crimson-800 transition-colors">${s.title}</h3>
      </div>
      <p class="text-sm text-slate-600">${s.desc}</p>
      <ul class="space-y-2 pt-2">
        ${s.items
      .map(
        (it) => `
          <li class="flex items-start gap-3 text-sm text-slate-700">
            <div class="bg-gold-100 rounded-full p-0.5 mt-0.5 group-hover:bg-gold-200 transition-colors">
                <i data-lucide="check" class="w-3 h-3 shrink-0 text-gold-700"></i>
            </div>
            <span>${it}</span>
          </li>`
      )
      .join("")}
      </ul>
    </div>`;
}

export function renderTentangView() {
  const heroBg = `background: linear-gradient(180deg,rgba(40,6,14,.35) 0%,rgba(40,6,14,.80) 100%), url('assets/home-hero.jpg') center/cover no-repeat, linear-gradient(160deg,#7a1424 0%,#4a0b16 100%);`;

  return `
    <div class="flex flex-col w-full pb-10 relative bg-slate-50/50">
      <div class="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-crimson-900/5 to-transparent pointer-events-none -z-10"></div>
      
      <!-- 1. Hero Atas -->
      <section class="px-4 sm:px-6 pt-6">
        <div class="max-w-7xl mx-auto rounded-[2rem] overflow-hidden min-h-[520px] sm:min-h-[620px] flex items-end shadow-xl" style="${heroBg}">
          <div class="p-6 sm:p-14 space-y-5 max-w-3xl">
            <p class="text-sm text-amber-200 font-semibold uppercase tracking-wider">Tentang HUKUMTA</p>
            <h1 class="font-serif text-4xl sm:text-6xl font-bold text-white leading-[1.05] tracking-tight">
              Aksesibel untuk semua.
            </h1>
            <p class="text-base sm:text-xl text-amber-100/95 leading-relaxed max-w-xl">
              Membangun Ekosistem Legalitas yang Transparan, Cepat, dan Adil Bagi Pengusaha Indonesia.
            </p>
          </div>
        </div>
      </section>

      <!-- 2. Pengenalan HUKUMTA -->
      <section class="px-6 py-20 sm:py-28">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          <div class="lg:col-span-5">
            <div class="relative rounded-3xl overflow-hidden bg-white shadow-xl border border-slate-100 aspect-[4/5] flex items-center justify-center p-8">
              <img src="${HERO_IMAGE}" alt="Ilustrasi Hukumta" class="w-full h-full object-contain" onerror="this.src='assets/logo.png';"/>
            </div>
          </div>
          
          <div class="lg:col-span-7 space-y-8">
            <h2 class="font-serif text-4xl sm:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight italic">
              Legalitas yang cepat, transparan, dan bisa dipercaya
            </h2>
            
            <p class="text-base sm:text-lg text-slate-700 leading-relaxed">
              HUKUMTA adalah platform legaltech yang membantu masyarakat Indonesia mengurus legalitas dengan cepat, transparan, dan terpercaya. Mulai dari pendirian Perseroan Terbatas dan Persekutuan Komanditer, pengurusan perizinan berusaha melalui Online Single Submission, sampai pendaftaran dan perlindungan merek sebagai bagian dari Hak Kekayaan Intelektual.
            </p>
            
            <!-- Desain Visi Kami: Interaktif, timbul saat hover, warna font disesuaikan -->
            <div class="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200 mt-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
              <i data-lucide="quote" class="absolute top-6 right-6 w-12 h-12 text-slate-200 group-hover:text-slate-300 transition-colors"></i>
              <div class="relative z-10 space-y-3">
                <p class="text-xs font-extrabold text-crimson-800 uppercase tracking-widest">Visi Kami</p>
                <p class="text-lg sm:text-xl text-slate-700 font-serif leading-relaxed group-hover:text-slate-900 transition-colors">
                  "Menjadi platform legaltech pilihan pertama masyarakat Indonesia, dari perorangan dan usaha rumahan sampai perusahaan yang sedang tumbuh."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. Layanan -->
      <section class="px-6 pb-20 sm:pb-28">
        <div class="max-w-7xl mx-auto space-y-12">
          <div class="max-w-2xl space-y-3">
            <h2 class="font-serif text-3xl sm:text-4xl font-bold text-slate-900">Layanan kami</h2>
            <p class="text-base text-slate-600">Empat layanan utama, dijelaskan dengan bahasa yang mudah.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            ${SERVICES.map(serviceCard).join("")}
          </div>
        </div>
      </section>

      <!-- 4. Tim (Hanya menampilkan "Dewan Pimpinan HUKUMTA") -->
      <section class="px-6 pb-20 sm:pb-28">
        <div class="max-w-7xl mx-auto space-y-12">
          <div class="text-center max-w-2xl mx-auto space-y-3">
            <h2 class="font-serif text-3xl sm:text-4xl text-slate-900 font-bold pt-1">
              Dewan Pimpinan HUKUMTA
            </h2>
          </div>
          
          <div class="flex justify-center">
            ${personCard(INVENTOR, true)}
          </div>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 pt-4">
            ${TEAM.map((p) => personCard(p)).join("")}
          </div>
        </div>
      </section>

      <!-- 5. Kantor Pusat (Makassar) & Catatan Penting -->
      <section class="px-4 sm:px-6">
        <div class="max-w-7xl mx-auto space-y-8">
          
          <div class="rounded-3xl bg-white border border-slate-200 p-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-sm">
            <div class="lg:col-span-6 space-y-4">
              <span class="text-xs text-crimson-800 uppercase font-bold tracking-wider">Pusat Operasional</span>
              <h3 class="font-serif text-2xl sm:text-3xl text-slate-900 font-bold">Berpusat di Makassar, Terhubung ke Seluruh Indonesia</h3>
              <p class="text-base text-slate-700 leading-relaxed">
                HUKUMTA berpusat di kawasan akademik Universitas Hasanuddin. Beralamat di <strong>${ADDRESS}</strong>.
              </p>
              <div class="pt-4">
                <a href="${MAP_LINK}" target="_blank" rel="noopener noreferrer"
                   class="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white text-sm font-semibold px-6 py-3 hover:bg-slate-800 transition-colors">
                  <i data-lucide="map-pin" class="w-4 h-4"></i>
                  Lihat Peta
                </a>
              </div>
            </div>
            <div class="lg:col-span-6">
              <div class="rounded-2xl overflow-hidden shadow-md h-72 border border-slate-200">
                <iframe src="${MAP_EMBED}" class="w-full h-full border-0" loading="lazy"></iframe>
              </div>
            </div>
          </div>

          <!-- Kotak Catatan Penting (Desain Bersih, Elegan, dan Berbeda) -->
          <div class="rounded-2xl bg-white border-l-4 border-l-crimson-700 border-y border-r border-y-slate-200 border-r-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto">
            
            <div class="shrink-0 relative mt-1">
              <div class="bg-gold-50 text-gold-600 w-12 h-12 rounded-xl flex items-center justify-center border border-gold-200/50 shadow-sm">
                <i data-lucide="info" class="w-6 h-6"></i>
              </div>
            </div>
            
            <div class="space-y-1.5 text-center sm:text-left">
              <h4 class="text-sm font-extrabold text-slate-900 uppercase tracking-widest">Catatan Penting</h4>
              <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
                HUKUMTA adalah platform teknologi hukum. Pembuatan akta otentik dilakukan oleh notaris yang berwenang, dan nasihat hukum diberikan oleh pihak yang berwenang di bidangnya. Informasi di situs ini bersifat umum dan tidak menggantikan nasihat hukum.
              </p>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  `;
}