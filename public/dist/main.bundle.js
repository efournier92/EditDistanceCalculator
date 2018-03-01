/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _levenDistController = __webpack_require__(1);

angular.module('levenDist', ['ngRoute']).config(['$routeProvider', config]).controller('levenDistCtrl', _levenDistController.levenDistCtrl);

function config($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'levenDist.view.html',
    controller: 'levenDistCtrl'
  });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var levenDistCtrl = function levenDistCtrl($scope) {

  $scope.string1 = "";
  $scope.string2 = "";

  $scope.calcLevenDist = function () {
    var j = void 0,
        i = void 0,
        u = void 0;
    var lenString1 = $scope.string1.length ? $scope.string1.length : 0;
    var lenString2 = $scope.string2.length ? $scope.string2.length : 0;
    var string2LenArr = [];
    for (j = 0; j <= lenString2; j++) {
      string2LenArr[j] = j;
    }
    for (i = 1; i <= lenString1; i++) {
      for (u = [i], j = 1; j <= lenString2; j++) {
        u[j] = $scope.string1[i - 1] === $scope.string2[j - 1] ? string2LenArr[j - 1] : Math.min(string2LenArr[j - 1], string2LenArr[j], u[j - 1]) + 1;
      }
      string2LenArr = u;
    }
    $scope.levenDist = u[lenString2];
  };
};

exports.levenDistCtrl = levenDistCtrl;

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map