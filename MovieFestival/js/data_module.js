const store = {
    movies: []
}

class Movie {
    constructor(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    }
    getData() {
        const genreFirstLetter = this.genre.slice(0, 1);
        const genreLastLetter = this.genre.slice(this.genre.length - 1);
        const genreID = (`${genreFirstLetter}${genreLastLetter}`).toUpperCase();

        const output = `${this.title}, ${this.length}min, ${genreID}`;
        return output;
    }
}

class Program {
    constructor(date) {
        const inputDate = new Date(date);
        this.date = `${inputDate.getDate()}.${inputDate.getMonth()}.${inputDate.getFullYear()}`;
        this.movieList = [];
    }
    addMovie(movie) {
        this.movieList.push(movie);
    }

    moviesLength() {
        let moviesLength = 0;
        this.movieList.forEach(function (movie) {
            moviesLength += parseInt(movie.length);
        })
        return moviesLength;
    }

    getInfo() {
        let output = "";
        if (this.moviesLength.length === 0) {
            output = `${this.date}, program duration: TBA`;
        } else {
            output = `${this.date}, ${this.movieList.length} movies, ${this.moviesLength()} min`;
        }
        return output;
    }
}

export const createMovie = (title, length, genre) => {
    const createdMovie = new Movie(title, length, genre);
    store.movies.push(createdMovie);
    return createdMovie;
}

export const isValid = (title, length, genre) => {
    if (!title || !length || !genre) {

        return false;
    }

    if (length > 250) {
        return false;
    }

    return true;
}

export const calculateMoviesLength = () => {
    let totalLength = 0;
    store.movies.forEach(movie => {
        totalLength += movie.length;
    })
    return totalLength;
}


