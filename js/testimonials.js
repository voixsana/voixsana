(function () {
  'use strict';

  /* --- Pause automatique des vidéos inline --- */
  const inlineVideos = document.querySelectorAll('.testimonial video');
  inlineVideos.forEach(function (video) {
    video.addEventListener('play', function () {
      inlineVideos.forEach(function (other) {
        if (other !== video && !other.paused) other.pause();
      });
    });
  });

  /* --- Lightbox vidéo via <dialog> --- */
  const dialog = document.querySelector('[data-video-dialog]');
  if (!dialog) return;

  const dialogVideo = dialog.querySelector('video');
  const dialogSource = dialog.querySelector('source');

  document.querySelectorAll('[data-open-video]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const src = btn.getAttribute('data-video-src') || '';
      const poster = btn.getAttribute('data-video-poster') || '';
      if (dialogSource) dialogSource.setAttribute('src', src);
      if (dialogVideo) {
        dialogVideo.setAttribute('poster', poster);
        dialogVideo.load();
      }
      dialog.showModal();
    });
  });

  dialog.querySelectorAll('[data-close-video]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (dialogVideo) dialogVideo.pause();
      dialog.close();
    });
  });

  /* Fermer en cliquant sur le backdrop */
  dialog.addEventListener('click', function (e) {
    if (e.target === dialog) {
      if (dialogVideo) dialogVideo.pause();
      dialog.close();
    }
  });

  dialog.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && dialogVideo) dialogVideo.pause();
  });
})();
