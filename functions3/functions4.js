function reverseANumber(num) {
    var str = num.toString();
    var newStr = "";
    var newNumber = 0;

    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    newNumber = parseInt(newStr);

    return newNumber;

}

console.log(reverseANumber(12345));