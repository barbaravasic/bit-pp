const controller = (function (ui, data) {
  return {
    init() {
      data.fetchShow(ui.displayTop50, ui.failed);
      $(`body`).on("click", event => {
        ui.setLocalStorage(event.target.id);
        // ui.redirectionToShowInfo();
        const id = localStorage.getItem("id");
        const clickedShow = data.chosenShow(id);
        data.fetchSeasonsAndCast(ui.displayOnShowInfo, ui.failed, clickedShow);
        // data.fetchCast()
      })

    }
  }
})(uiModule, dataModule);