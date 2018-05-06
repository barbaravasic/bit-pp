"use strict"

function isOdd (number) {
    if (number % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

var filterElements = (function (someArray, checkIfOdd) {
    var newArray = [];

    for (var i = 0; i < someArray.length; i++) {
        if(checkIfOdd(someArray[i])) {
            newArray[newArray.length] = someArray[i];
        }
    }
    return newArray;
})( [2, 8, 11, 4, 9, 3], isOdd);

console.log(filterElements);