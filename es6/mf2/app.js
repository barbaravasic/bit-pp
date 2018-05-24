//DATA
const dataModule = (function () {

    const store = {
        movies: []
    }

    class Movie {
        constructor(title, length, genre) {
           this.title = title;
           this.length = parseInt(length);
           this.genre = genre;

    }

    getMovieInfo() {
        return `${this.title}, ${this.genre}`;
    }

    }



    //validation
    const isValid = ({title, length, genre}) => {

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
    const createMovie = ({title, length, genre}) => {
        const createdMovie = new Movie(title, length, genre);
        store.movies.push(createdMovie);
        return createdMovie;
    }

    //movieLength
    const calculateMovieLength = () => {
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
const uiModule = (function() {

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

    const clearInput = () => {
        titleInput.value = "";
        genreInput.value = "";
        lengthInput.value = "";
    }

    const displayError = () => {
        const validation = document.querySelector(".validation");
        validation.textContent = "Invalid input!";
    }

    const displayMovie = movie => {
        const movieListUl = document.querySelector("#movie-list");
        const li = document.createElement("li");
        li.textContent = movie.getMovieInfo();
        movieListUl.appendChild(li);

    }

    const displayMovieLength = totalLength => {
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
       
        const isValid = data.isValid(collectedData);
        
        if (!isValid) {
            ui.displayError(isValid);
            return
        }

        const createdMovie = data.createMovie(collectedData);
        ui.displayMovie(createdMovie);
        ui.clearInput();
        ui.displayMovieLength(data.calculateMovieLength());

    })

})(dataModule, uiModule)