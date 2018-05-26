const dataModule = (function () {

    class Show {
        constructor(name, id, posterUrl, description, rating) {
            this.name = name;
            this.id = id;
            this.posterUrl = posterUrl;
            this.description = description;
            this.rating = rating;
        }

        getShowName() {
            return `${this.name}`;
        }

    }

    class Seasons {
        constructor(startDate, endDate, numOfSesaons) {
            this.startDate = startDate;
            this.endDate = endDate;
            this.numOfSesaons  = numOfSesaons;
        }
    }

    return {
        listOfAllShows: [],
        top50Shows: [],
        listOfSeasons: [],
        fetchShow(success, failed) {
            const request = $.ajax({
                url: `http://api.tvmaze.com/shows`,
                method: "GET"
            }).done((response) => {
                response.map(show => {
                    const createdShow = new Show(show.name, show.id, show.image.medium, show.summary, show.rating);
                    this.listOfAllShows.push(createdShow);
                })
                this.listOfAllShows.sort((a, b) => {
                    a = a.rating.average;
                    b = b.rating.average;
                    return b - a;
                })
                this.top50Shows = this.listOfAllShows.slice(0, 50);
                success(this.top50Shows);
                console.log(this.top50Shows[2] instanceof Show)

            }).fail((jq, textStatus) => {
                failed();
            })
        },

        chosenShow(evId) {
            const clickedShow = this.listOfAllShows.find(show => {
                return parseInt(evId) === show.id;
            })
            return clickedShow;
        },
        fetchSeasons(success, fail, clickedShow) {
            const request = $.ajax({
                url: `http://api.tvmaze.com/shows/${clickedShow.id}/seasons`,
                method: "GET"
            }).done(response => {
                response.map(season => {
                    const createdSeason = new Seasons(season.premiereDate, season.endDate, response.length);
                    this.listOfSeasons.push(createdSeason);
                })
                console.log(this.listOfSeasons);
                success(clickedShow);
            }).fail((jq, textStatus) => {
                fail();
            })
        }
    }

})()