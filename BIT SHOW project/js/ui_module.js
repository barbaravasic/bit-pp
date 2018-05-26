const uiModule = (function () {
    return {
    
            searchInput: $(`.search-box`),

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
            const $ul = $(`<ul>`);
            const $chosenShowTitle = $(`<h4>`);
            listOfSeasons.forEach(season => {
                $chosenShowTitle.text(`Seasons(${season.numOfSeasons})`);
                const $li = $(`<li>`);
                $li.text(`${season.startDate} - ${season.endDate}`);
                $ul.prepend($chosenShowTitle);
                $ul.append($li);
            })
            const $infoDisplay = $(`
            <div class='row'>
                <div class='col-12 col-md-6'>
                    <img src='${chosenShow.posterUrl}' id='${chosenShow.id}'>
                </div>
                <div class='col-12 col-md-6'>
                    ${$ul.html()}
                </div>
            </div>
            `);
           
            $mainContainer.append($infoDisplay);
        },
        // displayCast(chosenShow, listOfActors){

        // }
    }


})()