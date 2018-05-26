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
    class Season {
        constructor(startDate, endDate, numOfSeasons) {
            this.startDate = startDate;
            this.endDate = endDate;
            this.numOfSeasons = numOfSeasons;
        }
        getStartDateEndDate() {
            return `${this.startDate} - ${this.endDate}`;
        }
    }
    class Person{
        constructor(name){
            this.name = name;
        }
    }

    class Actor {
        constructor(person) {
            this.person = person;
        }
    }
    

    return {
        listOfAllShows: [],
        top50Shows: [],
        listOfSeasons: [],
        listOfActors : [],

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
                    const createdSeason = new Season(season.premiereDate, season.endDate, response.length);
                    this.listOfSeasons.push(createdSeason);
                })

                success(clickedShow, this.listOfSeasons);
            }).fail((jq, textStatus) => {
                fail();
            })
        },
        fetchCast(success,fail,clickedShow) {
            const request = $.ajax({
                url: `http://api.tvmaze.com/shows/${clickedShow.id}/cast`,
                method: "GET"
            }).done(response => {
                response.map(actor => {
                    const createdPerson = new Person(actor.person.name)
                    const createdActor = new Actor (createdPerson);
                    this.listOfActors.push(createdActor);
                })

                success(clickedShow, this.listOfActors);
            }).fail((jq, textStatus) => {
                fail();
            })
        }
    }

})()