// ============================================
// THEME TOGGLE - Dark/Light Mode
// ============================================

(function () {
  const STORAGE_KEY = 'faf-theme';

  function getPreferred() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    // Update toggle icons — works with both Lucide SVGs and Font Awesome <i> tags
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      // Handle Lucide SVG icons (rendered from <i data-lucide="...">)
      const svg = btn.querySelector('svg');
      if (svg) {
        // Replace the SVG with a new <i> tag so Lucide can re-render
        const newIcon = document.createElement('i');
        newIcon.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
        newIcon.style.width = '18px';
        newIcon.style.height = '18px';
        svg.replaceWith(newIcon);
        // Re-render Lucide icons
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
        return;
      }

      // Handle standard <i> tags (Font Awesome or Lucide pre-render)
      const icon = btn.querySelector('i');
      if (icon) {
        if (icon.hasAttribute('data-lucide')) {
          // Lucide icon that hasn't been rendered yet
          icon.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
          if (typeof lucide !== 'undefined') {
            lucide.createIcons();
          }
        } else {
          // Font Awesome icon
          icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
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
