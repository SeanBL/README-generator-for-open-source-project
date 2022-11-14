// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
//const questions = ['description', 'contents', 'installation', 'usage', 'license', 'contributing', 'tests', 'question'];

//const [description, contents, installation, usage, license, contributing, tests, question] = questions;

const generateReadMe = ({ title, description, installation, usage, license, contributing, tests, questions, email,}, licenseBadge, licInfo) =>
`
# ${title} 
  ${licenseBadge}

## Description
${description} 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
${license}

${licInfo}

## How to Contribute
${contributing}

## Tests
${tests}

## Questions
Feel free to view and contribute to my work on GitHub.
https://github.com/${questions}

For additional questions, can also reach me through my email address here:
${email}
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
            message: 'Provide a short description explaining the what, why and how of your project. What was your motivation? Why did you build this project? What problem does it solve? What did you learn?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license type',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'If you wrote tests for your application, then provide examples on how to run them here.'
        },
        {
            type: 'input',
            name: "questions",
            message: "Please enter your GitHub username."
        },
        {
            type: 'input',
            name: "email",
            message: "Please enter your email address.",
        },
    ])
.then((answers) => {
    let badge;
    let licenseInfo;
    if (answers.license == "GNU AGPLv3") {
        badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";

        licenseInfo = "Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available. Refer to link for more details: https://choosealicense.com/licenses/agpl-3.0/";

    } else if (answers.license == "GNU GPLv3") {
        badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

        licenseInfo = "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. Refer to link for more details: https://choosealicense.com/licenses/gpl-3.0/";

    } else if (answers.license == "GNU LGPLv3") {
        badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";

        licenseInfo = "Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work. Refer to link for more details: https://choosealicense.com/licenses/lgpl-3.0/";

    } else if (answers.license == "Mozilla Public License 2.0") {
        badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";

        licenseInfo = "Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work. Refer to link for more details: https://choosealicense.com/licenses/mpl-2.0/";

    } else if (answers.license == "Apache License 2.0") {
        badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

        licenseInfo = "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code. Refer to link for more details: https://choosealicense.com/licenses/apache-2.0/";

    } else if (answers.license == "MIT License") {
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

        licenseInfo = "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code. Refer to link for more details: https://choosealicense.com/licenses/mit/";

    } else if (answers.license == "Boost Software License 1.0") {
        badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";

        licenseInfo = "A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code. Refer to link for more details: https://choosealicense.com/licenses/bsl-1.0/";

    } else {
        badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";

        licenseInfo = "A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code. Refer to link for more details: https://choosealicense.com/licenses/unlicense/";

    }
    
    console.log(badge);
    const readmeContent = generateReadMe(answers, badge, licenseInfo);

    
// TODO: Create a function to write README file
fs.writeFile('README.md', readmeContent, (err) => err ? console.log(err) : console.log("README.md created!"));

});   




// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
