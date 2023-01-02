# Module 10-Object-Oriented Programming Challenge: Team Profile Generator
![license](https://img.shields.io/badge/license-MIT-black)
## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How-to-Contribute](#how-to-contribute)
- [Tests](#test-instructions)
- [Questions](#questions)

## Description
The task for this project was to build a `Node.js` command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Since testing is key to making code maintainable, I also had to write a unit test for every part of our code and ensure that it passes each test using `Jest.` I used `Inquirer v8.2.4` for the command-line question prompts to collect user input.  I used `fs` for writing to the file system.

Because this application isn't being deployed, I was also required to provide a link to a walkthrough video that demonstrates its functionality and all of the tests passing. 


**User Story**

```md

AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

```

**Acceptance Criteria**

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

```

## Installation
1. Clone this GitHub repo https://github.com/abrownstein2022/ch10-oop-team-profile-gen
<!-- Check out the gh cli tool from github -->
```bash
$ gh repo clone /abrownstein2022/ch10-oop-team-profile-gen
```
2. From the terminal, install dependencies, inquirer v8.2.4 and jest:

```bash
$ npm i
$ npm i jest
$ npm i inquirer@8.2.4
```

## Usage

1. Start the application:
```bash
$ node index.js
```
2. The first prompts will be for the team manager information, including manager name, employee id, email and 
office number.  You may only enter one team manager.
3. After you have entered the manager info, a main menu appears so you can select to add Engineers and/or Interns.  
You may enter as many Engineers and Interns as needed.
4. When you have entered all the team members' information, click on the menu option "Done - Exit and Generate HTML file".  
At this point, the application will generate the team.html file in the /dist folder, and exit the application.
5. Go to the /dist folder.
6. Right-click on the team.html file that was created by the application and select "Open in Default Browser". 
7. To test the application using Jest and the JavaScript files in the _tests_ folder:
```bash
$ npm run test 
```

**Please review to the screenshots below to view the application:**

![example image get started page](./assets/images/ch11-express-screen1-get-started-pg.jpg)
![example image note entry screen](./assets/images/ch11-express-screen2-note-entry-screen.jpg)
![example image note entry screen save](./assets/images/ch11-express-screen3-note-entry-screen-save.jpg)
![example image see new note to left after save](./assets/images/ch11-express-screen4-note-to-left-after-save.jpg)
![example image see 2 notes to left after another save](./assets/images/ch11-express-screen5-notes-to-left-after-save.jpg)
![example image click on note to left to see rendered in note entry page](./assets/images/ch11-express-screen6-click-on-note-to-left-to-see-on-right.jpg)
![example image click on delete icon to delete note](./assets/images/ch11-express-screen7-click-on-delete.jpg)
![example image see note was deleted](./assets/images/ch11-express-screen8-after-delete.jpg)

Please review the demonstration video below.



## Credits

```md
Alexis Brownstein
```

## License

 ```md
 MIT 
```

Link to license text:
https://opensource.org/licenses/mit-license


![badge](https://img.shields.io/badge/license-mit-black)


## Features

<!-- 
# h1
###### h6
**bold**
*italic*
_underline_

| key | value |
|-|-|
| name | 'bob' |


- list
- items

1. numberd
1. list
1. all ones - auttomatic numbering
Feattures for *future* development
 -->
**The main features found in this project are:**<br>
1. Uses node.js, fs (file system), inquirer v8.2.4 and Jest.
1. Contains a demonstration video and example screenshots.
1. Uses regex validation for email address.
1. Validates that all other user input values entered are not empty.
1. Tests all conditions of the application from code in the _tests_ folder, using Jest.
1. Click on employee's email address to open it in your default email program.
1. Click on engineer's GitHub username to open their GitHub profile in a new tab.
1. Attractive web page design with flexboxes/cards setup
1. Proper folder structure 
1. Professional README

## How-to-Contribute

N/A

## Test Instructions

N/A

## Questions

Feel free to contact me with any questions.

I can be reached at alexis@drdatabase.com.

This GitHub repo can be found at:
  
https://github.com/abrownstein2022/ch10-oop-team-profile-gen
 


