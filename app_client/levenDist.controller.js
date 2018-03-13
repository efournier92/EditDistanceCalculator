const levenDistCtrl = function levenDistCtrl($scope) {
  
  // initialize default values
  $scope.string1 = ``;
  $scope.string2 = ``;
  $scope.levenDist = 0;

  // recalculate each time either string changes
  $scope.calcLevenDist = () => {
    // reset count variables
    let j, i;
    // reset edit distance arrays
    let string2LenArr = [], finArr;
    // update string lengths
    $scope.string1 = $scope.string1.length ? $scope.string1 : ``;
    $scope.string2 = $scope.string2.length ? $scope.string2 : ``;
    let lenString1 = $scope.string1.length;
    let lenString2 = $scope.string2.length;
    for (j = 0; j <= lenString2; j++) { 
      string2LenArr[j] = j; 
    }
    for (i = 1; i <= lenString1; i++) {
      for (finArr = [i], j = 1; j <= lenString2; j++) {
        finArr[j] = 
          $scope.string1[i - 1] === $scope.string2[j - 1] 
          ? string2LenArr[j - 1] 
          : Math.min(string2LenArr[j - 1], string2LenArr[j], finArr[j - 1]) + 1;
      }
      string2LenArr = finArr;
    }
    $scope.levenDist = finArr[lenString2] || 0;
  }

};

export { levenDistCtrl }

