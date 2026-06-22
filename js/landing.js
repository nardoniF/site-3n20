(function () {
    'use strict';

    /* ── Preloader ── */
    document.body.classList.add('loading');
    window.addEventListener('load', function () {
        setTimeout(function () {
            var pre = document.getElementById('preloader');
            if (pre) pre.classList.add('hidden');
            document.body.classList.remove('loading');
        }, 600);
    });

    /* ── Header scroll ── */
    var header = document.getElementById('header');
    var mobileBar = document.getElementById('mobile-bar');
    var hero = document.getElementById('hero');

    function onScroll() {
        var y = window.scrollY;
        if (header) header.classList.toggle('scrolled', y > 40);

        if (mobileBar && hero) {
            var pastHero = y > hero.offsetHeight * 0.5;
            mobileBar.classList.toggle('visible', pastHero);
            mobileBar.setAttribute('aria-hidden', pastHero ? 'false' : 'true');
            document.body.classList.toggle('has-sticky-bar', pastHero);
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ── Mobile nav ── */
    var toggle = document.getElementById('nav-toggle');
    var navLinks = document.getElementById('nav-links');

    if (toggle && navLinks) {
        toggle.addEventListener('click', function () {
            var open = navLinks.classList.toggle('open');
            toggle.classList.toggle('open', open);
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });

        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('open');
                toggle.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* ── Scroll reveal ── */
    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        var revealObs = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        revealEls.forEach(function (el) { revealObs.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add('visible'); });
    }

    /* ── Counter animation ── */
    function animateCounter(el) {
        var target = parseFloat(el.getAttribute('data-count'));
        var decimal = parseInt(el.getAttribute('data-decimal') || '0', 10);
        var duration = 1800;
        var start = performance.now();

        function tick(now) {
            var progress = Math.min((now - start) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            var val = target * eased;
            el.textContent = decimal ? val.toFixed(decimal) : Math.floor(val).toLocaleString('pt-BR');
            if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
    }

    var statNums = document.querySelectorAll('.stat-num[data-count]');
    if ('IntersectionObserver' in window && statNums.length) {
        var counterObs = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statNums.forEach(function (el) { counterObs.observe(el); });
    }

    /* ── Cursor glow (desktop) ── */
    var glow = document.querySelector('.cursor-glow');
    if (glow && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        document.body.classList.add('cursor-ready');
        var glowX = 0, glowY = 0, curX = 0, curY = 0;

        document.addEventListener('mousemove', function (e) {
            curX = e.clientX;
            curY = e.clientY;
        }, { passive: true });

        function lerpGlow() {
            glowX += (curX - glowX) * 0.08;
            glowY += (curY - glowY) * 0.08;
            glow.style.left = glowX + 'px';
            glow.style.top = glowY + 'px';
            requestAnimationFrame(lerpGlow);
        }
        lerpGlow();
    }

    /* ── 3D tilt cards ── */
    var tiltCards = document.querySelectorAll('[data-tilt]');
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!reducedMotion && window.matchMedia('(hover: hover)').matches) {
        tiltCards.forEach(function (card) {
            card.addEventListener('mousemove', function (e) {
                var rect = card.getBoundingClientRect();
                var x = (e.clientX - rect.left) / rect.width - 0.5;
                var y = (e.clientY - rect.top) / rect.height - 0.5;
                card.style.transform = 'perspective(800px) rotateY(' + (x * 10) + 'deg) rotateX(' + (-y * 10) + 'deg) scale3d(1.02,1.02,1.02)';
            });

            card.addEventListener('mouseleave', function () {
                card.style.transform = '';
            });
        });
    }

    /* ── Magnetic buttons ── */
    var magneticBtns = document.querySelectorAll('.magnetic');
    if (!reducedMotion && window.matchMedia('(hover: hover)').matches) {
        magneticBtns.forEach(function (btn) {
            btn.addEventListener('mousemove', function (e) {
                var rect = btn.getBoundingClientRect();
                var x = e.clientX - rect.left - rect.width / 2;
                var y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = 'translate(' + (x * 0.15) + 'px, ' + (y * 0.15) + 'px)';
            });
            btn.addEventListener('mouseleave', function () {
                btn.style.transform = '';
            });
        });
    }

    /* ── Parallax orbs ── */
    var orbs = document.querySelectorAll('.orb');
    if (orbs.length && !reducedMotion) {
        window.addEventListener('scroll', function () {
            var y = window.scrollY;
            orbs.forEach(function (orb, i) {
                orb.style.transform = 'translateY(' + (y * (0.05 + i * 0.02)) + 'px)';
            });
        }, { passive: true });
    }

    /* ── Analytics tracking ── */
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

    /* ── Smooth anchor offset fix ── */
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
