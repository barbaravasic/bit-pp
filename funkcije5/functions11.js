function isAPalindrome (someStr) {
    someString = "";

    for(var i = 0; i < someStr.length; i++){
        if (someStr[i] !== " ") {
            someString += someStr[i];
        }
    }
    console.log(someString);
    for (var i = 0; i < someString.length; i++) {
        for(var j = someString.length-1; j>=0; j--) {
            if (someString[i] !== someString[j])
            return false;
        }
    }

    return true;
}

console.log(isAPalindrome("a nut for a jar of tuna"));