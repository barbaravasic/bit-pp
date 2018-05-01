function findMaximum (arr) {
    max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (a[i] > max && typeof a[i] === "number") {
            max = a[i];
        }
    }

    return max;
}

a = [2, 5, "65", "7", 8, 12, -4, 5, 45];
console.log(findMaximum(a));