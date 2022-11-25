# ch10-oop-team-profile-gen
Module 10-Object-Oriented Programming Challenge: Team Profile Generator

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

