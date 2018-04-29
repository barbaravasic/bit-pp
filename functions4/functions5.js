function sumPositive (someArray) {
    var sum = 0;

    for (var i = 0; i < someArray.length; i++) {
        if (someArray[i] > 0) {
            sum += someArray[i];
        }
    }

    return sum;
}

var arr =  [3, 11, -5, -3, 2];

console.log(sumPositive(arr));