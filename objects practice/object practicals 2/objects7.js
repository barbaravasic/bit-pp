// Write a function that can pad (left, right) a string to get to a determined length.

// 	'0000', 123, 'l' -> 0123 
// '00000000', 123, 'r' -> 12300000

function padEndString (someStr, someNumber) {
    var stringOutOfNumber = someNumber.toString();
    
  return someStr.slice(0,1). padEnd(4, stringOutOfNumber);
 
}

console.log(padEndString("0000", 123));

function padStartString (someStr, someNumber) {
  var stringOutOfNumber = someNumber.toString();
  
return someStr.slice(0, 5).padStart(8, stringOutOfNumber);

}

console.log(padStartString("00000000", 123));

