// Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output:  { minValue: -2, minLastIndex: 6 }

function findMinimum(input) {
    var value = {};
    var numbersArr = [];
    var minValue = input[0];
    var lastIndex = 0;

        minValue = Math.min([1, 4, -2, 11, 8, 1, -2, 3])
    


    value.minValue = minValue;
    value.lastIndex = lastIndex;
    console.log();
    return value;
}

console.log(findMinimum([1, 4, -2, 11, 8, 1, -2, 3]));
