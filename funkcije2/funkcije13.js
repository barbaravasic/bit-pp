function humanizeNumber(num) {
    if (typeof num == "undefined") {
        return;
    }

    if (num % 100 >= 11 && num % 100 <= 13) {
        return num + "th";
    }

    switch (num % 10) {
        case 1:
            return num + "st";
        case 2:
            return num + "nd";
        case 3:
            return num + "rd";
    }
    return num + "th";
}

console.log(humanizeNumber());
   console.log(humanizeNumber(1));
   console.log(humanizeNumber(8));
   console.log(humanizeNumber(301));
   console.log(humanizeNumber(402));
