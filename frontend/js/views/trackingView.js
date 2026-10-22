4/**
 * View: Live Order Tracking System (PRD Section 3.C & ERD.Md)
 * Modernized to match the LEGALTA Crimson/Gold/Slate reference aesthetic.
 */

import { api } from '../api.js';
import { showToast } from '../components/toast.js';

export function renderTrackingView() {
  return `
    <div class="flex flex-col w-full bg-[#FAFAFC]">
      <!-- Search Header -->
      <section class="relative w-full bg-gradient-to-b from-white via-slate-50/50 to-white px-6 pt-12 pb-16 border-b border-slate-100">
        <div class="max-w-5xl mx-auto space-y-5 text-center">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crimson-50 border border-crimson-100 text-crimson-800 text-xs font-bold uppercase tracking-wider">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Live Client Tracking System</span>
          </div>
          <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Pantau Status Permohonan Legalitas Anda Secara Real-Time
          </h1>
          <p class="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Transparansi penuh tanpa tanda tanya. Cukup masukkan Nomor Order (cth: <strong class="text-slate-900">LEG-2025-0891</strong>) untuk melihat progres notariat hingga SK AHU.
          </p>

          <!-- Search Bar -->
          <div class="max-w-2xl mx-auto pt-3">
            <form id="trackingSearchForm" class="bg-white p-2.5 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center gap-2.5 border border-slate-200/80">
              <div class="flex items-center gap-3 px-4 py-2.5 w-full flex-1 bg-slate-50 rounded-xl border border-slate-200/60 focus-within:border-crimson-800 transition-colors">
                <span class="material-symbols-outlined text-crimson-800 text-[22px]">search</span>
                <input type="text" id="trackingIdInput" value="LEG-2025-0891" placeholder="Masukkan ID Order / No. WhatsApp..." class="w-full bg-transparent border-none outline-none text-sm text-slate-900 font-extrabold uppercase font-mono">
              </div>
              <button type="submit" id="trackingSubmitBtn" class="w-full sm:w-auto px-7 py-3.5 bg-crimson-800 hover:bg-crimson-900 text-white text-sm font-bold rounded-xl shadow-md shadow-crimson-800/20 transition-all flex items-center justify-center gap-2 shrink-0">
                <span class="material-symbols-outlined text-[18px]">sync</span>
                <span>Lacak Berkas</span>
              </button>
            </form>

            <!-- Quick Demo Selectors -->
            <div class="flex flex-wrap items-center justify-center gap-2 pt-4 text-xs text-slate-500">
              <span class="font-bold text-slate-400 uppercase tracking-wider text-[11px]">Demo Cepat:</span>
              <button type="button" class="demo-track-btn px-3 py-1 bg-white border border-slate-200 hover:border-crimson-800 hover:text-crimson-800 rounded-full transition-colors font-mono font-bold text-slate-700 shadow-sm" data-order="LEG-2025-0891">LEG-2025-0891 (On Progress)</button>
              <button type="button" class="demo-track-btn px-3 py-1 bg-white border border-slate-200 hover:border-crimson-800 hover:text-crimson-800 rounded-full transition-colors font-mono font-bold text-slate-700 shadow-sm" data-order="LEG-2025-0104">LEG-2025-0104 (Completed)</button>
              <button type="button" class="demo-track-btn px-3 py-1 bg-white border border-slate-200 hover:border-crimson-800 hover:text-crimson-800 rounded-full transition-colors font-mono font-bold text-slate-700 shadow-sm" data-order="LEG-2025-0942">LEG-2025-0942 (Pending)</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Tracking Content Container -->
      <section class="max-w-7xl mx-auto px-6 py-12 w-full" id="trackingDetailsWrapper">
        <div id="trackingContent" class="space-y-8">
          <div class="p-12 text-center text-slate-500 text-sm">Memuat data order dari basis data...</div>
        </div>
      </section>
    </div>
  `;
}

export function initTrackingLogic() {
  const form = document.getElementById('trackingSearchForm');
  const input = document.getElementById('trackingIdInput');
  const submitBtn = document.getElementById('trackingSubmitBtn');
  const content = document.getElementById('trackingContent');
  const demoBtns = document.querySelectorAll('.demo-track-btn');

  let currentActiveOrderId = 'LEG-2025-0891';

  async function loadOrder(orderId, notify = false) {
    if (!orderId) return;
    currentActiveOrderId = orderId;
    submitBtn.disabled = true;
    const originalBtn = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span class="material-symbols-outlined text-[18px] animate-spin">refresh</span><span>Memuat...</span>`;

    try {
      const response = await api.getOrderTracking(orderId);
      if (response.success) {
        const { order, steps, documents, pla } = response.data;

        const isCto = (pla.name && pla.name.toLowerCase().includes('wildan')) || 
                      (pla.title && pla.title.toLowerCase().includes('cto'));

        const cardBadge = isCto ? 'Chief Technology Officer (CTO)' : 'Pendamping Legal Anda (PLA)';
        const plaTitle = isCto ? 'Chief Technology Officer / Head of Product' : (pla.title || 'Head of Client Relations & PLA');
        const plaSpecialization = isCto ? 'Arsitektur Otomasi Legaltech & Integrasi API AHU/OSS' : (pla.specialization || 'Hukum Perseroan & Perizinan OSS-RBA');
        const plaGreeting = isCto
          ? `Halo! Saya Wildan, Chief Technology Officer (CTO) di LEGALTA. Saya mengawal langsung infrastruktur otomasi dokumen dan sistem live tracking agar proses permohonan legalitas Anda berjalan presisi, aman, dan tanpa kendala teknis.`
          : `Halo! Saya ${pla.name}, asisten legal pribadi yang mengawal permohonan Anda hingga SK Menkumham resmi terbit. Silakan hubungi saya untuk konsultasi langsung.`;
        const plaActionBtnText = isCto
          ? `Konsultasi Teknis & Berkas dengan ${pla.name}`
          : `Chat WhatsApp dengan ${pla.name}`;

        let statusClass = 'bg-amber-100 text-gold-700';
        if (order.status === 'COMPLETED') statusClass = 'bg-emerald-100 text-emerald-800';
        else if (order.status === 'PENDING') statusClass = 'bg-slate-100 text-slate-600';

        // Render Steps
        let stepsHtml = '';
        steps.forEach(s => {
          const stepName = s.step_name || s.stepName || 'Tahap Pemrosesan';
          const completedAt = s.completed_at || (s.completedAt ? String(s.completedAt).replace('T', ' ').slice(0, 16) : null);

          let icon = 'schedule';
          let iconBg = 'bg-slate-200 text-slate-500';
          let cardBorder = 'bg-slate-50/70 border border-dashed border-slate-200 opacity-75';
          let titleColor = 'text-slate-600';

          if (s.status === 'DONE') {
            icon = 'check';
            iconBg = 'bg-emerald-500 text-white';
            cardBorder = 'bg-white border border-emerald-200 shadow-sm';
            titleColor = 'text-slate-900';
          } else if (s.status === 'JALAN') {
            icon = 'autorenew';
            iconBg = 'bg-crimson-700 text-white animate-pulse';
            cardBorder = 'bg-crimson-50/60 border-2 border-crimson-300 shadow-md';
            titleColor = 'text-crimson-900';
          }

          stepsHtml += `
            <div class="relative flex items-start gap-4">
              <div class="absolute -left-6 sm:-left-8 w-6 h-6 sm:w-8 sm:h-8 rounded-full ${iconBg} flex items-center justify-center font-bold text-xs ring-4 ring-white shadow-sm">
                <span class="material-symbols-outlined text-[16px]">${icon}</span>
              </div>
              <div class="${cardBorder} p-5 rounded-2xl flex-1">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                  <h4 class="text-sm sm:text-base ${titleColor} font-extrabold">${stepName}</h4>
                  <span class="text-[10px] px-2.5 py-0.5 rounded-full font-extrabold self-start sm:self-auto ${s.status === 'DONE' ? 'bg-emerald-100 text-emerald-800' : (s.status === 'JALAN' ? 'bg-crimson-700 text-white' : 'bg-slate-200 text-slate-500')}">${s.status}</span>
                </div>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${s.description || 'Sedang diproses sesuai tahapan resmi.'}</p>
                <span class="text-[11px] text-slate-400 font-medium block mt-2.5">${completedAt ? 'Selesai: ' + completedAt : 'Status: ' + s.status}</span>
              </div>
            </div>
          `;
        });

        // Render Documents
        let docsHtml = '';
        documents.forEach(doc => {
          const fileName = doc.file_name || doc.fileName || 'Dokumen_Legalitas.pdf';
          const docType = doc.doc_type || doc.docType || 'DOKUMEN';
          const fileSize = doc.file_size || doc.fileSize || '1.5 MB';

          docsHtml += `
            <div class="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
              <div class="flex items-center gap-3.5">
                <div class="w-10 h-10 rounded-xl bg-crimson-50 text-crimson-800 flex items-center justify-center shrink-0">
                  <span class="material-symbols-outlined text-[22px]">picture_as_pdf</span>
                </div>
                <div>
                  <h5 class="text-xs sm:text-sm text-slate-900 font-bold">${fileName}</h5>
                  <p class="text-xs text-slate-500">Tipe: ${docType} • Ukuran: ${fileSize}</p>
                </div>
              </div>
              <button type="button" onclick="showGlobalToast('Mengunduh ${fileName}')" class="px-3.5 py-2 bg-white text-crimson-800 hover:bg-crimson-800 hover:text-white rounded-xl text-xs font-bold border border-slate-200 transition-colors flex items-center gap-1.5 shadow-sm">
                <span class="material-symbols-outlined text-[16px]">download</span>
                <span>Unduh</span>
              </button>
            </div>
          `;
        });

        const totalAmount = Number(order.total_amount ?? order.totalAmount ?? 0);
        const voucherCode = order.voucher_code || order.voucherCode || '-';
        const kemenkumhamId = order.kemenkumham_id || order.kemenkumhamId || '-';
        const rawDate = String(order.created_at || order.createdAt || '-');
        const createdDate = rawDate.split(/[ T]/)[0] || '-';

        content.innerHTML = `
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <!-- Left: Order Meta & Steps (8 Cols) -->
            <div class="lg:col-span-8 space-y-8">
              
              <!-- Order Header Dossier -->
              <div class="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/80 space-y-6">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <div class="flex items-center gap-2.5">
                      <span class="font-mono font-black text-lg text-crimson-800">${order.id}</span>
                      <span class="text-[11px] uppercase px-3 py-1 rounded-full font-extrabold ${statusClass}">${order.status}</span>
                    </div>
                    <h2 class="text-xl sm:text-2xl text-slate-900 font-extrabold mt-1.5">${order.title}</h2>
                    <p class="text-xs sm:text-sm text-slate-500 mt-0.5">Layanan: ${order.service_title} • Kategori: ${order.category_name}</p>
                  </div>
                  <div class="text-left sm:text-right bg-slate-50 px-4 py-3 rounded-2xl border border-slate-100">
                    <span class="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Nomor Kemenkumham</span>
                    <span class="text-sm text-slate-900 font-extrabold font-mono">${kemenkumhamId}</span>
                    <span class="text-[11px] text-emerald-600 block font-bold">Tersinkronisasi AHU</span>
                  </div>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div class="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    <span class="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Klien Pemohon</span>
                    <span class="text-xs sm:text-sm text-slate-900 font-extrabold mt-0.5 block">${order.client_name}</span>
                  </div>
                  <div class="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    <span class="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Total Biaya</span>
                    <span class="text-xs sm:text-sm text-slate-900 font-extrabold mt-0.5 block">Rp ${totalAmount.toLocaleString('id-ID')}</span>
                  </div>
                  <div class="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    <span class="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Voucher AHU</span>
                    <span class="text-xs sm:text-sm text-slate-900 font-mono font-extrabold mt-0.5 block">${voucherCode}</span>
                  </div>
                  <div class="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    <span class="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Tanggal Masuk</span>
                    <span class="text-xs sm:text-sm text-slate-900 font-extrabold mt-0.5 block">${createdDate}</span>
                  </div>
                </div>
              </div>

              <!-- 4-Step Timeline Container -->
              <div class="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/80 space-y-6">
                <div class="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <h3 class="text-lg text-slate-900 font-extrabold">Progress 4 Langkah Real-Time</h3>
                    <p class="text-xs text-slate-500">Update otomatis terpantau oleh Tim Notariat &amp; Ditjen AHU</p>
                  </div>
                </div>

                <div class="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
                  ${stepsHtml}
                </div>
              </div>

              <!-- Document Vault -->
              <div class="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/80 space-y-6">
                <div class="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <h3 class="text-lg text-slate-900 font-extrabold">Brankas Dokumen (Document Vault)</h3>
                    <p class="text-xs text-slate-500">Unduh salinan resmi atau unggah dokumen syarat pelengkap</p>
                  </div>
                  <span class="material-symbols-outlined text-gold-600 text-[24px]">lock</span>
                </div>

                <div class="space-y-3" id="vaultDocsList">
                  ${docsHtml || '<div class="text-slate-500 text-xs p-4">Belum ada dokumen yang diunggah.</div>'}
                </div>

                <!-- Interactive Upload Simulation -->
                <div class="pt-2">
                  <label class="block text-xs text-slate-800 font-bold mb-2">Unggah Dokumen Tambahan (KTP, NPWP, Bukti Setor Modal)</label>
                  <div class="border-2 border-dashed border-slate-300 hover:border-crimson-800 rounded-2xl p-6 text-center cursor-pointer transition-colors bg-slate-50" onclick="document.getElementById('spaFileInput').click()">
                    <input type="file" id="spaFileInput" class="hidden">
                    <span class="material-symbols-outlined text-crimson-800 text-[32px] mb-2 block mx-auto">cloud_upload</span>
                    <p class="text-xs sm:text-sm text-slate-900 font-bold">Klik untuk memilih file atau seret file ke sini</p>
                    <p class="text-xs text-slate-500 mt-1">Format PDF, JPG, PNG hingga 10 MB per berkas. Terenkripsi AES-256.</p>
                  </div>
                </div>
              </div>

            </div>

            <!-- Right: Assigned PLA Card (4 Cols) -->
            <div class="lg:col-span-4 space-y-6">
              
              <div class="bg-white p-6 sm:p-7 rounded-3xl shadow-sm border border-slate-200/80 space-y-5">
                <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span class="text-[11px] text-crimson-800 uppercase font-extrabold tracking-wider">${cardBadge}</span>
                  <span class="inline-flex items-center gap-1.5 text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-bold">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Online
                  </span>
                </div>

                <div class="flex items-center gap-4">
                  <img src="${pla.avatar || 'assets/najwa.jpg'}" alt="${pla.name}" class="w-16 h-16 rounded-2xl object-cover object-top shadow-sm border border-slate-100">
                  <div>
                    <h4 class="text-base text-slate-900 font-extrabold">${pla.name}</h4>
                    <p class="text-xs text-gold-600 font-bold">${plaTitle}</p>
                    <span class="text-xs text-slate-500">${plaSpecialization}</span>
                  </div>
                </div>

                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100 italic">
                  "${plaGreeting}"
                </p>

                <div class="space-y-2.5 pt-1">
                  <!-- Silakan ganti href dengan nomor WhatsApp resmi: https://wa.me/[NOMOR] -->
                  <a href="https://wa.me/?text=Halo%20${pla.name}%20LEGALTA,%20saya%20klien%20dengan%20No%20Order%20${order.id}" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-[18px]">chat</span>
                    <span>${plaActionBtnText}</span>
                  </a>
                  <a href="mailto:${pla.email}?subject=Status%20Order%20${order.id}" class="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-[18px]">mail</span>
                    <span>Kirim Email Pendampingan</span>
                  </a>
                </div>
              </div>

              <!-- Security Card -->
              <div class="bg-amber-50/70 p-6 rounded-3xl space-y-2.5 border border-amber-200/70">
                <div class="flex items-center gap-2 text-crimson-800">
                  <span class="material-symbols-outlined text-[20px]">verified_user</span>
                  <span class="text-xs uppercase font-extrabold tracking-wider">Garansi Keabsahan Dokumen</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Setiap akta notaris dan SK yang diterbitkan melalui platform LEGALTA dijamin 100% sah di mata hukum Republik Indonesia dan dapat dicek keasliannya di Ditjen AHU.
                </p>
              </div>

            </div>

          </div>
        `;

        // Wire file upload simulation to backend API
        const fileInput = document.getElementById('spaFileInput');
        fileInput?.addEventListener('change', async function() {
          if (this.files && this.files[0]) {
            const file = this.files[0];
            try {
              const uploadRes = await api.uploadOrderDocument(currentActiveOrderId, file.name, 'OTHER');
              if (uploadRes.success) {
                showToast(`Dokumen "${file.name}" berhasil diunggah.`, 'success');
                loadOrder(currentActiveOrderId, false);
              }
            } catch (err) {
              showToast('Gagal mengunggah dokumen: ' + err.message, 'error');
            }
          }
        });

        if (notify) {
          showToast(`Data order ${order.id} ditampilkan.`, 'info');
        }
      } else {
        content.innerHTML = `<div class="p-12 text-center bg-white rounded-3xl border border-slate-200 text-crimson-700 font-bold text-sm">${response.message}</div>`;
        showToast(response.message, 'error');
      }
    } catch (e) {
      showToast('Gagal memuat data order: ' + e.message, 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtn;
    }
  }

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    loadOrder(input.value.trim().toUpperCase(), true);
  });

  demoBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const ord = this.getAttribute('data-order');
      input.value = ord;
      loadOrder(ord, true);
    });
  });

  loadOrder(currentActiveOrderId, false);
}
