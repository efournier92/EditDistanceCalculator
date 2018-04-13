import englishDict from './dictionaries/dictionary.json';

const levenDistCtrl = function levenDistCtrl($scope, $window, $uibModal) {

  class Word {
    constructor(name, def, levenDist) {
      this.name = name;
      this.def = def;
      this.levenDist = levenDist;
    }
    // Method
    static newBlankArr() {
      let blankWordArr = [];
      for (let i = 0; i < 4; i++) {
        let blankWord = new Word(``, ``, 1000000);
        blankWordArr.push(blankWord);
      }
      return blankWordArr;
    }
  }

  $scope.openModal = function () {
    $scope.modalInstance = $uibModal.open({
      templateUrl: './infoModal.template.html',
      scope: $scope
    });
  }
  $scope.openModal();

  $scope.closeModal = function () {
    $scope.modalInstance.close();
  }

  // initialize default values
  $scope.reset = () => {
    $scope.levenDist = 0;
    $scope.inputWord1= ``;
    $scope.inputWord2= ``;
    $scope.matchWords1 = Word.newBlankArr();
    $scope.matchWords2 = Word.newBlankArr();
  }

  $scope.englishDict = englishDict;
  $scope.reset();

  // recalculate each time either string changes
  $scope.calcLevenDist = (str1, str2, isMainDist) => {
    // initialize variables
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
    if (isMainDist) {
      $scope.levenDist = finArr[lenString2];
    }
    return finArr[lenString2];
  }

  $scope.spellCheck = (wordToCheck, matchWords) => {
    let i;
    for (var word in $scope.englishDict) {
      let wordDist = $scope.calcLevenDist(wordToCheck, word);
      let newWord = new Word(word, $scope.englishDict[word], wordDist)
      updateMatches(wordToCheck, newWord, matchWords);
      updateDistances(wordToCheck, newWord, matchWords);
    }
  }

  function updateMatches(wordToCheck, newWord, matchWords) {
    for (let i = 0; i < 4; i++) {
      if (newWord.levenDist <= matchWords[i].levenDist) {
        matchWords.splice(i, 0, newWord); 
        matchWords.pop();
        return;
      }
    }
  }

  function updateDistances(wordToCheck, newWord, matchWords) {
    for (let i = 0; i < 4; i++) {
      matchWords[i].levenDist = $scope.calcLevenDist(wordToCheck, matchWords[i].name);
    }
  }
};

export { levenDistCtrl }

