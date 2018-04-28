function hideEmail(email) {
    var hidden = "";
    var str = "";
    var newString = "";

    for (var i = 0; i < email.length; i++) {
        if (i < 7) {
            str += email[i];
        }
        newString += str;
        str = "";

        if (i === 7) {
            newString += "..."
        }

        if (i > 13) {
            str += email[i];
        }

        newString += str;
        str="";
    }

    return newString;
}

console.log(hideEmail("myemailaddress@bgit.rs"));