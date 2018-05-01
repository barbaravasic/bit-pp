// function switchMinMax(a) {
//     var min = a[0];
//     var max = a[0];
//     var minIndex = 0;
//     var maxIndex = 0;

//     for (var i = 0; i < a.length; i++) {
//         if (a[i] < min) {
//             min = a[i];
//             minIndex = i;
//         }
//         if (a[i] > max) {
//             max = a[i];
//             maxIndex = i;
//         }
//     }

//     a[maxIndex] = min;
//     a[minIndex] = max;

//     return a;
// }

// console.log(switchMinMax([3, 500, 12, 149, 53, 414, 1, 19]));

// zadatak 2
// Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
// Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

function changingValues(a) {
    var newArray = [];

    for (var i = 0; i < a.length; i++) {
        var newElement = a[i] / 2 + 5;

        if (newElement !== 0) {
            newArray[i] = newElement;
        } else {
            newArray[i] = 20;
        }
    }
    return newArray;
}

console.log(changingValues([3, 500, -10, 149, 53, 414, 1, 19]));

// zadatak 3

// Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names 
// with their corresponding grade. Use the following ranges:
// 51-60 -> 6,
// 61-70 -> 7,
// 71-80 -> 8,
// 81-90 -> 9,
// 91-100 -> 10.
// Input : [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
// Output: Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.


function displayGrades(names, points) {
    var output = "";

    for (var i = 0; i < names.length; i++) {
        var grade = 0;
        if (points[i] <= 50) {
            grade = 5;
        } else if (points[i] > 50 && points[i] <= 60) {
            grade = 6;
        } else if (points[i] > 61 && points[i] <= 70) {
            grade = 7;
        } else if (points[i] > 71 && points[i] <= 80) {
            grade = 8;
        } else if (points[i] > 81 && points[i] <= 90) {
            grade = 9;
        } else if (points[i] > 91 && points[i] <= 100) {
            grade = 10;
        }

        if (grade === 5) {
            output += names[i] + " acquired " + points[i] + " points" + " and failed" + " to complete the exam! " + "\n";
        } else {
            output += names[i] + " acquired " + points[i] + " points" + " and earned " + grade + "! " + "\n";
        }

    }
    return output;
}


console.log(displayGrades(["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"], [50, 39, 63, 72, 99, 51, 83, 59]));

/*Zadatak 4 

Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]
*/

function sortArray(a) {

    for (var i = 0; i < a.length - 1; i++) {
        var position = i;
        for (var j = i; j < a.length; j++) {
            if (a[position] > a[j]) {
                position = j;
            }
        }

        var tmp = a[i];
        a[i] = a[position];
        a[position] = tmp;
    }

    return a;
}

function multipliedBy2(a) {
    var newArray = [];
    var copyArray = sortArray(a);
    // console.log(copyArray, a);
    
    for (var i = 0; i < copyArray.length; i++) {
        newArray[i] = copyArray[i] * 2;
    }

    return newArray;
}

var arr = [13, 11, 15, 5, 6, 1, 8, 12]
console.log(multipliedBy2(arr));

// zadatak 5

// Sort a previously defined array in a descending order and display it in the console.
// Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]

function sortArray(a) {

    for (var i = 0; i < a.length - 1; i++) {
        var position = i;
        for (var j = i; j < a.length; j++) {
            if (a[position] < a[j]) {
                position = j;
            }
        }

        var tmp = a[i];
        a[i] = a[position];
        a[position] = tmp;
    }

    return a;
}

console.log(sortArray( [ 13, 11, 15, 5, 6, 1, 8, 12 ]));


function bubbleSort (a) {
    var max = a[0];
    for (var i =0; i< a.length; i ++) {
        for( var j = 0; j < a.length-1; j++) {
            if (a[j] < a[j+1]) {
                max = a[j +1];
                a[j+1] = a[j];
                a[j] = max;
            }
        }
    }
    return a;
}
numbers =[ 13, 11, 15, 5, 6, 1, 8, 12 ];
console.log(bubbleSort(numbers));

/*zadatak 6

Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000*/

































