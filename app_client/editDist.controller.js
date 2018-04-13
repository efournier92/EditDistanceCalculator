import englishDict from './dictionaries/dictionary.json';

const editDistCtrl = function editDistCtrl($scope, $window, $uibModal) {

  class Word {
    // construct Word object
    constructor(name, def, editDist) {
      this.name = name;
      this.def = def;
      this.editDist = editDist;
    }
    // static method to create an array of four blank Words
    static newBlankArr() {
      let blankWordArr = [];
      for (let i = 0; i < 4; i++) {
        // instantiate four Words 
        // set Word.name & Word.def to blank strings
        // set Word.editDist to impossibly high number
        let blankWord = new Word(``, ``, 1000000);
        blankWordArr.push(blankWord);
      }
      return blankWordArr;
    }
  }

  // Load dictionary JSON file into scope
  $scope.englishDict = englishDict;

  // initialize/reset values to default
  $scope.reset = () => {
    $scope.editDist = 0;
    $scope.inputWord1= ``;
    $scope.inputWord2= ``;
    $scope.matchWords1 = Word.newBlankArr();
    $scope.matchWords2 = Word.newBlankArr();
  }
  // reset values on page load
  $scope.reset();

  // recalculate each time either string changes
  $scope.calcEditDist = (str1, str2, isMainDist) => {
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
      $scope.editDist = finArr[lenString2];
    }
    return finArr[lenString2];
  }

  $scope.spellCheck = (wordToCheck, matchWords) => {
    let i;
    for (var word in $scope.englishDict) {
      let wordDist = $scope.calcEditDist(wordToCheck, word);
      let newWord = new Word(word, $scope.englishDict[word], wordDist)
      updateMatches(wordToCheck, newWord, matchWords);
      updateDistances(wordToCheck, newWord, matchWords);
    }
  }

  $scope.openInfoModal = () => {
    $scope.infoModalInstance = $uibModal.open({
      templateUrl: `./infoModal.template.html`,
      scope: $scope
    });
  }

  $scope.closeInfoModal = () => {
    $scope.infoModalInstance.close();
  };

  $scope.openInfoModal();

  function updateMatches(wordToCheck, newWord, matchWords) {
    for (let i = 0; i < 4; i++) {
      if (newWord.editDist <= matchWords[i].editDist) {
        matchWords.splice(i, 0, newWord); 
        matchWords.pop();
        return;
      }
    }
  }

  function updateDistances(wordToCheck, newWord, matchWords) {
    for (let i = 0; i < 4; i++) {
      matchWords[i].editDist = $scope.calcEditDist(wordToCheck, matchWords[i].name);
    }
  }
};

export { editDistCtrl }

