const fibonacci = function(x) {
    const seqArray = [1,1];

    if (x < 0) {
        return "OOPS";
    }

    for (i = 0; i < x; i++) {
        let newValue = (seqArray[seqArray.length - 1]) + (seqArray[seqArray.length - 2]);
        seqArray.push(newValue);
    }

    return parseInt(seqArray[x - 1]);
};

//

// Do not edit below this line
module.exports = fibonacci;
