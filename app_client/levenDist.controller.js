import englishWords from './dictionaries/dictionary.json';

const levenDistCtrl = function levenDistCtrl($scope, $window) {
  
  $scope.englishWords = englishWords;
  $scope.bestMatches = [];

  function updateMatches(newWord) {
    $scope.bestMatches.forEach( (bestMatchWord, index) => 
      if (newWord.editDistance <= bestMatchWord.editDistance) {
        bestMatches.splice( 1, 0, "baz"); 
      }
    )
  }
  
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

  $scope.spellCheck = (wordToCheck) => {
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
  }

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
    $scope.spellCheck($scope.string1);
  }

  $scope.activeTab = 0;


$scope.tabs = [
    { title:'Word 1', content:'Dynamic content 1', index:'1' },
    { title:'Word 2', content:'Dynamic content 2', index:'2' },
    { title:'Word 3', content:'Dynamic content 3', index:'3' },
    { title:'Word 4', content:'Dynamic content 4', index:'4' },
  ];

  $scope.activePill = $scope.tabs[0];

  $scope.alertMe = function() {
    setTimeout(function() {
      $window.alert('You\'ve selected the alert tab!');
    });
  };

  $scope.model = {
    name: 'Tabs'
  };
};

export { levenDistCtrl }

