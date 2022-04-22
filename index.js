const inquirer = require("inquirer");
let titlename = "readme-generator"
const fs = require('fs')
console.log("hiiii")
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'Project',
        },
        {
            type: 'input',
            message: 'What is your Description?',
            name: 'Description',
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
            type: 'list',
            message: 'License?',
            name: 'License',
            choices: ["MIT", "Apache", "GPC"]
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
        const htmlPage = `
     
<img src="https://img.shields.io/badge/license-${answers.License}-green"> 


# Title: ${answers.Project}
              
            
## Description: ${answers.Description}
            
              
## Installation: ${answers.Installation} 
              
              
## usage: ${answers.Usage}
             
              
## contributing: ${answers.Contributing}
              
            
## tests: ${answers.Tests}
              
              
## License: 
${answers.License}
              
              
## questions: 

 GitHub: [${answers.Github}](https://github.com/${answers.Github})         
              
 Email: ${answers.Email}
              
  
      
          `;
        console.log(answers)
        fs.writeFile("./dist/README.md", htmlPage, (err) =>
            // TODO: Describe how this ternary operator works
            err ? console.error(err) : console.log('Commit logged!')
        );
        // Use user feedback for... whatever!!
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error);
        } else {
            // Something else went wrong
            console.log(error);
        }
    });

function writeFile(html) {
    fs.writeFileSync("./dist/README.md", html)
}

// async function init(){
//     let answers = await prompt();
//     let genHTML = generateHTML(answers);
//     writeHTMLFile(genHTML);
// }

// init();








