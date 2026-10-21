/**
 * View: Perizinan Usaha OSS-RBA (PP 5/2021)
 * Matches Reference Design Image 5 (Hero with OSS-RBA Live Engine Card, 6-Card License Portfolio,
 * Interactive RBA Risk Simulator, Compliance Guarantees, Testimonials, FAQ, and CTA Banner).
 */

import { showToast } from '../components/toast.js';

export function renderPerizinanView() {
  return `
    <div class="flex flex-col w-full bg-[#FAFAFC]">

      <!-- 1. HERO SECTION (2 COLUMNS) -->
      <section class="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-white via-slate-50/40 to-white border-b border-slate-100">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Column (7 Cols) -->
            <div class="lg:col-span-7 space-y-6">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crimson-50 border border-crimson-100 text-crimson-800 text-xs font-bold uppercase tracking-wider">
                <i data-lucide="file-check-2" class="w-3.5 h-3.5 text-crimson-700"></i>
                <span>Layanan Perizinan Berusaha</span>
              </div>

              <h1 class="font-serif text-4xl sm:text-5xl lg:text-[52px] font-bold text-slate-900 leading-[1.12] tracking-tight">
                Perizinan OSS, NIB &amp; Sertifikat Standar Risiko (PB-UMKU) Tanpa Hambatan
              </h1>

              <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Pastikan operasional bisnis Anda sah 100% secara hukum dengan sistem perizinan terintegrasi Kementerian BKPM, Kementerian Teknis, dan Pemerintah Daerah sesuai amanat PP No. 5/2021 (UU Cipta Kerja) untuk izin edar produk, lokasi, dan konstruksi.
              </p>

              <!-- 2 CTA Buttons -->
              <div class="flex flex-wrap items-center gap-4 pt-2">
                <a href="#/konsultasi?layanan=perizinan-oss" class="inline-flex items-center justify-center px-8 py-3.5 bg-crimson-800 hover:bg-crimson-900 text-white font-bold text-sm rounded-xl shadow-lg shadow-crimson-800/25 transition-all transform hover:-translate-y-0.5">
                  <span>Konsultasi Perizinan</span>
                  <i data-lucide="arrow-right" class="w-4 h-4 ml-2"></i>
                </a>
                <button type="button" data-scroll-to="simulasi-rba" class="inline-flex items-center justify-center px-7 py-3.5 bg-white border border-slate-300 hover:border-crimson-800 text-slate-800 hover:text-crimson-800 font-bold text-sm rounded-xl transition-all gap-2">
                  <i data-lucide="calculator" class="w-4 h-4 text-gold-600"></i>
                  <span>Cek Risiko KBLI Anda</span>
                </button>
              </div>

              <!-- 3 Stat Boxes -->
              <div class="grid grid-cols-3 gap-4 pt-4 max-w-xl">
                <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <span class="text-lg sm:text-xl font-black text-slate-900 block">1.700+</span>
                  <span class="text-xs text-slate-500">Kode KBLI 2020 Aktif</span>
                </div>
                <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <span class="text-lg sm:text-xl font-black text-slate-900 block">100%</span>
                  <span class="text-xs text-slate-500">Sesuai PP No. 5/2021</span>
                </div>
                <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <span class="text-lg sm:text-xl font-black text-slate-900 block">3–5 Hari</span>
                  <span class="text-xs text-slate-500">Estimasi Verifikasi Awal</span>
                </div>
              </div>
            </div>

            <!-- Right Column: OSS-RBA Live Status Card (5 Cols) -->
            <div class="lg:col-span-5">
              <div class="bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100 space-y-4">
                <!-- Window Header -->
                <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div class="flex items-center gap-1.5">
                    <span class="w-2.5 h-2.5 rounded-full bg-crimson-600"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  </div>
                  <span class="px-2.5 py-0.5 rounded bg-slate-100 text-slate-500 text-[10px] font-mono font-bold uppercase">OSS-RBA Engine v2.4</span>
                </div>

                <!-- Amber Connection Banner -->
                <div class="p-4 rounded-2xl bg-amber-50/90 border border-amber-200/70 flex items-start gap-3">
                  <div class="w-9 h-9 rounded-xl bg-gold-500/20 text-gold-700 flex items-center justify-center shrink-0 mt-0.5">
                    <i data-lucide="shield-check" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 class="text-xs font-extrabold text-slate-900">Terhubung Langsung BKPM &amp; KLHK</h4>
                    <p class="text-[11px] text-slate-600 mt-0.5 leading-snug">Sinkronisasi data KBLI 2020 dan RDTR/KKPR Terpadu</p>
                  </div>
                </div>

                <!-- Status Items -->
                <div class="space-y-3">
                  <div class="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div class="flex items-center gap-3">
                      <div class="w-9 h-9 rounded-xl bg-crimson-800 text-white flex items-center justify-center shrink-0">
                        <i data-lucide="check-circle-2" class="w-4 h-4"></i>
                      </div>
                      <div>
                        <h5 class="text-xs font-bold text-slate-900">Validasi Kepatuhan Wajib Pajak</h5>
                        <p class="text-[11px] text-slate-500">NPWP Badan &amp; Konfirmasi Status KSWP</p>
                      </div>
                    </div>
                    <span class="px-2.5 py-1 rounded bg-crimson-50 text-crimson-800 text-[10px] font-extrabold">SELESAI</span>
                  </div>

                  <div class="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div class="flex items-center gap-3">
                      <div class="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
                        <i data-lucide="sliders" class="w-4 h-4"></i>
                      </div>
                      <div>
                        <h5 class="text-xs font-bold text-slate-900">Penetapan Tingkat Risiko (KBLI)</h5>
                        <p class="text-[11px] text-slate-500">Rendah, Menengah, atau Tinggi</p>
                      </div>
                    </div>
                    <span class="px-2.5 py-1 rounded bg-amber-50 text-gold-700 text-[10px] font-extrabold">AKTIF</span>
                  </div>

                  <div class="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div class="flex items-center gap-3">
                      <div class="w-9 h-9 rounded-xl bg-slate-200 text-slate-600 flex items-center justify-center shrink-0">
                        <i data-lucide="file-badge" class="w-4 h-4"></i>
                      </div>
                      <div>
                        <h5 class="text-xs font-bold text-slate-900">Penerbitan Sertifikat Standar &amp; Izin</h5>
                        <p class="text-[11px] text-slate-500">PB-UMKU Kementerian Teknis</p>
                      </div>
                    </div>
                    <span class="px-2.5 py-1 rounded bg-slate-200 text-slate-600 text-[10px] font-extrabold">PROSES</span>
                  </div>
                </div>

                <!-- Bottom Readiness Indicator -->
                <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span class="flex items-center gap-2 text-slate-500 font-medium">
                    <i data-lucide="activity" class="w-4 h-4 text-emerald-600"></i>
                    Kesesuaian Dokumen Standar
                  </span>
                  <span class="font-extrabold text-slate-900">92% Siap Lanjut</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- 2. PORTOFOLIO PERIZINAN OPERASIONAL & SEKTORAL (6 CARDS) -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-crimson-800">Arsitektur Lisensi Terpadu</span>
              <h2 class="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
                Portofolio Perizinan Operasional &amp; Sektoral
              </h2>
              <p class="text-sm text-slate-500 mt-2 max-w-2xl">
                Penyelesaian komprehensif dari Nomor Induk Berusaha (NIB) hingga sertifikasi kelayakan operasional lintas kementerian.
              </p>
            </div>
            <div class="flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-100 px-3.5 py-2 rounded-xl self-start md:self-auto">
              <span>Standar Baku Regulasi:</span>
              <span class="text-slate-900 font-extrabold">PP No. 5 Tahun 2021</span>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <!-- Card 1: NIB -->
            <div class="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div class="w-11 h-11 rounded-2xl bg-crimson-50 text-crimson-800 flex items-center justify-center mb-5">
                  <i data-lucide="file-text" class="w-5 h-5"></i>
                </div>
                <div class="flex items-center gap-2 mb-3">
                  <span class="px-2.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-bold uppercase">OSS-RBA Dasar</span>
                  <span class="text-[11px] font-bold text-crimson-700">Risiko R / MR / MT / T</span>
                </div>
                <h3 class="text-lg font-extrabold text-slate-900">NIB (Nomor Induk Berusaha) &amp; Hak Akses</h3>
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                  Registrasi identitas tunggal pelaku usaha sekaligus Angka Pengenal Impor (API-U/P), Hak Akses Kepabeanan, serta migrasi sistem OSS lama ke OSS RBA terbaru bagi PMDN &amp; PMA.
                </p>
                <ul class="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-crimson-700 shrink-0"></i><span>Pemetaan KBLI 2020 Multi-Sektor</span></li>
                  <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-crimson-700 shrink-0"></i><span>Validasi Hak Akses OSS &amp; PKKPR Otomatis</span></li>
                </ul>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="text-slate-400 font-medium">Estimasi 1 – 3 Hari Kerja</span>
                <a href="#/konsultasi?layanan=perizinan-oss" class="font-bold text-slate-900 hover:text-crimson-800 inline-flex items-center gap-1">
                  <span>Pilih Solusi</span>
                  <i data-lucide="chevron-right" class="w-4 h-4"></i>
                </a>
              </div>
            </div>

            <!-- Card 2: Izin Edar BPOM -->
            <div class="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div class="w-11 h-11 rounded-2xl bg-amber-50 text-gold-600 flex items-center justify-center mb-5">
                  <i data-lucide="flask-conical" class="w-5 h-5"></i>
                </div>
                <div class="flex items-center gap-2 mb-3">
                  <span class="px-2.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-bold uppercase">Kesehatan &amp; Pangan</span>
                  <span class="text-[11px] font-bold text-crimson-700">F&amp;B &amp; Kosmetik</span>
                </div>
                <h3 class="text-lg font-extrabold text-slate-900">Izin Edar BPOM (MD/ML) &amp; SPP-IRT</h3>
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                  Pendampingan audit sarana produksi (CPPOB / CPKB), uji laboratorium terakreditasi, verifikasi komposisi bahan, hingga penerbitan Nomor Izin Edar resmi BPOM.
                </p>
                <ul class="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-crimson-700 shrink-0"></i><span>Audit Denah Pabrik &amp; Sarana Produksi</span></li>
                  <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-crimson-700 shrink-0"></i><span>Registrasi Akun e-BPOM &amp; Notifikasi Kosmetik</span></li>
                </ul>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="text-slate-400 font-medium">Estimasi 14 – 30 Hari Kerja</span>
                <a href="#/konsultasi?layanan=perizinan-oss" class="font-bold text-slate-900 hover:text-crimson-800 inline-flex items-center gap-1">
                  <span>Pilih Solusi</span>
                  <i data-lucide="chevron-right" class="w-4 h-4"></i>
                </a>
              </div>
            </div>

            <!-- Card 3: Sertifikasi Halal -->
            <div class="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div class="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5">
                  <i data-lucide="award" class="w-5 h-5"></i>
                </div>
                <div class="flex items-center gap-2 mb-3">
                  <span class="px-2.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-bold uppercase">LPH / Kemenag</span>
                  <span class="text-[11px] font-bold text-crimson-700">Self-Declare &amp; Reguler</span>
                </div>
                <h3 class="text-lg font-extrabold text-slate-900">Sertifikasi Halal Resmi BPJPH &amp; MUI</h3>
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                  Pemenuhan kewajiban sertifikasi halal nasional melalui SIHALAL (PTSP Halal), penyusunan manual Sistem Jaminan Produk Halal (SJPH), &amp; pendampingan audit LPH.
                </p>
                <ul class="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-crimson-700 shrink-0"></i><span>Penyusunan Dokumen Manual SJPH</span></li>
                  <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-crimson-700 shrink-0"></i><span>Integrasi Akun SIHALAL BPJPH</span></li>
                </ul>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="text-slate-400 font-medium">Estimasi 14 – 21 Hari Kerja</span>
                <a href="#/konsultasi?layanan=perizinan-oss" class="font-bold text-slate-900 hover:text-crimson-800 inline-flex items-center gap-1">
                  <span>Pilih Solusi</span>
                  <i data-lucide="chevron-right" class="w-4 h-4"></i>
                </a>
              </div>
            </div>

            <!-- Card 4: Izin Konstruksi -->
            <div class="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div class="w-11 h-11 rounded-2xl bg-crimson-50 text-crimson-800 flex items-center justify-center mb-5">
                  <i data-lucide="hard-hat" class="w-5 h-5"></i>
                </div>
                <div class="flex items-center gap-2 mb-3">
                  <span class="px-2.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-bold uppercase">PUPR &amp; LPJK</span>
                  <span class="text-[11px] font-bold text-crimson-700">BUMN &amp; Kontraktor</span>
                </div>
                <h3 class="text-lg font-extrabold text-slate-900">Izin Konstruksi SBUJK LPJK &amp; IUJK</h3>
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                  Pengurusan Sertifikat Badan Usaha Jasa Konstruksi (SBUJK), keanggotaan asosiasi terakreditasi, serta SKK Konstruksi bagi PJTBU dan PJSKBU untuk tender proyek.
                </p>
                <ul class="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-crimson-700 shrink-0"></i><span>Kualifikasi Kecil, Menengah, hingga Besar</span></li>
                  <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-crimson-700 shrink-0"></i><span>Sertifikasi Kompetensi Kerja (SKK) Konstruksi</span></li>
                </ul>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="text-slate-400 font-medium">Estimasi 14 – 25 Hari Kerja</span>
                <a href="#/konsultasi?layanan=perizinan-oss" class="font-bold text-slate-900 hover:text-crimson-800 inline-flex items-center gap-1">
                  <span>Pilih Solusi</span>
                  <i data-lucide="chevron-right" class="w-4 h-4"></i>
                </a>
              </div>
            </div>

            <!-- Card 5: Izin Operasional Sektoral Khusus -->
            <div class="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div class="w-11 h-11 rounded-2xl bg-amber-50 text-gold-600 flex items-center justify-center mb-5">
                  <i data-lucide="building" class="w-5 h-5"></i>
                </div>
                <div class="flex items-center gap-2 mb-3">
                  <span class="px-2.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-bold uppercase">Sektoral Teknis</span>
                  <span class="text-[11px] font-bold text-crimson-700">Pariwisata, Kesehatan, PSE</span>
                </div>
                <h3 class="text-lg font-extrabold text-slate-900">Izin Operasional Sektoral Khusus</h3>
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                  Penerbitan Sertifikat Standar Terverifikasi untuk klinik kesehatan, TDUP pariwisata, PSE Kominfo aplikasi digital, izin edar alat kesehatan (PAK/IDAK), hingga IUJP pertambangan.
                </p>
                <ul class="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-crimson-700 shrink-0"></i><span>Tanda Daftar PSE Kominfo Domestik/Asing</span></li>
                  <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-crimson-700 shrink-0"></i><span>Pemenuhan Standar Teknis Kementerian</span></li>
                </ul>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="text-slate-400 font-medium">Estimasi 10 – 20 Hari Kerja</span>
                <a href="#/konsultasi?layanan=pse" class="font-bold text-slate-900 hover:text-crimson-800 inline-flex items-center gap-1">
                  <span>Pilih Solusi</span>
                  <i data-lucide="chevron-right" class="w-4 h-4"></i>
                </a>
              </div>
            </div>

            <!-- Card 6: Persetujuan Lingkungan -->
            <div class="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div class="w-11 h-11 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5">
                  <i data-lucide="leaf" class="w-5 h-5"></i>
                </div>
                <div class="flex items-center gap-2 mb-3">
                  <span class="px-2.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-bold uppercase">KLHK &amp; Tata Ruang</span>
                  <span class="text-[11px] font-bold text-crimson-700">AMDALNET Terpadu</span>
                </div>
                <h3 class="text-lg font-extrabold text-slate-900">Persetujuan Lingkungan (AMDAL, UKL-UPL, SPPL)</h3>
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                  Dokumen komitmen pengelolaan lingkungan hidup sebagai prasyarat mutlak verifikasi Sertifikat Standar untuk industri manufaktur, pergudangan, rumah sakit, dan properti.
                </p>
                <ul class="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-crimson-700 shrink-0"></i><span>Persetujuan Teknis (Pertek) Air Limbah &amp; Emisi</span></li>
                  <li class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-4 h-4 text-crimson-700 shrink-0"></i><span>Surat Kelayakan Operasional (SLO)</span></li>
                </ul>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="text-slate-400 font-medium">Estimasi 7 – 30 Hari Kerja</span>
                <a href="#/konsultasi?layanan=pkkpr" class="font-bold text-slate-900 hover:text-crimson-800 inline-flex items-center gap-1">
                  <span>Pilih Solusi</span>
                  <i data-lucide="chevron-right" class="w-4 h-4"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- 3. SIMULASI CEPAT PERIZINAN BERBASIS RISIKO (RBA) -->
      <section id="simulasi-rba" class="py-16 bg-slate-50 border-y border-slate-200/60">
        <div class="max-w-7xl mx-auto px-6">
          <div class="bg-white rounded-3xl p-7 sm:p-10 lg:p-12 border border-slate-200/80 shadow-xl">
            <div class="max-w-2xl mb-8">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-gold-700 text-[11px] font-bold uppercase tracking-wider mb-3">
                <i data-lucide="cpu" class="w-3.5 h-3.5"></i>
                <span>Simulasi Cepat Perizinan Berbasis Risiko (RBA)</span>
              </div>
              <h2 class="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                Kalkulator Estimasi Kebutuhan Izin &amp; Tingkat Risiko KBLI
              </h2>
              <p class="text-xs sm:text-sm text-slate-500 mt-1.5">
                Pilih sektor industri dan skala modal usaha Anda untuk mengetahui jenis perizinan wajib, tingkat risiko, dan estimasi waktu penerbitan berdasarkan regulasi pemerintah.
              </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <!-- Left Inputs (6 Cols) -->
              <div class="lg:col-span-6 space-y-5">
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-2">1. Sektor Kegiatan Usaha</label>
                  <select id="rbaSectorSelect" class="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 outline-none cursor-pointer focus:border-crimson-800">
                    <option value="fnb">Makanan, Minuman, Restoran &amp; Industri Pengolahan (KBLI 56 / 10)</option>
                    <option value="it">Teknologi Informasi, Software, SaaS &amp; Portal Web (KBLI 62 / 63)</option>
                    <option value="konstruksi">Jasa Konstruksi Gedung, Sipil &amp; Kontraktor (KBLI 41 / 42)</option>
                    <option value="perdagangan">Perdagangan Besar, Distributor &amp; Ekspor-Impor (KBLI 46)</option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-2">2. Skala Modal Usaha &amp; Investor</label>
                  <select id="rbaScaleSelect" class="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 outline-none cursor-pointer focus:border-crimson-800">
                    <option value="menengah">Menengah / Korporat PMDN (Modal &gt; Rp 5 Miliar)</option>
                    <option value="umk">Usaha Mikro &amp; Kecil / UMK (Modal &le; Rp 5 Miliar)</option>
                    <option value="pma">Penanaman Modal Asing / PT PMA (Modal &gt; Rp 10 Miliar)</option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-2">3. Lokasi Rencana Kegiatan</label>
                  <select id="rbaLocationSelect" class="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 outline-none cursor-pointer focus:border-crimson-800">
                    <option value="rdtr">Kawasan Bisnis / Industri (RDTR Terintegrasi — PKKPR Otomatis)</option>
                    <option value="non-rdtr">Area Non-RDTR (Wajib Persetujuan PKKPR Kajian Tata Ruang)</option>
                  </select>
                </div>

                <div class="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 flex items-start gap-3 text-xs text-slate-600">
                  <i data-lucide="info" class="w-4 h-4 text-gold-600 shrink-0 mt-0.5"></i>
                  <span>Sistem OSS RBA mewajibkan verifikasi Kesesuaian Kegiatan Pemanfaatan Ruang (PKKPR) dan Persetujuan Lingkungan sebelum Sertifikat Standar terverifikasi.</span>
                </div>
              </div>

              <!-- Right Output Card (6 Cols) -->
              <div class="lg:col-span-6">
                <div class="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/80 space-y-5">
                  <div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
                    <div>
                      <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Hasil Analisis Spesifikasi</span>
                      <span id="rbaKbliLabel" class="text-xs font-bold text-slate-700">KBLI 56101 / 10799 • Restoran &amp; Pangan</span>
                    </div>
                    <span id="rbaRiskBadge" class="px-3.5 py-1.5 rounded-xl bg-crimson-800 text-white text-xs font-extrabold">
                      Risiko Menengah Tinggi (MT)
                    </span>
                  </div>

                  <div>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Estimasi Durasi Proses</span>
                    <p id="rbaDurationText" class="text-sm font-extrabold text-slate-900 mt-0.5">14 – 21 Hari Kerja (Hingga Terverifikasi)</p>
                  </div>

                  <div>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">Daftar Dokumen Wajib Diterbitkan:</span>
                    <div id="rbaDocsList" class="space-y-2">
                      <div class="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/70 text-xs font-bold text-slate-800">
                        <span>1. NIB OSS-RBA &amp; Hak Akses Kepabeanan</span>
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600"></i>
                      </div>
                      <div class="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/70 text-xs font-bold text-slate-800">
                        <span>2. Sertifikat Standar (SS) Terverifikasi Instansi</span>
                        <i data-lucide="shield-alert" class="w-4 h-4 text-crimson-700"></i>
                      </div>
                      <div class="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/70 text-xs font-bold text-slate-800">
                        <span>3. Dokumen Pengelolaan Lingkungan (UKL-UPL / SPPL)</span>
                        <i data-lucide="leaf" class="w-4 h-4 text-emerald-600"></i>
                      </div>
                      <div class="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/70 text-xs font-bold text-slate-800">
                        <span>4. Sertifikat Halal BPJPH &amp; Izin Edar BPOM</span>
                        <i data-lucide="award" class="w-4 h-4 text-gold-600"></i>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <a href="#/konsultasi?layanan=perizinan-oss" class="w-full sm:flex-1 py-3.5 bg-crimson-800 hover:bg-crimson-900 text-white font-bold text-xs rounded-xl text-center shadow-md transition-all">
                      Ajukan Perizinan Paket Ini
                    </a>
                    <button type="button" onclick="window.showGlobalToast('Ringkasan kebutuhan izin RBA berhasil diunduh!')" class="w-full sm:w-auto px-4 py-3.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs rounded-xl inline-flex items-center justify-center gap-1.5 transition-colors">
                      <i data-lucide="download" class="w-4 h-4"></i>
                      <span>Unduh PDF</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <!-- 4. JAMINAN HUKUM BERLAPIS -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <!-- Left: 3 Guarantees (6 Cols) -->
            <div class="lg:col-span-6 space-y-6">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-gold-700 text-xs font-bold">
                <i data-lucide="shield-check" class="w-3.5 h-3.5"></i>
                <span>Jaminan Hukum Berlapis</span>
              </div>
              <h2 class="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                100% Legalitas Sah Sesuai UU Cipta Kerja &amp; BKPM
              </h2>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                LEGALTA menjamin kepastian penyelesaian perizinan dengan pendekatan mitigasi risiko penuh. Setiap permohonan diaudit langsung oleh Konsultan Spesialis Perizinan Korporat dan Advokat PERADI.
              </p>

              <div class="space-y-4 pt-2">
                <div class="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div class="w-10 h-10 rounded-xl bg-crimson-50 text-crimson-800 flex items-center justify-center shrink-0">
                    <i data-lucide="file-check" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 class="text-sm font-extrabold text-slate-900">Garansi Uang Kembali (SLA Agreement)</h4>
                    <p class="text-xs text-slate-500 mt-1 leading-relaxed">Jaminan tertulis penyelesaian sesuai timeline kontrak kerja atau pengembalian biaya jasa profesional secara penuh.</p>
                  </div>
                </div>

                <div class="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div class="w-10 h-10 rounded-xl bg-amber-50 text-gold-600 flex items-center justify-center shrink-0">
                    <i data-lucide="clipboard-check" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 class="text-sm font-extrabold text-slate-900">Audit Pra-Submisi LKPM &amp; Uji Substansi</h4>
                    <p class="text-xs text-slate-500 mt-1 leading-relaxed">Dokumen persyaratan teknis diverifikasi berlapis sebelum diunggah ke portal OSS RBA guna mencegah penolakan inspektorat.</p>
                  </div>
                </div>

                <div class="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <i data-lucide="lock" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 class="text-sm font-extrabold text-slate-900">Non-Disclosure Agreement (NDA) Korporat</h4>
                    <p class="text-xs text-slate-500 mt-1 leading-relaxed">Kerahasiaan formula produk, struktur pemegang saham, dan nilai investasi dijamin lewat perjanjian kerahasiaan mengikat.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right: 4 Authority Cards (6 Cols) -->
            <div class="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
                <div class="flex items-center justify-between">
                  <div class="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-crimson-800">
                    <i data-lucide="map-pin" class="w-4 h-4"></i>
                  </div>
                  <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">KKPR / RDTR</span>
                </div>
                <h4 class="text-sm font-extrabold text-slate-900">Persetujuan Lokasi OSS Akurat</h4>
                <p class="text-xs text-slate-500 leading-relaxed">Pengecekan koordinat poligon lahan terhadap peta tata ruang ATR/BPN sebelum sewa/beli lokasi usaha.</p>
              </div>

              <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
                <div class="flex items-center justify-between">
                  <div class="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-gold-600">
                    <i data-lucide="award" class="w-4 h-4"></i>
                  </div>
                  <span class="text-[10px] font-bold uppercase tracking-wider text-crimson-700">BPJPH / LPH</span>
                </div>
                <h4 class="text-sm font-extrabold text-slate-900">Sertifikasi Halal Terintegrasi</h4>
                <p class="text-xs text-slate-500 leading-relaxed">Pendampingan penuh pemeriksaan bahan baku hingga sidang fatwa demi kepatuhan wajib halal nasional.</p>
              </div>

              <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
                <div class="flex items-center justify-between">
                  <div class="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600">
                    <i data-lucide="microscope" class="w-4 h-4"></i>
                  </div>
                  <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">BPOM MD / ML</span>
                </div>
                <h4 class="text-sm font-extrabold text-slate-900">Lolos Uji Laboratorium Pangan</h4>
                <p class="text-xs text-slate-500 leading-relaxed">Mitigasi revisi berulang desain label nilai gizi dan klaim produk dengan checklist audit pra-registrasi.</p>
              </div>

              <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
                <div class="flex items-center justify-between">
                  <div class="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-700">
                    <i data-lucide="trees" class="w-4 h-4"></i>
                  </div>
                  <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">AMDALNET</span>
                </div>
                <h4 class="text-sm font-extrabold text-slate-900">Persetujuan Lingkungan Terpadu</h4>
                <p class="text-xs text-slate-500 leading-relaxed">Sinkronisasi dokumen SPPL, UKL-UPL, dan AMDAL bersama penyusun bersertifikat kompetensi KLHK.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- 5. BUKTI KREDIBILITAS (TESTIMONIALS) -->
      <section class="py-20 bg-slate-50 border-y border-slate-200/60">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center max-w-2xl mx-auto mb-14">
            <span class="text-xs font-bold uppercase tracking-wider text-crimson-800">Bukti Kredibilitas</span>
            <h2 class="font-serif text-3xl font-bold text-slate-900 mt-1">
              Dipercaya Ratusan Entitas Korporasi Terkemuka
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 mt-2">
              Bagaimana LEGALTA mempercepat kepatuhan operasional klien tanpa mengorbankan kualitas substansi hukum.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex text-gold-500 mb-4">
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                </div>
                <p class="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "Pengurusan Izin Edar BPOM MD untuk 14 SKU produk minuman kami selesai tepat waktu. Tim LEGALTA sangat paham detail persyaratan denah CPPOB sehingga kami langsung lolos audit sarana tanpa temuan mayor."
                </p>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-crimson-800 text-white font-bold text-xs flex items-center justify-center">KW</div>
                <div>
                  <h5 class="text-xs font-extrabold text-slate-900">Kurnia Wijaya</h5>
                  <p class="text-[11px] text-slate-500">Director of Compliance, PT Karya Sejahtera Tbk</p>
                </div>
              </div>
            </div>

            <div class="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex text-gold-500 mb-4">
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                </div>
                <p class="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "Migrasi SBUJK Konstruksi Kualifikasi Menengah dan sertifikasi SKK tenaga ahli kami diurus dengan sangat rapi oleh tim LEGALTA. Kami berhasil mengikuti tender proyek BUMN tepat sebelum tenggat penutupan."
                </p>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-slate-800 text-white font-bold text-xs flex items-center justify-center">HG</div>
                <div>
                  <h5 class="text-xs font-extrabold text-slate-900">Hendra Gunawan, S.T.</h5>
                  <p class="text-[11px] text-slate-500">Managing Partner, PT Pilar Bangun Mandiri</p>
                </div>
              </div>
            </div>

            <div class="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex text-gold-500 mb-4">
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                </div>
                <p class="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "Sebagai PMA pergudangan logistik asing, sinkronisasi PKKPR tata ruang dan UKL-UPL sempat menghambat operasional kami. LEGALTA menyelesaikan seluruh verifikasi PB-UMKU dengan transparansi luar biasa."
                </p>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-gold-600 text-white font-bold text-xs flex items-center justify-center">ST</div>
                <div>
                  <h5 class="text-xs font-extrabold text-slate-900">Sarah Tanuwijaya</h5>
                  <p class="text-[11px] text-slate-500">COO, PT Logistik Solusi Nusantara (PMA)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. TANYA JAWAB REGULASI (FAQ) -->
      <section class="py-20 bg-white">
        <div class="max-w-3xl mx-auto px-6">
          <div class="text-center mb-12">
            <span class="text-xs font-bold uppercase tracking-wider text-crimson-800">Tanya Jawab Regulasi</span>
            <h2 class="font-serif text-3xl font-bold text-slate-900 mt-1">
              Pertanyaan Umum Seputar OSS RBA &amp; Izin Usaha
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 mt-2">
              Penjelasan mendalam terkait mekanisme perizinan berusaha berbasis risiko di Indonesia.
            </p>
          </div>

          <div class="space-y-3.5">
            <div class="faq-item active bg-slate-50 rounded-2xl border border-slate-200/80 overflow-hidden">
              <button type="button" class="faq-toggle w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-crimson-800 transition-colors">
                <span>Apa perbedaan mendasar antara NIB Berbasis Risiko dengan NIB versi lama?</span>
                <i data-lucide="chevron-down" class="faq-icon w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0"></i>
              </button>
              <div class="faq-answer px-6">
                <p class="pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                  Dalam sistem <strong>OSS RBA (PP No. 5/2021)</strong>, jenis perizinan ditentukan oleh tingkat risiko KBLI: Risiko <strong>Rendah (R)</strong> cukup memiliki NIB; Risiko <strong>Menengah Rendah (MR)</strong> memerlukan NIB + Sertifikat Standar Pernyataan Mandiri; Risiko <strong>Menengah Tinggi (MT)</strong> memerlukan Sertifikat Standar Terverifikasi; dan Risiko <strong>Tinggi (T)</strong> wajib memiliki Izin yang disetujui Kementerian/Pemda.
                </p>
              </div>
            </div>

            <div class="faq-item bg-slate-50 rounded-2xl border border-slate-200/80 overflow-hidden">
              <button type="button" class="faq-toggle w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-crimson-800 transition-colors">
                <span>Apakah Sertifikasi Halal wajib bagi semua pelaku usaha makanan dan minuman?</span>
                <i data-lucide="chevron-down" class="faq-icon w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0"></i>
              </button>
              <div class="faq-answer px-6">
                <p class="pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                  Ya, sesuai UU Jaminan Produk Halal dan PP No. 39 Tahun 2021, seluruh produk makanan, minuman, hasil sembelihan, dan jasa penyembelihan yang beredar di Indonesia wajib bersertifikat halal BPJPH agar terhindar dari sanksi administratif maupun penarikan barang.
                </p>
              </div>
            </div>

            <div class="faq-item bg-slate-50 rounded-2xl border border-slate-200/80 overflow-hidden">
              <button type="button" class="faq-toggle w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-crimson-800 transition-colors">
                <span>Berapa lama proses verifikasi PB-UMKU di kementerian teknis?</span>
                <i data-lucide="chevron-down" class="faq-icon w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0"></i>
              </button>
              <div class="faq-answer px-6">
                <p class="pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                  Tergantung jenis izin sektoralnya: Pendaftaran PSE Kominfo memakan waktu 2–5 hari kerja, Sertifikasi Halal 14–21 hari kerja, sedangkan SBUJK Konstruksi atau Izin Edar BPOM berkisar antara 14–30 hari kerja setelah pemenuhan dokumen teknis lengkap.
                </p>
              </div>
            </div>

            <div class="faq-item bg-slate-50 rounded-2xl border border-slate-200/80 overflow-hidden">
              <button type="button" class="faq-toggle w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-crimson-800 transition-colors">
                <span>Kapan perusahaan wajib memiliki dokumen PKKPR atau izin lokasi?</span>
                <i data-lucide="chevron-down" class="faq-icon w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0"></i>
              </button>
              <div class="faq-answer px-6">
                <p class="pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                  Setiap badan usaha Non-UMK wajib memiliki Konfirmasi KKPR (jika lokasi sudah memiliki RDTR terintegrasi) atau Persetujuan KKPR sebelum NIB dan Sertifikat Standar dapat terbit efektif di sistem OSS RBA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. BOTTOM CTA BANNER -->
      <section class="pb-16 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="crimson-gradient-bg rounded-3xl p-8 sm:p-12 lg:p-14 text-white shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative overflow-hidden">
            <div class="absolute -right-16 -bottom-16 w-80 h-80 bg-gold-500/15 rounded-full blur-3xl pointer-events-none"></div>
            <div class="max-w-2xl space-y-3 relative z-10">
              <span class="text-xs font-extrabold uppercase tracking-wider text-gold-400">Mulai Hari Ini</span>
              <h2 class="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                Siap Menjalankan Operasional Usaha dengan Lisensi Resmi Tanpa Risiko Hukum?
              </h2>
              <p class="text-xs sm:text-sm text-white/80 leading-relaxed">
                Konsultasikan pemetaan KBLI, verifikasi PB-UMKU, dan pendaftaran OSS-RBA bersama konsultan hukum korporat LEGALTA.
              </p>
            </div>
            <div class="flex flex-wrap items-center gap-3.5 relative z-10 shrink-0">
              <a href="#/konsultasi?layanan=perizinan-oss" class="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-crimson-900 font-extrabold text-xs sm:text-sm shadow-lg transition-all inline-flex items-center gap-2">
                <i data-lucide="calendar" class="w-4 h-4"></i>
                <span>Konsultasi Advokat</span>
              </a>
              <a href="#/tools/cek-kbli" class="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all">
                Cek KBLI 2020
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  `;
}

export function initPerizinanLogic() {
  const sectorSelect = document.getElementById('rbaSectorSelect');
  const scaleSelect = document.getElementById('rbaScaleSelect');
  const locationSelect = document.getElementById('rbaLocationSelect');

  const kbliLabel = document.getElementById('rbaKbliLabel');
  const riskBadge = document.getElementById('rbaRiskBadge');
  const durationText = document.getElementById('rbaDurationText');
  const docsList = document.getElementById('rbaDocsList');

  const presets = {
    fnb: {
      kbli: 'KBLI 56101 / 10799 • Restoran & Pangan Olahan',
      risk: 'Risiko Menengah Tinggi (MT)',
      riskClass: 'bg-crimson-800 text-white',
      duration: '14 – 21 Hari Kerja (Hingga Terverifikasi)',
      docs: [
        '1. NIB OSS-RBA & Hak Akses Kepabeanan',
        '2. Sertifikat Standar (SS) Terverifikasi Instansi',
        '3. Dokumen Pengelolaan Lingkungan (UKL-UPL / SPPL)',
        '4. Sertifikat Halal BPJPH & Izin Edar BPOM / PIRT'
      ]
    },
    it: {
      kbli: 'KBLI 62019 / 63122 • Software, Aplikasi & Portal Web',
      risk: 'Risiko Rendah – Menengah Rendah (R/MR)',
      riskClass: 'bg-emerald-700 text-white',
      duration: '2 – 5 Hari Kerja (Terbit Instan + PSE)',
      docs: [
        '1. Nomor Induk Berusaha (NIB) RBA Terbit Instan',
        '2. Tanda Daftar PSE Lingkup Privat Kominfo',
        '3. Pernyataan Mandiri K3L & SPPL Lingkungan',
        '4. Pencatatan Hak Cipta Source Code & Merek DJKI'
      ]
    },
    konstruksi: {
      kbli: 'KBLI 41011 / 42101 • Konstruksi Gedung & Sipil',
      risk: 'Risiko Menengah Tinggi (MT)',
      riskClass: 'bg-crimson-800 text-white',
      duration: '14 – 25 Hari Kerja (Termasuk SBUJK LPJK)',
      docs: [
        '1. NIB OSS-RBA Khusus Jasa Konstruksi',
        '2. Sertifikat Badan Usaha (SBUJK) Resmi LPJK PUPR',
        '3. Sertifikat Kompetensi Kerja (SKK) Tenaga Ahli',
        '4. KTA Asosiasi Konstruksi Terakreditasi'
      ]
    },
    perdagangan: {
      kbli: 'KBLI 46100 / 46900 • Perdagangan Besar & Distribusi',
      risk: 'Risiko Rendah (R)',
      riskClass: 'bg-emerald-700 text-white',
      duration: '1 – 3 Hari Kerja (Siap Operasional)',
      docs: [
        '1. NIB OSS-RBA Sekaligus Angka Pengenal Impor (API-U)',
        '2. Hak Akses Kepabeanan Bea & Cukai (NIK)',
        '3. Konfirmasi KKPR Lokasi Gudang / Kantor',
        '4. Surat Pernyataan Pengelolaan Lingkungan (SPPL)'
      ]
    }
  };

  function updateSimulator() {
    const sec = sectorSelect?.value || 'fnb';
    const scale = scaleSelect?.value || 'menengah';
    const loc = locationSelect?.value || 'rdtr';
    const data = presets[sec] || presets.fnb;

    if (kbliLabel) kbliLabel.textContent = data.kbli + (scale === 'pma' ? ' (Skala PMA Asing)' : '');
    if (riskBadge) {
      riskBadge.textContent = scale === 'pma' ? 'Risiko Menengah Tinggi – Tinggi (PMA)' : data.risk;
      riskBadge.className = `px-3.5 py-1.5 rounded-xl text-xs font-extrabold ${scale === 'pma' ? 'bg-crimson-800 text-white' : data.riskClass}`;
    }
    if (durationText) {
      durationText.textContent = loc === 'non-rdtr'
        ? data.duration + ' + Kajian PKKPR ATR/BPN'
        : data.duration;
    }
    if (docsList) {
      docsList.innerHTML = data.docs.map(d => `
        <div class="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/70 text-xs font-bold text-slate-800">
          <span>${d}</span>
          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 shrink-0"></i>
        </div>
      `).join('');
      if (window.lucide) window.lucide.createIcons();
    }
  }

  sectorSelect?.addEventListener('change', updateSimulator);
  scaleSelect?.addEventListener('change', updateSimulator);
  locationSelect?.addEventListener('change', updateSimulator);

  if (window.lucide) {
    window.lucide.createIcons();
  }
}
