//DATA
const dataModule = (function () {

    const store = {
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
    function isValid(title, length, genre) {

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
    function createMovie(title, length, genre) {
        const createdMovie = new Movie(title, length, genre);
        store.movies.push(createdMovie);
        return createdMovie;
    }

    //movieLength
    function  calculateMovieLength() {
        let totalMovieLength = 0;
        store.movies.forEach(function (movie) {
            totalMovieLength += movie.length;
        })
        return totalMovieLength;
    }


    return {
        isValid,
        createMovie,
        store,
        calculateMovieLength

    }


})();


//UI
const uiModule = (function () {
    const titleInput = document.querySelector("#title");
    const genreInput = document.querySelector("#genre");
    const lengthInput = document.querySelector("#length");

    const collectedData = function () {

        const title = titleInput.value;
        const genre = genreInput.value;
        const length = lengthInput.value;

        return {
            title,
            genre,
            length
        }
    }

    const clearInput = function () {
        titleInput.value = "";
        genreInput.value = "";
        lengthInput.value = "";
    }

    const displayError = function () {
        const validation = document.querySelector(".validation");
        validation.textContent = "Invalid input!";
    }

    const displayMovie = function (movie) {
        const movieListUl = document.querySelector("#movie-list");
        const li = document.createElement("li");
        li.textContent = movie.getMovieInfo();
        movieListUl.appendChild(li);

    }

    const displayMovieLength = function (totalLength) {
        const totalLengthDiv = document.querySelector("#total-length");
        totalLengthDiv.textContent = totalLength;

    }

    return {
        collectedData,
        displayError,
        displayMovie,
        clearInput,
        displayMovieLength
    }
})();


//MAIN
const main = (function (data, ui) {

    const addMovieBtn = document.querySelector("#button-movie");

    addMovieBtn.addEventListener("click", function () {
        
        const collectedData = ui.collectedData();
       
        const isValid = data.isValid(collectedData.title, collectedData.length, collectedData.genre);
        if (!isValid) {
            ui.displayError(isValid);
            return
        }

        const createdMovie = data.createMovie(collectedData.title, collectedData.length, collectedData.genre);
        ui.displayMovie(createdMovie);
        ui.clearInput();
        ui.displayMovieLength(data.calculateMovieLength());

    })

})(dataModule, uiModule)