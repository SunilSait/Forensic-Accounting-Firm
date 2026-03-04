// ============================================
// THEME TOGGLE - Dark/Light Mode
// ============================================

(function() {
  const STORAGE_KEY = 'faf-theme';

  function getPreferred() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    // Update toggle icon
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      const icon = btn.querySelector('i');
      if (icon) {
        icon.className = theme === 'dark' ? 'lucide lucide-sun' : 'lucide lucide-moon';
      }
    });
  }

  // Apply on load
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(getPreferred());

    // Bind toggle buttons
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });
    });
  });
})();
