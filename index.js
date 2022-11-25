const inquirer = require('inquirer');

// Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
const { writeFile } = require('fs').promises;

const Employee = require('./lib/Employee.js')
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js');

// Use writeFileSync method to use promises instead of a callback function
/*
1. main menu - (options: Add employee, Exit)
2. Add employee: what is your role
  - if intern - ask for school
  - if engineer - ask for github
  - if manager - ask for office number
3. main menu (again)
*/
const EMPLOYEES = []

const baseQuestions = [
  {
    message: 'Enter your name: ',
    name: 'name--',
    type: 'input',
  },
  {
    message: 'Enter your id: ',
    name: 'id',
    type: 'input',
  },
  {
    message: 'Enter your email: ',
    name: 'email',
    type: 'input',
  },
]

//----------------------------------------------------------------------------
const addManager = async () => {
  try{

    let answers = await inquirer.prompt([,
      // ...baseQuestions,
      {
        message: 'Enter your office number: ',
        // name: 'officeNumber',
        type: 'input',
      }
    ]);


    // pass the whole answers object as "config" to the class
    // because the structure matches exactly { name: '', id:'', ...}
    // create a new manager
    let newManager = new Manager(answers)
    // push the new employee to the array
    EMPLOYEES.push(newManager)
    mainMenu()
  }catch(err){
    console.log('ERROR::: \n', err)
  }
}
const addIntern = () => {}
const addEngineer = () => {}




//----------------------------------------------------------------------------
const addEmployee = async () => {
  // ask for the role, and call other functions to handle the chosen role
  let answers = await inquirer.prompt([
    {
      name: 'role',
      type: 'list',
      choices: ['Manager', 'Engineer', 'Intern'],
      default: 'Intern'
    }
  ]);


  switch(answers.role){
    case 'Manager': return addManager()
    case 'Engineer': return addIntern()
    default: addIntern()
  }
}



//----------------------------------------------------------------------------
const mainMenu = async () => {
  let answers = await inquirer.prompt([
    {
      name: 'main',
      type: 'list',
      message: 'Would you like to add another Employee?',
      choices: ['Add Employee', 'Exit'],
      default: 'Add Employee'
    }
    // {
    //   type: 'input',
    //   name: '',
    //   message: 'What is your name?'
    // },
    // {
    //   type: 'input',
    //   name: 'name',
    //   message: 'What is your name?'
    // },
    // {
    //   type: 'input',
    //   name: 'github',
    //   message: 'Enter your GitHub Username'
    // }
  ]);
  if(answers.main === 'Exit'){
    if(EMPLOYEES.length === 0){
      console.log('No data, exiting...')
      process.exit(0)
    }
    generateHTML()
  }else{
    addEmployee()
  }
};

const generateHTML = () => {

 let htmlString =  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
fs.writeFile('index.html', htmlString)
}

// Bonus using writeFileSync as a promise
// const init = () => {
//   promptUser()
//     // Use writeFile method imported from fs.promises to use promises instead of
//     // a callback function
//     .then((answers) => writeFile('index.html', generateHTML(answers)))
//     .then(() => console.log('Successfully wrote to index.html'))
//     .catch((err) => console.error(err));
// };

// init();


mainMenu()
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