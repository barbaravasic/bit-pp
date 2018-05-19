var studentList = [];
var examList = [];


var chosenSubject = document.querySelector("#choose-subject").value;
var nameSurname = document.querySelector(".name-input").value;
var grade = document.querySelector(".grade-input").value;

// var nameSurnameSplit = nameSurname.split(" ");
// var name = nameSurnameSplit[0];
// var surname = nameSurnameSplit[1];
// var name1stLetter = name.slice(0, 1).toString();
// var surname1stLetter = surname.slice(0, 1).toString();

var createdSubject = new Subject(chosenSubject);





function validate(name, surname, grade) {
    collectAllFormData();
    validateData(name, surname, grade);
}


function update() {
    var createdStudent = new Student(name, surname);
    studentList.push(createdStudent);

    var createdExam = new Exam(createdSubject, createdStudent, grade);
    examList.push(createdExam);

    updateList(examList,createdStudent);
    updateStatistics();
}

var addButton = document.querySelector("#add-button");
addButton.addEventListener("click", validate(nameSurname, grade));

