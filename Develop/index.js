// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { toUSVString } = require("util");

// // TODO: Create an array of questions for user input
// const questions = [];
const generateReadMe = ({ project, description, dependencies, using, license, contributing, test, email, github}) => {
  return `# READ ME GENERATOR
${project}
## DESCRIPTION
${description}
## TABLE OF CONTENTS
* [Installation] (#installation)
* [Usage] (#usage)
* [License] (#license)
* [Contributing] (#contributing)
* [Tests] (#tests)
* [Questions] (#questions)

## Installation

To run the following application please install ${dependencies}

## Usage

${using}

## License

${license}

## Contributing

${contributing}

## Tests

${test}

## Questions

If you have any questions please feel free to reach out to me via ${email} or my github ${github}`;
};

const main = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "What is your Github Username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "project",
      message: "What is the project called?",
    },
    {
      type: "input",
      name: "description",
      message: "Please write a short description about your project.",
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should your project have?",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "none"],
    },
    {
      type: "list",
      name: "dependencies",
      message: "What command should be run to install dependencies?",
      choices: ["npm i", "na"],
    },
    {
      type: "list",
      name: "test",
      message: "What command should be run to run tests?",
      choices: ["npm test", "na"],
    },
    {
      type: "input",
      name: "using",
      message: "What does the user need to know about using this repo?",
    },
    {
      type: "input",
      name: "contributing",
      message:
        "What does the user need to know about contributing to this repo?",
    },
  ]);

  const readMePageContent = generateReadMe(answers);
  try {
    fs.writeFileSync("readme1.md", readMePageContent);
    console.log("Successfully created readme1.md");
  } catch (err) {
    console.log(err);
  }
}
main();

// // TODO: Create a function to write README file
// // function writeToFile(fileName, data) {}
// const htmlPageContent = generateHTML(answers);
// try{
//   fs.writeFileSync('index.html', htmlPageContent);
//   console.log('Successfully created index.html!');
// } catch (err) {
//   console.log(err)
// }}
// main();

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
