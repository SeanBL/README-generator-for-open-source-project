// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
//const questions = ['description', 'contents', 'installation', 'usage', 'license', 'contributing', 'tests', 'question'];

//const [description, contents, installation, usage, license, contributing, tests, question] = questions;

const generateReadMe = ({ title, description, tableOfContents, installation, usage, license, contributing, tests, questions}) =>
`
# ${title} 

## ${description}

## ${tableOfContents}

## ${installation}

## ${usage}

## ${license}

## ${contributing}

## ${tests}

## ${questions}
`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Type the title of your project',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What was your motivation for this project?',
        },
    ])
.then((response) => {
    const readmeContent = generateReadMe(response);

// TODO: Create a function to write README file
fs.writeFile('README.md', readmeContent, (err) => err ? console.log(err) : console.log("README.md created!"));

});    


// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
