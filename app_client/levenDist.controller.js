const levenDistCtrl = function levenDistCtrl($scope) {

  $scope.lenString1 = 0;
  $scope.lenString2 = 0;

  $scope.calcLevenDist = function(string1, string2) {
    console.log("CHANGED!");
    const lenString1 = string1.length;
    const lenString2 = string2.length;
    let t = [], j;
    for (j = 0; j <= lenString2; j++) { 
      t[j] = j; 
    }
    let i, u;
    for (i = 1; i <= lenString1; i++) {
      for (u = [i], j = 1; j <= lenString2; j++) {
        u[j] = string1[i - 1] === string2[j - 1] ? t[j - 1] : Math.min(t[j - 1], t[j], u[j - 1]) + 1;
      } t = u;
    }
    $scope.levenDist = u[lenString2];
  }

};

export { levenDistCtrl }

