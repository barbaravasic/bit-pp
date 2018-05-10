var a = 20;

function f(n) {
    var result = n + a;
    var a = 30;
    return result;
}

console.log(f(5));


