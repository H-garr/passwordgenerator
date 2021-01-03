// Assignment Code
var generateBtn = document.querySelector("#generate");
// var passwordvalues = //all characters with exceptions to " and \
//["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
// "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
// "1","2","3","4","5","6","7","8","9","0",
// " ","!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","","]","^","_","`","{","|","}","~",];
const Capletters = "ABCDEFGHIJKLMNOPQRSTUVWZYZ"
const lowerletters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "1234567890"
const special="!@#$%^&*()_+";

// var Capletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var lowerletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "", "]", "^", "_", "`", "{", "|", "}", "~"];

// created values as a constant since the characters used in creating the password will not change
//click button here
//prompt for user to input value of how many characters (8-128)
//then prompt for input of (c) for caps (n) for numbers (s) for special characters and (L) for lower case
//push to an alert given for their new password and the text "here is your new password"
function generatePassword() {
  var usercharacters = 0
  while (usercharacters < 8 || usercharacters > 128) {
    alert("please enter a valid length 8 to 128");
    usercharacters = parseInt(prompt("How many charcters would you like in your new password?"));

  }
  var usercaps = false;
  var usernums = false;
  var userspecial = false;
  var userlower = false;
  var validCharacters = ""

  while (!usercaps && !usernums && !userspecial && !userlower) {

    usercaps = confirm("Would you like capitol letters?");
    usernums = confirm("Would you like numbers?");
    userspecial = confirm("Would you like special cases?");
    userlower = confirm("Would you like to have lowercase letters?")
  }


  if (usercaps) {
    // validCharacters.concat(Capletters) // use concat in arrays
    validCharacters += Capletters
  }

  if (usernums) {
    // validCharacters.concat(numbers)
    validCharacters += numbers
  }

  if (userspecial) {
    // validCharacters.concat(special)
    validCharacters += special
  }

  if (userlower) {
    // validCharacters.concat(lowerletters)
    validCharacters += lowerletters
  }
  console.log("Valid", validCharacters);
  // var capschoice = []
  // var numchoice = [""]
  // var specialchoice = []
  var password =""

  for (let i = 0; i = length; i++) {
      var index = Math.floor(Math.random() * validCharacters.length) // Random subscript generation // charAt
      password += validCharacters[index]
   }
    console.log(password)
    return(password)

}
//confused on what this is
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




