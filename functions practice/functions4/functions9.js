function deletesAnElement (e, a) {
    var newArray = [];

    for (var i = 0; i < a.length; i++) {
        if (a[i] !== e) {
            newArray[newArray.length] = a[i];
        }
    } 

    return newArray;
}

var arr =[4, 6, 2, 8, 2, 2];
var el = 2;

console.log(deletesAnElement(el, arr));