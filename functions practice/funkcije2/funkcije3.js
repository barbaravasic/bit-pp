
function writeWord(word, nTimes) {
    var concWord = "";
    if (nTimes < 1 || typeof word !=="string") {
        return concWord;
    }

    

    for (var i = 0; i < nTimes; i++) {
        concWord += word;
    }

    return concWord;
}
console.log(writeWord(5,5));


// var ha = "Ha";
// var number = 30;
// console.log(writeWord("na", 6));
function helloWord() {
    console.log("hello");
}

helloWord();



