

const uiModule = (function () {


    const $search = $(".search-box");
    const $searchValue = $search.val();
    const $container = $(".main")

    function displayTopShow(list) {
        const $row = $("<div>").addClass("row");
        list.forEach(show => {

            const $card = $(`
                <div class='col-12 col-md-6 col-lg-4'>
                    <img src='${show.showPoster}'>
                    <p>${show.name}</p>
                </div>
            `);
            $container.append($row).append($card);
        })
    }

    function fail(){
        alert(`Display failed`)
    }
    return {
        displayTopShow,
        fail
    }
})()