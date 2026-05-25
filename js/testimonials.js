(function () {
  'use strict';

  const inlineVideos = document.querySelectorAll('.testimonial video');
  inlineVideos.forEach(function (video) {
    video.addEventListener('play', function () {
      inlineVideos.forEach(function (other) {
        if (other !== video && !other.paused) other.pause();
      });
    });
  });
})();
