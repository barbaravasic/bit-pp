const uiModule = (function () {
    return {

        searchInput: $(".search-box"),

        displayTop50(list) {
            const $mainContainer = $(`.main`);
            const $row = $(`<div class='row'>`);

            list.forEach(show => {
                const $card = $(`
                <div class='col-12 col-md-6 col-lg-4 show' id='${show.id}'>
                    <img src='${show.posterUrl}' id='${show.id}'>
                    <h3 class='show-title' id='${show.id}'>${show.name}</h3>
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

        redirectionToShowInfo() {
            location.href = "show_info.html";
        },

        displayOnShowInfo(chosenShow){
            const $mainInfo = $(".showInfo-main");
            const infoDisplay = $(`
            <div class='row'>
                <div class = 'col-12 col-md-6'>
                    <img src= '${chosenShow.posterUrl}'>
                </div>
            </div>
            `)

            $mainInfo.append(infoDisplay);
            
        }
    }


})()