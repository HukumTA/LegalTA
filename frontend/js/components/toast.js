/**
 * Toast Notification Component
 */

export function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed bottom-20 right-6 z-50 flex flex-col gap-2 pointer-events-none';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  const styleMap = {
    error: {
      bg: 'bg-crimson-800 text-white border border-crimson-700',
      svg: `<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/></svg>`
    },
    success: {
      bg: 'bg-emerald-700 text-white border border-emerald-600',
      svg: `<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>`
    },
    info: {
      bg: 'bg-slate-900 text-white border border-slate-800',
      svg: `<svg class="w-4 h-4 shrink-0 text-gold-400" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`
    }
  };

  const cfg = styleMap[type] || styleMap.info;

  toast.className = `${cfg.bg} px-4 py-2.5 rounded-xl shadow-lg text-xs font-semibold flex items-center gap-2.5 transition-all duration-300 transform translate-y-3 opacity-0 pointer-events-auto`;
  toast.innerHTML = `
    ${cfg.svg}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-3', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 280);
  }, 2600);
}

// Make accessible globally
window.showGlobalToast = showToast;
