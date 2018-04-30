/* Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
 Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
 */

function firstTwoLetters(a) {
    var newString = "";

    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a[i].length; j++) {
            if (a[i].length >= 2 && j <2) {
                newString += a[i][j];
            }
        }
    }

    return newString;
}

console.log(firstTwoLetters([ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]));

