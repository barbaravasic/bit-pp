// Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
//        var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//        var LOWER = 'abcdefghijklmnopqrstuvwxyz';

// "The Quick Brown Fox" -> "tHE qUICK bROWN fOX"

function swapTheCase(someString) {
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    var newString = "";
    for (var i = 0; i < someString.length; i++) {
        for (var j = 0; j < UPPER.length; j++) {
            if (someString[i] === UPPER[j]) {
                newString += someString[i].toLowerCase();
            }
            if (someString[i] === LOWER[j]) {
                newString += someString[i].toUpperCase();
            }
        }
        if (someString[i] === " ") {
            newString += someString[i];
        }
    }

    return newString;
}

console.log(swapTheCase("The Quick Brown Fox"));