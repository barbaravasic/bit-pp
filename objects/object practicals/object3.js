
// Write a function that creates an object that represent a computer program. Each program is described by: description,  programming language, git repository, boolean status that says if the program is completed or not. Add a method that prints out program’s repository,  a method that checks if the program is written in JavaScript as well as a method that checks if program is completed or not.


var createProgram = function (des, pl, gr, bs) {
    var program = {
        description: des,
        programingLanguage: pl,
        gitRepository: gr,
        booleanStatus: bs,
        printRepository: function (){
            console.log(program.gitRepository);
        },
        
        isCompleted: function (){
            return booleanStatus;
        }
    };
    program.isJS = function(){
        return  program.programingLanguage === "JS";
    }
           
    
    return program;
}

var jsProgram = createProgram("lupi nesto", "JS", "imeFoldera", true);
console.log(jsProgram.printRepository());

var phpProgram = createProgram("nesto nesto", "PHP", "folderPHP", false);
console.log(phpProgram);


