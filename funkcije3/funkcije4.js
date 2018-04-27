function reverseANumber(number) {
    var newstr = "";
    var a = number.toString();

    for (var i = a.length - 1; i >= 0; i--) {
        newstr += a[i];
    }

    var b = parseInt(newstr);
    return b;
}

console.log(reverseANumber(12345));