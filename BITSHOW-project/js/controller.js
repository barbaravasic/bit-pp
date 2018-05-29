import * as ui from './ui_module.js';
import * as data from './data_module.js';

function showInfoHandler(event) {
  if (event.target.parentElement.tagName === "A" || event.target.tagName === "A") {
    event.preventDefault();
    console.log(event.target.parentElement.tagName)
    data.setLocalStorage(event.target.id);
    location.href = './show_info.html';
  }
}

function searchHandler(event) {
  const searchValue = $(`.search-box`).val();
  data.fetchSearchShows(searchValue, ui.displaySearchList, ui.fail);
}



export const init = () => {
  data.fetchShow(ui.displayTop50, ui.failed);
  $(`body`).on("click", showInfoHandler);
  $(`.search-box`).on("keyup", searchHandler);
  const id = localStorage.getItem("id");
  data.fetchSeasonsAndCast(id, ui.displayOnShowInfo, ui.failed);
}
  
