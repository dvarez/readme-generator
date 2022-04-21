const inquirer = require("inquirer");
let titlename="mini project 28"
const fs = require('fs')
console.log("hiiii")
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your LinkedIn account',
      name: 'LinkendIn',
    },
    {
      type: 'input',
      message: 'What is your Github account',
      name: 'Github',
    },
  ])
  .then((answers) => {
      const htmlPage =`<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
          <H1>${titlename}</H1>
          <ul>
              <li>${answers.username}</li>
              <li><a href="${answers.LinkendIn}">${answers.LinkendIn}</a></li>
              <li><a href="${answers.LinkendIn}">${answers.Github}</a></li>
          </ul>
      </body>
      </html>`;
      console.log(answers)
      fs.writeFile(`./web.html`, htmlPage, (err) =>
  // TODO: Describe how this ternary operator works
  err ? console.error(err) : console.log('Commit logged!')
);
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });














