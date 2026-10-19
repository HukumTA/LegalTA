/**
 * View: Live Order Tracking System (PRD Section 3.C & ERD.Md)
 */

import { api } from '../api.js';
import { showToast } from '../components/toast.js';

export function renderTrackingView() {
  return `
    <div class="flex flex-col w-full">
      <!-- Search Header -->
      <section class="relative w-full bg-surface-container-lowest px-6 lg:px-12 pt-12 pb-16 border-b border-surface-container-high">
        <div class="max-w-5xl mx-auto space-y-6 text-center">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-fixed/50 text-secondary">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span class="font-label-sm uppercase tracking-wider font-bold">Live Client Tracking System (PRD 3.C)</span>
          </div>
          <h1 class="font-display-lg text-primary tracking-tight">
            Pantau Status Permohonan Legalitas Anda Secara Real-Time
          </h1>
          <p class="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Transparansi penuh tanpa tanda tanya. Cukup masukkan Nomor Order (cth: <strong class="text-on-surface">LEG-2025-0891</strong>) atau nomor WhatsApp yang didaftarkan.
          </p>

          <!-- Search Bar -->
          <div class="max-w-2xl mx-auto pt-4">
            <form id="trackingSearchForm" class="bg-surface-container-low p-2 rounded-2xl shadow-md flex flex-col sm:flex-row items-center gap-2 border border-surface-container-high">
              <div class="flex items-center gap-3 px-4 py-2 w-full flex-1">
                <span class="material-symbols-outlined text-primary text-[24px]">search</span>
                <input type="text" id="trackingIdInput" value="LEG-2025-0891" placeholder="Masukkan ID Order / No. WhatsApp..." class="w-full bg-transparent border-none outline-none font-body-md text-on-surface font-bold uppercase">
              </div>
              <button type="submit" id="trackingSubmitBtn" class="w-full sm:w-auto px-7 py-3.5 bg-primary text-on-primary font-label-lg font-bold rounded-xl shadow-sm hover:bg-primary-container transition-all flex items-center justify-center gap-2 shrink-0">
                <span class="material-symbols-outlined text-[20px]">sync</span>
                <span>Lacak Berkas</span>
              </button>
            </form>

            <!-- Quick Demo Selectors -->
            <div class="flex flex-wrap items-center justify-center gap-2 pt-4 text-on-surface-variant font-label-sm">
              <span>Demo Cepat:</span>
              <button type="button" class="demo-track-btn px-3 py-1 bg-surface-container-high hover:bg-primary-fixed hover:text-primary rounded-full transition-colors font-mono font-bold" data-order="LEG-2025-0891">LEG-2025-0891 (On Progress)</button>
              <button type="button" class="demo-track-btn px-3 py-1 bg-surface-container-high hover:bg-primary-fixed hover:text-primary rounded-full transition-colors font-mono font-bold" data-order="LEG-2025-0104">LEG-2025-0104 (Completed)</button>
              <button type="button" class="demo-track-btn px-3 py-1 bg-surface-container-high hover:bg-primary-fixed hover:text-primary rounded-full transition-colors font-mono font-bold" data-order="LEG-2025-0942">LEG-2025-0942 (Pending)</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Tracking Content Container -->
      <section class="max-w-7xl mx-auto px-6 lg:px-12 py-12" id="trackingDetailsWrapper">
        <div id="trackingContent" class="space-y-8">
          <div class="p-12 text-center text-on-surface-variant">Memuat data order dari basis data...</div>
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

  async function loadOrder(orderId) {
    if (!orderId) return;
    currentActiveOrderId = orderId;
    submitBtn.disabled = true;
    const originalBtn = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span class="material-symbols-outlined text-[20px] animate-spin">refresh</span><span>Mengambil Data...</span>`;

    try {
      const response = await api.getOrderTracking(orderId);
      if (response.success) {
        const { order, steps, documents, pla } = response.data;

        let statusClass = 'bg-[#FEF3C7] text-[#92400E]';
        if (order.status === 'COMPLETED') statusClass = 'bg-[#DCFCE7] text-[#166534]';
        else if (order.status === 'PENDING') statusClass = 'bg-surface-container-high text-on-surface-variant';

        // Render Steps
        let stepsHtml = '';
        steps.forEach(s => {
          let icon = 'pending';
          let iconBg = 'bg-surface-dim text-on-surface-variant';
          let cardBorder = 'bg-surface-container-low border border-surface-container opacity-70';
          let titleColor = 'text-on-surface';

          if (s.status === 'DONE') {
            icon = 'check';
            iconBg = 'bg-[#166534] text-white';
            cardBorder = 'bg-surface-container-low border border-surface-container';
          } else if (s.status === 'JALAN') {
            icon = 'hourglass_top';
            iconBg = 'bg-secondary text-white animate-pulse';
            cardBorder = 'bg-surface-container-lowest border-2 border-secondary shadow-sm';
            titleColor = 'text-primary';
          }

          stepsHtml += `
            <div class="relative flex items-start gap-4">
              <div class="absolute -left-6 sm:-left-8 w-6 h-6 sm:w-8 sm:h-8 rounded-full ${iconBg} flex items-center justify-center font-bold text-xs ring-4 ring-white shadow-sm">
                <span class="material-symbols-outlined text-[16px]">${icon}</span>
              </div>
              <div class="${cardBorder} p-5 rounded-2xl flex-1">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 class="font-label-lg ${titleColor} font-bold">${s.step_name}</h4>
                  <span class="font-label-sm px-2.5 py-0.5 rounded-full font-bold self-start sm:self-auto ${s.status === 'DONE' ? 'bg-[#DCFCE7] text-[#166534]' : (s.status === 'JALAN' ? 'bg-secondary-fixed text-on-secondary-fixed' : 'bg-surface-container-high text-on-surface-variant')}">${s.status}</span>
                </div>
                <p class="font-body-sm text-on-surface-variant">${s.description || 'Sedang diproses sesuai tahapan resmi.'}</p>
                <span class="font-label-sm text-outline block mt-3">${s.completed_at ? 'Selesai: ' + s.completed_at : 'Status: ' + s.status}</span>
              </div>
            </div>
          `;
        });

        // Render Documents
        let docsHtml = '';
        documents.forEach(doc => {
          docsHtml += `
            <div class="flex items-center justify-between p-4 rounded-xl bg-surface-container-low border border-surface-container">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary text-[28px]">picture_as_pdf</span>
                <div>
                  <h5 class="font-label-md text-on-surface font-bold">${doc.file_name}</h5>
                  <p class="font-body-sm text-on-surface-variant">Tipe: ${doc.doc_type} • Ukuran: ${doc.file_size || '1.5 MB'}</p>
                </div>
              </div>
              <button type="button" onclick="showGlobalToast('Mengunduh berkas ${doc.file_name}...')" class="px-3.5 py-1.5 bg-surface-container-lowest text-primary hover:bg-primary hover:text-white rounded-lg text-label-sm font-bold border border-surface-container-high transition-colors flex items-center gap-1.5 shadow-sm">
                <span class="material-symbols-outlined text-[16px]">download</span>
                <span>Unduh</span>
              </button>
            </div>
          `;
        });

        content.innerHTML = `
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <!-- Left: Order Meta & Steps (8 Cols) -->
            <div class="lg:col-span-8 space-y-8">
              
              <!-- Order Header Dossier -->
              <div class="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm border border-surface-container-high space-y-6">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-surface-container-high">
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="font-mono font-bold text-headline-sm text-primary">${order.id}</span>
                      <span class="font-label-sm uppercase px-3 py-1 rounded-full font-bold ${statusClass}">${order.status}</span>
                    </div>
                    <h2 class="font-headline-lg text-on-surface font-bold mt-1">${order.title}</h2>
                    <p class="font-body-sm text-on-surface-variant">Layanan: ${order.service_title} • Kategori: ${order.category_name}</p>
                  </div>
                  <div class="text-left sm:text-right">
                    <span class="font-label-sm text-on-surface-variant block">Nomor Kemenkumham</span>
                    <span class="font-headline-sm text-secondary font-bold font-mono">${order.kemenkumham_id || '-'}</span>
                    <span class="font-label-sm text-emerald-700 block font-semibold">Tersinkronisasi AHU</span>
                  </div>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div class="bg-surface-container-low p-3.5 rounded-xl">
                    <span class="font-label-sm text-on-surface-variant block">Klien Pemohon</span>
                    <span class="font-label-md text-on-surface font-bold">${order.client_name}</span>
                  </div>
                  <div class="bg-surface-container-low p-3.5 rounded-xl">
                    <span class="font-label-sm text-on-surface-variant block">Total Biaya</span>
                    <span class="font-label-md text-on-surface font-bold">Rp ${Number(order.total_amount).toLocaleString('id-ID')}</span>
                  </div>
                  <div class="bg-surface-container-low p-3.5 rounded-xl">
                    <span class="font-label-sm text-on-surface-variant block">Voucher AHU</span>
                    <span class="font-label-md text-on-surface font-mono font-bold">${order.voucher_code || '-'}</span>
                  </div>
                  <div class="bg-surface-container-low p-3.5 rounded-xl">
                    <span class="font-label-sm text-on-surface-variant block">Tanggal Masuk</span>
                    <span class="font-label-md text-on-surface font-bold">${order.created_at.split(' ')[0]}</span>
                  </div>
                </div>
              </div>

              <!-- 4-Step Timeline Container -->
              <div class="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm border border-surface-container-high space-y-6">
                <div class="flex items-center justify-between pb-4 border-b border-surface-container-high">
                  <div>
                    <h3 class="font-headline-sm text-primary font-bold">Progress 4 Langkah Real-Time</h3>
                    <p class="font-body-sm text-on-surface-variant">Update otomatis terpantau oleh Tim Notariat &amp; Ditjen AHU</p>
                  </div>
                </div>

                <div class="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-surface-container-high">
                  ${stepsHtml}
                </div>
              </div>

              <!-- Document Vault -->
              <div class="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm border border-surface-container-high space-y-6">
                <div class="flex items-center justify-between pb-4 border-b border-surface-container-high">
                  <div>
                    <h3 class="font-headline-sm text-primary font-bold">Brankas Dokumen (Document Vault)</h3>
                    <p class="font-body-sm text-on-surface-variant">Unduh salinan resmi atau unggah dokumen syarat pelengkap</p>
                  </div>
                  <span class="material-symbols-outlined text-secondary text-[24px]">lock</span>
                </div>

                <div class="space-y-3" id="vaultDocsList">
                  ${docsHtml || '<div class="text-on-surface-variant text-body-sm p-4">Belum ada dokumen yang diunggah.</div>'}
                </div>

                <!-- Interactive Upload Simulation -->
                <div class="pt-2">
                  <label class="block font-label-md text-on-surface font-bold mb-2">Unggah Dokumen Tambahan (KTP, NPWP, Bukti Setor Modal)</label>
                  <div class="border-2 border-dashed border-surface-container-highest hover:border-primary rounded-2xl p-6 text-center cursor-pointer transition-colors bg-surface-container-low/50" onclick="document.getElementById('spaFileInput').click()">
                    <input type="file" id="spaFileInput" class="hidden">
                    <span class="material-symbols-outlined text-primary text-[36px] mb-2 block">cloud_upload</span>
                    <p class="font-label-md text-on-surface font-bold">Klik untuk memilih file atau seret file ke sini</p>
                    <p class="font-body-sm text-on-surface-variant mt-1">Format PDF, JPG, PNG hingga 10 MB per berkas. Terenkripsi AES-256.</p>
                  </div>
                </div>
              </div>

            </div>

            <!-- Right: Assigned PLA Card (4 Cols) -->
            <div class="lg:col-span-4 space-y-6">
              
              <div class="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-surface-container-high space-y-5">
                <div class="flex items-center justify-between pb-3 border-b border-surface-container-high">
                  <span class="font-label-sm text-secondary uppercase font-bold tracking-wider">Pendamping Legal Anda (PLA)</span>
                  <span class="inline-flex items-center gap-1 font-label-sm text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Online
                  </span>
                </div>

                <div class="flex items-center gap-4">
                  <img src="${pla.avatar || 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-Z30Zfg8uJB3aOLvO9XqC3TwP-vAZf0h_Ir39bA9SP54kzOeP62jZBolvPWJQXkWtTh9QvQAg6GyCtArctfeXkBY1SvQS023dXHCrNUWOe6D5tB6q4qWIOvKw3f-lKNuzdzrpDqoth0IR_XKzd0O-T9uCMIkCEccvOWhE1FcARDHbxTlmOYUtoVwsG4Dd_1iRyfond1cNXc5nQR6A4AF5OBc4h6lGHpA_IPMCCPAYq9s40mP29aEl9p_PXfz_QPJluQ'}" alt="${pla.name}" class="w-16 h-16 rounded-2xl object-cover shadow-sm">
                  <div>
                    <h4 class="font-headline-sm text-primary font-bold">${pla.name}</h4>
                    <p class="font-label-md text-secondary font-semibold">${pla.title}</p>
                    <span class="font-body-sm text-on-surface-variant">${pla.specialization}</span>
                  </div>
                </div>

                <p class="font-body-sm text-on-surface-variant leading-relaxed">
                  "Halo! Saya ${pla.name}, asisten legal pribadi yang mengawal permohonan Anda hingga SK Menkumham resmi terbit. Silakan hubungi saya untuk konsultasi langsung."
                </p>

                <div class="space-y-2.5 pt-2">
                  <a href="https://wa.me/6281288880192?text=Halo%20${pla.name}%20LEGALTA,%20saya%20klien%20dengan%20No%20Order%20${order.id}" target="_blank" rel="noopener noreferrer" class="w-full py-3 bg-[#25D366] text-white font-label-md font-bold rounded-xl shadow-sm hover:brightness-105 transition-all flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-[20px]">chat</span>
                    <span>Chat WhatsApp dengan ${pla.name}</span>
                  </a>
                  <a href="mailto:${pla.email}?subject=Status%20Order%20${order.id}" class="w-full py-3 bg-surface-container-high text-on-surface font-label-md font-bold rounded-xl hover:bg-surface-container-highest transition-all flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-[20px]">mail</span>
                    <span>Kirim Email Pendampingan</span>
                  </a>
                </div>
              </div>

              <!-- Security Card -->
              <div class="bg-surface-container-low p-6 rounded-3xl space-y-3 border border-surface-container">
                <div class="flex items-center gap-2 text-primary">
                  <span class="material-symbols-outlined text-[22px]">verified_user</span>
                  <span class="font-label-md uppercase font-bold tracking-wider">Garansi Keabsahan Dokumen</span>
                </div>
                <p class="font-body-sm text-on-surface-variant leading-relaxed">
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
                showToast(`Dokumen "${file.name}" berhasil diunggah dan disimpan ke server.`, 'success');
                // Reload order
                loadOrder(currentActiveOrderId);
              }
            } catch (err) {
              showToast('Gagal mengunggah dokumen: ' + err.message, 'error');
            }
          }
        });

        showToast(`Memuat data ${order.id}: ${order.title}`, 'info');
      } else {
        content.innerHTML = `<div class="p-12 text-center bg-surface-container-lowest rounded-3xl border border-surface-container-high text-error font-bold">${response.message}</div>`;
        showToast(response.message, 'error');
      }
    } catch (e) {
      showToast('Koneksi backend gagal: ' + e.message, 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtn;
    }
  }

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    loadOrder(input.value.trim().toUpperCase());
  });

  demoBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const ord = this.getAttribute('data-order');
      input.value = ord;
      loadOrder(ord);
    });
  });

  // Initial load
  loadOrder(currentActiveOrderId);
}
