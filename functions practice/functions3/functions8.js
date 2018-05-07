function findWord(myString, myWord) {
    var n = 0;
    var output = "";
    var myArray = makeArray(myString);

    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] === myWord) {
            ++n;
        }
    }
    output = myWord + " was found " + n + " times";
    return output;
}

function makeArray(myString) {
    var newAr = [];
    var newArray = [];
    var str = "";
    var newStr = "";

    for (var i = 0; i < myString.length; i++) {
        if (myString[i] !== " " ) {
            str += myString[i];
        }
        newStr += str;
        str = "";

        if (myString[i] === " " || myString[i + 1] === undefined) {
            newArray[newArray.length] = newStr;
            newStr = "";
        }
    }

    return newArray;
}

var someString = "aa, bb, cc, dd, aa";
var someWord = "aa";

console.log(findWord(someString, someWord));