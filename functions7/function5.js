

function octalToDecimal(octalNum) {
    var toString = octalNum + "";
    var finalString = reverseStr(toString);
    var number = 0;
    for (var i = 1; i < finalString.length; i++) {
        number += (parseInt(finalString[i] * on8th(i)));
    }
    return number;
}



function on8th(num) {
    var result = 1;
    for (var i = 0; i < 8; i++) {
        result *= num;
    }
    return result;
}

function reverseStr(str) {
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

console.log(octalToDecimal(034));
