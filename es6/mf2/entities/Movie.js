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

module.exports = Movie;