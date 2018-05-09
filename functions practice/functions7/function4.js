// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".

// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

"use strict";

function celsiusToFahrenheit(celsius) {
    var fahrenheit = 0;
    fahrenheit = celsius * 1.8 + 32;

    return celsius + "°C is " + fahrenheit + "°F";
}

console.log(celsiusToFahrenheit(35));

function fahrenheitToCelsius(fahrenheit) {
    var celsius = 0;
    celsius = (fahrenheit - 32) / 1.8;

    return fahrenheit + "°F is " + celsius + "°C";
}

console.log(fahrenheitToCelsius(95));
