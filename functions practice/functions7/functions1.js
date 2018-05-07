// Why pay a fortune teller when you can just program your fortune yourself?
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

var tellFortune = (function(numberOfChildren, partner, location, job) {
    return "You will be a " + job + " in " + location + ", and married to " + partner + " with " + numberOfChildren + " kids."
}(2,"Nikola", "Novi Sad", "web developer" ));


console.log(tellFortune);