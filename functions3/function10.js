function arrayElements(arr) {
    var newArray = [];

    for (var i = 0; i < arr.length; i++) {
        newArray[newArray.length] = arr[i];
         
    }
    return newArray;
}

var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

console.log(arrayElements(a));