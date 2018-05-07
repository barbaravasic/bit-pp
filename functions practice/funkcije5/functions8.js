function reverseOrder(someString) {
    var newString = "";

    for (var i = someString.length-1; i >= 0; i--) {
        newString += someString[i];
    }
    return newString;
}

console.log (reverseOrder("Belgrade Institute of Technology"));