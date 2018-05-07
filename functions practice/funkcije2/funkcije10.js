function firstFewCharact(n, word) {
    var newWord = "";
    var dots = "...";
    for (var i = 0; i < n; i++) {
        newWord+=word
    } newWord += dots;
    return newWord;
}
console.log(firstFewCharact(5, "lupetanje"));