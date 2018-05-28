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
    class Person {
        constructor(name) {
            this.name = name;
        }
    }

    class Actor extends Person {
        constructor(name) {
            super(name);
        }
    }


    return {
        fetchShow(success, failed) {
            const request = $.ajax({
                url: `http://api.tvmaze.com/shows`,
                method: "GET"
            }).done((response) => {
                const listOfAllShows = [];
                response.map(show => {
                    const createdShow = new Show(show.name, show.id, show.image.original, show.summary, show.rating);
                    listOfAllShows.push(createdShow);
                })
                listOfAllShows.sort((a, b) => {
                    a = a.rating.average;
                    b = b.rating.average;
                    return b - a;
                })
               
                const top50Shows = listOfAllShows.slice(0, 50);
                success(top50Shows);


            }).fail((jq, textStatus) => {
                failed();
            })
        },
        setLocalStorage(id) {
            localStorage.setItem("id", id);
            return id;
        },

        chosenShow(id) {
            const createdShow = {};
            
            const request = $.ajax({
                url: `http://api.tvmaze.com/shows`,
                method: "GET"
            }).done((response) =>{
                const listOfAllShows = [];
                response.map(show => {
                    const createdShow = new Show(show.name, show.id, show.image.original, show.summary, show.rating);
                    listOfAllShows.push(createdShow);

                    listOfAllShows.forEach(show =>{
                        if(show.id === parseInt(id)){
                            createdShow = show;
                        }
                    })
                })
            })
            
            const clickedShow = this.listOfAllShows.find(show => {
                return parseInt(evId) === show.id;
            })
            return clickedShow;
        }, 

        fetchSeasonsAndCast(clickedShow, success, fail) {

            const request = $.ajax({
                url: `http://api.tvmaze.com/shows/${clickedShow.id}?embed[]=seasons&embed[]=cast`,
                method: "GET"
            }).done(response => {
                console.log(response)
                const listOfActors = [];
                const listOfSeasons = [];
                const seasonsArray = response._embedded.seasons;
                const castArray = response._embedded.cast;
                seasonsArray.map(item => {

                    const createdSeason = new Season(item.premiereDate, item.endDate, item.length);
                    listOfSeasons.push(createdSeason);
                })
                castArray.map(item => {
                    const createdPerson = new Person(item.person.name)
                    const createdActor = new Actor(createdPerson);
                    listOfActors.push(createdActor);
                })
                success(clickedShow, listOfSeasons, listOfActors);
            }).fail((jq, textStatus) => {
                fail();
            });
        },

        fetchSearchShows(searchValue, showSearched, fail) {
            const request = $.ajax({
                url: `http://api.tvmaze.com/shows`,
                method: "GET"
            }).done((response) => {
                const listOfAllShows = [];
                const listOfSearchedSuggestions = [];
                response.map(show => {
                    const createdShow = new Show(show.name, show.id, show.image.original, show.summary, show.rating);
                    listOfAllShows.push(createdShow);
                })
               
                listOfAllShows.forEach(show => {
                    const lowerCasedName = show.name.toLowerCase();
                    if (lowerCasedName.includes(searchValue)) {
                        listOfSearchedSuggestions.push(show);
                    }
                })
                const slicedList = listOfSearchedSuggestions.slice(0, 10);
                showSearched(slicedList);
                
            }).fail((jq, textStatus) => {
                failed();
            })
            
        }
    }

})()