const uiModule = (function () {
    return {

        $searchInput: $(`.search-box`),

        displayTop50(list) {
            const $mainContainer = $(`.main`);
            const $row = $(`<div class='row'>`);

            list.forEach(show => {
                const $card = $(`
                <div class='col-12 col-md-6 col-lg-4 show' id='${show.id}'>
                    <a href='#'>
                        <img src='${show.posterUrl}' id='${show.id}'>
                        <h3 class='show-title' id='${show.id}'>${show.name}</h3>
                    </a>
                </div>
                `)
                $mainContainer.append($row);
                $row.append($card);
            })
        },

        failed() {
            alert(`Somthing went wrong`);
        },

        setLocalStorage(id) {
            localStorage.setItem("id", id);
        },

        // redirectionToShowInfo() {
        //     location.href = "show_info.html";
        // },

        displayOnShowInfo(chosenShow, listOfSeasons, listOfActors) {
            const $mainContainer = $(`.main`).empty();
            const $ulSeasons = $(`<ul>`);
            const $chosenShowTitle = $(`<h4>`);
            const $ulACtors = $(`<ul>`);
            listOfSeasons.forEach(season => {
                $chosenShowTitle.text(`Seasons(${season.numOfSeasons})`);
                const $li = $(`<li>`);
                $li.text(`${season.startDate} - ${season.endDate}`);
                $ulSeasons.prepend($chosenShowTitle);
                $ulSeasons.append($li);
            })
            listOfActors.forEach(actor => {
                const $liActors = $(`<li>`);
                $liActors.text(`${actor.person.name}`);
                $ulACtors.append($liActors);
            })
            const $infoDisplay = $(`
            <div class='row'>
                <div class='col-12 col-md-6'>
                    <img src='${chosenShow.posterUrl}' id='${chosenShow.id}'>
                </div>
                <div class='col-12 col-md-6'>
                    <div class='row'> 
                        <div class='col-12'>
                            <ul class='seasons'>
                                ${$ulSeasons.html()}
                            </ul>
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-12'>
                            <h4>Cast</h4>
                            <ul class='actors'>
                                ${$ulACtors.html()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class='row'>
                <div class'col-12'>
                    ${chosenShow.description}
                </div>
            </div>
            `);

            $mainContainer.append($infoDisplay);
        },

        displaySearchList(listToDisplay) {
            const $searchDiv = $(`.search-dropdown`);
            $searchDiv.css("display", "block")
            const $ulSearch = $(`.dropdown-ul`);
            $ulSearch.empty();
            listToDisplay.forEach(show => {
                const $liSearch = $(`
                    <li >
                        <a href='#' id='${show.id}'> ${show.name}</a>
                    </li>
                `);

                $ulSearch.append($liSearch);
            })

        },
        reset() {
            $(`.search-box`).val("");
            $(`.dropdown-ul`).empty();
        }
    }


})()