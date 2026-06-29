(function () {
  'use strict';

  var basePath = getBasePath();
  var siteInitialized = false;

  function getBasePath() {
    var path = window.location.pathname;
    if (path.indexOf('/services/') >= 0) return '../';
    return '';
  }

  function getActiveView() {
    return document.querySelector('.audience-view.is-active');
  }

  async function loadPartial(id, url) {
    var el = document.getElementById(id);
    if (!el) return;

    try {
      var response = await fetch(basePath + url);
      if (!response.ok) throw new Error('Failed to load ' + url);
      el.innerHTML = await response.text();
      fixRelativePaths(el);
    } catch (err) {
      console.warn('Partial load failed:', err.message);
    }
  }

  function fixRelativePaths(container) {
    container.querySelectorAll('a[href], img[src]').forEach(function (el) {
      var attr = el.hasAttribute('href') ? 'href' : 'src';
      var val = el.getAttribute(attr);
      if (!val || val.indexOf('http') === 0 || val.indexOf('mailto:') === 0 ||
          val.indexOf('tel:') === 0 || val.indexOf('#') === 0 || val.indexOf('data:') === 0) {
        return;
      }
      if (basePath && val.indexOf(basePath) !== 0) {
        el.setAttribute(attr, basePath + val);
      }
    });
  }

  function initNavigation() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.main-nav');
    var overlay = document.querySelector('.nav-overlay');
    if (!toggle || !nav) return;

    function closeNav() {
      nav.classList.remove('is-open');
      if (overlay) overlay.classList.remove('is-visible');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation menu');
      document.body.style.overflow = '';
    }

    function openNav() {
      nav.classList.add('is-open');
      if (overlay) overlay.classList.add('is-visible');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close navigation menu');
      document.body.style.overflow = 'hidden';
    }

    toggle.addEventListener('click', function () {
      nav.classList.contains('is-open') ? closeNav() : openNav();
    });

    if (overlay) overlay.addEventListener('click', closeNav);

    document.querySelectorAll('.nav-item--has-dropdown > a').forEach(function (trigger) {
      trigger.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          trigger.parentElement.classList.toggle('is-open');
        }
      });
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 768) closeNav();
      });
    });
  }

  function initStickyHeader() {
    var header = document.querySelector('.site-header');
    if (!header) return;

    function onScroll() {
      header.classList.toggle('is-scrolled', window.scrollY > 40);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function setActiveNav() {
    var path = window.location.pathname;
    var active = 'home';
    if (path.indexOf('about') >= 0) active = 'about';
    else if (path.indexOf('services') >= 0) active = 'services';
    else if (path.indexOf('contact') >= 0) active = 'contact';

    document.querySelectorAll('[data-nav]').forEach(function (link) {
      link.classList.toggle('active', link.dataset.nav === active);
    });
  }

  function initFooterYear() {
    var yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  function initContactForms() {
    document.querySelectorAll('.contact-form, .referral-form').forEach(function (form) {
      if (form.dataset.bound) return;
      form.dataset.bound = 'true';

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var btn = form.querySelector('[type="submit"]');
        var originalText = btn.textContent;
        btn.textContent = 'Sending…';
        btn.disabled = true;

        setTimeout(function () {
          btn.textContent = 'Message Sent!';
          btn.style.background = 'var(--success)';
          form.reset();
          setTimeout(function () {
            btn.textContent = originalText;
            btn.disabled = false;
            btn.style.background = '';
          }, 3000);
        }, 800);
      });
    });
  }

  function initPageLoader() {
    var loader = document.getElementById('page-loader');
    if (!loader) return;

    setTimeout(function () {
      loader.classList.add('is-hidden');
    }, 600);
  }

  function initScrollReveal() {
    var root = getActiveView() || document;
    var elements = root.querySelectorAll('.reveal:not(.is-visible)');
    if (!elements.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(function (el) { observer.observe(el); });
  }

  function initCounters() {
    var root = getActiveView() || document;
    var counters = root.querySelectorAll('[data-count]:not(.partner-stat__num)');

    function animateCounter(el) {
      var target = parseInt(el.dataset.count, 10);
      var suffix = el.dataset.suffix || '';
      var duration = 1800;
      var start = performance.now();

      function update(now) {
        var progress = Math.min((now - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { observer.observe(el); });
  }

  function initAnimatedChecks() {
    var root = getActiveView() || document;
    var checks = root.querySelectorAll('[data-animate-check]:not(.is-drawn)');
    if (!checks.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-drawn');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.8 });

    checks.forEach(function (el, index) {
      el.style.transitionDelay = (index * 0.12) + 's';
      observer.observe(el);
    });
  }

  function initParallax() {
    var frame = document.getElementById('parallax-image');
    if (!frame || window.matchMedia('(max-width: 768px)').matches) return;

    window.addEventListener('scroll', function () {
      var rect = frame.getBoundingClientRect();
      var offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * 0.06;
      frame.style.transform = 'translateY(' + offset + 'px)';
    }, { passive: true });
  }

  function initInsuranceCarousel() {
    var root = getActiveView() || document;
    root.querySelectorAll('.insurance-track').forEach(function (track) {
      if (track.dataset.cloned) return;
      track.dataset.cloned = 'true';
      track.innerHTML = track.innerHTML + track.innerHTML;
    });
  }

  function initTestimonialCarousel() {
    var root = getActiveView() || document;
    var carousel = root.querySelector('.testimonial-carousel');
    if (!carousel || carousel.dataset.bound) return;
    carousel.dataset.bound = 'true';

    var slides = carousel.querySelectorAll('.testimonial-slide');
    var dotsContainer = carousel.parentElement.querySelector('.testimonial-dots');
    var dots = dotsContainer ? dotsContainer.querySelectorAll('.testimonial-dot') : [];
    var current = 0;
    var interval;

    function goTo(index) {
      slides[current].classList.remove('is-active');
      if (dots[current]) {
        dots[current].classList.remove('is-active');
        dots[current].setAttribute('aria-selected', 'false');
      }
      current = index;
      slides[current].classList.add('is-active');
      if (dots[current]) {
        dots[current].classList.add('is-active');
        dots[current].setAttribute('aria-selected', 'true');
      }
    }

    function next() { goTo((current + 1) % slides.length); }
    function startAutoplay() { interval = setInterval(next, 5500); }
    function resetAutoplay() { clearInterval(interval); startAutoplay(); }

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { goTo(i); resetAutoplay(); });
    });

    startAutoplay();
  }

  async function initSite() {
    if (siteInitialized) {
      initScrollReveal();
      initCounters();
      initAnimatedChecks();
      initInsuranceCarousel();
      initTestimonialCarousel();
      initContactForms();
      return;
    }

    siteInitialized = true;

    await Promise.all([
      loadPartial('site-header', 'partials/header.html'),
      loadPartial('site-footer', 'partials/footer.html'),
    ]);

    initNavigation();
    initStickyHeader();
    setActiveNav();
    initFooterYear();
    initContactForms();
    initPageLoader();
    initScrollReveal();
    initCounters();
    initAnimatedChecks();
    initParallax();
    initInsuranceCarousel();
    initTestimonialCarousel();
  }

  document.addEventListener('audience:selected', function () {
    initSite();
  });
})();
