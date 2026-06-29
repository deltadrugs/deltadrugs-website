(function () {
  'use strict';

  var STORAGE_KEY = 'deltaAudience';
  var pages = {
    patient: 'patient-home.html',
    professional: 'pro-home.html',
    partner: 'partner-home.html'
  };

  function selectAudience(audience) {
    localStorage.setItem(STORAGE_KEY, audience);
    var gate = document.getElementById('gate');
    gate.classList.add('is-exiting');
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.6s ease';
    setTimeout(function () {
      window.location.href = pages[audience];
    }, 600);
  }

  function init() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved && pages[saved]) {
      window.location.replace(pages[saved]);
      return;
    }

    document.querySelectorAll('.gate-panel').forEach(function (panel) {
      var audience = panel.dataset.audience;
      var video = panel.querySelector('video');
      if (video) {
        video.play().catch(function () {
          var grad = panel.querySelector('.gate-panel__gradient');
          if (grad) grad.style.display = 'block';
          video.style.display = 'none';
        });
      }
      panel.addEventListener('click', function () {
        selectAudience(audience);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
