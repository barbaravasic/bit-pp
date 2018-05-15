

var person = {
    language: "chinese",
    say: function (he) {
        return "hey " + he + " i speak " + this.language ;
    }
}

console.log (person.say("you"));

var programmer = {
    language: "js",
    hobby: "singing"
}

var progSay = person.say.bind(programmer, "you")
console.log(person.say.call(programmer, "you"));
console.log(person.say.apply(programmer, ["you"]));
console.log(progSay());



function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}

Person.prototype.sayHi = function () {
   return "hello " + this.name + " " + this.surname;
}

function Programmer(name, surname, age, hobby, job) {
    Person.call(this, name, surname, age); // call() method
    this.hobby = hobby;
    this.job = job;
}

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer; // vazno!!!!!!!!

var barbara = new Person ("barbara", "vasic", 26);

var milica = new Programmer ("milica", "mit", 25, "photo", "dev");
console.log(milica.job);


console.log(milica.sayHi());
console.log(barbara.sayHi());
