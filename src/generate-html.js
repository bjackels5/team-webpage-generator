const generateEmployee = (employee, faIcon, githubOrSchool) => {
    return `
            <div class="card col-md-3 col-sm-12 border-0 shadow px-0 mx-3 mb-3">
                <div class="card-header pt-2 pl-3 text-white bg-primary">
                    <p class="card-title">${employee.empName}</p>
                    <p class="card-subtitle"><i class="fa ${faIcon} mr-1"></i>${employee.employeeType}</p>
                </div>
                <div class="list-group list-group-flush">
                    <p class="list-group-item">ID: ${employee.idNum}</p>
                    <p class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                    <p class="list-group-item">${githubOrSchool}</p>
                </div>
            </div>
            `
};

const generateEmployees = employees => {
    return `
    ${employees
        .filter(({employeeType}) => employeeType === "Engineer")
        .map(employee => {
            return `${generateEmployee(employee, "fa-glasses",
                                        'GitHub: <a href="https://github.com/' + employee.github + '" target="_blank">' + employee.github + '</a>')}
            `
        })
        .join('')}
    ${employees
        .filter(({employeeType}) => employeeType === "Intern")
        .map(employee => {
            return `${generateEmployee(employee, "fa-user-graduate", "School: " + employee.school)}
            `
        })
        .join('')}
    `
};

module.exports = teamData => {
    // destructure employees and manager info from teamData based on their property key names
    const { employees, ...manager } = teamData;

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
            <p>${manager.title}</p>
        </div>
    </header>
    <div class="container mt-3">
        <div class="row justify-content-center">
            ${generateEmployee(manager, "fa-mug-hot", "Office Number: " + manager.officeNum)}
            ${generateEmployees(employees)}
        </div>
    </div>    
</body>
</html>
`
};    
