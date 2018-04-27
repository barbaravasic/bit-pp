function filterOutFalsy(arr) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (!arr[i]) {

            continue;
        }
        newArray[newArray.length] += arr[i];
    }

    return newArray;
}

var ar = [NaN, 0, 15, false, -22, '', undefined, 47, null];
console.log(filterOutFalsy(ar));