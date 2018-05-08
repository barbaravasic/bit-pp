// Write a function that can pad (left, right) a string to get to a determined length.

// 	'0000', 123, 'l' -> 0123 
// '00000000', 123, 'r' -> 12300000

function padString (someStr, someNumber) {
    var stringOutOfNumber = someNumber.toString();
    
  return someStr.padStart(4, stringOutOfNumber);
 
}

console.log(padString("0000", 123));

