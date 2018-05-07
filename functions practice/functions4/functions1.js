function isInArray(someArray, someElement) {
    var output ="";

    for (var i = 0; i < someArray.length; i++) {
        if (someArray[i] === someElement) {
            output = "yes";
            break;
        }
        output = "no";
    }

    return output;
}

var a = [5, -4.2, 3, 7];
var e = 3;

console.log(isInArray(a, e));
