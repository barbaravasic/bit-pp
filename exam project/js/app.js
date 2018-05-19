var addButton = document.querySelector("#add-button");

var nameSurname = document.querySelector(".name-input").value;
var grade = document.querySelector(".grade-input").value;

addButton.addEventListener("click", function () {
    collectAllFormData();
    validateData(nameSurname, grade);
    updateList();
    updateStatistics();
})

