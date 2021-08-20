const { writeFile, copyFile } = require('./utils/generate-site.js');

const inquirer = require("inquirer");
const generatePage = require("./src/page-template")

const promptManager = () => {
    return inquirer.prompt(managerQuestions);
};

const promptProject = teamData => {
    if (!teamData.employees)
    {
        teamData.employees = [];
    }
    console.log(`
==================
Add a New Employee
==================
`);
    return inquirer.prompt(employeeQuestions)
    .then(employeeData => {
        teamData.projects.push(employeeData);
        if (employeeData.confirmAddEmployee)
        {
            return promptProject(portfolioData);
        }
        else
        {
            return portfolioData;
        }
    });
};

promptManager()
    .then(promptEmployees)
    .then(teamData => {
        return generatePage(teamData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });