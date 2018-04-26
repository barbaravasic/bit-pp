function stringToArray(str) {
    var newArr = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            newArr[i] = null;
        } else {
            newArr[i] = str[i];
        }
    }
    return newArr;
}

var sentence = "My random string";
console.log(stringToArray(sentence));