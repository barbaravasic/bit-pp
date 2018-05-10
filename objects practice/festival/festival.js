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
        this.genre = genre.name;
        this.length = length + "min";

        this.getData = function () {
            var movieData = this.title + ", " + this.length + ", " + genre.getData();
            return movieData;
        }
    }

    function Program(date) {
        this.date = new Date (date);
        this.listOfMovies = [];
        this.totalNumberOfMovies = this.listOfMovies.length;
        this.addMovie = function (movie) {
            return this.listOfMovies.push(movie);
        }
    }

    function Festival(name) {

        this.name = name;
        this.listOfPrograms = [];
        // proveriti!!!
        this.numberInPrograms = this.listOfPrograms.forEach(function (program) {
            counter += program.listOfMovies.length;
            return counter;
        });

        this.addProgram = function (program) {
            return this.listOfPrograms.push(program);
        }
    }

    var action = new Genre("action");
    var avengers = new Movie("Avengers", action, 90);
    var program1 = new Program("01.05.2018");
    var fest1 = new Festival ("Fest1");

    program1.addMovie(avengers);
    fest1.addProgram(program1);


    console.log(program1.totalNumberOfMovies);



})();