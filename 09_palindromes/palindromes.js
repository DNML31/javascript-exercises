const palindromes = function (word) {

  let lowerCase = word.toLowerCase(); //string lowercase
  let noPunct = lowerCase.replace(/[,.!]/g, ''); // erases .,!
  let toArray = Array.from(noPunct); //lowercase array no puncts

  let rev = [...toArray].reverse(); //lowercase array no puncts reversed
  
  if(rev.toString() === toArray.toString()) {
    return true;
  } else {
    return false;
  }
};

//PUNCTUATION AND CAPITALIZATION SHOULD BE DISREGARDED
//spaces?
//filter method to only let letters pass?

// Do not edit below this line
module.exports = palindromes;
