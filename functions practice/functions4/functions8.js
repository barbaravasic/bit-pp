function concatenateTwoArrays(a, b) {
    var newArray = [];

    for (var i = 0; i < a.length; i++) {
        newArray[newArray.length] = a[i]; 
    }
    for (var j = 0; j < b.length; j++) {
        newArray[newArray.length] = b[j];
    }

    return newArray;
}

var array_a = [4, 5, 6, 2];
var array_b = [3, 8, 11, 9];

console.log(concatenateTwoArrays(array_a, array_b));