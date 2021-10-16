const generateTeam = (team) => {
    const generateEmployee = (employee, special) => {
        return `
            <div class="col">
                <div class="card">
                    <div class="card-header bg-primary">
                        <h2 class="card-title text-light">${employee.getName()}</h2>
                        <h4 class="card-subtitle text-light">${employee.role()}</h4>
                    </div>
                    <div class="card-body bg-light">
                        <p class="card-text border bg-white my-0 p-2">ID: ${employee.getId()}</p>
                        <p class="card-text border bg-white my-0 p-2">Email: <a href="mailto:${employee.getEmail()}" target="_blank">${employee.getEmail()}</a></p>
                        <p class="card-text border bg-white my-0 p-2">${special}</p>
                    </div>
                </div>
            </div>
        `;
    };

    // create team cards
    const generateManager = (manager) => {
        return generateEmployee(manager, `Office: ${manager.getOfficeNumber()}`);
    };

    const generateEngineer = (engineer) => {
        return generateEmployee(engineer, `GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a>`);
    };

    const generateIntern = (intern) => {
        return generateEmployee(intern, `School: ${intern.getSchool()}`);
    };

    const html = [];

    html.push(
        team
            .filter((employee) => employee.role() === 'Manager')
            .map((manager) => generateManager(manager))
    );

    html.push(
        team
            .filter((employee) => employee.role() === 'Engineer')
            .map((engineer) => generateEngineer(engineer))
    );

    html.push(
        team
            .filter((employee) => employee.role() === 'Intern')
            .map((intern) => generateIntern(intern))
    );

    const body = html.join('')
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
                        ${body}
                    </div>
                </main>
            </body>
        </html>
        `;
};

module.exports = generateTeam;