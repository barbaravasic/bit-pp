function greatestCommonDivisor(a, b) {
    var divisor = 0;
    for (var i = 1; i <= a && i <= b; i++) {
        if (a % i === 0 && b % i === 0) {
            divisor = i;
        }
    }

    return divisor;
}

console.log(greatestCommonDivisor(81, 9));