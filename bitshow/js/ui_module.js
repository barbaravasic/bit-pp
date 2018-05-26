

const uiModule = (function () {


    const $search = $(".search-box");
    const $searchValue = $search.val();
    const $container = $(".main")

    function displayTopShow(list) {
        const $row = $("<div>").addClass("row");
        list.forEach(show => {

            const $card = $(`
                <div class='col-12 col-md-6 col-lg-4 show'>
                    <img src='${show.showPoster}' id='${show.id}'>
                    <p>${show.name}</p>
                </div>
            `);
            $container.append($row)
            $row.append($card);
        })
    }
   
    

    function fail(){
        alert(`Display failed`)
    }
    return {
        displayTopShow,
        fail,
        showInfo(){
            const $body = $("body");
            $body.on("click", function(event){
                const id = event.target;
                localStorage.setItem("id",id.id);
                location.href = "show_info.html";
                
                
            });
        }
    }
})()