const writeToFile = require('./src/file-ops.js');

const inquirer = require("inquirer");
const generateHTML = require("./src/generate-html");
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');


const validateInput = (str, message) => {
    if (str) {
        return true;
    } else {
        console.log(message);
        return false;
    }
};

const managerQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your team?',
        default: 'My Team'
    },
    {
        type: 'input',
        name: 'empName',
        message: 'What is your name? (Required)',
        validate: theInput => validateInput(theInput, "Your name is required.")
    },
    {
        type: 'input',
        name: 'idNum',
        message: 'What is your ID number? (Required)',
        validate: theInput => validateInput(theInput, "Your ID number is required.")
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: theInput => validateInput(theInput, "Your email address is required.")
    },
    {
        type: 'input',
        name: 'officeNum',
        message: 'What is your office number? (Required)',
        validate: theInput => validateInput(theInput, "Your office number is required.")
    },
];

const employeeQuestions = [
    {
        type: 'list',
        name: 'employeeType',
        message: 'Which type of employee do you want to add?',
        choices: [  "Engineer",
                    "Intern",
                    "I am done entering my team"
                 ]
    },
    {
        type: 'input',
        name: 'empName',
        message: 'What is the employees name?',
        validate: theInput => validateInput(theInput, "The employee's name is required."),
        when(answers) {
            return !(answers.employeeType === "I am done entering my team");
        },
    },
    {
        type: 'input',
        name: 'idNum',
        message: "What is the employee's ID number? (Required)",
        validate: theInput => validateInput(theInput, "The employee's ID number is required."),
        when(answers) {
            return !(answers.employeeType === "I am done entering my team");
        },
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email address? (Required)",
        validate: theInput => validateInput(theInput, "The employee's email address is required."),
        when(answers) {
            return !(answers.employeeType === "I am done entering my team");
        },
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the employee's GitHub user name? (Required)",
        validate: theInput => validateInput(theInput, "The employee's GitHub user name is required."),
        when(answers) {
            return answers.employeeType === "Engineer";
        },
    },
    {
        type: 'input',
        name: 'school',
        message: "From which school did the employee graduate? (Required)",
        validate: theInput => validateInput(theInput, "The employee's graduation school is required."),
        when(answers) {
            return answers.employeeType === "Intern";
        },
    },
];

const promptManager = () => {
    return inquirer.prompt(managerQuestions)
        .then(managerData => {
            const manager = new Manager(managerData.empName,
                                        managerData.idNum,
                                        managerData.email,
                                        managerData.officeNum,
                                        managerData.title);
            return [ manager ];
        })
        .catch(err => {
            console.log(err);
        });
};

const promptEmployee = employees => {
    console.log(`
==================
Add a New Employee
==================
`);
    return inquirer.prompt(employeeQuestions)
    .then(employeeData => {
        if (employeeData.employeeType !== "I am done entering my team")
        {
            if (employeeData.employeeType === "Engineer")
            {
                employee = new Engineer(employeeData.empName, employeeData.idNum, employeeData.email, employeeData.github);
            } else {
                employee = new Intern(employeeData.empName, employeeData.idNum, employeeData.email, employeeData.school);
            }
            employees.push(employee);
            return promptEmployee(employees);
        }
        else
        {
            return employees;
        }
    });
};

promptManager()
    .then(employees => {
        return promptEmployee(employees);
    })
    .then(employees => {
        return generateHTML(employees)
    })
    .then(generatedHTML => {
        writeToFile("./dist", "index.html", generatedHTML);
    })
    .catch(err => {
        console.log(err);
    });
