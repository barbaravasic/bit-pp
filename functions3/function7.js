function propPosDiv(number) {
    var propDiv = [];

    for (var i = 1; i <= number; i++) {
        if (number % i === 0) {
            propDiv[propDiv.length] = i;
        }
    }

    return propDiv;
}


function sumPosDiv(number) {
    var propDiv = propPosDiv(number);
    var sum = 0;

    for (var i = 0; i < propDiv.length; i++) {

        sum += propDiv[i];
    }

    return sum;
}

function perfectNumber(number) {
    var num = sumPosDiv(number);
    var outpu = "";

    if (num / 2 === number) {
        output = number + " is a perfect number!";
    } else {
        output = number + " is not a perfect number!";
    }

    return output;
}

console.log(perfectNumber( 8128));