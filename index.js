
const inquirer = require('inquirer');
const fs = require('fs');

const userQuestions = () => {
    //gather info and format data for writing
    var response = inquirer.prompt([
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

 const generateReadme = ({title, description, installation, usage, contribution, test, github, email}) =>
`# ${title}

## Description

${description}

## Table of Contents

1. [Installation](#installation)
2. [Usage Information](#usage)
3. [Contribution Guidelines](#contribution)
4. [Test Instructions](#test)
5. [Questions](#questions)

## Installation <a name="installation"></a>

${installation}

## Usage Information <a name="usage"></a>

${usage}

## Contribution Guidelines <a name="contribution"></a>

${contribution}

## Test Instructions <a name="test"></a>

${test}

## Questions <a name="questions"></a>

[GitHub](${github})<br>
[Email](mailto:${email})

`;

 const initReadme = () => {
    userQuestions()
      // Use writeFileSync method to use promises instead of a callback function
      .then((response) => fs.writeFileSync('README.md', generateReadme(response)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };
  
  initReadme();