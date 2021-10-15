const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generatePage = require('./src/profile-template');

const team = [];

async function promptManager() {
    const manager = await inquirer.prompt([
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
                    console.log("Please enter the team manager's office number!");
                    return false;
                }
            }
        }
    ])
    const { name, id, email, office } = manager;
    team.push(new Manager(name, id, email, office));

    addEngineerOrIntern();
};

async function promptEngineer() {
    const engineer = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            validate: (engineerName) => {
                if (engineerName) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's employee id number?",
            validate: (engineerId) => {
                if (engineerId) {
                    return true;
                } else {
                    console.log("Please enter the engineer's employee id number!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?",
            validate: (engineerEmail) => {
                if (engineerEmail) {
                    return true;
                } else {
                    console.log("Please enter the engineer's email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub name?",
            validate: (githubName) => {
                if (githubName) {
                    return true;
                } else {
                    console.log("Please enter the engineer's GitHub name!");
                    return false;
                }
            }
        }
    ])
    const { name, id, email, github } = engineer;
    team.push(new Engineer(name, id, email, github));

    addOrFinish();
};

async function promptIntern() {
    const intern = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            validate: (internName) => {
                if (internName) {
                    return true;
                } else {
                    console.log("Please enter the intern's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's employee id number?",
            validate: (internId) => {
                if (internId) {
                    return true;
                } else {
                    console.log("Please enter the intern's employee id number!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?",
            validate: (internEmail) => {
                if (internEmail) {
                    return true;
                } else {
                    console.log("Please enter the intern's email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does this intern go to?",
            validate: (school) => {
                if (school) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!");
                    return false;
                }
            }
        }
    ])
    const { name, id, email, school } = intern;
    team.push(new Intern(name, id, email, school));
    
    addOrFinish();
};

function addEngineerOrIntern() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Would you like to add an Engineer or an Intern?',
            choices: [
                'engineer', 'intern'
            ]
        }
    ])
    .then((val) => {
        if (val.role === 'engineer') {
            promptEngineer();
        } else {
            promptIntern();
        }
    })
}

function addOrFinish () {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'complete',
            message: 'Is your team finished?'
        }
    ])
    .then((val) => {
        if (val.complete) {
            const teamProfile = generatePage(team);
            fs.writeFile('/dist/index.html', teamProfile, function (err) {
                if (err) throw err;
                console.log('File created!');
            })
        } else {
            addEngineerOrIntern();
        }
    })
}

promptManager();
