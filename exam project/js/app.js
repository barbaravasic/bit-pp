var studentList = [];
var examList = [];
var subjList = [];
var passedList = [];
var failedList = [];


var chosenSubjectInput = document.querySelector("#choose-subject");
var gradeInput = document.querySelector(".grade-input");
var nameSurnameInput = document.querySelector(".name-input");

function createSubject(subjName) {
    var chosenSubj = chosenSubjectInput.value;
    var createdSubject = new Subject(chosenSubj);
    subjList.push(createdSubject);
}

function createStudent() {
    var grade = gradeInput.value;  
    var nameSurname = nameSurnameInput.value;
    var nameSurnameSplit = nameSurname.split(" ");
    var name = nameSurnameSplit[0];
    var surname = nameSurnameSplit[1];
   
    surname = surname || "InsertSurname";

    validateData(name, surname, grade);

    var createdStudent = new Student(name, surname);
    studentList.push(createdStudent);
}

function createExam() {
    
    var createdSubj = {};
    var createdStudent = {};
    var grade = gradeInput.value;  

    studentList.forEach(function(student){
        createdStudent = student;
    });

    subjList.forEach(function(subj) {
        createdSubj = subj;
    })
    var createdExam = new Exam(createdSubj, createdStudent, grade);
    examList.push(createdExam);

    if(createdExam.hasPassed()){
        passedList.push(createdExam);
    } else {
        failedList.push(createdExam);
    }
}

function update() {
    updateList(examList);
    updateStatistics(passedList,failedList,examList);
}

function getCurrentMonth() {
    var currentDate = new Date;
    var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var currentMonth = monthArray[currentDate.getMonth()];
    return currentMonth;
}

function updateCurrentMonth() {
    var statDate = document.querySelector("#statistic-date");
    statDate.textContent = getCurrentMonth();
}

updateCurrentMonth();

var addButton = document.querySelector("#add-button");
addButton.addEventListener("click", function(){

        createSubject();
        createStudent();
        createExam();
        update();
});

