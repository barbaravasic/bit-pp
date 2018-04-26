function convert(arr){
    var newArr = [];
   for(var i =0; i <arr.length;i++){
       newArr[i]=Number(arr[i]);
   } 
   return newArr;
}
var arR = ["1", "21", undefined, "42", "1e+3", Infinity];
console.log(convert(arR));