// TODO: Include packages needed for this application
// Adding a filesystem is handy to use to switch between files. hence the fs.
const fs = require("fs");
// Referred to activity 20 of node.js for this line of code.
// 1. we already have package.json, so now we install the version npm i @8.2.4 like we 
// have been doing in class.Then, we get package-lock.json.
const inquirer = require("inquirer");  
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// Here, I am going to refer back to activities from 09Node.js. Im Just going to ask questions.
// These are normally questions I have to answer myself for my readmes.

//title of my project and sections entitled Description, Table of Contents,
//  Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
{
    // title
    type: "input",
    name: "title",
    message: "Please name your project.",    
},
{
    // description
    type:"input",
    name:"description",
    message:"Please provide a short description of the project.",
},
{
    // asking for license out of the choices list
    type:"list",
    name:"license",
    message:"Please select license for this project",
    choices: ['MIT', "Apache 2.0", "GPL", "BSD"]
},
{
    // installation
    type:"input",
    name:"installation",
    message:"What are the steps required to install your project?",
},
{
    // usage
    type:"input",
    name:"usage",
    message:"Provide instructions and examples for use.",
},
{
    // contributing
    type:"input",
    name:"contributing",
    message:"Instructions for users to contribute to your repo.",
},
{
    // tests
    type:"input",
    name:"test",
    message:"Command to run tests.",
},
{
    // asking for github
    type:"input",
    name:"github",
    message:"Please enter your github username.",
},
{
    // asking for email
    type:"input",
    name:"email",
    message:"Please enter your email address.",
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) =>{
    writeToFile("homework.md",generateMarkdown({ ...response}))
  });
}

// Function call to initialize app
init();
