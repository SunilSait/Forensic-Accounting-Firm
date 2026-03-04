// ============================================
// MAIN.JS - Shared Utilities
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // ---------- Header Scroll Effect ----------
    const header = document.querySelector('.site-header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 60);
        });
    }

    // ---------- Mobile Menu Toggle ----------
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    if (mobileBtn && mobileNav) {
        mobileBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
            const icon = mobileBtn.querySelector('i');
            if (icon) {
                icon.className = mobileNav.classList.contains('open') ? 'lucide lucide-x' : 'lucide lucide-menu';
            }
        });
    }

    // ---------- Scroll Animations ----------
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // ---------- Counter Animation ----------
    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-count'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();

        function update(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(start + (target - start) * eased);
            el.textContent = prefix + current.toLocaleString() + suffix;
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    }

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

    // ---------- Form Validation ----------
    document.querySelectorAll('form[data-validate]').forEach(form => {
        form.addEventListener('submit', (e) => {
            let valid = true;
            form.querySelectorAll('[required]').forEach(input => {
                const group = input.closest('.form-group');
                const error = group ? group.querySelector('.form-error') : null;

                if (!input.value.trim()) {
                    valid = false;
                    input.style.borderColor = 'var(--danger)';
                    if (error) error.style.display = 'block';
                } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
                    valid = false;
                    input.style.borderColor = 'var(--danger)';
                    if (error) { error.textContent = 'Please enter a valid email'; error.style.display = 'block'; }
                } else {
                    input.style.borderColor = '';
                    if (error) error.style.display = 'none';
                }
            });

            if (!valid) {
                e.preventDefault();
            }
        });
    });

    // ---------- Smooth scroll for anchor links ----------
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ---------- Countdown Timer (Coming Soon page) ----------
    const countdown = document.querySelector('.countdown-grid');
    if (countdown) {
        const launchDate = new Date();
        launchDate.setDate(launchDate.getDate() + 30);

        function updateCountdown() {
            const now = new Date();
            const diff = launchDate - now;
            if (diff <= 0) return;

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            const daysEl = document.getElementById('cd-days');
            const hoursEl = document.getElementById('cd-hours');
            const minsEl = document.getElementById('cd-minutes');
            const secsEl = document.getElementById('cd-seconds');

            if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
            if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
            if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
            if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
});
