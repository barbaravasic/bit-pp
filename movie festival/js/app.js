var programList=[];

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

Program.prototype.getInfo = function(){
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

    var createdMovie = new Movie(title, length, genre);
    var chooseMovieInput = document.querySelector("#choose-movie");
    var optionMovie = document.createElement("option");
    optionMovie.textContent = createdMovie;
    chooseMovieInput.appendChild(optionMovie);
    

    var movieList = document.querySelector("#movie-list");
    var p = document.createElement("p");
    p.textContent = createdMovie.getData();
    movieList.appendChild(p);

    pLength.textContent = myProgram.calculateTotalLength();
    totalLength.appendChild(pLength);
   
}

function createProgram(){
    var dateInput = document.querySelector("#date");
    var date = dateInput.value;
    var myProgram = new Program(date);
    programList.push(myProgram);

    var programInfo = document.querySelector("#program-info");
    var pProgramInfo = document.createElement("p");
    pProgramInfo.textContent = myProgram.getInfo();
    programInfo.appendChild(pProgramInfo);
}

function addMovie() {
    var chooseMovieInput = document.querySelector("#choose-movie");
    var chosenMovie = chooseMovieInput.value;

    var chooseProgramInput = document.querySelector("#choose-program");
    var chosenProgram = chooseMovieInput.value;

    // chosenProgram.addMovie(chosenMovie);
    var test = document.querySelector("#test");
    var testing = document.createElement("p");
    testing.textContent = chosenProgram + chosenMovie;
    test.appendChild(testing);
}