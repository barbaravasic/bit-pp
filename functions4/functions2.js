function multiplyPositive(a) {

    for (var i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            a[i] *= 2;
        }
    }
    return a;
}

arr = [-3, 11, 5, 3.4, -8];

console.log(multiplyPositive(arr));