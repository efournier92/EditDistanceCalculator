import { mysticCtrl } from './mystic.controller.js';

angular
  .module(`minEditDist`, [`ngRoute`])
  .config([`$routeProvider`, config])
  .controller(`minEditDist`, minEditDist);

function config($routeProvider) {
  $routeProvider
    .when(`/`, {
      templateUrl: `minEditDist.view.html`,
      controller: `minEditDist`,
    })
}

