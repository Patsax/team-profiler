const inquirer = require('inquirer');
const generateSite = require('./src/profile-template');
const { writeFile, copyFile } = require('./utils/generate-site');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
            validate: (managerName) => {
                if (managerName) {
                    return true;
                } else {
                    console.log("Please enter the team manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's employee id number?",
            validate: (managerId) => {
                if (managerId) {
                    return true;
                } else {
                    console.log("Please enter the team manager's employee id number!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email address?",
            validate: (managerEmail) => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log("Please enter the team manager's email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the team manager's office number?",
            validate: (managerOffice) => {
                if (managerOffice) {
                    return true;
                } else {
                    console.log("Please enter the team manager's office number!"),
                    return false;
                }
            }
        }
    ]);
};

const promptEmployee = (employeeData) => {
    console.log(`
    ==========================================
    Add a New Employee or Finish Building Team
    ==========================================
    `);

    // if there is no 'employeeData' array property, create one
    if (!employeeData) {
        employeeData = [];
    }
    return inquirer
    .prompt([
        {}
    ])
}

promptUser();
