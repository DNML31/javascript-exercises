const palindromes = function (word) {

    let lowerCase = word.toLowerCase();
    let toArray = Array.from(lowerCase);
    //delete punctuation here
    let rev = [...lowerCase].reverse();
  
    // const onlyLetters = (function(element) {
    //   if(element !== '.' || element !== ',' || element !== '!') {
    //     return true;
    //   }
    // })

    // rev.filter(onlyLetters);



      const mapWord = rev.map(function (element) {
          if (element === '.' || element === ',' || element === '!') {
            delete rev.element;
            // the punctuations are not being deleted
          }
      });
  
      if(rev.toString() === toArray.toString()) {
          return true;
      } else if (rev.toString() !== toArray.toString()) {
          return false;
      }
  };

//PUNCTUATION AND CAPITALIZATION SHOULD BE DISREGARDED
//spaces?
//filter method to only let letters pass?

// Do not edit below this line
module.exports = palindromes;
