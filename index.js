// Valles, Algie Lloyd Niño A.
// CMSC 100 - U2L
// Exercise 03 - JavaScript Basics (Part 1)

// Placeholder for the paswword and username
const password1 = "pass1";
const password2 = "pass1";
const username = "user1";

// Function for the password validation
function validatePassword(password1, password2) {
    const str = password1;
    
    if (password1.length < 8) {
        console.log("Insufficient Number of Strings!");
        return false;
    } else if (password1 != password2) {
        console.log("Wrong Password!");
        return false;
    } else {
        let hasUpperCase = false;
        let hasLowerCase = false;
        let hasNumber = false;

        for (let i = 0; i < str.length; i++) {
            const char = str.charAt(i);

            if (char >= 'A' && char <= 'Z') {
                hasUpperCase = true;
            } 
            if (char >= 'a' && char <= 'z') {
                hasLowerCase = true;
            }
            if (char >= '0' && char <= '9') {
                hasNumber = true;
            }
        }
        if (hasUpperCase && hasLowerCase && hasNumber) {
            return true;
        } else if (hasUpperCase == false && hasLowerCase == false && hasNumber == true) {
            console.log("Invalid Password!");
            return false;
        } else if (hasUpperCase == false && hasLowerCase == true && hasNumber == false) {
            console.log("Invalid Password!");
            return false;
        } else if (hasUpperCase == false && hasLowerCase == true && hasNumber == true) {
            console.log("Invalid Password!");
            return false;
        } else if (hasUpperCase == true && hasLowerCase == false && hasNumber == false) {
            console.log("Invalid Password!");
            return false;
        } else if (hasUpperCase == true && hasLowerCase == true && hasNumber == false) {
            console.log("Invalid Password!");
            return false;
        } else {
            return false;
        }
    }
}

function reversePassword(password) {
    return password.split("").reverse().join("");
}

function storePassword(username, password1, password2) {
    var details = {
        username: username,
        password: "",
        new_password: ""
    };

    var valid = validatePassword(password1, password2);

    if (valid == true) {
        details.password = password1;
        details.new_password = reversePassword(password1);
        return details;
    }
}

console.log(storePassword(username, password1, password2));