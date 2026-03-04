// ============================================
// DASHBOARD.JS - Portal Interactivity
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // ---------- Sidebar Toggle ----------
    const sidebar = document.querySelector('.sidebar');
    const toggleBtns = document.querySelectorAll('.sidebar-toggle');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                sidebar.classList.toggle('mobile-open');
            } else {
                sidebar.classList.toggle('collapsed');
            }
        });
    });

    // Close sidebar on mobile when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && sidebar && sidebar.classList.contains('mobile-open')) {
            if (!sidebar.contains(e.target) && !e.target.closest('.sidebar-toggle')) {
                sidebar.classList.remove('mobile-open');
            }
        }
    });

    // ---------- Animated Stat Counters ----------
    function animateValue(el) {
        const target = parseInt(el.getAttribute('data-count'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const duration = 1800;
        const startTime = performance.now();

        function update(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = Math.round(target * eased);
            el.textContent = prefix + current.toLocaleString() + suffix;
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    }

    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateValue(entry.target);
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-value[data-count]').forEach(el => statObserver.observe(el));

    // ---------- Chart Bars Animation ----------
    const chartBars = document.querySelectorAll('.chart-bar');
    const chartObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const h = bar.getAttribute('data-height');
                if (h) bar.style.height = h;
                chartObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.3 });

    chartBars.forEach(bar => {
        bar.style.height = '0';
        chartObserver.observe(bar);
    });

    // ---------- Progress Bars Animation ----------
    const progressFills = document.querySelectorAll('.progress-fill');
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const w = fill.getAttribute('data-width');
                if (w) fill.style.width = w;
                progressObserver.unobserve(fill);
            }
        });
    }, { threshold: 0.3 });

    progressFills.forEach(fill => {
        fill.style.width = '0';
        progressObserver.observe(fill);
    });

    // ---------- Upload Zone Drag & Drop ----------
    const uploadZone = document.querySelector('.upload-zone');
    if (uploadZone) {
        ['dragenter', 'dragover'].forEach(evt => {
            uploadZone.addEventListener(evt, (e) => {
                e.preventDefault();
                uploadZone.classList.add('drag-over');
            });
        });

        ['dragleave', 'drop'].forEach(evt => {
            uploadZone.addEventListener(evt, (e) => {
                e.preventDefault();
                uploadZone.classList.remove('drag-over');
            });
        });

        uploadZone.addEventListener('drop', (e) => {
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                alert(`${files.length} file(s) selected for upload. (Demo mode)`);
            }
        });

        uploadZone.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.multiple = true;
            input.accept = '.pdf,.xlsx,.doc,.docx,.jpg,.png';
            input.onchange = () => {
                if (input.files.length > 0) {
                    alert(`${input.files.length} file(s) selected for upload. (Demo mode)`);
                }
            };
            input.click();
        });
    }

    // ---------- Notification Read Toggle ----------
    document.querySelectorAll('.notification-item').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.remove('unread');
        });
    });

    // ---------- Search Filter ----------
    const searchInput = document.querySelector('.top-bar-search input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            document.querySelectorAll('.case-card, .doc-card, .notification-item, .report-card').forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(query) ? '' : 'none';
            });
        });
    }

    // ---------- Tab Switching ----------
    document.querySelectorAll('[data-tab-target]').forEach(tab => {
        tab.addEventListener('click', () => {
            const group = tab.closest('[data-tab-group]');
            if (!group) return;

            group.querySelectorAll('[data-tab-target]').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const targetId = tab.getAttribute('data-tab-target');
            const container = group.nextElementSibling || group.parentElement;
            container.querySelectorAll('[data-tab-pane]').forEach(pane => {
                pane.style.display = pane.getAttribute('data-tab-pane') === targetId ? 'block' : 'none';
            });
        });
    });

    // ---------- Login Form (Demo) ----------
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = loginForm.querySelector('button[type="submit"]');
            if (btn) {
                btn.innerHTML = '<i class="lucide lucide-loader-2" style="animation: spin 1s linear infinite"></i> Authenticating...';
                btn.disabled = true;
            }
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1500);
        });
    }

});

// Spin animation for loader
const styleSheet = document.createElement('style');
styleSheet.textContent = `@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`;
document.head.appendChild(styleSheet);
