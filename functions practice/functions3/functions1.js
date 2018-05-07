function insertString(word, sent, num = 1) {
    var newStr = "";
    word = " " + word + " ";
    num -= 1;
    for (var i = 0; i < sent.length; i++) {
        
        if (num === i) {
            newStr += word;
            sent[i + 1] = sent[i];
        }

        if (i > num) {
            sent[i + 1] = sent[i];
            newStr += sent[i];
        } else {
            newStr += sent[i];
        }
        
    }

    return newStr;
}

var newWord = "JS";
var newSentence = "My random string";
var number = 10;

console.log(insertString(newWord, newSentence, number));