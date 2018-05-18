"use strict!";

(function () {

    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }

    function Person(name, surname, dateofbirth) {
        this.name = name;
        this.surname = surname;
        this.dateofbirth = new Date(dateofbirth);
        this.age = parseInt((Date.now() - (new Date(dateofbirth).getTime())) / 31536000000);      
    }

    Person.prototype.getData = function () {
        return this.name + this.surname + ", " + this.dateofbirth;
    }

    function Player(person, betAmount, country) {
        if (!(person instanceof Person)) {
            return;
        } else {
            this.person = person;
        }

        this.betAmount = betAmount;

        if (!(country instanceof Country)) {
            return;
        } else {
            this.country = country;
        }
    }

    Player.prototype.getBetInfo = function (country) {
        var winAmount = this.country.odds * this.betAmount + " eur";
        return this.country.name + ", " +  winAmount + ", " + this.person.getData();
    }

    function Address(country, city, postalcode, street, housenumber) {
        this.country = country;
        this.city = city;
        this.postalcode = postalcode;
        this.street = street;
        this.housenumber = housenumber;
    }

    Address.prototype.getAddress = function () {
        return this.street + " " + this.housenumber + ", " + this.postalcode + " " + this.city + ", " + this.country.name;

    }

    function BettingPlace(address) {
        var sum 
        this.address = address;
        this.listOfPlayers = [];
    }
    BettingPlace.prototype.addAPlayer = function(player) {
        this.listOfPlayers.push(player);
    }

    BettingPlace.prototype.totalBets = function () {
        var totalBetsAmount = 0;
        for (var i = 0; i < this.listOfPlayers.length; i++) {
           totalBetsAmount += this.listOfPlayers[i].betAmount
        }

        return totalBetsAmount + "eur";
    }

    BettingPlace.prototype.getData = function () {
        return this.adress.street + ", " + this.adress.postalcode + " " + this.adress.city + ", sum of all bets: " + this.totalBets();
    }

    function BettingHouse(competition, bettingPlace) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numberOfPlayers = bettingPlace.listOfPlayers.length;
    }

    BettingHouse.prototype.addBettingPlaces = function(bettingPlace) {
        this.listOfBettingPlaces.push(bettingPlace);
    }

    var Continent = Object.freeze({
        ASIA: "AS",
        EUROPE: "EU",
        AFRICA: "AF",
        SOUTH_AMERICA: "SA",
        NORTH_AMERICA: "NA",
        AUSTRALIA: "AU"
    })

    function createAPlayer (firstname, surname, dateofbirth, betAmount, country) {
        var createdPerson = new Person (firstname, surname, dateofbirth);
        var createdPlayer = new Player (createdPerson, betAmount, country);
        return createdPlayer;
    }

    function createBettingPlace (country, city, postalcode, street, housenumber) {
        var createdAddress = new Address (country, city, postalcode, street, housenumber);
        var createdBettingPlace = new BettingPlace (createdAddress);
        return createdBettingPlace;
    }
    // Country
    var serbia = new Country ("SR", 2.45, Continent.EUROPE);
    var france = new Country ("FR", 1.56, Continent.EUROPE);
    var china = new Country("CH", 5.78, Continent.ASIA)


    // Person
 
    var jelena = new Person("Jelena", "Ristic", "9 14 1976");

    // Betting House

    var betHouse1 = new BettingHouse ("Jedrenje", betPlace1);
    betHouse1.addBettingPlaces(betPlace1);


    var player1 = createAPlayer("Barbara", "Vasic", "11.07.1991", 1500, serbia);
    var player2 = createAPlayer("Jelena", "Ristic", "9.14.1976", 1500, france);
    var player3 = createAPlayer("Lazar", "Vasic", "01.08.1995", 1500, china);
    var player4 = createAPlayer("Mika", "Mikic", "4.28.1968", 1500, france);
    var betPlace1 = createBettingPlace (serbia, "Belgrade", 11000, "Nemanjina", 4)
 
    console.log(betHouse1);
    

})()