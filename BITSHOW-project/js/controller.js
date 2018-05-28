const controller = (function (ui, data) {

  function showInfoHandler(event) {
    if (event.target.parentElement.tagName === "A" || event.target.tagName === "A") {
      event.preventDefault();
      data.setLocalStorage(event.target.id);
      // window.open('./show_info.html');
      const id = localStorage.getItem("id");
      const clickedShow = data.chosenShow(id);
      data.fetchSeasonsAndCast(clickedShow, ui.displayOnShowInfo, ui.failed);
    }
  }

  function searchHandler(event) {
      const searchValue = ui.$searchInput.val();
      data.fetchSearchShows(searchValue, ui.displaySearchList, ui.fail);
  }

  return {
    init() {
      data.fetchShow(ui.displayTop50, ui.failed);
      $(`body`).on("click", showInfoHandler);
      $(`.search-box`).on("keyup", searchHandler);
    },

    
  }
})(uiModule, dataModule);