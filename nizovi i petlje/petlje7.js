var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];

for (var i = 0; i < a.length; i++) {
    c[i] = a[i];
    c[i+1] = b[i];
}
console.log(c);