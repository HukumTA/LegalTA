/**
 * View: Lacak Status Order
 */

import { api } from '../api.js';
import { showToast } from '../components/toast.js';

export function renderTrackingView() {
  return `
    <div class="flex flex-col w-full">

      <!-- 1. HERO + PENCARIAN -->
      <section class="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-24 bg-transparent border-b border-slate-200/50">
        <div class="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            Lacak Status Order, <span class="text-crimson-800">Kapan Saja</span>
          </h1>
          <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
            Masukkan nomor order Anda untuk melihat progres pengurusan dokumen.
          </p>

          <div class="max-w-3xl mx-auto pt-4">
            <form id="trackingSearchForm" class="bg-white p-3 rounded-[2rem] shadow-xl border border-slate-200 flex flex-col sm:flex-row items-center gap-3">
              <div class="flex items-center gap-3 px-5 py-3.5 w-full flex-1 bg-slate-50 rounded-full border border-slate-200 focus-within:border-crimson-800 transition-colors">
                <i data-lucide="search" class="w-5 h-5 text-slate-400 shrink-0"></i>
                <input type="text" id="trackingIdInput" value="" placeholder="Contoh: LEG-2025-0891" class="w-full bg-transparent border-none outline-none text-sm text-slate-900 font-bold uppercase">
              </div>
              <button type="submit" id="trackingSubmitBtn" class="w-full sm:w-auto px-8 py-4 bg-crimson-800 hover:bg-crimson-900 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 shrink-0">
                <span>Lacak</span>
                <i data-lucide="arrow-right" class="w-5 h-5"></i>
              </button>
            </form>

            <div class="flex flex-wrap items-center justify-center gap-2 pt-5">
              <span class="text-xs font-bold text-slate-400 mr-1">Contoh:</span>
              <button type="button" class="demo-track-btn px-4 py-1.5 bg-white border border-slate-200 hover:border-crimson-800 hover:text-crimson-800 rounded-full text-sm font-semibold text-slate-700 transition-colors" data-order="LEG-2025-0891">LEG-2025-0891</button>
              <button type="button" class="demo-track-btn px-4 py-1.5 bg-white border border-slate-200 hover:border-crimson-800 hover:text-crimson-800 rounded-full text-sm font-semibold text-slate-700 transition-colors" data-order="LEG-2025-0104">LEG-2025-0104</button>
              <button type="button" class="demo-track-btn px-4 py-1.5 bg-white border border-slate-200 hover:border-crimson-800 hover:text-crimson-800 rounded-full text-sm font-semibold text-slate-700 transition-colors" data-order="LEG-2025-0942">LEG-2025-0942</button>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. DETAIL ORDER -->
      <section class="max-w-7xl mx-auto px-6 py-12 w-full" id="trackingDetailsWrapper">
        <div id="trackingContent" class="space-y-8">
          <div class="p-12 text-center text-slate-500 text-sm">Memuat data order...</div>
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

  let currentActiveOrderId = '';

  async function loadOrder(orderId, notify = false) {
    if (!orderId) return;
    currentActiveOrderId = orderId;
    submitBtn.disabled = true;
    const originalBtn = submitBtn.innerHTML;
    submitBtn.innerHTML = `<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i><span>Memuat...</span>`;
    if (window.lucide) window.lucide.createIcons();

    try {
      const response = await api.getOrderTracking(orderId);
      if (response.success) {
        const { order, steps, documents, pla } = response.data;

        const plaTitle = 'Chief Legal Officer';
        const plaGreeting = `Halo! Saya ${pla.name}, pendamping legal Anda. Silakan hubungi saya jika ada pertanyaan tentang order ini.`;

        let statusClass = 'bg-amber-100 text-gold-700';
        if (order.status === 'COMPLETED') statusClass = 'bg-emerald-100 text-emerald-800';
        else if (order.status === 'PENDING') statusClass = 'bg-slate-100 text-slate-600';

        // Tahapan
        let stepsHtml = '';
        steps.forEach(s => {
          const stepName = s.step_name || s.stepName || 'Tahap Pemrosesan';
          const completedAt = s.completed_at || (s.completedAt ? String(s.completedAt).replace('T', ' ').slice(0, 16) : null);

          let icon = 'clock';
          let iconBg = 'bg-slate-200 text-slate-500';
          let cardBorder = 'bg-slate-50 border border-dashed border-slate-200';
          let titleColor = 'text-slate-600';
          let statusLabel = 'Menunggu';
          let statusBadge = 'bg-slate-200 text-slate-600';

          if (s.status === 'DONE') {
            icon = 'check';
            iconBg = 'bg-emerald-500 text-white';
            cardBorder = 'bg-white border border-emerald-200 shadow-sm';
            titleColor = 'text-slate-900';
            statusLabel = 'Selesai';
            statusBadge = 'bg-emerald-100 text-emerald-800';
          } else if (s.status === 'JALAN') {
            icon = 'loader-2';
            iconBg = 'bg-crimson-700 text-white';
            cardBorder = 'bg-crimson-50/60 border-2 border-crimson-200 shadow-md';
            titleColor = 'text-crimson-900';
            statusLabel = 'Diproses';
            statusBadge = 'bg-crimson-700 text-white';
          }

          stepsHtml += `
            <div class="relative flex items-start gap-4">
              <div class="absolute -left-6 sm:-left-8 w-6 h-6 sm:w-8 sm:h-8 rounded-full ${iconBg} flex items-center justify-center ring-4 ring-white shadow-sm">
                <i data-lucide="${icon}" class="w-4 h-4"></i>
              </div>
              <div class="${cardBorder} p-5 rounded-2xl flex-1">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                  <h4 class="text-base ${titleColor} font-extrabold">${stepName}</h4>
                  <span class="text-xs px-3 py-1 rounded-full font-bold self-start sm:self-auto ${statusBadge}">${statusLabel}</span>
                </div>
                <p class="text-sm text-slate-600 leading-relaxed">${s.description || 'Sedang diproses.'}</p>
                ${completedAt ? `<span class="text-xs text-slate-400 font-medium block mt-2.5">Selesai: ${completedAt}</span>` : ''}
              </div>
            </div>
          `;
        });

        // Dokumen
        let docsHtml = '';
        documents.forEach(doc => {
          const fileName = doc.file_name || doc.fileName || 'Dokumen.pdf';
          const docType = doc.doc_type || doc.docType || 'DOKUMEN';
          const fileSize = doc.file_size || doc.fileSize || '1.5 MB';

          docsHtml += `
            <div class="flex items-center justify-between gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div class="flex items-center gap-3.5 min-w-0">
                <div class="w-11 h-11 rounded-xl bg-crimson-50 text-crimson-800 flex items-center justify-center shrink-0">
                  <i data-lucide="file-text" class="w-5 h-5"></i>
                </div>
                <div class="min-w-0">
                  <h5 class="text-sm text-slate-900 font-bold truncate">${fileName}</h5>
                  <p class="text-xs text-slate-500">${docType} • ${fileSize}</p>
                </div>
              </div>
              <button type="button" class="doc-download px-4 py-2 bg-white text-crimson-800 hover:bg-crimson-800 hover:text-white rounded-full text-sm font-bold border border-slate-200 transition-colors inline-flex items-center gap-1.5 shrink-0" data-file="${fileName}">
                <i data-lucide="download" class="w-4 h-4"></i>
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

            <!-- Kiri -->
            <div class="lg:col-span-8 space-y-8">

              <!-- Ringkasan -->
              <div class="bg-white p-8 rounded-[2rem] shadow-md border border-slate-200 space-y-6">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <div class="flex flex-wrap items-center gap-2.5">
                      <span class="font-black text-lg text-crimson-800">${order.id}</span>
                      <span class="text-xs px-4 py-1 rounded-full font-bold ${statusClass}">${order.status}</span>
                    </div>
                    <h2 class="text-2xl text-slate-900 font-extrabold mt-2">${order.title}</h2>
                    <p class="text-sm text-slate-500 mt-1">${order.service_title} • ${order.category_name}</p>
                  </div>
                  <div class="bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100">
                    <span class="text-[10px] uppercase text-slate-400 font-bold block">Nomor Pengesahan</span>
                    <span class="text-sm text-slate-900 font-extrabold">${kemenkumhamId}</span>
                  </div>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <span class="text-[10px] uppercase text-slate-400 font-bold block">Pemohon</span>
                    <span class="text-sm text-slate-900 font-extrabold mt-1 block">${order.client_name}</span>
                  </div>
                  <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <span class="text-[10px] uppercase text-slate-400 font-bold block">Total Biaya</span>
                    <span class="text-sm text-slate-900 font-extrabold mt-1 block">Rp ${totalAmount.toLocaleString('id-ID')}</span>
                  </div>
                  <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <span class="text-[10px] uppercase text-slate-400 font-bold block">Kode Voucher</span>
                    <span class="text-sm text-slate-900 font-extrabold mt-1 block">${voucherCode}</span>
                  </div>
                  <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <span class="text-[10px] uppercase text-slate-400 font-bold block">Tanggal Masuk</span>
                    <span class="text-sm text-slate-900 font-extrabold mt-1 block">${createdDate}</span>
                  </div>
                </div>
              </div>

              <!-- Tahapan -->
              <div class="bg-white p-8 rounded-[2rem] shadow-md border border-slate-200 space-y-6">
                <h3 class="text-2xl text-slate-900 font-extrabold pb-4 border-b border-slate-100">Progres Pengurusan</h3>
                <div class="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
                  ${stepsHtml}
                </div>
              </div>

              <!-- Dokumen -->
              <div class="bg-white p-8 rounded-[2rem] shadow-md border border-slate-200 space-y-6">
                <h3 class="text-2xl text-slate-900 font-extrabold pb-4 border-b border-slate-100">Dokumen</h3>

                <div class="space-y-3" id="vaultDocsList">
                  ${docsHtml || '<div class="text-slate-500 text-sm p-4">Belum ada dokumen yang diunggah.</div>'}
                </div>

                <div class="pt-2">
                  <span class="block text-sm text-slate-800 font-bold mb-2">Unggah Dokumen Tambahan</span>
                  <div id="spaUploadBox" class="border-2 border-dashed border-slate-300 hover:border-crimson-800 rounded-3xl p-8 text-center cursor-pointer transition-colors bg-slate-50">
                    <input type="file" id="spaFileInput" class="hidden">
                    <i data-lucide="upload-cloud" class="w-8 h-8 text-crimson-800 mx-auto mb-2"></i>
                    <p class="text-sm text-slate-900 font-bold">Klik untuk memilih file</p>
                    <p class="text-xs text-slate-500 mt-1">Format PDF, JPG, atau PNG, maksimal 10 MB.</p>
                  </div>
                </div>
              </div>

            </div>

            <!-- Kanan: Pendamping -->
            <div class="lg:col-span-4">
              <div class="bg-white p-8 rounded-[2rem] shadow-md border border-slate-200 space-y-5">
                <span class="text-xs text-crimson-800 font-extrabold block">Pendamping Legal Anda</span>

                <div class="flex items-center gap-4">
                  <img src="${pla.avatar || 'assets/najwa.jpg'}" alt="${pla.name}" class="w-16 h-16 rounded-2xl object-cover object-top shadow-sm border border-slate-100">
                  <div>
                    <h4 class="text-lg text-slate-900 font-extrabold">${pla.name}</h4>
                    <p class="text-sm text-gold-600 font-bold">${plaTitle}</p>
                  </div>
                </div>

                <p class="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  ${plaGreeting}
                </p>

                <div class="space-y-3">
                  <!-- Silakan ganti href dengan nomor WhatsApp resmi: https://wa.me/[NOMOR] -->
                  <a href="https://wa.me/?text=Halo%20${pla.name}%20HUKUMTA,%20saya%20klien%20dengan%20No%20Order%20${order.id}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center w-full px-6 py-3.5 bg-crimson-800 hover:bg-crimson-900 text-white text-sm font-bold rounded-full shadow-lg transition-all gap-2">
                    <i data-lucide="message-circle" class="w-4 h-4"></i>
                    <span>Chat WhatsApp</span>
                  </a>
                  <a href="mailto:${pla.email}?subject=Status%20Order%20${order.id}" class="inline-flex items-center justify-center w-full px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-bold rounded-full transition-all gap-2">
                    <i data-lucide="mail" class="w-4 h-4"></i>
                    <span>Kirim Email</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        `;

        // Unduh dokumen
        content.querySelectorAll('.doc-download').forEach(btn => {
          btn.addEventListener('click', () => {
            showToast(`Mengunduh ${btn.getAttribute('data-file')}`);
          });
        });

        // Unggah dokumen
        const uploadBox = document.getElementById('spaUploadBox');
        const fileInput = document.getElementById('spaFileInput');
        uploadBox?.addEventListener('click', () => fileInput?.click());
        fileInput?.addEventListener('change', async function () {
          if (this.files && this.files[0]) {
            const file = this.files[0];
            try {
              const uploadRes = await api.uploadOrderDocument(currentActiveOrderId, file.name, 'OTHER');
              if (uploadRes.success) {
                showToast(`Dokumen "${file.name}" berhasil diunggah.`, 'success');
                // Biarkan kosong saat pertama dibuka
  // loadOrder(currentActiveOrderId, false);
              }
            } catch (err) {
              showToast('Gagal mengunggah dokumen: ' + err.message, 'error');
            }
          }
        });

        if (window.lucide) window.lucide.createIcons();

        if (notify) {
          showToast(`Data order ${order.id} ditampilkan.`, 'info');
        }
      } else {
        content.innerHTML = `<div class="p-12 text-center bg-white rounded-[2rem] border border-slate-200 text-crimson-700 font-bold text-sm">${response.message}</div>`;
        showToast(response.message, 'error');
      }
    } catch (e) {
      showToast('Gagal memuat data order: ' + e.message, 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtn;
      if (window.lucide) window.lucide.createIcons();
    }
  }

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    loadOrder(input.value.trim().toUpperCase(), true);
  });

  demoBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const ord = this.getAttribute('data-order');
      input.value = ord;
      loadOrder(ord, true);
    });
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }

  loadOrder(currentActiveOrderId, false);
}