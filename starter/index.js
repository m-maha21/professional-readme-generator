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
    name: "table of contents",
    message: "Please add a table of contents to make it easier for users to move around the project with ease.",
},

{
    type: "input",
    name: "installation",
    message: "How can I install and run the project?",
},

{
    type: "input",
    name: "usage",
    message: "Please provide instructions and examples so users/contributors can use the project",
},

{
    type: "input",
    name: "license",
    message: "What license have you used for this project?",
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
    message: "Go to the extra mile and write tests for your application then provide code examples and how to run them.",
},
 
{
    type: "input",
    name: "questions",
    message: "Give users the chance to ask you any questions they may have about your project.",
},

{
    type: "input",
    name: "badges",
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
