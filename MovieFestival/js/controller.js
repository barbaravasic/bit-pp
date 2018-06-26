import * as ui from './ui_module.js';
import * as data from './data_module.js';

const addMovieHandler = () => {
    const collectedData = ui.collectInputs();
    const isValid = data.isValid(collectedData.title, collectedData.length, collectedData.genre);
    if (!isValid) {
        ui.displayError();
        return
    }
    const createdMovie = data.createMovie(collectedData.title, collectedData.length, collectedData.genre);
    ui.displayMovie(createdMovie);
    ui.displayMovieLength(data.calculateMoviesLength())
}

export const init = () => {
    const addMovieBtn = document.querySelector("#button-movie");
    addMovieBtn.addEventListener("click", addMovieHandler)
}