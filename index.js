// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions =
[
    { type: 'input',
        name: 'title',
        message: 'Enter the Title of Project?'},

    { type: 'input',
        name: 'description',
        message: 'Describe your Projects:'},

    { type: 'input',
        name: 'instructions',
        message: 'Please Enter Instructions:' },

    {type: 'input',
        name: 'contribution',
        message: 'Please Any Enter Contribution Guidelines:' },

    {type: 'input',
        name: 'usage',
        message: 'Enter Usage Information:' },
    
    { type: 'input',
        name: 'test',
        message: 'Enter Test Instructions:' },

     {type: 'input',
        name: 'email',
        message: 'Enter Your Email Address:'},
    
    {type: 'input',
        name: 'gituser',
        message: 'Enter Your GitHub UserName:'},

    {type: 'list',
        name: 'license',
        message: 'Please select any licenses for your Application:',
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License',
        'BSD 3-Clause "New" or "Revised" License', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0',
        'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'}
  ]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var dataStr = generateMD(data);
    fs.writeFile(fileName, dataStr, (err) => 
    err ? console.log(err) : console.log('Thank you, the info you entered has been added to README file'));
}
// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => { 
    writeToFile("professionalREADME.md", data);
    })

}
// Function call to initialize app
init();
