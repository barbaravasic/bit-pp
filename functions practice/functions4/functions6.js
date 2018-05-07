function isSymmetric (someArray) {
    var output ="";

    for (var i = 0; i < someArray.length; i++) {
        for ( var j = someArray.length - 1; j >= 0; j--) {
            if (someArray[i] === someArray[j]) {
                output = "The array is symmetric!"
            }else {
                output="The array is NOT symmetric!"
            }
        }
    }
    return output;
}

var a =  [2, 4, -2, 7, -2, 4, 2]
 console.log(isSymmetric(a));