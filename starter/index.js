const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

    {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
},

{
    type: "input",
    name: "description",
    message: "Please provide a description of your project",
},

{
    type: "input",
    name: "installation",
    message: "How can I install and run the project?",
},

{
    type: "input",
    name: "usage",
    message: "Please provide instructions and examples so users can use the project",
},

{
    type: "checkbox",
    name: "license",
    message: "Please select a license that you would like to use for this project.",
    choices: ["MIT", "Apache 2.0", "GNU General Public v3.0", "BSD2", "BSD3", "Boost Software 1.0", "Mozilla Public 2.0", "None"],
},

{
    type: "input",
    name: "contribution",
    message: "How can other developers contribute to your project?",
},

{
    type: "input",
    name: "credits",
    message: "Please include a list of your team members if you worked on the project as a team. You should add links to their GitHub profiles and social media accounts.",
},

{
    type: "input",
    name: "tests",
    message: "Write tests for your application then provide code examples and how to run them.",
},
 
{
    type: "input",
    name: "GitHub",
    message: "What is your GitHub Username?",
},

{
    type: "input",
    name: "email",
    message: "What is your email address?",
},

{
    type: "input",
    name: "tools",
    message: "You can add tools that you have used in this section and show some simple stats about your project like the number of forks, collaborators, open issues and many more.",
},


];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`${fileName} generated successfully!`);
    });
}

module.exports = writeToFile;

// function to initialize program
function init() {
inquirer.prompt(questions)
.then (answers => {
    // generate README content based on user's answers
    const readmeContent = generateMarkdown(answers);
// write README file
const outputPath = path.join(__dirname, "README.md");
writeToFile(outputPath, readmeContent);
})
.catch(error => {
    console.error("An error occured:", error);
});
}

// function call to initialize program
init();
