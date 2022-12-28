const inquirer = require('inquirer');

const {
  validateInput
} = require("./src/utils.js");

// Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
//const { writeFile } = require('fs').promises;

const fs = require('fs');

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
  - if manager - ask for office number not phone number per screen example in instructions
3. main menu (again)
*/

//employees array initialized
const EMPLOYEES = [];

const generateHTML = () => {

    let list = "";
    EMPLOYEES.forEach((item)=>{
    if(item.getRole()=== "Manager"){
     list += `
     <section class="card">
     <header>${item.getName()}</header>
     <img src="./assets/images/camera.jpg" alt="camera" />
     <p>Price: $300</p>
     </section>
     
     `
   
    }
   
    })

    let htmlStringx =  `<!DOCTYPE html>
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
   
       <h1 class="display-4">Hi! My name is alexis</h1>
       <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
       <ul class="list-group">
         <li class="list-group-item">My GitHub username is xxxx</li>
         <li class="list-group-item">LinkedIn: xxxxxx</li>
       </ul>
     </div>
   </div>
   </body>
   </html>`;
   //fs.writeFile('./dist/team.html', htmlString)

    let htmlString =  `<!DOCTYPE html>
   <html lang="en">
   <head>
   <title>My Team</title>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   <link rel="stylesheet" type="text/css" href="./assets/css/style.css" />
 </head>

 <body>
   <header class="main-header">
     <h1>My Team</h1>
   </header>
   <main>
     <section class="card">
       <header></header>
       <img src="./assets/images/camera.jpg" alt="camera" />
       <p>Price: $300</p>
     </section>
     <section class="card">
       <header>Tablet</header>
       <img src="./assets/images/tablet.jpg" alt="tablet" />
       <p>Price: $150</p>
     </section>
     <section class="card">
       <header>Toilet Paper</header>
       <img src="./assets/images/toilet-paper.jpg" alt="toilet paper" />
       <p>Price: $30</p>
     </section>
     <section class="card">
       <header>Wooden Spoons</header>
       <img src="./assets/images/wooden-spoons.jpg" alt="wooden spoons" />
       <p>Price: $10</p>
     </section>
     <section class="card">
       <header>Soap</header>
       <img src="./assets/images/soap.jpg" alt="soap" />
       <p>Price: $5</p>
     </section>
     <section class="card">
       <header>Spinning Top</header>
       <img src="./assets/images/spinning-top.jpg" alt="spinning top" />
       <p>Price: $3</p>
     </section>
   </main>
 </body>

</html>
 `;
//  fs.writeFile('./dist/team.html', htmlString, (err) =>
//  err ? console.log(err) : console.log('Successfully created your team.html file!')




     fs.writeFile('./dist/team.html', htmlString, (err) =>
    err ? console.log(err) : console.log('Successfully created your team.html file!')
    );

   }



//changed name: 'name' to name: 'empname' below to prevent deprecated error
//pass variable so can see employee type in the messages without having to 
//write separate question sets

let emptype = "manager"; //manager, intern or engineer
let baseQuestionsManager = [

  {
    message: `Enter ${emptype} name: `,
    name: 'empname',
    type: 'input',
    validate: validateInput(`${emptype} name`),  
  },
  {
    message: `Enter ${emptype} id: `,
    name: 'id',
    type: 'input',
    validate: validateInput(`${emptype} id`),  
  },
  {
    message: `Enter ${emptype} email: `,
    name: 'email',
    type: 'input',
    validate: validateInput(`${emptype} email`),  

  },
]
 //only use these questions in addManager so can customize the prompts and messages better

const baseQuestions = [
  {
    message: 'Enter employee name: ',
    name: 'empname',
    type: 'input',
    validate: validateInput("employee name"),  
  },
  {
    message: 'Enter employee id: ',
    name: 'id',
    type: 'input',
    validate: validateInput("employee id"),  
  },
  {
    message: 'Enter employee email: ',
    name: 'email',
    type: 'input',
    validate: validateInput("employee email"),  

  },
]

//----------------------------------------------------------------------------
const addManager = async () => {
  let answers
  try{
    let emptype = "manager"; //manager, intern or engineer
    answers = await inquirer.prompt([
      ...baseQuestions,
      {  
        message: 'Enter manager office number: ',
        name: 'officeNumber',
        type: 'input',
        validate: validateInput("manager office number"), 
      }
    ]);

    // mainMenu()
  }catch(err){
    console.log('ERROR PROMPTING USER::: \n', err)
  }

  try{
    console.log('answers:', answers)
    // pass the whole answers object as "config" to the class
    // because the structure matches exactly { name: '', id:'', ...}
    // create a new manager
    let newManager = new Manager(answers)
    // push the new employee to the array
    EMPLOYEES.push(newManager)
    mainMenu()
  }catch(err){
    console.log('ERROR CREATING MANAGER CLASS::: \n', err)
  }
}

const addIntern = async () => {
  let answers
  try{
    answers = await inquirer.prompt([
      ...baseQuestions,
      {
        message: "Enter intern's school: ",
        name: 'school',
        type: 'input',
        validate: validateInput("intern's school"), 
      }
    ]);
  }catch(err){
    console.log('ERROR PROMPTING USER::: \n', err)
  }

  try{
    console.log('answers:', answers)
    // pass the whole answers object as "config" to the class
    // because the structure matches exactly { name: '', id:'', ...}
    // create a new manager
    let newIntern = new Intern(answers)
    // push the new employee to the array
    EMPLOYEES.push(newIntern)
    mainMenu()
  }catch(err){
    console.log('ERROR CREATING INTERN CLASS::: \n', err)
  }
}

const addEngineer = async () => {
  let answers
  try{
    answers = await inquirer.prompt([
      ...baseQuestions,
      {
        message: "Enter engineer's GitHub username: ",
        name: 'githubUsername',
        type: 'input',
        validate: validateInput("engineer's GitHub username"), 
      }
    ]);
  }catch(err){
    console.log('ERROR PROMPTING USER::: \n', err)
  }

  try{
    console.log('answers:', answers)
    // pass the whole answers object as "config" to the class
    // because the structure matches exactly { name: '', id:'', ...}
    // create a new manager
    let newEngineer = new Engineer(answers)
    // push the new employee to the array
    EMPLOYEES.push(newEngineer)
    mainMenu()
  }catch(err){
    console.log('ERROR CREATING ENGINEER CLASS::: \n', err)
  }
}


//----------------------------------------------------------------------------
// const addEmployee = async () => {
//   // ask for the role, and call other functions to handle the chosen role
//   let answers = await inquirer.prompt([
//     {
//       name: 'role',
//       type: 'list',
//       choices: ['Manager', 'Engineer', 'Intern'],
//       default: 'Intern'
//     }
//   ]);


//   switch(answers.role){
//     case 'Manager': return addManager()
//     case 'Engineer': return addIntern()
//     default: addIntern()
//   }
// }



//----------------------------------------------------------------------------
const mainMenu = async () => {
  //Acceptance criteria state that after starting the app, first prompt is to enter team's manager info
  //check for empty employees array to know the app was just started
  if(!EMPLOYEES.length){   
    console.log("----ADDING TEAM MANAGER----");
    return addManager()
  }
  //now enter the other employees
  let answers = await inquirer.prompt([
    {
      name: 'main',
      type: 'list',
      message: 'Would you like to add another Employee?',
      choices: ['Add Engineer', 'Add Intern','Generate HTML','Exit'],
      default: 'Add Engineer'
    }
  ]);
  if(answers.main === 'Exit'){
    if(EMPLOYEES.length === 0){
      console.log('No data, exiting...')
      process.exit(0)
    }
    console.log('Data exists, generating HTML file...')
    generateHTML();
  }else if(answers.main === 'Add Engineer'){
    console.log("----ADDING ENGINEER----");
    addEngineer();
  }else if(answers.main === 'Add Intern'){
    console.log("----ADDING INTERN----");
    addIntern();
  }else{
    generateHTML();
  }
};



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