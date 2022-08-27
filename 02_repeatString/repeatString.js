const repeatString = function(string, num) {

    for (let i = 0; i <= num; i++) {
        if (string === "") {
            return emptyString = "";
        } else {
        let string = "hey";
        return string2 = string.repeat(num);
        }
    }
    if (num < 0) {
        return string3 = "ERROR";
    } 
};


// repeatString('hey',3);
// repeatString('hey',10);
repeatString('hey',1);
// repeatString('hey',0);
// repeatString('hey',-1);
// repeatString('hey', number);
// repeatString(" ",10);


// Do not edit below this line
module.exports = repeatString;
