import { editDistCtrl } from './editDist.controller.js';

angular
  .module(`editDist`, [`ngRoute`, `ui.bootstrap`])
  .config([`$routeProvider`, config])
  .controller(`editDistCtrl`, editDistCtrl);

function config($routeProvider) {
  $routeProvider
    .when(`/`, {
      templateUrl: `editDist.view.html`,
      controller: `editDistCtrl`,
    })
}

