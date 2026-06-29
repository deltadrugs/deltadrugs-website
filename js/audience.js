(function () {
  'use strict';

  var STORAGE_KEY = 'deltaAudience';
  var VALID = ['patient', 'professional', 'partner'];

  var gateVideos = {
    patient: 'https://videos.pexels.com/video-files/6817428/6817428-hd_1920_1080_25fps.mp4',
    professional: 'https://videos.pexels.com/video-files/4380464/4380464-hd_1920_1080_25fps.mp4',
    partner: 'https://videos.pexels.com/video-files/6274820/6274820-hd_1920_1080_25fps.mp4'
  };

  function get() {
    var val = localStorage.getItem(STORAGE_KEY);
    return VALID.indexOf(val) >= 0 ? val : null;
  }

  function set(audience) {
    if (VALID.indexOf(audience) < 0) return;
    localStorage.setItem(STORAGE_KEY, audience);
  }

  function clear() {
    localStorage.removeItem(STORAGE_KEY);
  }

  function showView(audience) {
    document.querySelectorAll('.audience-view').forEach(function (view) {
      view.classList.toggle('is-active', view.dataset.audience === audience);
    });
    document.body.dataset.audience = audience;
  }

  function initGateVideos() {
    var gate = document.getElementById('audience-gate');
    if (!gate) return;

    Object.keys(gateVideos).forEach(function (key, i) {
      var video = gate.querySelector('[data-bg="' + key + '"]');
      if (!video) return;
      video.src = gateVideos[key];
      video.load();
      if (i === 0) {
        video.classList.add('is-active');
        video.play().catch(function () {});
      }
    });
  }

  function setGateBackground(audience) {
    document.querySelectorAll('.audience-gate__video').forEach(function (v) {
      var active = v.dataset.bg === audience;
      v.classList.toggle('is-active', active);
      if (active) {
        v.play().catch(function () {});
      }
    });
  }

  function initGatePanels() {
    var panels = document.querySelectorAll('.audience-panel');
    var defaultBg = 'patient';

    panels.forEach(function (panel) {
      var audience = panel.dataset.audience;

      panel.addEventListener('mouseenter', function () {
        panels.forEach(function (p) { p.classList.remove('is-hovered'); });
        panel.classList.add('is-hovered');
        setGateBackground(audience);
      });

      panel.addEventListener('mouseleave', function () {
        panel.classList.remove('is-hovered');
      });

      panel.addEventListener('click', function () {
        selectAudience(audience);
      });
    });

    setGateBackground(defaultBg);
  }

  function selectAudience(audience) {
    set(audience);
    var gate = document.getElementById('audience-gate');
    var app = document.getElementById('site-app');

    gate.classList.add('is-exiting');
    showView(audience);

    setTimeout(function () {
      gate.style.display = 'none';
      app.hidden = false;
      app.classList.add('is-visible', 'is-entering');
      document.body.classList.remove('is-loading');

      document.dispatchEvent(new CustomEvent('audience:selected', { detail: audience }));
    }, 750);
  }

  function showGate() {
    var gate = document.getElementById('audience-gate');
    var app = document.getElementById('site-app');
    if (!gate || !app) return;

    gate.style.display = '';
    gate.classList.remove('is-exiting');
    app.hidden = true;
    app.classList.remove('is-visible', 'is-entering');
    document.body.classList.add('is-loading');
    window.scrollTo(0, 0);
    initGateVideos();
    initGatePanels();
  }

  function switchView() {
    clear();
    showGate();
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.remove('is-visible');
    });
    document.querySelectorAll('[data-animate-check]').forEach(function (el) {
      el.classList.remove('is-drawn');
    });
  }

  function initWordCycle() {
    var el = document.getElementById('word-cycle');
    if (!el) return;

    var words = ['Simple.', 'Comfortable.', 'Reliable.', 'Delivered.'];
    var i = 0;

    function cycle() {
      el.innerHTML = '<span>' + words[i] + '</span>';
      i = (i + 1) % words.length;
    }

    cycle();
    setInterval(cycle, 2500);
  }

  function initProcessFlow() {
    var container = document.getElementById('process-flow');
    if (!container) return;

    var steps = container.querySelectorAll('.process-step');
    var bar = container.querySelector('.process-bar__fill');
    if (!steps.length) return;

    var current = 0;
    var progress = [20, 45, 65, 85, 100];

    function advance() {
      steps.forEach(function (s, idx) {
        s.classList.remove('is-active', 'is-complete');
        if (idx < current) s.classList.add('is-complete');
        if (idx === current) s.classList.add('is-active');
      });
      if (bar) bar.style.width = progress[current] + '%';
      current = (current + 1) % steps.length;
    }

    advance();
    setInterval(advance, 2200);
  }

  function initPartnerStats() {
    var stats = document.querySelectorAll('.partner-stat__num[data-count]');
    if (!stats.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseInt(el.dataset.count, 10);
        var suffix = el.dataset.suffix || '';
        var prefix = el.dataset.prefix || '';
        var duration = 2000;
        var start = performance.now();

        function update(now) {
          var p = Math.min((now - start) / duration, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = prefix + Math.floor(eased * target) + suffix;
          if (p < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
        observer.unobserve(el);
      });
    }, { threshold: 0.5 });

    stats.forEach(function (el) { observer.observe(el); });
  }

  function bindSwitchView() {
    document.addEventListener('click', function (e) {
      if (e.target.closest('#switch-view')) {
        e.preventDefault();
        switchView();
      }
    });
  }

  function init() {
    initGateVideos();
    bindSwitchView();

    var saved = get();
    var gate = document.getElementById('audience-gate');
    var app = document.getElementById('site-app');

    if (saved) {
      if (gate) gate.style.display = 'none';
      if (app) {
        app.hidden = false;
        app.classList.add('is-visible');
      }
      showView(saved);
      document.body.classList.remove('is-loading');
      document.dispatchEvent(new CustomEvent('audience:selected', { detail: saved }));
    } else {
      if (gate) gate.style.display = '';
      if (app) app.hidden = true;
      initGatePanels();
    }
  }

  document.addEventListener('audience:selected', function (e) {
    if (e.detail === 'patient') initWordCycle();
    if (e.detail === 'professional') initProcessFlow();
    if (e.detail === 'partner') initPartnerStats();
  });

  window.DeltaAudience = { get: get, set: set, clear: clear, switchView: switchView };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
