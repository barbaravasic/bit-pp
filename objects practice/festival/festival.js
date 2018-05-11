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
        this.length = length + "min";

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
            if (!movie && !(movie instanceof Movie)) {
                console.log("Insert a valid movie");
                return
            }
            else {
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


    function Festival(name) {

        this.name = name;
        this.listOfPrograms = [];

        this.addProgram = function (program) {
            if (!program && !(program instanceof Program)) {
                console.log("Insert a valid movie");
                return
            }
            else {
                this.listOfPrograms.push(program);
            }
        }


        this.getData = function () {

            var outputString = "";
            var festivalData = "";

            this.listOfPrograms.forEach(function (program) {

                festivalData += program.getData() + "\n" + "\t";
            })

            return outputString = this.name + " has " + this.listOfPrograms.length + " movie titles " + "\n" + "\t" + festivalData;
        }
    }

    function createMovie (title, genre, length) {
         
        var objGenre = new Genre(genre);
        var createdMovie = new Movie(title, objGenre, length);

        return createdMovie;
    }

    function createProgram (date) {
        var createdProgram = new Program (date);

        return createdProgram;
    }


    // Genres:
    var action = new Genre("action");
    var drama = new Genre("drama");


    // Movies:
  
    var thor2 = createMovie("Thor 2", "action", "120");
    var loveActually = createMovie("Love Actually", "romance", "100");
    var psycho = createMovie("Psycho", "horror", "120");
    var mrBean = createMovie("Mr. Bean", "comedy", "90");
    var avengers = createMovie("Avengers", "action", "120");
    var blackPanther= createMovie("Black Panther", "action", "120")

    // Programs:

    var dayOne = createProgram("01.05.2018");
    var dayTwo = createProgram("11.05.2018");

    dayOne.addMovie(thor2);
    dayOne.addMovie(loveActually);
    dayOne.addMovie(psycho);
    dayTwo.addMovie(mrBean);
    dayTwo.addMovie(avengers);
    dayTwo.addMovie(blackPanther);


    // Festivals:

    var comicConByBarbaraAndKristina = new Festival("Smotra by Barbara... i Kristina!");

    comicConByBarbaraAndKristina.addProgram(dayOne);
    comicConByBarbaraAndKristina.addProgram(dayTwo);


    console.log(comicConByBarbaraAndKristina.getData());

})();