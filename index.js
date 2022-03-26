
const inquirer = require('inquirer');
const fs = require('fs');

const userQuestions = () => {
    //gather info and format data for writing
    var response = inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'what is your name?'
        },
        {
            type: 'input',
            name: 'user_location',
            message: 'what is your location?'
        },
        // {
        //     type: 'editor',
        //     name: 'userBio',
        //     message: 'press enter to input your bio info',
        // },
        // {
        //     type: 'input',
        //     name: 'user_linkd',
        //     message: 'enter your user LinkedIn url'
        // },
        // {
        //     type: 'input',
        //     name: 'user_git',
        //     message: 'enter your user git hub url'
        // }
    ])
    return response;
 }

 const generateReadme = ({username}) =>
    `#Description

    ${}

    #Table of Contents
    `

 const initReadme = () => {
    userQuestions()
      // Use writeFileSync method to use promises instead of a callback function
      .then((response) => fs.writeFileSync('README.md', generateReadme(response)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };
  
  initReadme();