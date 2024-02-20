// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

## Description 
${data.description}

## Table of Contents 
${data.tableofcontents}
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)
- [Badges](#badges)

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
${data.questions}
For any questions or feedback, please feel free to reach out: 
- GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
- E-mail: [${data.email}]

## Badges 
${data.badges}

`;
};

module.exports = generateMarkdown;
