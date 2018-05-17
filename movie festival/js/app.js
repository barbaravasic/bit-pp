"use strict";

var programList = [];
var unsortedMoviesList = []
var movieIndex = 0;
var programIndex = 0;


var titleInput = document.querySelector("#title");
var lengthInput = document.querySelector("#length");
var genreInput = document.querySelector("#genre");
var chooseMovieInput = document.querySelector("#choose-movie");
var chooseProgramInput = document.querySelector("#choose-program");
var dateInput = document.querySelector("#date");



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
    var inputDate = new Date(date);
    this.date = inputDate.getDate() + "." + inputDate.getMonth() + "." + inputDate.getFullYear();
    this.movieList = [];
}

Program.prototype.addMovie = function (movie) {
    this.movieList.push(movie);
}

Program.prototype.moviesLength = function () {
    var moviesLength = 0;
    this.movieList.forEach(function (movie) {
        moviesLength += parseInt(movie.length);
    })
    return moviesLength;
}


Program.prototype.getInfo = function () {
    var output = "";
    if (this.moviesLength.length === 0) {
        output = this.date + ", " + "program duration:" + "TBA";
    } else {
        output = this.date + ", " + this.movieList.length + " movies" + ", " + this.moviesLength() + " min"
    }
    return output;
}


var validationOutput = document.querySelector(".first");
var validOut = document.createElement("p")
validationOutput.appendChild(validOut);

function createMovie() {
    var divMovieList = document.querySelector("#movie-list");
    var liItem = document.createElement("li");


    var title = titleInput.value;
    var length = parseInt(lengthInput.value);
    var genre = genreInput.value;


    if (!title || !length || !genre) {

        validOut.textContent = "All fields required!";
        validOut.classList.add("validation");
        return;
    }

    validOut.textContent = "";

    // create Movie
    var createdMovie = new Movie(title, length, genre);
    unsortedMoviesList.push(createdMovie);

    titleInput.value = "";
    lengthInput.value = "";
    genreInput.value = "";

    // Make movie options
    var optionMovie = document.createElement("option");
    optionMovie.textContent = unsortedMoviesList[movieIndex].title;
    optionMovie.value = movieIndex;
    chooseMovieInput.appendChild(optionMovie);
    movieIndex++;

    var sumTotalLength = 0;
    unsortedMoviesList.forEach(function (movie) {
        sumTotalLength += movie.length;

    })
    var totalLength = document.querySelector("#total-length");
    var pLength = document.createElement("p");
    totalLength.appendChild(pLength);
    pLength.textContent = sumTotalLength;

    // Movie info

    liItem.textContent = createdMovie.getData();
    divMovieList.appendChild(liItem);
}

var validationOutput2 = document.querySelector(".second");
var validOut2 = document.createElement("p")
validationOutput2.appendChild(validOut2);


// var programData = pProgramInfo.textContent;

function createProgram() {
    var date = dateInput.value;

    if (!date) {

        validOut2.textContent = "Please select date";
        validOut2.classList.add("validation");
        return;
    }

    // Create Program
    var myProgram = new Program(date);
    programList.push(myProgram);

    dateInput.value = "";

    // Make program options
    var optionProgram = document.createElement("option");
    optionProgram.textContent = programList[programIndex].date;
    optionProgram.value = programIndex;
    chooseProgramInput.appendChild(optionProgram);
    programIndex++;

    // make program info
    var programInfo = document.querySelector("#program-info");
    var pProgramInfo = document.createElement("li");
    pProgramInfo.textContent = myProgram.getInfo();
    programInfo.appendChild(pProgramInfo);

}


function addMovie() {

    var chosenMovieIndex = chooseMovieInput.value;
    var chosenProgramIndex = chooseProgramInput.value;

    var chosenMovie = unsortedMoviesList[chosenMovieIndex];
    var chosenProgram = programList[chosenProgramIndex];

    chosenProgram.addMovie(chosenMovie);

    var allProgramInfo = document.querySelectorAll("#program-info li");

    allProgramInfo.forEach(function(program){
        if(program)
    })
    pProgramInfo.textContent = chosenProgram.date + " " + chosenMovie.title;

}

var btnMovie = document.querySelector("#button-movie");
var btnProgram = document.querySelector("#button-program");
var btnAddMovie = document.querySelector("#add-movie-button");

btnMovie.onclick = createMovie;
btnProgram.onclick = createProgram;
btnAddMovie.onclick = addMovie;