const controller = (function (ui, data) {

  function showInfoHandler(event) {
    if (event.target.parentElement.tagName === "A") {
      event.preventDefault();

      console.log(event.target.parentElement.tagName)
      ui.setLocalStorage(event.target.id);
      // ui.redirectionToShowInfo();
      const id = localStorage.getItem("id");
      const clickedShow = data.chosenShow(id);
      data.fetchSeasonsAndCast(ui.displayOnShowInfo, ui.failed, clickedShow);
    }

  }

  return {
    init() {
      data.fetchShow(ui.displayTop50, ui.failed);
      $(`body`).on("click", showInfoHandler);

    },
  }
})(uiModule, dataModule);