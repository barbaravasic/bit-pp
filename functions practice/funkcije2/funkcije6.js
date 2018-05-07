function charOccurrence(word, char) {

    if (typeof word !== "string") {
        return false;
    }
    var place = 0;
    for (var i = word.length - 1; i >= 0; i--) {
        if (word[i] === char) {
            place = i + 1;
            return place;

        }

    } return -1;

}

console.log(charOccurrence("hello", "l"));