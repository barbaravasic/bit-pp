function collectAllFormData() {
    var chosenSubject = document.querySelector("#choose-subject").value;
    var nameSurname = document.querySelector(".name-input").value;
    var grade = document.querySelector(".grade-input").value;

}

function validateData(name, surname, grade) {

    if (name1stLetter !== name1stLetter.toUpperCase() || surname1stLetter !== surname1stLetter.toUpperCase()) {
        var validateName = document.querySelector(".nameValidation");
        validateName.textContent = "Both name and surname must start with capitals!";
    }

    if (grade < 5 && grade > 10) {
        var validateGrade = document.querySelector(".gradeValidation");
        validateGrade.textContent = "A grade should be valid numerical value from 5 to 10!"
    }
}

function updateList(examList, student) {
    var passedList = document.querySelector("#passed-list");
    var failedList = document.querySelector("#failed-list");
    var listItem = document.createElement("li");

    examList.forEach(function (exam) {
        if (exam.grade > 5) {
            listItem.textContent = student.getStudentData();
            passedList.appendChild(listItem);
        } else {
            listItem.textContent = student.getStudentData();
            failedList.appendChild(listItem);
        }

    })

}

function updateStatistics() {
    var listOfPassedStudents = document.querySelectorAll("#passed-list li");
    var listOfFailedStudents = document.querySelectorAll("#failed-list li");

    var studentsCount = document.querySelector("#students-count");
    studentsCount.textContent = listOfFailedStudents.length + listOfPassedStudents.length;

    var passedCount = document.querySelector("#passed-count");
    passedCount.textContent = listOfPassedStudents.length;

    var failedCount = document.querySelector("#failed-count");
    passedCount.textContent = listOfFailedStudents.length;
}
