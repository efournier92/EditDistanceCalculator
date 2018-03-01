const levenDistCtrl = function levenDistCtrl($scope) {

  $scope.string1 = ``;
  $scope.string2 = ``;
  $scope.levenDist = 0;

  $scope.calcLevenDist = () => {
    let j, i, u;
    $scope.string1 = $scope.string1.length ? $scope.string1 : ``;
    $scope.string2 = $scope.string2.length ? $scope.string2 : ``;
    let lenString1 = $scope.string1.length;
    let lenString2 = $scope.string2.length;
    let string2LenArr = [];
    for (j = 0; j <= lenString2; j++) { 
      string2LenArr[j] = j; 
    }
    for (i = 1; i <= lenString1; i++) {
      for (u = [i], j = 1; j <= lenString2; j++) {
        u[j] = 
          $scope.string1[i - 1] === $scope.string2[j - 1] 
          ? string2LenArr[j - 1] 
          : Math.min(string2LenArr[j - 1], string2LenArr[j], u[j - 1]) + 1;
      }
      string2LenArr = u;
    }
    $scope.levenDist = u[lenString2] || 0;
  }

};

export { levenDistCtrl }

