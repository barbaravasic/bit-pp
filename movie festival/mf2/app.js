//DATA
var dataModule = (function () {

    var store = {
        movies: []
    }


    function Movie(title, length, genre) {
        this.title = title;
        this.length = parseInt(length);
        this.genre = genre;

    }

    Movie.prototype.getMovieInfo = function () {
        return this.title + ", " + this.genre;
    }


    //validation
    var isValid = function (title, length, genre) {

        if (!title || !length || !genre) {

            return false;
        }

        if (typeof length !== "string") {
            return false;
        }

        if (length > 250) {
            return false;
        }

        return true;
    }


    //createMovie
    var createMovie = function (title, length, genre) {
        var createdMovie = new Movie(title, length, genre);
        store.movies.push(createdMovie);
        return createdMovie;
    }

    //movieLength
    var calculateMovieLength = function () {
        var totalMovieLength = 0;
        store.movies.forEach(function (movie) {
            totalMovieLength += movie.length;
        })
        return totalMovieLength;
    }


    return {
        isValid: isValid,
        createdMovie: createMovie,
        store: store,
        totalLength: calculateMovieLength

    }


})();


//UI
var uiModule = (function () {
    var titleInput = document.querySelector("#title");
    var genreInput = document.querySelector("#genre");
    var lengthInput = document.querySelector("#length");

    var collectedData = function () {

        var title = titleInput.value;
        var genre = genreInput.value;
        var length = lengthInput.value;

        return {
            title: title,
            genre: genre,
            length: length
        }
    }

    var clearInput = function () {
        titleInput.value = "";
        genreInput.value = "";
        lengthInput.value = "";
    }

    var displayError = function () {
        var validation = document.querySelector(".validation");
        validation.textContent = "Invalid input!";
    }

    var displayMovie = function (movie) {
        var movieListUl = document.querySelector("#movie-list");
        var li = document.createElement("li");
        li.textContent = movie.getMovieInfo();
        movieListUl.appendChild(li);

    }

    var displayMovieLength = function (totalLength) {
        var totalLengthDiv = document.querySelector("#total-length");
        totalLengthDiv.textContent = totalLength;

    }

    return {
        collectedData: collectedData,
        displayError: displayError,
        displayMovie: displayMovie,
        clearInput: clearInput,
        displayMovieLength: displayMovieLength
    }
})();


//MAIN
var main = (function (data, ui) {

    var addMovieBtn = document.querySelector("#button-movie");

    addMovieBtn.addEventListener("click", function () {
        
        var collectedData = ui.collectedData();
       
        var isValid = data.isValid(collectedData.title, collectedData.length, collectedData.genre);
        if (!isValid) {
            ui.displayError(isValid);
            return
        }

        var createdMovie = data.createdMovie(collectedData.title, collectedData.length, collectedData.genre);
        ui.displayMovie(createdMovie);
        ui.clearInput();
        ui.displayMovieLength(data.totalLength());

    })

})(dataModule, uiModule)