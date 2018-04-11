import englishWords from './dictionaries/dictionary.json';

const levenDistCtrl = function levenDistCtrl($scope, $window) {

  $scope.englishWords = englishWords;

  $scope.matchWords1 = [];
  $scope.matchWords2 = [];

    { title:'Word 1', content:'Dynamic content 1', index:'1' },
  function updateMatches(newWord) {
    if ($scope.bestMatches.length <= 4) {
      $scope.bestMatches.push(newWord);
    } else {
      $scope.bestMatches.forEach( (bestMatchWord, index) => {
        if (newWord.editDistance <= bestMatchWord.editDistance) {
          bestMatches.splice(index, 0, bestMatchWord); 
          if (bestMatches.length > 4) { bestMatches.pop() };
          return;
        }
      })
    }
  }

  // recalculate each time either string changes
  $scope.calcLevenDistFly = (str1, str2) => {
    // reset count variables
    let j, i;
    // reset edit distance arrays
    let string2LenArr = [], finArr;
    // update string lengths
    // $scope.string1 = $scope.string1.length ? $scope.string1 : ``;
    // $scope.string2 = $scope.string2.length ? $scope.string2 : ``;
    let lenString1 = str1.length;
    let lenString2 = str2.length || 0;
    for (j = 0; j <= lenString2; j++) {
      string2LenArr[j] = j; 
    }
    for (i = 1; i <= lenString1; i++) {
      for (finArr = [i], j = 1; j <= lenString2; j++) {
        finArr[j] = 
          str1[i - 1] === str2[j - 1] 
          ? string2LenArr[j - 1] 
          : Math.min(string2LenArr[j - 1], string2LenArr[j], finArr[j - 1]) + 1;
      }
      string2LenArr = finArr;
    }
    return finArr[lenString2] || 0;
  }

  function spellCheck(wordToCheck) {
    let i;
    let bestMatchDist = 100000;
    let bestMatch = ``;
    for (var word in $scope.englishWords) {
      let wordDist = $scope.calcLevenDistFly(wordToCheck, word);
      if (wordDist < bestMatchDist) {
        bestMatch = word;
        bestMatchDist = wordDist;
      }
    }
    console.log(`Best Match: `, bestMatch, bestMatchDist)
    let bestMatchDef = $scope.englishWords[bestMatch];
    console.log(`DEF`, bestMatchDef);
    $scope.bestMatch = bestMatch;
    updateMatches(bestMatch);
  }

  // initialize default values
  $scope.string1 = ``;
  $scope.string2 = ``;
  $scope.levenDist = 0;

};

export { levenDistCtrl }

