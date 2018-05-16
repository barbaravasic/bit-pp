"use strict";

var programList = [];
var unsortedMoviesList = []
var movieIndex = 0;
var programIndex = 0;

function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
}

Movie.prototype.getData = function () {
    var genreID1 = this.genre.slice(0, 1);
    var genreID2 = this.genre.slice(this.genre.length - 1);
    var genreID = (genreID1 + genreID2).toUpperCase();

    var output = this.title + ", " + this.length + "min, " + genreID;
    return output;
}

function Program(date) {
    this.date = new Date(date).toDateString();
    this.movieList = [];
}

Program.prototype.addMovie = function (movie) {
    this.movieList.push(movie);
}

Program.prototype.calculateTotalLength = function () {
    var totalMovieLength = 0;

    this.movieList.forEach(function (movie) {
        totalMovieLength += movie.length;
    })
    return totalMovieLength;
}

Program.prototype.getInfo = function () {
    return this.date;
}


var totalLength = document.querySelector("#total-length");
var pLength = document.createElement("p");


function createMovie() {
    var titleInput = document.querySelector("#title");
    var lengthInput = document.querySelector("#length");
    var genreInput = document.querySelector("#genre");

    var title = titleInput.value;
    var length = parseInt(lengthInput.value);
    var genre = genreInput.value;
    // create Movie
    var createdMovie = new Movie(title, length, genre);
    unsortedMoviesList.push(createdMovie);

    titleInput.value = "";
    lengthInput.value = "";
    genreInput.value = "";

    // Make movie options
    var chooseMovieInput = document.querySelector("#choose-movie");
    var optionMovie = document.createElement("option");
    optionMovie.textContent = unsortedMoviesList[movieIndex].title;
    optionMovie.value = movieIndex;
    chooseMovieInput.appendChild(optionMovie);
    movieIndex++;

    // Movie info
    var movieList = document.querySelector("#movie-list");
    var p = document.createElement("p");
    p.textContent = createdMovie.getData();
    movieList.appendChild(p);

    pLength.textContent = myProgram.calculateTotalLength();
    totalLength.appendChild(pLength);

}




function createProgram() {
    var dateInput = document.querySelector("#date");
    var date = dateInput.value;

    // Create Program
    var myProgram = new Program(date);
    programList.push(myProgram);

    dateInput.value = "";

    // Make program options
    var chooseProgramInput = document.querySelector("#choose-program");
    var optionProgram = document.createElement("option");
    optionProgram.textContent = programList[programIndex].date;
    optionProgram.value = programIndex;
    chooseProgramInput.appendChild(optionProgram);
    programIndex++;

    // make program info
    var programInfo = document.querySelector("#program-info");
    var pProgramInfo = document.createElement("p");
    pProgramInfo.textContent = myProgram.getInfo();
    programInfo.appendChild(pProgramInfo);
}

function addMovie() {
    var chooseMovieInput = document.querySelector("#choose-movie");
    var chosenMovieIndex = chooseMovieInput.value;

    var chooseProgramInput = document.querySelector("#choose-program");
    var chosenProgramIndex = chooseProgramInput.value;

    var chosenProgram = programList[chosenProgramIndex];
    var chosenMovie = unsortedMoviesList[chosenMovieIndex];

    chosenProgram.addMovie(chosenMovie);

    var test = document.querySelector("#test");
    var testing = document.createElement("p");
    testing.textContent = chosenProgram.date + " " + chosenMovie.title;
    test.appendChild(testing);
}