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
Your task is to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making code maintainable, so you’ll also write a unit test for every part of your code and ensure that it passes each test.

Because this application won’t be deployed, you’ll need to provide a link to a walkthrough video that demonstrates its functionality and all of the tests passing. You’ll need to submit a link to the video AND add it to the readme of your project.

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
<!-- audience is other developers -->

We added  "scripts": {
    "test": "jest"
  },
to the json file so we can just enter test at the command line to run testing.
Any time there is a repetitive action, add to scripts section.  If scripts
section doesn't exist, add it like we did here.
Clear added so will clear terminal and then run jest
&& is telling the terminal to run 2 completely separate scripts
{
  "scripts": {
    "test": "clear && jest"
  },
  "dependencies": {
    "inquirer": "^8.2.4",
    "jest": "^29.2.2"
  }
}
ALso, when doing testing, click on "auto attach" in blue at bottom of terminal so we don't see so much extra garbage on screen
XXXXX we had to remove this because Jest does not use import yet - only in experimental stage now in Jest
So we put back to require logic
Below we added "type": "module" which tells node to use import and not require 
{
  "type": "module",
  "scripts": {
    "test": "jest"
  },
  "dependencies": {
    "inquirer": "^8.2.4",
    "jest": "^29.2.2"
  }
}

1. Clone this GitHub repo https://github.com/abrownstein2022/ch11-express-note-taker:
<!-- Check out the gh cli tool from github -->
```bash
$ gh repo clone /abrownstein2022/ch11-express-note-taker
```
2. From the terminal, install npm and uuid:

```bash
$ npm install
$ npm uuid
```

<!-- [] implies user input 
 mysql> restaurant_mgr < C:\[filename].sql
-->

3. Start the local server and watch for file changes to automatically restart server:
```bash
$ npm run watch 
```

4. Open Express or a browser to test any changes you make to the application after cloning.

## Usage

1. Open the app using Express or Heroku https://ch11-express-notes-taker.herokuapp.com
2. From the landing page, click on the notes page to see a page with existing notes on the left-hand column, plus empty fields
to enter a new note title and text.
3. Press the Save icon to save this info and see it in the left-hand column.
4. When you click on the Write icon in the top navigation, I see empty fields to enter a new note title and text. 
5. Press the Delete icon to delete a note.

**Please review to the screenshots below to view the application:**

![example image get started page](./public/images/ch11-express-screen1-get-started-pg.jpg)
![example image note entry screen](./public/images/ch11-express-screen2-note-entry-screen.jpg)
![example image note entry screen save](./public/images/ch11-express-screen3-note-entry-screen-save.jpg)
![example image see new note to left after save](./public/images/ch11-express-screen4-note-to-left-after-save.jpg)
![example image see 2 notes to left after another save](./public/images/ch11-express-screen5-notes-to-left-after-save.jpg)
![example image click on note to left to see rendered in note entry page](./public/images/ch11-express-screen6-click-on-note-to-left-to-see-on-right.jpg)
![example image click on delete icon to delete note](./public/images/ch11-express-screen7-click-on-delete.jpg)
![example image see note was deleted](./public/images/ch11-express-screen8-after-delete.jpg)

demo video here

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
**The main features in this project are:**<br>
1. Uses Express.js and uuid
1. Deployed on Heroku
1. GET, POST and DELETE routes for retrieving, adding and deleteing note data
1. Dates-fns to format the order date in vieworder.handlebars (https://date-fns.org/)
1. Necessary folder structure 
1. Professional README

## How-to-Contribute

N/A

## Test Instructions

N/A

## Questions

Feel free to contact me with any questions.

I can be reached at alexis@drdatabase.com.

This GitHub repo can be found at:
  
https://github.com/abrownstein2022/ch11-express-note-taker
 


