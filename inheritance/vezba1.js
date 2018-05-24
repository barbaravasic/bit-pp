

var person = {
    language: "chinese",
    say: function (he) {
        return "hey " + he + " i speak " + this.language;
    }
}

console.log(person.say("you"));

var programmer = {
    language: "js",
    hobby: "singing"
}

var progSay = person.say.bind(programmer, "you")
console.log(person.say.call(programmer, "you"));
console.log(person.say.apply(programmer, ["you"]));
console.log(progSay());


class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    sayHi() {
        return `hello ${this.name} ${this.surname}`;
    }

}

class Programmer extends Person {
    constructor(name, surname, age, hobby, job) {
        super(name, surname, age); // call() method
        this.hobby = hobby;
        this.job = job;

    }
}


const barbara = new Person("barbara", "vasic", 26);

const milica = new Programmer("milica", "mit", 25, "photo", "dev");
console.log(milica.job);


console.log(milica.sayHi());
console.log(barbara.sayHi());







