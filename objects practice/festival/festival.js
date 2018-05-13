"use strict";

(function () {

    function Genre(name) {
        this.name = name;

        this.getData = function () {
            var uppercaseName = this.name.toUpperCase();
            var genreData = uppercaseName[0] + uppercaseName[uppercaseName.length - 1]
            return genreData;
        }
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;

        try {
            if (typeof length === "string") throw "need to insert a number"
            this.length = length + "min";

        } catch (err) {
            console.log(err);
        }

        this.getData = function () {
            var movieData = this.title + ", " + this.length + ", " + this.genre.getData();
            return movieData;
        }
    }

    function Program(date) {

        var inputDate = new Date(date);
        this.date = inputDate.getMonth() + 1 + "." + inputDate.getDate() + "." + inputDate.getFullYear();
        this.listOfMovies = [];
        this.totalNumberOfMovies = this.listOfMovies.length;

        this.addMovie = function (movie) {
            var counter = 0;
            if (!movie && !(movie instanceof Movie)) {
                console.log("Insert a valid movie");
                return
            }

            for (var i = 0; i < this.listOfMovies.length; i++) {
                if (this.listOfMovies[i].genre.name === movie.genre.name) {
                    counter++;
                }
            }

            if (counter > 3) {
                console.log("There are already 4 movies that are of the same genre as " + movie.title);
                return

            } else {

                this.listOfMovies.push(movie);
            }
        }

        this.totalLengthOfMovies = function () {
            var totalLengthOfMovies = 0;

            this.listOfMovies.forEach(function (movie) {
                totalLengthOfMovies += parseInt(movie.length);
            })

            return totalLengthOfMovies;
        }

        this.getData = function () {
            var outputString = "";
            var programData = "";

            this.listOfMovies.forEach(function (movie) {

                programData += "\t" + movie.getData() + "\n" + "\t";
            })
            return outputString = this.date + ", " + " program duration " + this.totalLengthOfMovies() + ", " + "\n" + "\t" + programData;
        }
    }

    function Festival(name, maxNum) {
        var totalNumOfMovies = 0;
        var numOfMovies = 0;
        this.name = name;
        this.listOfPrograms = [];

        try {
            if (typeof maxNum === "string") throw "You must insert a number";
        } catch (err) {
            console.log(err)
        }

        this.addProgram = function (program) {
            if (!program && !(program instanceof Program)) {
                console.log("Insert a valid movie");
                return
            }
            
            if (program.listOfMovies.length + totalNumOfMovies > maxNum) {
                console.log("You can't have more than " + maxNum + " movies");
               
                return
            }
            this.listOfPrograms.push(program);

            this.listOfPrograms.forEach(function (program) {
                numOfMovies = program.listOfMovies.length;
            })
            totalNumOfMovies += numOfMovies;
        
        }

        this.getData = function () {
            var outputString = "";
            var festivalData = "";

            if(this.listOfPrograms.length === 0) {
                return outputString = "Weekend fetsival" + "\n" + "\t" + "Program to be announced."
            } 

            this.listOfPrograms.forEach(function (program) {
                festivalData += program.getData() + "\n" + "\t";
            })
            return outputString = this.name + " has " + totalNumOfMovies + " movie titles " + "\n" + "\t" + festivalData;
        }
    }

    function createMovie(title, genre, length) {
        var objGenre = new Genre(genre);
        var createdMovie = new Movie(title, objGenre, length);

        return createdMovie;
    }

    function createProgram(date) {
        var createdProgram = new Program(date);

        return createdProgram;
    }

    // Genres:
    var action = new Genre("action");
    var drama = new Genre("drama");

    // Movies:
    var thor2 = createMovie("Thor 2", "action", 120);
    var thor3 = createMovie("Thor 3", "action", 120);
    var loveActually = createMovie("Love Actually", "romance", 100);
    var psycho = createMovie("Psycho", "horror", "120");
    var mrBean = createMovie("Mr. Bean", "comedy", 90);
    var avengers = createMovie("Avengers", "action", 120);
    var avengers2 = createMovie("Avengers 2", "action", 120);
    var avengers3 = createMovie("Avengers 3", "action", 120);
    var blackPanther = createMovie("Black Panther", "action", 120);
    var highRise = createMovie("High Rise", "drama", 120);
    var theApartment = createMovie("The Apartment", "romance", 120);
    var midnight = createMovie("Midnight in Paris", "fantasy", 120);
    var brooks = createMovie("Mr. Brooks", "thriller", 120);

    // Programs:
    var dayOne = createProgram("01.05.2018");
    var dayTwo = createProgram("11.05.2018");

    dayOne.addMovie(thor2);
    dayOne.addMovie(loveActually);
    dayOne.addMovie(psycho);
    dayOne.addMovie(avengers2);
    dayOne.addMovie(avengers3);
    dayOne.addMovie(blackPanther);
    dayOne.addMovie(thor3);

    dayTwo.addMovie(mrBean);
    dayTwo.addMovie(avengers);
    dayTwo.addMovie(blackPanther);
    dayTwo.addMovie(highRise);
    dayTwo.addMovie(theApartment);
    dayTwo.addMovie(midnight);
    dayTwo.addMovie(brooks);


    // Festivals:
    var comicConByBarbaraAndKristina = new Festival("Smotra by Barbara... i Kristina!", 10);
    var fest= new Festival("Festival", 10);

    comicConByBarbaraAndKristina.addProgram(dayOne);
    comicConByBarbaraAndKristina.addProgram(dayTwo);


    console.log(fest.getData());

})()