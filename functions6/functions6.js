function centigradeToFahrenheit (temp) {
    var fahrTemp = 1;

    fahrTemp = temp * 1.8 + 32;

    return fahrTemp;
}

console.log(centigradeToFahrenheit(30));