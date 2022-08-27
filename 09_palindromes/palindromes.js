const palindromes = function (word) {

  let lowerCase = word.toLowerCase();
  
  // const regex = RegExp[/.,!/g]; //object
  let punct = lowerCase.replace('!', '');
  
  console.log(punct);
  
  let toArray = Array.from(punct);
  let rev = [...toArray].reverse();
  
  if(toArray.toString() === rev.toString()) {
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
