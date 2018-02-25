const levenDistCtrl = function levenDistCtrl($scope) {

  function calcLevenDist(string1, string2) {
    const lenString1 = string1.length;
    const lenString2 = string2.length;
    let t = [];

    for (let j = 0; j <= lenString2; j++) { 
      t[j] = j; 
    }

    for (let i = 1; i <= lenString1; i++) {
      for (let u = [i], let j = 1; j <= lenString2; j++) {
        u[j] = string1[i - 1] === string2[j - 1] ? t[j - 1] : Math.min(t[j - 1], t[j], u[j - 1]) + 1;
      } t = u;
    } return u[lenString2];

  }

};

export { levenDistCtrl }

