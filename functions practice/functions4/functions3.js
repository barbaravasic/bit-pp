function minOfArray(someArray) {
    var min = a[0];
    var index = 0;
    var output = "";

    for (var i = 0; i < someArray.length; i++) {
        if ( a[i] < min) {
            min = a[i];
            index = i;
        }
    }
    output = min + "," + index;

    return output;
}

a = [4, 2, 2, -1, 6];

console.log(minOfArray(a));