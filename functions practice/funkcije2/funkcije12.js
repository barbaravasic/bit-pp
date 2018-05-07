function insertAString(randomString, word, position) {
    var positionFixer = 0;
    var newString = "";
    for (var i = 1; i <= randomString.length; i++) {
        if (i === position) {
            positionFixer++;
            newString[i + positionFixer] = randomString[i];
            newString[i] = word + " ";

        }
        newString[i] = randomString[i];
    }
    return newString;
}

console.log(insertAString("My random string", "JS", 10));