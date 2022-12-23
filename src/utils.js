//This file contains all utlity functions - return values used in other files
//if ES6 need to put export before each function in include file so always available to use in other files

//use one function to validate user input to questions below
function validateInput(message) {
  return function (answer) {
    if (answer.length < 1) {
      return console.log(`Please enter ${message}!`);
    }
    return true;
  };
}

module.exports = {
  validateInput
}
