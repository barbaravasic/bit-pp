function charOccurrence(word, char) {

    if (typeof word !== "string") {
        return 0;
    }

    for (var i = 0; i < word.length; i++) {
        if (word[i] === char) {
           return i+1;
        } 
    }

    return -1;
}

console.log(charOccurrence("hello",));