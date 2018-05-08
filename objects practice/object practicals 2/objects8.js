// Write a function to capitalize the first letter of a string and returns modified string.

// "js string exercises" -> "Js string exercises"

function capitalizeFirstLetter (someString) {
    var first = someString.substring(0,1).toUpperCase();
    var second = someString.slice(1);
    return first + second;
}

console.log(capitalizeFirstLetter("js string exercises"))
