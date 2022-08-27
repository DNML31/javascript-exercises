const removeFromArray = function(array, removeMe, removeMe2, removeMe3, removeMe4) {

    const arrayKeep = [];
    const arrayErase = [];
//arguments[0] is used to reference the first argument in the function above
//same for arguments[1]
    for (const check of arguments[0]) {
        if ((check !== arguments[1]) && (check !== removeMe2) && (check !== removeMe3) && (check !== removeMe4)) {
            arrayKeep.push(check);
        } else {
            arrayErase.push(check);
        }
    }
    return arrayKeep;
};

removeFromArray([1, 2, 3, 4], 3);
removeFromArray([1, 2, 3, 4], 3, 2);
removeFromArray([1, 2, 3, 4], 7, "tacos");
removeFromArray([1, 2, 3, 4], 7, 2);
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
removeFromArray([1, 2, 3], "1", 3);

// Do not edit below this line
module.exports = removeFromArray;
