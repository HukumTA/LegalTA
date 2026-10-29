import { NICE_CLASSES_LIST, getNiceClassById } from '../data/niceClasses.js';

/**
 * Merender Custom Selector UI yang sesuai dengan desain HUKUMTA
 * (Bukan <select> browser bawaan, melainkan dropdown card mewah lengkap dengan filter search)
 */
export function renderCustomClassSelect(targetId = 'merekClassSelect', defaultClassId = 42) {
  const current = getNiceClassById(defaultClassId);

  return `
    <div class="relative custom-nice-select" id="${targetId}-wrapper">
      <!-- Hidden Input for Form Submission -->
      <input type="hidden" id="${targetId}" name="${targetId}" value="${current.id}">

      <!-- Trigger Button (Capsule / Rounded Card) -->
      <button type="button" 
        id="${targetId}-trigger" 
        class="w-full min-h-[58px] px-5 py-2.5 rounded-2xl sm:rounded-full bg-slate-50 hover:bg-slate-100/80 border border-slate-200 text-left transition-all duration-200 flex items-center justify-between gap-3 focus:outline-none focus:ring-2 focus:ring-crimson-800/20 focus:border-crimson-800 shadow-sm"
        aria-haspopup="listbox" 
        aria-expanded="false">
        <div class="flex items-center gap-3 min-w-0 flex-1">
          <div class="w-9 h-9 rounded-xl bg-crimson-50 text-crimson-800 flex items-center justify-center font-black text-xs shrink-0 border border-crimson-100/60 shadow-xs">
            <span class="custom-nice-badge font-mono">${current.id}</span>
          </div>
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-2">
              <span class="custom-nice-label font-bold text-sm text-slate-900 truncate block">${current.short}</span>
              <span class="custom-nice-type text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider ${current.type === 'Jasa' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'} shrink-0">${current.type}</span>
            </div>
            <p class="custom-nice-desc text-[11px] text-slate-400 truncate block">${current.desc}</p>
          </div>
        </div>
        <div class="flex items-center gap-1.5 shrink-0 pl-1 text-slate-400">
          <i data-lucide="chevron-down" class="custom-nice-chevron w-4 h-4 transition-transform duration-200"></i>
        </div>
      </button>

      <!-- Dropdown Popover Panel -->
      <div id="${targetId}-panel" class="custom-nice-panel hidden absolute left-0 right-0 top-full mt-2 bg-white rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border border-slate-200/90 z-[999] overflow-hidden transform transition-all duration-200">
        
        <!-- Search bar inside Dropdown -->
        <div class="p-3 bg-slate-50/80 border-b border-slate-100">
          <div class="relative">
            <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
            <input type="text" 
              class="custom-nice-search w-full h-10 pl-9 pr-8 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 placeholder:text-slate-400 outline-none focus:border-crimson-800 focus:ring-1 focus:ring-crimson-800/20" 
              placeholder="Cari nomor (1-45), kategori (F&B, software, pakaian)...">
            <button type="button" class="custom-nice-clear hidden absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
              <i data-lucide="x" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </div>

        <!-- Scrollable Options List (1 to 45 ordered, tinggi leluasa) -->
        <div class="custom-nice-options max-h-[60vh] sm:max-h-[500px] overflow-y-auto divide-y divide-slate-100 overscroll-contain py-1" role="listbox">
          ${NICE_CLASSES_LIST.map(c => `
            <div role="option" 
              aria-selected="${c.id === current.id}" 
              data-id="${c.id}" 
              data-search="kelas ${c.id} ${c.short} ${c.desc} ${c.type}"
              class="custom-nice-item px-4 py-3 hover:bg-crimson-50/70 cursor-pointer transition-colors flex items-center justify-between gap-3 ${c.id === current.id ? 'bg-crimson-50/80' : ''}">
              <div class="flex items-center gap-3 min-w-0 flex-1">
                <div class="w-8 h-8 rounded-lg ${c.id === current.id ? 'bg-crimson-800 text-white' : 'bg-slate-100 text-slate-700'} flex items-center justify-center font-mono font-bold text-xs shrink-0">
                  ${c.id}
                </div>
                <div class="min-w-0 flex-1">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-xs text-slate-900 truncate">${c.short}</span>
                    <span class="text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider ${c.type === 'Jasa' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'} shrink-0">${c.type}</span>
                    ${c.popular ? '<span class="text-[9px] font-extrabold text-crimson-800 bg-crimson-100/70 px-1.5 py-0.5 rounded shrink-0">Populer</span>' : ''}
                  </div>
                  <p class="text-[11px] text-slate-500 line-clamp-1 mt-0.5">${c.desc}</p>
                </div>
              </div>
              <div class="custom-nice-check shrink-0 ${c.id === current.id ? 'text-crimson-800' : 'text-transparent'}">
                <i data-lucide="check" class="w-4 h-4"></i>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Footer Info -->
        <div class="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span>Total 45 Kelas Terakreditasi DJKI</span>
          <span class="font-bold text-slate-700">1–34 Barang • 35–45 Jasa</span>
        </div>
      </div>
    </div>
  `;
}

/**
 * Menginisialisasi event click, filter search, keyboard navigation, dan outside-click
 */
export function initCustomClassSelect(targetId = 'merekClassSelect', onSelectCallback = null) {
  const wrapper = document.getElementById(`${targetId}-wrapper`);
  if (!wrapper) return;

  const hiddenInput = document.getElementById(targetId);
  const trigger = document.getElementById(`${targetId}-trigger`);
  const panel = document.getElementById(`${targetId}-panel`);
  const chevron = trigger?.querySelector('.custom-nice-chevron');
  const searchInput = wrapper.querySelector('.custom-nice-search');
  const clearBtn = wrapper.querySelector('.custom-nice-clear');
  const itemsContainer = wrapper.querySelector('.custom-nice-options');
  const items = wrapper.querySelectorAll('.custom-nice-item');

  const badgeEl = trigger?.querySelector('.custom-nice-badge');
  const labelEl = trigger?.querySelector('.custom-nice-label');
  const typeEl = trigger?.querySelector('.custom-nice-type');
  const descEl = trigger?.querySelector('.custom-nice-desc');

  function openSelect() {
    panel.classList.remove('hidden');
    trigger.setAttribute('aria-expanded', 'true');
    if (chevron) chevron.style.transform = 'rotate(180deg)';
    searchInput?.focus();
    if (window.lucide) window.lucide.createIcons();
  }

  function closeSelect() {
    panel.classList.add('hidden');
    trigger.setAttribute('aria-expanded', 'false');
    if (chevron) chevron.style.transform = 'rotate(0deg)';
  }

  function selectItem(classId) {
    const item = getNiceClassById(classId);
    if (!item) return;

    hiddenInput.value = item.id;
    if (badgeEl) badgeEl.textContent = item.id;
    if (labelEl) labelEl.textContent = item.short;
    if (descEl) descEl.textContent = item.desc;
    if (typeEl) {
      typeEl.textContent = item.type;
      typeEl.className = `custom-nice-type text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider ${item.type === 'Jasa' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'} shrink-0`;
    }

    items.forEach(it => {
      const isMatch = Number(it.getAttribute('data-id')) === Number(item.id);
      it.setAttribute('aria-selected', isMatch ? 'true' : 'false');
      it.classList.toggle('bg-crimson-50/80', isMatch);
      const icon = it.querySelector('.custom-nice-check');
      if (icon) {
        icon.className = `custom-nice-check shrink-0 ${isMatch ? 'text-crimson-800' : 'text-transparent'}`;
      }
      const numBox = it.querySelector('.font-mono');
      if (numBox) {
        numBox.className = `w-8 h-8 rounded-lg ${isMatch ? 'bg-crimson-800 text-white' : 'bg-slate-100 text-slate-700'} flex items-center justify-center font-mono font-bold text-xs shrink-0`;
      }
    });

    closeSelect();

    // Trigger change event on input for other listeners
    hiddenInput.dispatchEvent(new Event('change', { bubbles: true }));
    if (typeof onSelectCallback === 'function') {
      onSelectCallback(item);
    }
  }

  trigger?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (panel.classList.contains('hidden')) {
      openSelect();
    } else {
      closeSelect();
    }
  });

  items.forEach(it => {
    it.addEventListener('click', () => {
      const id = it.getAttribute('data-id');
      selectItem(id);
    });
  });

  // Filter search
  searchInput?.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase().trim();
    if (clearBtn) clearBtn.classList.toggle('hidden', q.length === 0);

    items.forEach(it => {
      const hay = (it.getAttribute('data-search') || '').toLowerCase();
      it.style.display = hay.includes(q) ? 'flex' : 'none';
    });
  });

  clearBtn?.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.classList.add('hidden');
    items.forEach(it => { it.style.display = 'flex'; });
    searchInput.focus();
  });

  // Close when clicked outside
  document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target)) {
      closeSelect();
    }
  });

  // Expose setter method on DOM element
  wrapper.setSelectedClass = selectItem;
}

