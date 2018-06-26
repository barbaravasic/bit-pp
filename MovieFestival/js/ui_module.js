export const collectInputs = () => {
    const titleInput = document.querySelector("#title");
    const lengthInput = document.querySelector("#length");
    const genreInput = document.querySelector("#genre"); 

    const title = titleInput.value;
    const length = parseInt(lengthInput.value);
    const genre = genreInput.value;

    return {
        title,
        length,
        genre
    }
}

export const displayError = () => {
    const createMovieValidDiv = document.querySelector(".first");
    const createMovieValidOutput = document.createElement("p");
    createMovieValidOutput.textContent = "All fields required!";
    createMovieValidOutput.classList.add("validation");

    createMovieValidDiv.appendChild(createMovieValidOutput);
}

export const displayMovie = (movie) => {
    const movieListUl = document.querySelector("#movie-list");
    const li = document.createElement("li");
    li.textContent = movie.getData();
    movieListUl.appendChild(li);

}

export const displayMovieLength = (totalLength) => {
    const totalLengthDiv = document.querySelector("#total-length");
    totalLengthDiv.textContent = totalLength;
}