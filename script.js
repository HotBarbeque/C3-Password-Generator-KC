// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for characters
var lowAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberSet =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Question Prompts for password generation
function generatePassword() {

  var passwordText = document.querySelector("#password");
  var passwordLength = prompt(`Enter a password length between 8 and 128 Characters`);
  if (isNaN(passwordLength)) 
  { alert('Please enter valid number(between 8 and 128)');
    generatePassword();
  
  }
    if ((passwordLength < 8) || (passwordLength > 128)) {

      alert(`Please enter valid number(between 8 and 128)`);
      generatePassword();
      } else {
        alert(`The password will be ${passwordLength} characters.`);
      }

    // Prompt for Lowercase
    var passLow = confirm(`Would you like to insert lower case letters?`);
    var masterChar = [];
    if (passLow) {
      masterChar = masterChar.concat(lowAlpha);
      }
  
    // Prompt for Uppercase
    var passUp = confirm(`Would you like to insert upper case letters?`);

    if (passUp) {
      masterChar = masterChar.concat(upAlpha)
      }

    // Prompt for Numbers
    var passNumb = confirm(`Would you like to insert numbers?`);

    if (passNumb) {
      masterChar = masterChar.concat(numberSet);
      }

    // Prompt for Special Characters
    var passSpecial = confirm(`Would you like to insert special characters?`);

    if (passSpecial) {
      masterChar = masterChar.concat(specialChar);
      }

    if ((passLow == false) && (passUp == false) && (passNumb == false) && (passSpecial == false)) {
        return alert(`You must insert at least one type of character`);

      }

      // Generate password using chosen characters
      var Password = "";
      for (var i = 0; i < passwordLength; i++) {
        var gen = Math.floor(Math.random() * masterChar.length);
        Password = Password.concat(masterChar[gen]);
      }
      return Password;
}
    
// Function to put the generated password into the box
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
    
// Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
    