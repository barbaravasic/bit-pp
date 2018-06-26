"use strict";

var programList = [];
var unsortedMoviesList = []

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


var createMovieValidDiv = document.querySelector(".first");
var createMovieValidOutput = document.createElement("p")
createMovieValidDiv.appendChild(createMovieValidOutput);

function createMovie() {
    var divMovieList = document.querySelector("#movie-list");
    var liItem = document.createElement("li");


    var title = titleInput.value;
    var length = parseInt(lengthInput.value);
    var genre = genreInput.value;


    if (!title || !length || !genre) {

        createMovieValidOutput.textContent = "All fields required!";
        createMovieValidOutput.classList.add("validation");
        return;
    }

    createMovieValidOutput.textContent = "";

    // create Movie
    var createdMovie = new Movie(title, length, genre);
    unsortedMoviesList.push(createdMovie);

    titleInput.value = "";
    lengthInput.value = "";
    genreInput.value = "";

    // Make movie options

    var optionMovie = document.createElement("option");
    for (var i = 0; i < unsortedMoviesList.length; i++) {
        optionMovie.textContent = unsortedMoviesList[i].title;
        optionMovie.value = i;
        chooseMovieInput.appendChild(optionMovie);
    }
    
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

var createMovie2 = document.querySelector(".second");
var validOut2 = document.createElement("p")
createMovie2.appendChild(validOut2);


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

    for (var i = 0; i < programList.length; i++) {
        optionProgram.textContent = programList[i].date;
        optionProgram.value = i;
        chooseProgramInput.appendChild(optionProgram);
    }

    // make program info

    // pProgramInfo.textContent = myProgram.getInfo();
    
}
var programInfo = document.querySelector("#program-info");
var pProgramInfo = document.createElement("li");
programInfo.appendChild(pProgramInfo);


function addMovie() {

    var chosenMovieIndex = chooseMovieInput.value;
    var chosenProgramIndex = chooseProgramInput.value;

    var chosenMovie = unsortedMoviesList[chosenMovieIndex];
    var chosenProgram = programList[chosenProgramIndex];

    chosenProgram.addMovie(chosenMovie);

    var allProgramInfo = document.querySelectorAll("#program-info li");
    var programData = chosenProgram.getInfo();
    allProgramInfo.forEach(function (program) {
        if (program.textContent !== programData) {
           
            program.textContent = chosenProgram.getInfo();
            
        }
    })
    
}

var btnMovie = document.querySelector("#button-movie");
var btnProgram = document.querySelector("#button-program");
var btnAddMovie = document.querySelector("#add-movie-button");

btnMovie.onclick = createMovie;
btnProgram.onclick = createProgram;
btnAddMovie.onclick = addMovie;