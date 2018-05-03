"use strict";

function arrayOfDigits(number) {
    var newArray = [];
    var str = number + "";

    for (var i = 0; i < str.length; i++) {
        newArray[newArray.length] = str[i];
    }

    return newArray;
}

console.log(arrayOfDigits(5687));