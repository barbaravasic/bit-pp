const dataModule = (function () {
    class Show {
        constructor(id, name, url,  showPoster, description) {
            this.id = id;
            this.name = name;
            this.url = url;
            this.showPoster = showPoster;
            this.description = description;
        }

    }

    return {

        fetchShow(success, failed) {
            const res = $.ajax({
                url: `http://api.tvmaze.com/shows`,
                method: "GET"
            }).done((response) => {
                response.sort(function (a, b) {
                    a = a.rating.average;
                    b = b.rating.average;
                    return b - a;
                })
                const top50Shows = response.slice(0, 50);
                console.log(top50Shows);
                const newList = top50Shows.map((show) => {
                    return new Show(show.id, show.name, show.url, show.image.medium, show.summary);
                })
                console.log(newList);
                success(newList);
            }).fail((jq, textStatus) => {
                failed();
            })
        },
    }

})()