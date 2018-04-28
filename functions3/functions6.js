function createArray(n, v = null) {
    var newArray = [];
    newArray.length = n;

    for (var i = 0; i < newArray.length; i++) {
        newArray[i] = v;
    }

    return newArray;
}

var numberOfElements = 2;
var value = "none";

console.log(createArray(numberOfElements));