function joinIntoString(arr) {
    var newString = "";

    for (i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string" || isFinite(arr[i]) && typeof arr[i] !== "object") {
                newString += arr[i];
        }
    }
    return newString;
}

var a = [NaN, 0, 15, false, -22, '', undefined, 47, null];
console.log(joinIntoString(a));


