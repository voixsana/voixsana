/**
 * config.js — Voix Sana
 *
 * INSTRUCTIONS POUR SONIA :
 * Remplace les valeurs entre guillemets ci-dessous par tes vrais liens.
 * Les modifications s'appliquent automatiquement à tout le site.
 * Ne touche à rien d'autre dans ce fichier.
 */

var VOIXSANA_CONFIG = {

  /* Liens Medoucine -------------------------------------------------------- */
  MEDOUCINE_URL_RDV_INDIVIDUEL:
    'MEDOUCINE_URL_RDV_INDIVIDUEL',     /* TODO: colle ici ton lien Medoucine pour les séances individuelles */

  MEDOUCINE_URL_RDV_COLLECTIF:
    'MEDOUCINE_URL_RDV_COLLECTIF',      /* TODO: colle ici ton lien Medoucine pour les séances collectives */

  MEDOUCINE_URL_APPEL_DECOUVERTE:
    'MEDOUCINE_URL_APPEL_DECOUVERTE',   /* TODO: colle ici ton lien Medoucine pour l'appel découverte */

  /* Identifiants Tally ----------------------------------------------------- */
  TALLY_QUESTIONNAIRE_ID:
    'TALLY_QUESTIONNAIRE_ID',           /* TODO: remplace par l'ID de ton formulaire Tally questionnaire */

  TALLY_CONTACT_ID:
    'TALLY_CONTACT_ID',                 /* TODO: remplace par l'ID de ton formulaire Tally de contact */

  /* Mentions légales ------------------------------------------------------- */
  SIRET: '__SIRET_A_REMPLACER__',       /* TODO: ton numéro SIRET */
  APE:   '__APE_A_REMPLACER__'          /* TODO: ton code APE */

};

/* ------- Injection automatique dans le DOM ------- */
(function () {
  'use strict';

  /* Remplace les href des liens avec data-config-href */
  document.querySelectorAll('[data-config-href]').forEach(function (el) {
    var key = el.getAttribute('data-config-href');
    var val = VOIXSANA_CONFIG[key];
    if (val && !val.startsWith('MEDOUCINE') && !val.startsWith('TALLY') && !val.startsWith('__')) {
      el.setAttribute('href', val);
    }
  });

  /* Remplace les src des iframes avec data-config-src */
  document.querySelectorAll('[data-config-src]').forEach(function (el) {
    var key = el.getAttribute('data-config-src');
  });

  /* Remplace le texte des éléments avec data-config-text */
  document.querySelectorAll('[data-config-text]').forEach(function (el) {
    var key = el.getAttribute('data-config-text');
    var val = VOIXSANA_CONFIG[key];
    if (val && !val.startsWith('__')) {
      el.textContent = val;
    }
  });

})();
