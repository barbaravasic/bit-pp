function Student(name, surname) {
        this.name = name,
        this.surname = surname,

        this.sayHello = function () {
            console.log(this.name + ": hello");
        }
        this.changeLastName = function (newSurname) {
            return this.surname = newSurname;
        }

}

var milos = new Student("Milos", "Djoric");
console.log(milos);
milos.sayHello();

var barbara = new Student("Barbara", "Vasic");
console.log(barbara);
barbara.sayHello();

console.log(barbara.changeLastName("Mitrovic"));
console.log(milos.changeLastName("Bla"));

// console.log(barbara instanceof Student);

// milos.isCooking = function() {
//     console.log(this.name + " is cooking");
// }
// milos.isCooking();

// console.log(milos === barbara);
// var student1 = milos;
// console.log(student1 === milos);

// student1.isStudying = function () {
//     console.log(this.name + " is studying");
// }

// student1.isStudying();

