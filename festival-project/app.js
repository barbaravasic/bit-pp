"use strict";

var titleInput = document.querySelector("#title");
var durationInput = document.querySelector("#duration");
var genreInput = document.querySelector("#genre");
var chooseMovieInput = document.querySelector("#choose-movie");
var chooseProgramInput = document.querySelector("#choose-program");
var dateInput = document.querySelector("#date");
var divMovieList = document.querySelector("#movie-list");

var createMovieValidDiv = document.querySelector(".first");
var totalLength = document.querySelector("#total-length");
var createMovieValidOutput = document.createElement("p")
createMovieValidDiv.appendChild(createMovieValidOutput);
var pLength = document.createElement("p");
var programValidationOutputDiv = document.querySelector(".second");
var programValidation = document.createElement("p")
programValidationOutputDiv.appendChild(programValidation);
var programInfo = document.querySelector("#program-info");

var programList = [];
var unsortedMoviesList = [];

function Movie(title, duration, genre) {
    this.title = title;
    this.duration = duration;
    this.genre = genre;
}

Movie.prototype.getData = function () {
    var genreID1 = this.genre.slice(0, 1);
    var genreID2 = this.genre.slice(this.genre.length - 1);
    var genreID = (genreID1 + genreID2).toUpperCase();

    var output = this.title + ", " + this.duration + "min, " + genreID;
    return output;
}

function Program(date) {
    this.date = new Date(date);
    this.movieList = [];
}

Program.prototype.addMovie = function (movie) {
    this.movieList.push(movie);
}

Program.prototype.moviesDuration = function () {
    var moviesDuration = 0;
    this.movieList.forEach(function (movie) {
        moviesDuration += parseInt(movie.duration);
    })
    return moviesDuration;
}


Program.prototype.getInfo = function () {
    var output = "";
    if (this.movieList.length === 0) {
        output = this.date + ", " + "program duration:" + "TBA";
    } else {
        output = this.date + ", " + this.movieList.length + " movies" + ", " + this.moviesDuration() + " min"
    }
    return output;
}

function createMovie() {

    var liItem = document.createElement("li");


    var title = titleInput.value;
    var duration = parseInt(durationInput.value);
    var genre = genreInput.value;

    // Create Movie Validation
    if (!title || !duration || !genre) {

        createMovieValidOutput.textContent = "All fields required!";
        createMovieValidOutput.classList.add("validation");
        return;
    }

    createMovieValidOutput.textContent = "";

    // create Movie
    var createdMovie = new Movie(title, duration, genre);
    unsortedMoviesList.push(createdMovie);

    titleInput.value = "";
    durationInput.value = "";
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
        sumTotalLength += movie.duration;

    })

    totalLength.appendChild(pLength);
    pLength.textContent = sumTotalLength;

    // Movie info

    liItem.textContent = createdMovie.getData();
    divMovieList.appendChild(liItem);
}



function createProgram() {
    var date = new Date(dateInput.value);

    if (!dateInput.value) {
        programValidation.textContent = "Please select date";
        programValidation.classList.add("validation");
        return;
    }

   

    if (date.getTime() < Date.now()) {
        programValidation.textContent = "Invalid date!";
        programValidation.classList.add("validation");
        return;
    }
    var hasProgramWithSameDate = programList.some(function (program) {
        return date.getTime() === program.date.getTime();
    })

    if (hasProgramWithSameDate) {
        programValidation.textContent = "Program for same date already exists";
        programValidation.classList.add("validation");
        return;
    }
    programValidation.textContent = "";
    

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
    var programInfoLi = document.createElement("li");
    programInfoLi.textContent = myProgram.getInfo();
    programInfo.appendChild(programInfoLi);

}

function addMovie() {

    var chosenMovieIndex = chooseMovieInput.value;
    var chosenProgramIndex = chooseProgramInput.value;

    var chosenMovie = unsortedMoviesList[chosenMovieIndex];
    var chosenProgram = programList[chosenProgramIndex];

    var programListElements = document.querySelectorAll("#program-info li");
    var programSelectOptions = document.querySelectorAll("#choose-program option");


    var movie = unsortedMoviesList[chosenMovieIndex];
    var program = programList[chosenProgramIndex];
    var oldProgramData = program.getInfo();

    program.addMovie(movie);

    programListElements.forEach(function (li) {
        if (li.textContent === oldProgramData) {
            li.textContent = program.getInfo();
        }
    });

    programSelectOptions.forEach(function (option) {
        if (option.textContent === oldProgramData) {
            option.textContent = program.getInfo();
        }
    });

}




var btnMovie = document.querySelector("#button-movie");
var btnProgram = document.querySelector("#button-program");
var btnAddMovie = document.querySelector("#add-movie-button");

btnMovie.addEventListener("click", createMovie);
btnProgram.addEventListener("click",  createProgram);
btnAddMovie.addEventListener("click", addMovie);