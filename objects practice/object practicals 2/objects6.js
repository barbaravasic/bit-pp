// Write a function to convert a string to its abbreviated form. 

// 	"John Snow" -> 	"John S."

function convertAString (someStr) {
    var arrayOutOfString = someStr.split(" ");
    var shortened = arrayOutOfString.pop().substring(0,1);

    return arrayOutOfString.toString() + " " + shortened + ".";
    
}

console.log(convertAString("John Snow"));