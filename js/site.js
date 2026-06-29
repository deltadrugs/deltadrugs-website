(function () {
  'use strict';

  var STORAGE_KEY = 'deltaAudience';
  var COOKIE_KEY = 'deltaCookies';

  window.DeltaSite = {
    getAudience: function () { return localStorage.getItem(STORAGE_KEY); },
    clearAudience: function () { localStorage.removeItem(STORAGE_KEY); },
    switchView: function () {
      localStorage.removeItem(STORAGE_KEY);
      navigate('index.html');
    }
  };

  var pages = {
    patient: 'patient-home.html',
    professional: 'pro-home.html',
    partner: 'partner-home.html'
  };

  function navigate(url) {
    document.body.classList.add('page-exit');
    setTimeout(function () { window.location.href = url; }, 400);
  }

  window.DeltaNavigate = navigate;

  function initPageTransitions() {
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[href]');
      if (!link) return;
      var href = link.getAttribute('href');
      if (!href || href.indexOf('#') === 0 || href.indexOf('tel:') === 0 ||
          href.indexOf('mailto:') === 0 || href.indexOf('http') === 0 ||
          link.target === '_blank') return;
      if (href.indexOf('.html') === -1 && href.indexOf('index') === -1) return;
      e.preventDefault();
      navigate(href);
    });
    document.body.classList.add('page-enter');
  }

  function initStickyHeader() {
    var header = document.querySelector('.site-header');
    if (!header) return;
    window.addEventListener('scroll', function () {
      header.classList.toggle('is-scrolled', window.scrollY > 80);
    }, { passive: true });
  }

  function initNavigation() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.main-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
    });

    document.querySelectorAll('#switch-view, .switch-view-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        DeltaSite.switchView();
      });
    });
  }

  function initScrollReveal() {
    var els = document.querySelectorAll('.reveal:not(.is-visible)');
    if (!els.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    els.forEach(function (el) { observer.observe(el); });
  }

  function initCounters() {
    document.querySelectorAll('[data-count]').forEach(function (el) {
      if (el.dataset.counted) return;

      var observer = new IntersectionObserver(function (entries) {
        if (!entries[0].isIntersecting) return;
        el.dataset.counted = 'true';
        var target = parseInt(el.dataset.count, 10);
        var suffix = el.dataset.suffix || '';
        var prefix = el.dataset.prefix || '';
        var start = performance.now();
        var duration = 2000;

        function tick(now) {
          var p = Math.min((now - start) / duration, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = prefix + Math.floor(eased * target) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
        observer.disconnect();
      }, { threshold: 0.5 });

      observer.observe(el);
    });
  }

  function initChecklist() {
    var items = document.querySelectorAll('.checklist li');
    if (!items.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var idx = Array.prototype.indexOf.call(items, entry.target);
          setTimeout(function () {
            entry.target.classList.add('is-visible');
          }, idx * 120);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    items.forEach(function (li) { observer.observe(li); });
  }

  function initTimeline() {
    document.querySelectorAll('.timeline__step').forEach(function (step, i) {
      var observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          setTimeout(function () { step.classList.add('is-visible'); }, i * 150);
          observer.disconnect();
        }
      }, { threshold: 0.3 });
      observer.observe(step);
    });
  }

  function initInsuranceCarousel() {
    document.querySelectorAll('.insurance-track').forEach(function (track) {
      if (track.dataset.cloned) return;
      track.dataset.cloned = 'true';
      track.innerHTML = track.innerHTML + track.innerHTML;
    });
  }

  function initTestimonials() {
    document.querySelectorAll('[data-testimonial-carousel]').forEach(function (wrap) {
      if (wrap.dataset.bound) return;
      wrap.dataset.bound = 'true';

      var slides = wrap.querySelectorAll('.testimonial-slide');
      var dots = wrap.querySelectorAll('.testimonial-dot');
      var current = 0;
      var interval;

      function goTo(i) {
        slides[current].classList.remove('is-active');
        if (dots[current]) dots[current].classList.remove('is-active');
        current = i;
        slides[current].classList.add('is-active');
        if (dots[current]) dots[current].classList.add('is-active');
      }

      function next() { goTo((current + 1) % slides.length); }

      dots.forEach(function (dot, i) {
        dot.addEventListener('click', function () {
          goTo(i);
          clearInterval(interval);
          interval = setInterval(next, 4000);
        });
      });

      interval = setInterval(next, 4000);
    });
  }

  function initTypewriter(el, text, speed, callback) {
    if (!el) return;
    var i = 0;
    function type() {
      if (i < text.length) {
        el.textContent = text.slice(0, i + 1);
        i++;
        setTimeout(type, speed);
      } else if (callback) {
        callback();
      }
    }
    type();
  }

  function initWordCycle(el, words, interval) {
    if (!el) return;
    var i = 0;
    function cycle() {
      el.style.opacity = 0;
      setTimeout(function () {
        el.textContent = words[i];
        el.style.opacity = 1;
        i = (i + 1) % words.length;
      }, 300);
    }
    el.style.transition = 'opacity 0.3s ease';
    cycle();
    setInterval(cycle, interval || 2500);
  }

  function initParallax() {
    var img = document.querySelector('[data-parallax]');
    if (!img || window.innerWidth < 768) return;
    window.addEventListener('scroll', function () {
      var offset = window.scrollY * 0.25;
      img.style.transform = 'translateY(' + offset + 'px)';
    }, { passive: true });
  }

  function initForms() {
    document.querySelectorAll('[data-ajax-form]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var success = form.querySelector('.form-success');
        var btn = form.querySelector('[type="submit"]');
        if (btn) {
          btn.disabled = true;
          btn.textContent = 'Sending…';
        }
        setTimeout(function () {
          form.reset();
          if (success) success.classList.add('is-visible');
          if (btn) {
            btn.disabled = false;
            btn.textContent = btn.dataset.label || 'Submit';
          }
        }, 800);
      });
    });
  }

  function initCookieBar() {
    if (localStorage.getItem(COOKIE_KEY)) return;
    var bar = document.getElementById('cookie-bar');
    if (!bar) return;
    setTimeout(function () { bar.classList.add('is-visible'); }, 1500);
    bar.querySelector('[data-accept-cookies]').addEventListener('click', function () {
      localStorage.setItem(COOKIE_KEY, '1');
      bar.classList.remove('is-visible');
    });
  }

  function boot() {
    initPageTransitions();
    initStickyHeader();
    initNavigation();
    initScrollReveal();
    initCounters();
    initChecklist();
    initTimeline();
    initInsuranceCarousel();
    initTestimonials();
    initForms();
    initCookieBar();
  }

  window.DeltaSiteBoot = boot;

  window.loadSitePartials = function (headerPartial) {
    headerPartial = headerPartial || 'partials/header-main.html';
    var tasks = [];

    var widgets = document.getElementById('global-widgets');
    if (widgets) {
      tasks.push(fetch('partials/global-widgets.html').then(function (r) { return r.text(); }).then(function (h) {
        widgets.innerHTML = h;
      }));
    }

    var footer = document.getElementById('site-footer');
    if (footer) {
      tasks.push(fetch('partials/footer.html').then(function (r) { return r.text(); }).then(function (h) {
        footer.innerHTML = h;
        var y = document.getElementById('footer-year');
        if (y) y.textContent = new Date().getFullYear();
      }));
    }

    var header = document.getElementById('site-header');
    if (header) {
      tasks.push(fetch(headerPartial).then(function (r) { return r.text(); }).then(function (h) {
        header.innerHTML = h;
      }));
    }

    return Promise.all(tasks).then(function () {
      document.dispatchEvent(new Event('partials-loaded'));
    });
  };

  window.markActiveNav = function (page) {
    document.querySelectorAll('.main-nav a[data-page]').forEach(function (a) {
      a.classList.toggle('active', a.dataset.page === page);
    });
  };

  window.loadHipaaNotice = function (formEl) {
    if (!formEl) return;
    fetch('partials/hipaa-form-notice.html').then(function (r) { return r.text(); }).then(function (h) {
      var notice = document.createElement('div');
      notice.innerHTML = h;
      formEl.insertBefore(notice.firstElementChild, formEl.firstChild);
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  document.addEventListener('partials-loaded', boot);
})();
