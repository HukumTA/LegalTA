/**
 * Toast Notification Component
 */

export function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed bottom-24 right-6 z-50 flex flex-col gap-2 pointer-events-none';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  const bgClass = type === 'error' ? 'bg-[#ba1a1a] text-white' : (type === 'success' ? 'bg-[#166534] text-white' : 'bg-[#1f273b] text-white');
  const icon = type === 'error' ? 'cancel' : (type === 'success' ? 'check_circle' : 'info');

  toast.className = `${bgClass} px-5 py-3 rounded-xl shadow-xl font-body-sm flex items-center gap-3 transition-all duration-300 transform translate-y-4 opacity-0 pointer-events-auto`;
  toast.innerHTML = `
    <span class="material-symbols-outlined text-[20px]">${icon}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Make accessible globally
window.showGlobalToast = showToast;
