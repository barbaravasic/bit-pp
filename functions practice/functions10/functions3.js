"use strict";

var replaceLetter = (function (word) {
    var counter = 0;
    var newString = "";
    var output ="";
    for (var i = 0; i < word.length; i++) {
        if (word[i] === "m" || word[i] === "M" ) {
            counter++;
            newString += "*";
        } else {
            newString += word[i];
        }
    }
    
    return output = newString + ", " +counter;
})("prograMming");

console.log(replaceLetter);