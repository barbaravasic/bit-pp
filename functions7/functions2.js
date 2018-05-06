// You know how old your dog is in human years, but what about dog years? Calculate it!

// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.

// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
"use strict";

function calculateDogAge(dogAge = 0, humanYears = 0) {
    if (dogAge <= 0) {

        dogAgeCalculator = function(){
            return "Please insert your dog's age";
        };
    } else {

        var dogAgeCalculator = function (dogAge) {
            var newDogAge = 1;
            newDogAge = dogAge * 7;
            return  "Your doggie is " + newDogAge + " years old in dog years!";
        }
    }

    if (humanYears <= 0) {
        
        humanYearsCalculator = function(){
            return "Please insert your dog's age in human years"
        };
    } else {
        var humanYearsCalculator = function(humanYears) {
            var newHumanYears = 1;
            newHumanYears = humanYears / 7;
            return "Your doggie is " + newHumanYears + " years old in human years!";
        }
    }
    return dogAgeCalculator(dogAge) + "\n" + humanYearsCalculator(humanYears);
}

console.log(calculateDogAge(7, 0));