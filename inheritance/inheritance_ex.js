function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}

Employee.prototype.getData = function () {
    return this.name + " " + this.surname + ", " + this.salary;
}

Employee.prototype.getSalary = function () {
    console.log(this.salary);
}

Employee.prototype.increaseSalary = function (percent) {

    var sum = percent * (this.salary / 100) + this.salary;
    return sum;
}


function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}

Developer.prototype.getSpecialization = function () {
    console.log(this.specialization);
}

function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}

Manager.prototype.getDepartment = function () {
    console.log(this.department);
}

Manager.prototype.changeDepartment = function (newDep) {

    return this.department = newDep;

}

var milica = new Manager("Milica", "Mitrovic", "manager", 1500, "quality control");
// var barbara = new Person("Barbara", "Vasic");
var barbara = new Employee("Barbara", "Vasic", "actress", 1000);
var jelena = new Developer("Jelena", "Ristic", "programmer", 1000, "back-end");


// milica.getDepartment();
// console.log(barbara);
console.log(barbara.increaseSalary(10));
// console.log(jelena);
