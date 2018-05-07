"use strict";

var a = (function (numbers) {
    var newArray = [];

    for (var i = 0; i < numbers.length; i++) {
        if (i === 0) {
            newArray[i] = numbers[numbers.length - 1];
        }else if (i === numbers.length - 1) {
            newArray[i] = numbers[0];
        } else {

            newArray[i] = numbers[i];
        }

    }
    return newArray;
})([4, 5, 11, 9]);


console.log(a);

