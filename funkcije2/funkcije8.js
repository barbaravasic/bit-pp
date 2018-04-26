function isPrimeNumber(number) {
    if(number <= 0) {
        return false;
    }

    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrimeNumber(2));