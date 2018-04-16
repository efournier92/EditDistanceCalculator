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
        // set Word.editDist to an impossibly high value, to be overidden
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
    // initialize block variables
    let j = 0;
    let i = 0;
    let comparisonArr = [];
    let finArr = [];
    let lenString1 = str1 ? str1.length : 0;
    let lenString2 = str2 ? str2.length : 0;

    // fill array with Y-axis matrix indexes
    for (j = 0; j <= lenString2; j++) {
      comparisonArr[j] = j; 
    }

    // iterate over comparison matrix
    // calculate minimum edit distance for each node
    for (i = 1; i <= lenString1; i++) {
      for (finArr = [i], j = 1; j <= lenString2; j++) {
        finArr[j] = 
          // check if characters are the same
          str1[i - 1] === str2[j - 1] 
          // if same, no change needed
          ? comparisonArr[j - 1] 
          // else minimum edit distance equals the minimum adjacent value plus 1
          : Math.min(comparisonArr[j - 1], comparisonArr[j], finArr[j - 1]) + 1;
      }
      // shift to next row of matrix
      comparisonArr = finArr;
    }
    if (isMainDist) {
      // update scope if comparing two user inputs
      $scope.editDist = finArr[lenString2];
    }
    // last calculated node represents total minimum edit distance
    return finArr[lenString2];
  }

  $scope.findSimilarWords = (wordToCheck, matchWords) => {
    let i;
    // compare each dictionary word to user input string
    for (var word in $scope.englishDict) {
      // calculate edit distance between user input & dictionary word
      let wordDist = $scope.calcEditDist(wordToCheck, word);
      // create new Word object
      let newWord = new Word(word, $scope.englishDict[word], wordDist)
        // update array of best matches to user input
        updateMatches(wordToCheck, newWord, matchWords);
      // update edit distances in array of best matches
      updateEditDistances(wordToCheck, newWord, matchWords);
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

  // close modal if user presses Spacebar
  $scope.closeModalKeyDown = (value) => {
    if (value.keyCode === 32) {
      $scope.closeInfoModal();
    }
  };

  // update match array with newly found word
  function updateMatches(wordToCheck, newWord, matchWords) {
    for (let i = 0; i < 4; i++) {
      if (newWord.editDist <= matchWords[i].editDist) {
        matchWords.splice(i, 0, newWord); 
        matchWords.pop();
        return;
      }
    }
  }

  function updateEditDistances(wordToCheck, newWord, matchWords) {
    for (let i = 0; i < 4; i++) {
      matchWords[i].editDist = $scope.calcEditDist(wordToCheck, matchWords[i].name);
    }
  }

};

export { editDistCtrl }

