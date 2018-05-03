"use strict";

var emailSuggestion = (function (name, surname) {

    function newEmail(newName, newSurname) {
        return newName + "." + newSurname + "@gmail.com";
    }
    return newEmail(name, surname);

})("barbara", "vasic");

console.log(emailSuggestion);