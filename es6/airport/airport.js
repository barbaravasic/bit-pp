"use strict";

(function () {
    class Person {
        constructor(name, surname) {

            this.name = name;
            this.surname = surname;
        }
        getData() {
            return `${this.name}  ${this.surname}`;
        }

    }

    class Seat {
        constructor(number, category) {
            number = number || Math.floor(Math.random() * (100 - 10) + 10);
            category = category || "e";

            this.number = number;
            this.category = category.toUpperCase();
        }
        getData() {
            return `${this.number} ${this.category}`;
        }

    }

    class Passenger extends Person {
        constructor(name, surname, seat) {
            super(name, surname);

        }

        changeSeatCategoryOutput() {
            if (this.seat.category === "B") {
                return this.seat.category = "business";
            } else {
                return this.seat.category = "economy";
            }
        }
        getData() {
            return `${this.seat.number}, ${this.changeSeatCategoryOutput()}, ${this.person.getData()}`;
        }

    }

    class Flight {

        constructor(relation, date) {

            this.relation = relation;
            const inputDate = new Date(date);
            this.date = `${inputDate.getMonth() + 1}. ${inputDate.getDate()}. ${inputDate.getFullYear()}`;
            this.listOfPassengers = [];

        }

        addPassenger(passenger) {

            try {
                for (let i = 0; i < this.listOfPassengers.length; i++) {
                    if (this.listOfPassengers[i].seat.number === passenger.seat.number) {


                        throw `${passenger.person.name}'s seat number is already taken`
                    }
                }
            } catch (err) {
                console.log(err);
                passenger.seat.number = Math.floor(Math.random() * (100 - 10) + 10);
            }

            try {
                for (let i = 0; i < this.listOfPassengers.length; i++) {
                    if (passenger.person.getData() === this.listOfPassengers[i].person.getData())
                        throw "There is already a person with that name on the list"
                }
            } catch (err) {

                console.log(err);
                this.listOfPassengers[i] = passenger;
            }

            try {
                this.listOfPassengers.push(passenger);
                if (this.listOfPassengers.length > 100)

                    throw "There can be only 100 passengers"
            } catch (err) {
                console.log(err);
                this.listOfPassengers.pop();
            }
        }

        totalInBusiness() {

            let counter = 0;
            this.listOfPassengers.forEach(function (passenger) {
                if (passenger.seat.category === "business") {
                    counter++;
                }
            })
            return counter;
        }

        getData() {
            let output = "";
            let passOutput = "";
            this.listOfPassengers.forEach(function (passenger) {
                passOutput += `      ${passenger.getData()} 
                                `;

            })
            output = `${this.date}, ${this.relation}. In business category: ${this.totalInBusiness()}
                            `;

            return output + passOutput;
        }

    }



    function Airport(name) {

        this.name = name;
        this.listOfFlights = [];
    }

    Airport.prototype.addFlight = function (flight) {

        return this.listOfFlights.push(flight);
    }

    Airport.prototype.getData = function () {
        let output = "";
        let flightOutput = "";
        let totalNumberOfPassengers = 0;
        let totalNumberOfPassengersInBusiness = 0;

        this.listOfFlights.forEach(function (flight) {
            totalNumberOfPassengers += flight.listOfPassengers.length;
            totalNumberOfPassengersInBusiness += flight.totalInBusiness();
        })
        this.listOfFlights.forEach(function (flight) {

            flightOutput += `       ${flight.getData()}
            `;

        })

        output = `Airport:${this.name}, total number of passengers:${totalNumberOfPassengers}.Total in business: ${totalNumberOfPassengersInBusiness}
        `;
        return output + flightOutput;

    }


    function createFlight(relation, date) {
        const createdFlight = new Flight(relation, date);

        return createdFlight;
    }

    function createPassenger(name, surname, seatNumber, category) {
        const createdPerson = new Person(name, surname);
        const createdSeat = new Seat(seatNumber, category);
        const createdPassenger = new Passenger(createdPerson, createdSeat);

        return createdPassenger;
    }

    // Persons
    const johnSnow = new Person("John", "Snow");
    const cercei = new Person("Cercei", "Lannister");

    // Seats
    const johnseat = new Seat(12, "b");
    const cerceiseat = new Seat(48, "e");

    // Passengers

    const pass1 = createPassenger("John", "Snow", 1, "b");
    const pass2 = createPassenger("Cercei", "Lannister", 1, "b");
    const pass3 = createPassenger("Daenerys", "Targaryen", 14);
    const pass4 = createPassenger("Tyrion", "Lannister");


    // Flights

    const flight1 = createFlight("Belgrade-Paris", "Oct 25 2017");
    const flight2 = createFlight("Belgrade-New York", "11.11.2017");

    flight1.addPassenger(pass1);
    flight1.addPassenger(pass2);
    flight2.addPassenger(pass3);
    flight2.addPassenger(pass4);

    flight1.numberOfPassengers = flight1.listOfPassengers.length;
    flight2.numberOfPassengers = flight2.listOfPassengers.length;

    // Airport
    const airport1 = new Airport("Nikola Tesla");

    airport1.addFlight(flight1);
    airport1.addFlight(flight2);


    console.log(airport1.getData());

})()