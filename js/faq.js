/* FAQ — <details>/<summary> natifs, pas de JS requis.
   Ce fichier est conservé pour un éventuel accordéon exclusif plus tard. */
(function () {
  'use strict';

  const root = document.querySelector('[data-faq-root]');
  if (!root) return;

  /* Décommenter pour activer l'accordéon exclusif (une seule question ouverte à la fois) */
  // const details = root.querySelectorAll('details');
  // details.forEach(function (d) {
  //   d.addEventListener('toggle', function () {
  //     if (d.open) details.forEach(function (other) { if (other !== d) other.open = false; });
  //   });
  // });
})();
