import { levenDistCtrl } from './levenDist.controller.js';
import { infoModalCtrl } from './infoModal/infoModal.controller.js';

angular
  .module(`levenDist`, [`ngRoute`, `ui.bootstrap`])
  .config([`$routeProvider`, config])
  .controller(`levenDistCtrl`, levenDistCtrl);

function config($routeProvider) {
  $routeProvider
    .when(`/`, {
      templateUrl: `levenDist.view.html`,
      controller: `levenDistCtrl`,
    })
}

