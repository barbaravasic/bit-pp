function wordSeparator(sentence, separator) {
    var newSent ="";
    if (typeof separator === "undefined") {
        separator = "-";
    }
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] === " ") {
           newSent += separator;
        } else {
            newSent += sentence[i];
        }
    }
    return newSent;
    
}

console.log(wordSeparator("My random string"));