function insertAString(randomString, word) {
    var position = 10;
    var newString = "";
    var posFixer = 1;
    word = word + " ";
    for (var i = 0; i < randomString.length; i++) {
        if (i === position) {
            newString += word;
        }
        if (i > position) {
            randomString[i] += randomString[i - posFixer];
            newString += randomString[i];
            
        }
       
        newString += randomString[i];
    }
    return newString;
}

var sentence = "My random string";
var wordToAdd = "JS";

console.log(insertAString(sentence, wordToAdd));