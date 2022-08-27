const reverseString = function(string) {
    let stringSplit = string.split("");
    let stringRev = stringSplit.reverse("");
    let wordRev = stringRev.join("");
    return wordRev;

    //return string.split('').reverse().join('');  is a much cleaner solution!
};

reverseString("hello");
reverseString("hello there");
reverseString("123! abc!");
reverseString("");

// Do not edit below this line
module.exports = reverseString;
