const levenDistCtrl = function levenDistCtrl($scope) {

  $scope.string1 = ``;
  $scope.string2 = ``;

  $scope.calcLevenDist = () => {
    let j, i, u;
    let lenString1 = $scope.string1.length;
    let lenString2 = $scope.string2.length;
    let t = [];
    for (j = 0; j <= lenString2; j++) { 
      t[j] = j; 
    }
    let i, u;
    for (i = 1; i <= lenString1; i++) {
      for (u = [i], j = 1; j <= lenString2; j++) {
        u[j] = $scope.string1[i - 1] === $scope.string2[j - 1] ? t[j - 1] : Math.min(t[j - 1], t[j], u[j - 1]) + 1;
      } t = u;
    }
    $scope.levenDist = u[lenString2];
  }

};

export { levenDistCtrl }

