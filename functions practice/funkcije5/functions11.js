function isAPalindrome(someStr) {
    someString = "";

    for (var i = 0; i < someStr.length; i++) {
        if (someStr[i] !== " ") {
            someString += someStr[i];
        }
    }
    console.log(someString);
    for (var i = 0; i < someString.length / 2; i++) {

        if (someString[i] !== someString[someString.length - i - 1]) {
            return false;
        }
        return true;
    }
}

console.log(isAPalindrome("a nut for a jar of tuna"));