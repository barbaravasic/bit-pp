var val1 = 5;
var val2 = 3;
var val3 = 7;

function drawStars(a, b, c) {
     var line1="";
     var line2="";
     var line3="";
     var star1 = "";
     var star2 = "";
     var star3 = "";
     var asterisk = "* ";
     var star = "*";
    for (i = 1; i <= a-1; i++) {
        star1 += asterisk;
    }
    line1 = star1 + star;
    console.log(line1);

    for (j = 1; j <= b-1; j++) {
        star2 += asterisk;
    }
    line2 = star2 + star;
    console.log(line2);

    for (z = 1; z <= c-1; z++) {
        star3 += asterisk;
    }
    line3 = star3 + star;
    console.log(line3);
}

drawStars(val1, val2, val3);