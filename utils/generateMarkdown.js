// TODO: Create a function that returns a license badge based on 
// which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
// if There is no license
// WE DO NOT KNOW WHAT LICENSE YOU WILL SELECT SO THIS IS A PLACEHOLDER.
// WHATEVER YOU SELECT WILL SHOW UP IN BLUE AND REPLACE THE PLACEHOLDER.
return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
// if There is no license
return `(https://opensource.org/licenses/${license})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
// if There is no license
return `## License

This project is under ${license} license.
`

//return "";
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Github](#github)
* [Email](#email)

## Installation

To install necessary packages please run following command:
${data.installation}

## usage
${data.usage}
## contributing
${data.contributing}
## tests
${data.test}
## github
${data.github}
## email
${data.email}

`;
}

module.exports = generateMarkdown;
