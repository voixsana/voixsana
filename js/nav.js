(function () {
  'use strict';

  const burger = document.querySelector('[data-menu-toggle]');
  const drawer = document.querySelector('[data-mobile-drawer]');

  if (!burger || !drawer) return;

  function openDrawer() {
    drawer.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    burger.focus();
  }

  burger.addEventListener('click', openDrawer);

  drawer.querySelectorAll('[data-close-drawer]').forEach(function (el) {
    el.addEventListener('click', closeDrawer);
  });

  drawer.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer();
  });

  /* Smooth scroll pour ancres internes */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', '#' + id);
    });
  });
})();
