const inquirer = require("inquirer");

const { validateInput } = require("./src/utils.js");

// Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
//const { writeFile } = require('fs').promises;

const fs = require("fs");

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

// Use writeFileSync method to use promises instead of a callback function
/*
1. main menu - (options: Add employee, Exit)
2. Add employee based on role
  - if intern - ask for school
  - if engineer - ask for github
  - if manager - ask for office number not phone number per screen example in instructions
3. main menu (again)
*/

//employees array initialized
const EMPLOYEES = [];
//need to use HTML string concatenation below since there's no client side to capture using document object 
//so we have to do it this way using the array with concats
const generateHTML = () => {
  let list = "";
  EMPLOYEES.forEach((item) => {
    if (item.getRole() === "Manager") {
      list += `
     <section class="card">
     <header>${item.getName()}
     <p><i class="fa fa-coffee"></i> Manager</p>
     </header>
     <p>Id: ${item.getId()}</p>
     <p>Email: ${item.getEmail()}</p>
     <p>Office Number: ${item.getOfficeNumber()}</p>
     </section>
     `;
    }else if(item.getRole() === "Engineer"){
        list += `
       <section class="card">
       <header>${item.getName()}
       <p><i class="fa fa-glasses"></i> Engineer</p>
       </header>
       <p>Id: ${item.getId()}</p>
       <p>Email: ${item.getEmail()}</p>
       <p>GitHub: ${item.getGitHub()}</p>
       </section>
       `;
    }else{
        list += `
       <section class="card">
       <header>${item.getName()}
       <p><i class="fa fa-user-graduate"></i> Intern</p>
       </header>
       <p>Id: ${item.getId()}</p>
       <p>Email: ${item.getEmail()}</p>
       <p>School: ${item.getSchool()}</p>
       </section>
       `; 
    }     
  });
// had to use older version of font awesome to get all the icons I needed
  let htmlString = `<!DOCTYPE html>
   <html lang="en">
   <head>
   <title>My Team</title>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   <link rel="stylesheet" type="text/css" href="../src/css/style.css" />
   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">  
 </head>

 <body>
   <header class="main-header">
     <h1><i class="fa fa-thumbs-up"></i>  My Team</h1>
   </header>
   <main>${list}
   </main>
 </body>

</html>
 `;
  //  fs.writeFile('./dist/team.html', htmlString, (err) =>
  //  err ? console.log(err) : console.log('Successfully created your team.html file!')

  fs.writeFile("./dist/team.html", htmlString, (err) =>
    err
      ? console.log(err)
      : console.log("Successfully created your team.html file!")
  );
};

const baseQuestions = [
  {
    message: "Enter employee name: ",
    name: "name",
    type: "input",
    validate: validateInput("employee name"),
  },
  {
    message: "Enter employee id: ",
    name: "id",
    type: "input",
    validate: validateInput("employee id"),
  },
  {
    message: "Enter employee email: ",
    name: "email",
    type: "input",
    validate: validateInput("employee email"),
  },
];

//----------------------------------------------------------------------------
//present base questions with spread operator and only add the additional question
//for each employee type 
const addManager = async () => {
  let answers;
  try {
    let emptype = "manager"; //manager, intern or engineer
    answers = await inquirer.prompt([
      ...baseQuestions,
      {
        message: "Enter manager office number: ",
        name: "officeNumber",
        type: "input",
        validate: validateInput("manager office number"),
      },
    ]);

    // mainMenu()
  } catch (err) {
    console.log("ERROR PROMPTING USER::: \n", err);
  }

  try {
    console.log("answers:", answers);
    // pass the whole answers object as "config" to the class
    // because the structure matches exactly { name: '', id:'', ...}
    // create a new manager
    let newManager = new Manager(answers);
    // push the new employee to the array
    EMPLOYEES.push(newManager);
    mainMenu();
  } catch (err) {
    console.log("ERROR CREATING MANAGER CLASS::: \n", err);
  }
};

const addIntern = async () => {
  let answers;
  try {
    answers = await inquirer.prompt([
      ...baseQuestions,
      {
        message: "Enter intern's school: ",
        name: "school",
        type: "input",
        validate: validateInput("intern's school"),
      },
    ]);
  } catch (err) {
    console.log("ERROR PROMPTING USER::: \n", err);
  }

  try {
    console.log("answers:", answers);
    // pass the whole answers object as "config" to the class
    // because the structure matches exactly { name: '', id:'', ...}
    // create a new manager
    let newIntern = new Intern(answers);
    // push the new employee to the array
    EMPLOYEES.push(newIntern);
    mainMenu();
  } catch (err) {
    console.log("ERROR CREATING INTERN CLASS::: \n", err);
  }
};

const addEngineer = async () => {
  let answers;
  try {
    answers = await inquirer.prompt([
      ...baseQuestions,
      {
        message: "Enter engineer's GitHub username: ",
        name: "githubUsername",
        type: "input",
        validate: validateInput("engineer's GitHub username"),
      },
    ]);
  } catch (err) {
    console.log("ERROR PROMPTING USER::: \n", err);
  }

  try {
    console.log("answers:", answers);
    // pass the whole answers object as "config" to the class
    // because the structure matches exactly { name: '', id:'', ...}
    // create a new manager
    let newEngineer = new Engineer(answers);
    // push the new employee to the array
    EMPLOYEES.push(newEngineer);
    mainMenu();
  } catch (err) {
    console.log("ERROR CREATING ENGINEER CLASS::: \n", err);
  }
};

const mainMenu = async () => {
  //Acceptance criteria state that after starting the app, first prompt is to enter team's manager info
  //check for empty employees array to know the app was just started
  if (!EMPLOYEES.length) {
    console.log("----ADDING TEAM MANAGER----");
    return addManager();
  }
  //now enter the other employees
  let answers = await inquirer.prompt([
    {
      name: "main",
      type: "list",
      message: "Would you like to add another Employee?",
      choices: ["Add Engineer", "Add Intern", "Generate HTML", "Exit"],
      default: "Add Engineer",
    },
  ]);
  if (answers.main === "Exit") {
    if (EMPLOYEES.length === 0) {
      console.log("No data, exiting...");
      process.exit(0);
    }
    console.log("Data exists, generating HTML file...");
    generateHTML();
  } else if (answers.main === "Add Engineer") {
    console.log("----ADDING ENGINEER----");
    addEngineer();
  } else if (answers.main === "Add Intern") {
    console.log("----ADDING INTERN----");
    addIntern();
  } else {
    generateHTML();
  }
};

// other example: using writeFileSync as a promise
// const init = () => {
//   promptUser()
//     // Use writeFile method imported from fs.promises to use promises instead of
//     // a callback function
//     .then((answers) => writeFile('index.html', generateHTML(answers)))
//     .then(() => console.log('Successfully wrote to index.html'))
//     .catch((err) => console.error(err));
// };

// init();

mainMenu();
// -------------------------- main menu
// - Add employee or exit
// add employee:
// ------------------------------- addEmployee()
// - choose employee type:
// > manager
// - intern
// - engineer
// => Manager - addManager()
// ---------------------------------------------- addManager()
// enter name:
// enter email:
// enter id:
// enter office number:

// addManager()
