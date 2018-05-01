function frequency(arr) {
    var mostFrequent = arr[0];
    var occurNum = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            counter = 0;
            if (a[i] === a[j]) {
                counter++;
            }
        }

        if (occurNum < counter) {
            mostFrequent = a[i];
            occurNum = counter;
        }
    }
    return mostFrequent;
}
a = [8, 4, 1, 2, 7, 5, 1, 1, 2, 5];

console.log(frequency(a));