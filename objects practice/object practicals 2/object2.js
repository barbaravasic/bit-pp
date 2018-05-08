function reverseNumber(number){
    var stringOfNumber = number.toString().split("").reverse().join("");

    return parseInt(stringOfNumber);

}

console.log(typeof reverseNumber(12345));