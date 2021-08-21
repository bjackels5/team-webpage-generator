// {"title":"My Team","mgrName":"Brenda","email":"bjackels5@gmail.com","officeNum":"3","employees":[{"employeeType":"Engineer","title":"Sarah","empIdNum":"123","email":"sarah@home.com","github":"sarahjean"},{"employeeType":"Intern","title":"Isaac","empIdNum":"321","email":"isaac@home.com","school":"UF"}]}


module.exports = teamData => {
    // destructure employees and manager info from teamData based on their property key names
    const { employees, ...manager } = teamData;

    console.log(employees, manager);

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
</body>

</html>
`
// <body>
//     <header>
//         <div class="container flex-row justify-space-between align-center py-3">
//             <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
//             <nav class="flex-row">
//                 <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${header.github}">GitHub</a>
//             </nav>
//         </div>
//     </header>

//     <main class="container my-5">
//         ${generateAbout(about)}
//         ${generateProjects(projects)}
//     </main>

//     <footer class="container text-center py-3">
//         <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
//     </footer>
// </body>
// </html>
// `;
};    

//module.exports = generateHTML;