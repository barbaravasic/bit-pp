function findFrequent(someArray) {
    var frequentEl;
    var counter = 0;
    var mostFrequent = 1;
    for (var i = 0; i < someArray.length; i++) {
        for (var j = i; j < someArray.length; j++) {
            if (someArray[i] == someArray[j]) {
                counter++;
            }
            
            if (mostFrequent <counter) {
                mostFrequent = counter;
                frequentEl = someArray[i];
            }
        }
        counter = 0;
    }
    return frequentEl + " ( " + mostFrequent + " times" + ")";
}

var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

console.log(findFrequent(a));