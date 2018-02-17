import { levenDistCtrl } from './mystic.controller.js';

angular
  .module(`levenDist`, [`ngRoute`])
  .config([`$routeProvider`, config])
  .controller(`levenDistCtrl`, levenDistCtrl);

function config($routeProvider) {
  $routeProvider
    .when(`/`, {
      templateUrl: `levenDist.view.html`,
      controller: `levenDist`,
    })
}

