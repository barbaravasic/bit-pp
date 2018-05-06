"use strict";

var validPassword = function () {
    var output = "Your password is cool!";
    return output;
}

var invalidPassword = function () {
    var output = "Your password is invalid!";
    return output;
}


var checkPassword = function (password, successCallback, errorCallback) {
    var isValid = true;
    for (var i = 0; i < password.length; i++) {
        if (typeof password[i] !== "number" && password.length < 6) {
            isValid = false;
        }
    }

    if (isValid) {
        return successCallback();
    } else {
        return errorCallback();
    }
}

console.log(checkPassword("JSGuru", validPassword, invalidPassword));