// Global variables
var bodyEl = document.body;
var buttonEl = document.getElementById("btn");
var newPW = document.getElementById("generatedPassword");

// On button click, execute "generatePW" function ---
buttonEl.addEventListener("click", generatePW);

// Generate password function
function generatePW() {

    // Local variables containing the potential characters that can be used in the generation of the password..
    var characterSpecial = '!@#$%^&*()_+{}:"<>?|[];,./`~';
    var characterLowercase = 'abcdefghijklmnopqrstuvwxyz';
    var characterUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var characterNumbers = '0123456789';
    var charSet = "";

    // prompts user to insert a password character count between 8 and 128..
    var pwLength = Number(prompt("Please input (between 8 and 128) how many characters to include in your generated password."));
    // If the length of the password is less than 8 characters or greater than 128 characters...
    if (pwLength < 8 || pwLength > 128 || pwLength ==! Number) {
        // Then alert try again and return to main screen..
        alert("Please try again. Enter a number between 8 and 128");
        return pwLength;
    } else {
        // Else alert the user of the length that they chose..
        alert("You chose a password length of " + pwLength + " characters.");
    }

    // Confirm T or F if the user would like the password to contain lowercase characters..
    var characterLowercase = confirm("Would you like your password to contain lowercase letters? (click OK for yes, or cancel for no)");
    // Confirm T or F if the user would like the password to contain uppercase characters..
    var characterUppercase = confirm("Would you like your password to contain uppercase letters? (click OK for yes, or cancel for no)");
    // Confirm T or F if the user would like the password to contain numbers..
    var characterNumbers = confirm("Would you like your password to contain numbers? (click OK for yes, or cancel for no)");
    // Confirm T or F if the user would like the password to contain special characters..
    var characterSpecial = confirm("Would you like your password to contain special characters? (click OK for yes, or cancel for no) The list of accepted special characters includes " + characterSpecial);


    if (characterSpecial === true && characterNumbers === true && characterUppercase === true && characterLowercase === true) {
        var charset = characterSpecial + characterNumbers + characterUppercase + characterLowercase;
    } else if (characterSpecial === true && characterNumbers === false && characterUppercase === true && characterLowercase === true) {
        var charset = characterSpecial + characterUppercase + characterLowercase;
    } else if (characterSpecial === true && characterNumbers === true && characterUppercase === false && characterLowercase === true) {
        var charset = characterSpecial + characterNumbers + characterLowercase;
    } else if (characterSpecial === true && characterNumbers === true && characterUppercase === true && characterLowercase === false) {
        var charset = characterSpecial + characterNumbers + characterUppercase;
    } else if (characterSpecial === true && characterNumbers === true && characterUppercase === false && characterLowercase === false)
     var charset = characterSpecial + characterNumbers;
    else if (characterSpecial === false && characterNumbers === true && characterLowercase === true && characterUppercase === false) {
        var charset = characterNumbers + characterLowercase;
    } else if (characterSpecial === false && characterNumbers === true && characterLowercase === false && characterUppercase === true) {
        var charset = characterNumbers + characterUppercase;
    } else if (characterSpecial === false && characterNumbers === false && characterLowercase === true && characterUppercase === true) {
        var charset = characterLowercase + characterUppercase;
    } else if (characterSpecial === true && characterNumbers === false && characterLowercase === false && characterUppercase === true) {
        var charset = characterSpecial + characterUppercase;
    } else if (characterSpecial === true && characterNumbers === false && characterLowercase === false && characterUppercase === false) {
        var charset = characterSpecial;
    } else if (characterSpecial === false && characterNumbers === true && characterLowercase === false && characterUppercase === false) {
        var charset = characterNumbers;
    } else if (characterSpecial === false && characterNumbers === false && characterLowercase === true && characterUppercase === false) {
    var charset = characterLowercase;
    } else if (characterSpecial === false && characterNumbers === false && characterLowercase === false && characterUppercase === true) {
        var charset = characterUppercase;
    } else {
        alert("You must select at least one option from the list prompted above. Please try again.")
        var charset = " ";
    }

    var length = characterLength;
    var charset = 




    newPW.innerHTML = "New Password......";
}