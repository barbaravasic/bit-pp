function secondSmallest(a) {
    var min = a[0];
    var secMin = a[1];

    for (var i = 0; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
        }
        if (a[i] < secMin && secMin === min) {
            secMin = a[i];
        }
    }

    return secMin;
}

var arr = [4, 2, 2, -1, 6];

console.log(secondSmallest(arr));