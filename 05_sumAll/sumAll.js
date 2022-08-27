const sumAll = function(num1, num2) {

    if ((Number.isInteger(num1)) && (Number.isInteger(num2))) {

    if ((num1 < 0) || (num2 < 0)) {
        let finalSum = "ERROR";
        return finalSum;
    }

    if (num1 < num2) {
        let i = num1;
        let finalSum = 0;

        while (i <= num2) {
            finalSum += i;
            i++;
        }
        return finalSum;
    } else { 
        let i = num2;
        let finalSum = 0;

        while (i <=num1) {
            finalSum += i;
            i++;
        }
        return finalSum;
    }

    } else {
        let finalSum = "ERROR";
        return finalSum;
    }
};

sumAll(1, 4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
