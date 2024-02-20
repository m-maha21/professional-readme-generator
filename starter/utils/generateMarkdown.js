// function that returns a license badge at the top of README
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github License](https://img.shields.io/badge/license-MIT-yellowgreen.svg)`;
  }
  return "";
}

// function that returns the license link
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n [License](#license)\n`;
  }
  return "";
}

// functions that returns the license section of README
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## license
    Licensed under the ${license} license.`;
  }
  return "";
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}
  ${renderLicenseBadge(data.license)}

## Description 
${data.description}

## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)
- [Tools](#tools)

## Installation 
${data.installation}

## Usage 
${data.usage}

## License 
This project is licensed under the ${data.license} license. 

## Contribution 
${data.contribution}

## Credits 
${data.credits}

## Tests 
${data.tests}

## Questions 
For any questions or feedback, please feel free to reach out: 
- GitHub: [${data.GitHub}](https://github.com/${data.GitHub})
- E-mail: [${data.email}]

## Tools
${data.tools}

`;
};

module.exports = generateMarkdown;
