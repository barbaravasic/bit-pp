var e = 78;
var p = 3; 
var a = [2, -2, 33, 12, 5, 8];
temp = 0;
temp2 = 0;

for (var i = 0; i < a.length; i++) {
    if ( i === p) {
       temp = a[i];
       a[i] = e;
       temp2 = a[i+1];
       a[i+1] = temp;
       a[i+2] =  temp2;
    } 
   
}
console.log(a);