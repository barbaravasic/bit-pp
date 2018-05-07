function changePlace(arr, n){
    var newArr = [];
    for (var i = n; i < arr.length; i++){
        newArr[newArr.length] = arr[i];
    }
    for (var j = 0; j < n; j++){
        newArr[newArr.length] = arr[j];
    }
    return newArr;
}

console.log(changePlace([1,2,3,4,5,6], 2))