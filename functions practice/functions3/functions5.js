function lastElements(n = 1, arr) {
    var newArray = [];
    var p = n;
    for (var i = 0; i < arr.length; i++) {
        if (p === n || p > 0) {
            newArray[i] = arr[arr.length - (1 + (n-p))];
            --p;
        }
    }
    return newArray;
}

var someArray = [7, 9, 0, -2];
console.log(lastElements(3,someArray));