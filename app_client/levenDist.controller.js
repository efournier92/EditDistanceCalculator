import englishDict from './dictionaries/dictionary.json';

const levenDistCtrl = function levenDistCtrl($scope, $window) {

  // initialize default values
  $scope.reset = () => {
    $scope.levenDist = 0;
    $scope.string1 = ``;
    $scope.string2 = ``;
    $scope.matchWords1 = [];
    $scope.matchWords2 = [];
    $scope.englishDict = englishDict;
  }

  $scope.reset();

  class Word {
    constructor(name, def, levenDist) {
      this.name = name;
      this.def = def;
      this.levenDist = levenDist;
    }
  }

  // { title:'Word 1', content:'Dynamic content 1', index:'1' },

    // recalculate each time either string changes
    $scope.calcLevenDist = (str1, str2) => {
      // reset variables
      let j = 0;
      let i = 0;
      let string2LenArr = []
      let finArr = [];
      let lenString1 = str1 ? str1.length : 0
      let lenString2 = str2 ? str2.length : 0

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
      $scope.levenDist = finArr[lenString2] || 0;
      return finArr[lenString2] || 0;
    }

  $scope.spellCheck = (wordToCheck) => {
    let i;
    let bestMatchDist = 100000;
    let bestMatch = ``;
    for (var word in $scope.englishDict) {
      let wordDist = $scope.calcLevenDist(wordToCheck, word);
      let newWord = new Word(word, $scope.englishDict[word], wordDist)
      updateMatches(newWord);
    }
    // console.log(`Best Match: `, bestMatch, bestMatchDist)
    // let bestMatchDef = $scope.englishDict[bestMatch];
    // console.log(`DEF`, bestMatchDef);
    // $scope.bestMatch = bestMatch;
    // updateMatches(bestMatch);
  }


  function updateMatches(newWord) {
    if ($scope.matchWords1.length < 4) {
      $scope.matchWords1.push(newWord);
    } else {
      for (let i = 0; i <= 4; i++) {
        if (newWord.levenDist <= $scope.matchWords1[i].levenDist) {
          $scope.matchWords1.splice(i, 0, newWord); 
          if ($scope.matchWords1.length > 4) { $scope.matchWords1.pop() };
        }
      }
    }
  }

};

export { levenDistCtrl }

