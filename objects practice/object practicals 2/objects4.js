// Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
	
// 	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"


function alphabeticalOrder(someString) {
    var someArray = someString.split(" ");
    var newArray = [];
    for (var i = 0; i < someArray.length; i++) {
     newArray[newArray.length] = someArray[i].split("").sort().join("");
    }
    
    return newArray.join(" ");
}
console.log(alphabeticalOrder("Republic Of Serbia"));