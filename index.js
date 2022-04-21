const inquirer = require("inquirer");
let titlename="readme-generator"
const fs = require('fs')
console.log("hiiii")
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'project title',
    },
    {
      type: 'input',
      message: 'What is your Description?',
      name: 'Desription',
    },
    {
      type: 'input',
      message: 'What is your Installation?',
      name: 'Installation',
    },
    {
      type: 'input',
      message: 'What is your Usage?',
      name: 'Usage',
    },
    {
      type: 'input',
      message: 'What is your Contributing?',
      name: 'Contributing',
    },
    {
      type: 'input',
      message: 'What are your Tests?',
      name: 'Tests',
    },
    {
      type: 'input',
      message: 'What is your Github account?',
      name: 'Github',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'Email',
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

function writeFile(html){
    fs.writeFileSync("./dist/README.md" , html)
}

async function init(){
    let answers = await prompt();
    let genHTML = generateHTML(answers);
    writeHTMLFile(genHTML);
}

init();








