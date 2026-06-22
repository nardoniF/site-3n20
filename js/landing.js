(function () {
    'use strict';

    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* Preloader */
    document.body.classList.add('loading');
    window.addEventListener('load', function () {
        setTimeout(function () {
            var pre = document.getElementById('preloader');
            if (pre) pre.classList.add('hidden');
            document.body.classList.remove('loading');
        }, 500);
    });

    /* Header scroll + sticky bar */
    var header = document.getElementById('header');
    var stickyBar = document.getElementById('sticky-bar');
    var hero = document.getElementById('hero');

    function onScroll() {
        var y = window.scrollY;
        if (header) header.classList.toggle('scrolled', y > 24);
        if (stickyBar && hero) {
            var show = y > hero.offsetHeight * 0.45;
            stickyBar.classList.toggle('visible', show);
            stickyBar.hidden = !show;
            document.body.classList.toggle('has-sticky-bar', show);
        }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* Mobile menu */
    var menuBtn = document.getElementById('menu-btn');
    var headerNav = document.getElementById('header-nav');
    if (menuBtn && headerNav) {
        menuBtn.addEventListener('click', function () {
            var open = headerNav.classList.toggle('open');
            menuBtn.classList.toggle('open', open);
            menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        headerNav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                headerNav.classList.remove('open');
                menuBtn.classList.remove('open');
                menuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* Scroll reveal */
    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        var revealObs = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });
        revealEls.forEach(function (el) { revealObs.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add('visible'); });
    }

    /* Counters */
    function animateCounter(el) {
        var target = parseFloat(el.getAttribute('data-count'));
        var decimal = parseInt(el.getAttribute('data-decimal') || '0', 10);
        var start = performance.now();
        var duration = 1600;
        function tick(now) {
            var p = Math.min((now - start) / duration, 1);
            var eased = 1 - Math.pow(1 - p, 3);
            var val = target * eased;
            el.textContent = decimal ? val.toFixed(decimal) : Math.floor(val).toLocaleString('pt-BR');
            if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    }

    var counters = document.querySelectorAll('[data-count]');
    if ('IntersectionObserver' in window && counters.length) {
        var counterObs = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        counters.forEach(function (el) { counterObs.observe(el); });
    }

    /* Feature tabs */
    var tabs = document.querySelectorAll('.feature-tab');
    var panels = {
        tech: document.getElementById('panel-tech'),
        daily: document.getElementById('panel-daily'),
        kit: document.getElementById('panel-kit')
    };
    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            var id = tab.getAttribute('data-tab');
            tabs.forEach(function (t) {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            Object.keys(panels).forEach(function (key) {
                if (!panels[key]) return;
                if (key === id) {
                    panels[key].hidden = false;
                    panels[key].classList.add('active');
                } else {
                    panels[key].hidden = true;
                    panels[key].classList.remove('active');
                }
            });
        });
    });

    /* Cursor glow */
    var glow = document.querySelector('.cursor-glow');
    if (glow && !reducedMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        document.body.classList.add('cursor-ready');
        var gx = 0, gy = 0, cx = 0, cy = 0;
        document.addEventListener('mousemove', function (e) { cx = e.clientX; cy = e.clientY; }, { passive: true });
        (function lerp() {
            gx += (cx - gx) * 0.08;
            gy += (cy - gy) * 0.08;
            glow.style.left = gx + 'px';
            glow.style.top = gy + 'px';
            requestAnimationFrame(lerp);
        })();
    }

    /* 3D tilt */
    if (!reducedMotion && window.matchMedia('(hover: hover)').matches) {
        document.querySelectorAll('[data-tilt]').forEach(function (card) {
            card.addEventListener('mousemove', function (e) {
                var r = card.getBoundingClientRect();
                var x = (e.clientX - r.left) / r.width - 0.5;
                var y = (e.clientY - r.top) / r.height - 0.5;
                card.style.transform = 'perspective(900px) rotateY(' + (x * 8) + 'deg) rotateX(' + (-y * 8) + 'deg)';
            });
            card.addEventListener('mouseleave', function () { card.style.transform = ''; });
        });
    }

    /* Magnetic buttons */
    if (!reducedMotion && window.matchMedia('(hover: hover)').matches) {
        document.querySelectorAll('.magnetic').forEach(function (btn) {
            btn.addEventListener('mousemove', function (e) {
                var r = btn.getBoundingClientRect();
                btn.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * 0.12) + 'px,' + ((e.clientY - r.top - r.height / 2) * 0.12) + 'px)';
            });
            btn.addEventListener('mouseleave', function () { btn.style.transform = ''; });
        });
    }

    /* Parallax orbs */
    var orbs = document.querySelectorAll('.orb');
    if (orbs.length && !reducedMotion) {
        window.addEventListener('scroll', function () {
            var y = window.scrollY;
            orbs.forEach(function (orb, i) {
                orb.style.transform = 'translateY(' + (y * (0.04 + i * 0.015)) + 'px)';
            });
        }, { passive: true });
    }

    /* Analytics */
    document.querySelectorAll('[data-track]').forEach(function (el) {
        el.addEventListener('click', function () {
            if (typeof gtag === 'function') {
                gtag('event', 'click', {
                    event_category: '3n20_landing',
                    event_label: el.getAttribute('data-track')
                });
            }
        });
    });

    /* Smooth anchors */
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
            var id = a.getAttribute('href');
            if (id === '#') return;
            var target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
})();
