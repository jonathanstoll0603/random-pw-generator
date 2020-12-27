// Global variables
var buttonEl = document.getElementById("btn");
var newPW = document.getElementById("generatedPassword");

// On button click, execute "generatePW" function ---
buttonEl.addEventListener("click", generatePW);

// Generate password function
function generatePW() {

    // Global variables of allowed characters to be used in generated password
    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var symbols = ["!", "#", "$", "&", "%", "'", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "~", "`", "{", "|", "}", "."];
    // Open array to push user's choices of which characters they want in their generated password
    var userChoiceArray = [];

    // prompts user to insert a password character count between 8 and 128
    var pwLength = Number(prompt("Please input (between 8 and 128) how many characters to include in your generated password."));
    // If the length of the password is less than 8 characters or greater than 128 characters
    if (pwLength < 8 || pwLength > 128 || pwLength ==! Number) {
        // Then alert try again and return to main screen
        alert("Please try again. Enter a number between 8 and 128");
        return;
    } else {
        // Else alert the user of the length that they chose
        alert("You chose a password length of " + pwLength + " characters.");
    }

    // Confirm T or F if the user would like the password to contain lowercase/uppercase/numbers/symbols characters
    var confirmLowercase = confirm("Would you like your password to contain lowercase letters? (click OK for yes, or cancel for no)");
    var confirmUppercase = confirm("Would you like your password to contain uppercase letters? (click OK for yes, or cancel for no)");
    var confirmNumbers = confirm("Would you like your password to contain numbers? (click OK for yes, or cancel for no)");
    var confirmSymbols = confirm("Would you like your password to contain special characters? (click OK for yes, or cancel for no) The list of accepted special characters includes " + symbols);

    // If user confirms "_" type of characters, push the given array into array of acceptable characters
    if (confirmLowercase === true) {
        userChoiceArray.push(...lowercase);
    }
    if (confirmUppercase === true) {
        userChoiceArray.push(...uppercase);
    }
    if (confirmNumbers === true) {
        userChoiceArray.push(...numbers);
    }
    if (confirmSymbols === true) {
        userChoiceArray.push(...symbols);
    }
    if (confirmLowercase === false && confirmUppercase === false && confirmNumbers === false && confirmSymbols === false) {
        alert('You must chose at least one of the following: lowercase, uppercase, numbers, or symbols');
        return;
    }

    // Empty string to place user password
    var userPW = "";
    // Loop that continually selects a random character from the userChoiceArray until the password length is reached.
    for (var i = 0; i < pwLength; i++) {
        var randomCharacter = userChoiceArray[Math.floor(Math.random() * userChoiceArray.length)];
        // Concatentation of the random characters selected into the userPW variable.
        userPW += randomCharacter;
        console.log(userPW);
    }
    // Pushes the generated password into the <p></p> tag of the html 
    newPW.innerHTML = userPW;
}