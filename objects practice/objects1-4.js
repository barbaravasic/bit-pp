function alphabeticalOrder(someString) {
    var someArray = someString.split(" ");
    var newArray = [];
    for (var i = 0; i < someArray.length; i++) {
     newArray[newArray.length] = someArray[i].split("").sort().join("");
    }
    
    return newArray;
}
console.log(alphabeticalOrder("Republic Of Serbia"))