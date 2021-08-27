// credit to classmate Kim Collazo for the idea of having each employee type display in a different color


const generateEmployee = (employee, faIcon, githubOrSchool, headerColor) => {
    return `
            <div class="card col-md-3 col-sm-12 border-0 shadow px-0 mx-3 mb-3">
                <div class="card-header pt-2 pl-3 text-white bg-${headerColor}">
                    <p class="card-title">${employee.getName()}</p>
                    <p class="card-subtitle"><i class="fa ${faIcon} mr-1"></i>${employee.getRole()}</p>
                </div>
                <div class="list-group list-group-flush">
                    <p class="list-group-item">ID: ${employee.getId()}</p>
                    <p class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                    <p class="list-group-item">${githubOrSchool}</p>
                </div>
            </div>
            `
};

const generateEmployees = employees => {
    return `

    ${employees
        .filter(employee => employee.getRole() === "Manager")
        .map(employee => {
            return `${generateEmployee(employee, "fa-mug-hot", "Office Number: " + employee.getOfficeNumber(), "primary")}
            `
        })
        .join('')}
    ${employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(employee => {
            return `${generateEmployee(employee, "fa-glasses",
                                        'GitHub: <a href="https://github.com/' + employee.getGitHub() + '" target="_blank">' + employee.github + '</a>',
                                        "secondary")}
            `
        })
        .join('')}
    ${employees
        .filter(employee => employee.getRole() === "Intern")
        .map(employee => {
            return `${generateEmployee(employee, "fa-user-graduate", "School: " + employee.getSchool(), "info")}
            `
        })
        .join('')}
    `
};

module.exports = employees => {
     return `
<!DOCTYPE html>
<html lang="en-US">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Data</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
    />
</head>

<body>
    <header>
        <div class="row justify-content-center text-white bg-danger p-4 h4">
            <p>${employees.filter(employee => employee.getRole() === "Manager")[0].getTeamTitle()}
            </p>
        </div>
    </header>
    <div class="container mt-3">
        <div class="row justify-content-center">
            ${generateEmployees(employees)}
        </div>
    </div>    
</body>
</html>
`
};    
