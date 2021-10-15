const Engineer = require("../lib/Engineer");
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

// create team cards
const generateManager = managerInfo => {
    return `
        <div class="col">
            <div class="card">
                <div class="card-header bg-primary">
                    <h2 class="card-title text-light">${managerInfo.name}</h2>
                    <h4 class="card-subtitle text-light">${managerInfo.role}</h4>
                </div>
                <div class="card-body bg-light">
                    <p class="card-text border bg-white my-0 p-2">ID: ${managerInfo.id}</p>
                    <p class="card-text border bg-white my-0 p-2">Email: <span><a href="#">${managerInfo.email}</a></span></p>
                    <p class="card-text border bg-white my-0 p-2">Office: ${managerInfo.office}</p>
                </div>
            </div>
        </div>
    `;
};

const generateEngineer = engineerInfo => {
    if (!engineerInfo) {
        return '';
    }

    return `
        <div class="col">
            <div class="card">
                <div class="card-header bg-primary">
                    <h2 class="card-title text-light">${engineerInfo.name}</h2>
                    <h4 class="card-subtitle text-light">${engineerInfo.role}</h4>
                </div>
                <div class="card-body bg-light">
                    <p class="card-text border bg-white my-0 p-2">ID: ${engineerInfo.id}</p>
                    <p class="card-text border bg-white my-0 p-2">Email: <span><a href="#">${engineerInfo.email}</a></span></p>
                    <p class="card-text border bg-white my-0 p-2">GitHub: <span><a href="#">${engineerInfo.github}</a></span></p>
                </div>
            </div>
        </div>
    `;
};

const generateIntern = internInfo => {
    if (!internInfo) {
        return '';
    }

    return `
        <div class="col">
            <div class="card">
                <div class="card-header bg-primary">
                    <h2 class="card-title text-light">${internInfo.name}</h2>
                    <h4 class="card-subtitle text-light">${internInfo.role}</h4>
                </div>
                <div class="card-body bg-light">
                    <p class="card-text border bg-white my-0 p-2">ID: ${internInfo.id}</p>
                    <p class="card-text border bg-white my-0 p-2">Email: <span><a href="#">${internInfo.email}</a></span></p>
                    <p class="card-text border bg-white my-0 p-2">School: ${internInfo.github}</p>
                </div>
            </div>
        </div>
    `;
};

module.exports = templateData => {
    const { managerInfo } = templateData;

    return `
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <h1 style="text-align: center;" class="text-light bg-danger py-4">
                My Team
            </h1>
        </header>
        <main class="container my-5">
            <div class="row row-cols-3 justify-content-center g-3">
                ${generateManager(managerInfo)}
                ${generateEngineer(engineerInfo)}
                ${generateIntern(internInfo)}
            </div>
        </main>
    </body>
</html>
    `;
};