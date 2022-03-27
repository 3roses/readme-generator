
const inquirer = require('inquirer');
const fs = require('fs');
let badgeURL;
var response;


const userQuestions = () => {
    //gather info and format data for writing
    response = inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Type a description of your project'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions for this project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are the prime uses for this project?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are the contribution guidelines?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'How should a user test this application?'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Would you like to add a license?',
            choices:[
                'Apache 2.0',
                'Boost Software License 1.0',
                'The MIT License',
                'Mozilla Public License 2.0',
                'BSD 3-Clause License',
                'BSD 2-Clause License',
                'GNU GPL v3',
                'GNU GPL v2',
                'GNU AGPL v3',
                'GNU LGPL v3',
                'GNU FDL v1.3',
            ]
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your gitHub url'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email'
        },
    ])
    return response;
 }

 const generateReadme = ({title, description, installation, usage, contribution, test, github, email, license, badgeURL}) =>
`# ${title}

## Description

${description}

## Table of Contents

1. [Installation](#installation)
2. [Usage Information](#usage)
3. [Contribution Guidelines](#contribution)
4. [Test Instructions](#test)
5. [Questions](#questions)
6. [License](#license)

## Installation <a name="installation"></a>

${installation}

## Usage Information <a name="usage"></a>

${usage}

## Contribution Guidelines <a name="contribution"></a>

${contribution}

## Test Instructions <a name="test"></a>

${test}

## Licenses <a name="license"></a>

${license}

## Questions <a name="questions"></a>

[GitHub](${github})<br>
[Email](mailto:${email})

`;



 const initReadme = () => {
    userQuestions()
    // .then((response) => getBadges(response))
      // Use writeFileSync method to use promises instead of a callback function
    //   console.log(response[6].choices)
      .then((response) => fs.writeFileSync('README.md', generateReadme(response)))
      .then(() => console.log('Successfully wrote to README.md'))
    //   .then(() => console.log(promise))
      .catch((err) => console.error(err));
  };
  
  initReadme();




  
  function getBadges (){
    var badges = [
        {
            type: 'Apache 2.0',
            image: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
        },
        {
            type: 'Boost Software License 1.0',
            image: 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg'
        }
    ]
  
      if (license === badges.type){
          badgeURL = badges.image
      }
      return badgeURL
  }