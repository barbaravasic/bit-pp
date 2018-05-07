function findMaxAndMin (a) {
    var newArray =[];
    var max = a[0];
    var min = a[0];
    for (var i = 0; i < a.length; i++) {
        if (a[i] > max && typeof a[i] === "number") {
            newArray[0] = a[i];
        }
        if (a[i] < min &&  typeof a[i] === "number") {
            newArray[1] = a[i];
        }
    }
    return newArray;
}

arr = [2, 5, "65", "7", 8, 12, -4, 5, 45];
console.log (findMaxAndMin(arr));