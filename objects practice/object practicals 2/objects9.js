// Write a function to hide email addresses to protect them from unauthorized users.

// 	"somerandomaddress@example.com" -> "somerand...@example.com"

function hideEmail (email) {
    var usernameHidden = email.slice(0,8);
    var emailPart = email.slice(17);

    return usernameHidden + "..." + emailPart;
}

console.log(hideEmail("somerandomaddress@example.com"))