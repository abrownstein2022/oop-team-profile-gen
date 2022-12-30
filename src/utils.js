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

//validate email using regex
function isEmailValid(email) {
  // return function (answer){
  // let mailformat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // if (!inputText.value.match(mailformat)) {
  //   return console.log("Please enter a valid email address!"); //The pop up alert for an invalid email address
  // }
  //   return true;
  // }
  // let mailformat =  new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
  // return mailformat.test(inputText);

  const emailRegexp = new RegExp(
    /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
  )
  return emailRegexp.test(email)
}

module.exports = {
  validateInput,
  isEmailValid
};
