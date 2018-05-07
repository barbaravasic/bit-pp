function insertsAnElement(e, p, a) {
    var newArray = [];

    for (var i = 0; i < a.length; i++) {
        if (i === p) {
            newArray[newArray.length] = e;
        }

        newArray[newArray.length] = a[i];
    }
    return newArray;
}

var el = 78;
var pos = 3;
var arr = [2, -2, 33, 12, 5, 8];

console.log(insertsAnElement(el, pos,arr));