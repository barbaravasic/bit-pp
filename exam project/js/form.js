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
        return ;
    }

    if (name1stLetter !== name1stLetter.toUpperCase() || surname1stLetter !== surname1stLetter.toUpperCase()) {
        var validateName = document.querySelector(".nameValidation");
        validateName.textContent = "Both name and surname must start with capitals!";
        return ;
    }

    if (grade < 5 || grade > 10) {
        var validateGrade = document.querySelector(".gradeValidation");
        validateGrade.textContent = "A grade should be valid numerical value from 5 to 10!"
        return ;
    }

}

function updateList(examList) {
    var passedList = document.querySelector("#passed-list");
    var failedList = document.querySelector("#failed-list");
    var listItem = document.createElement("li");
    listItem.classList.add("cf");
    var spanLi = document.createElement("span");
    spanLi.classList.add("span-li");
    var spanContainer = document.createElement("span");
    spanContainer.classList.add("span-container");
    spanContainer.classList.add("cf");
    var spanGrade = document.createElement("span");
    spanGrade.classList.add("grade-span");
    var spanX = document.createElement("span");
    spanX.classList.add("span-x");

    examList.forEach(function (exam) {
        if (exam.grade > 5) {
            spanLi.textContent = exam.student.getStudentData();
            spanGrade.textContent = exam.grade;
            spanGrade.classList.add("passed-span");
            spanX.textContent = "X";
            spanX.classList.add("passed-span");
            passedList.appendChild(listItem);
            spanContainer.appendChild(spanGrade);
            spanContainer.appendChild(spanX);
            listItem.appendChild(spanLi);
            listItem.appendChild(spanContainer);
        } else {
            spanLi.textContent = exam.student.getStudentData();
            spanGrade.textContent = exam.grade;
            spanGrade.classList.add("failed-span");
            spanX.textContent = "X";
            spanX.classList.add("failed-span");
            failedList.appendChild(listItem);
            spanContainer.appendChild(spanGrade);
            spanContainer.appendChild(spanX);
            listItem.appendChild(spanLi);
            listItem.appendChild(spanContainer);
        }
    })

}

function updateStatistics(passedList, failedList, examList) {
    

    var studentsCount = document.querySelector("#students-count");
    studentsCount.textContent = examList.length;

    var passedCount = document.querySelector("#passed-count");
    passedCount.textContent = passedList.length;

    var failedCount = document.querySelector("#failed-count");
    failedCount.textContent = failedList.length;
}
