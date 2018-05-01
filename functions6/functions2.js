function combineArrays(arrA, arrB) {
    var newArray = [];
    var longerArr;

    if (arrA > arrB) {
        longerArr = arrA;
    } else {
        longerArr = arrB;
    }

    for (var i = 0; i < longerArr.length; i++) {
        // if (i < arrA.length) {
            newArray[newArray.length] = arrA[i];
        // }
        // if (i < arrB.length) {
            newArray[newArray.length] = arrB[i];
        // }
        
    }

    return newArray;
}

console.log(combineArrays(["a", "b", "c"], [1, 2, 3, 4, 5]));