function reverseString(input){
    return input.toLowerCase().split("").reverse().sort().join("");
}
console.log(reverseString("Webmaster"));