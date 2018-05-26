const controller = (function(ui, data){
  return {
      init(){
          data.fetchShow(ui.displayTop50, ui.failed);

          $(document).on("click", event =>{
              const clickedShow = data.chosenShow(event.target.id);
              console.log(event.target);
              ui.setLocalStorage(event.target.id);
              ui.redirectionToShowInfo();
              data.fetchSeasons(ui.displayOnShowInfo, ui.failed, clickedShow)
          })
      }
  }
})(uiModule, dataModule);