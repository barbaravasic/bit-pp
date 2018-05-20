function collectAllFormData() {
    var chosenSubject = document.querySelector("#choose-subject").value;
    var nameSurname = document.querySelector(".name-input").value;
    var grade = document.querySelector(".grade-input").value;

}

function validateData(name, surname, grade) {
    var name1stLetter = name.slice(0, 1).toString();
    var surname1stLetter = surname.slice(0, 1).toString();

    if (surname === "InsertSurname") {
        var surnameValidation = document.querySelector(".nameValidation");
        surnameValidation.textContent = "You must insert both name and surname";
    }

    if (name1stLetter !== name1stLetter.toUpperCase() || surname1stLetter !== surname1stLetter.toUpperCase()) {
        var validateName = document.querySelector(".nameValidation");
        validateName.textContent = "Both name and surname must start with capitals!";
    }

    if (grade < 5 || grade > 10) {
        var validateGrade = document.querySelector(".gradeValidation");
        validateGrade.textContent = "A grade should be valid numerical value from 5 to 10!"
    }

}

function updateList(examList) {
    var passedList = document.querySelector("#passed-list");
    var failedList = document.querySelector("#failed-list");
    var listItem = document.createElement("li");

    examList.forEach(function (exam) {
        if (exam.grade > 5) {
            listItem.textContent = exam.getExamInfo();
            passedList.appendChild(listItem);
        } else {
            listItem.textContent = exam.getExamInfo();
            failedList.appendChild(listItem);
        }
    })

}

function updateStatistics(passedList, failedList, examList) {
    var statDate = document.querySelector("#statistic-date");
    statDate.textContent = getCurrentMonth();

    var studentsCount = document.querySelector("#students-count");
    studentsCount.textContent = examList.length;

    var passedCount = document.querySelector("#passed-count");
    passedCount.textContent = passedList.length;

    var failedCount = document.querySelector("#failed-count");
    failedCount.textContent = failedList.length;
}
