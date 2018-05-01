function multiplicationTable(n) {
    var result = "";

    for (var i = 1; i <= n; i++) {
        result += "\n"
        for (var j = 1; j <= n; j++) {
            result += i * j + " ";
            
        }
        console.log(result);
    }
    
}

multiplicationTable(12);