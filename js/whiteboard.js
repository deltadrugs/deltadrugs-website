(function () {
  'use strict';

  function initWhiteboardReplay() {
    document.querySelectorAll('[data-wb-replay]').forEach(function (btn) {
      if (btn.dataset.wbBound) return;
      btn.dataset.wbBound = 'true';

      btn.addEventListener('click', function () {
        var wrap = btn.closest('.wb-wrap');
        if (!wrap) return;
        var svg = wrap.querySelector('svg');
        if (!svg) return;

        wrap.classList.add('is-paused');
        var clone = svg.cloneNode(true);
        svg.parentNode.replaceChild(clone, svg);

        requestAnimationFrame(function () {
          wrap.classList.remove('is-paused');
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWhiteboardReplay);
  } else {
    initWhiteboardReplay();
  }

  document.addEventListener('whiteboard-loaded', initWhiteboardReplay);
  window.initWhiteboardReplay = initWhiteboardReplay;
})();
