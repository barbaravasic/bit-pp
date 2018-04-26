var number = 5;

function drawSquare(size) {
    
    var star2 = "";
    var asterisk = "*";
    var space = " ";

    for (var i = 1; i <= size; i++) {
        if (i === 1 || i === size) {
            var star = "";
            for (var j = 1; j <= size; j++) {
                star += asterisk;
            }
            console.log(star);

        } else {
            var space2 = "";
            for (var z = 1; z <= size-2; z++) {
                space2 +=space;
            }
            star2 = asterisk + space2 + asterisk;
            console.log(star2);
        }
    }
}
drawSquare(number);
