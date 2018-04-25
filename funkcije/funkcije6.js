var val1 = 5;
var val2 = 3;
var val3 = 7;

function drawStars(a, b, c) {
    star1 ="";
    star2 = "";
    star3= "";
    asterisk = "*";
    for (i = 1; i <= a; i++) {
        star1 += asterisk;
    }
    console.log(star1);
    for (j = 1; j <= b; j++){
        star2 += asterisk;
    }
    console.log(star2);

    for (z = 1; z <= c; z++){
        star3 += asterisk;
    }
    console.log(star3);
}

drawStars(val1, val2, val3);