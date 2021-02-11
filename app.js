const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let theTeam = []; 

function addEmployee() { 

    inquirer
    .prompt([ 
        {
            type: 'list',
            name: 'role',
            message: ' Build Your Team Roster: What type of employee do you want to add?',
            choices: ['Manager', 'Engineer', 'Intern'], 
        },
        ]).then((answers) => { 
            switch (answers.role) {
                case 'Manager': 
                    manager()
                    break; 
                case 'Engineer': 
                    engineer()
                    break;
                case 'Intern': 
                    intern()
                    break; 
        }
    }); 
function manager() {
    const answers = inquirer 
                .prompt([ 
                    {
                        type: 'input',
                        name: 'name',
                        message: 'Enter the employee name.',
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: 'Enter employee ID.',
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: 'Enter the employee email.',
                    },
                    {
                        type: 'input',
                        name: 'officeNumber',
                        message: 'Enter the Manager office number. ',
                    },
                    {
                        type: 'list',
                        name: 'repeat',
                        message: 'Add another employee? ',
                        choices: ['Yes', 'No'],
                    }])
                    .then((answers) => { 
                    switch(answers.repeat) { 
                        case 'Yes' :
                            addEmployee()
                            break;
                        case 'No' :
                            render(theTeam)
                            break;
                        };
                    })
} 
function engineer() {
        const answers = inquirer 
                    .prompt([ 
                        {
                            type: 'input',
                            name: 'name',
                            message: 'Enter the employee name. ',
                        },
                        {
                            type: 'input',
                            name: 'id',
                            message: 'Enter employee ID. ',
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: 'Enter the employee email. ',
                        },
                        {
                            type: 'input',
                            name: 'officeNumber',
                            message: 'Enter the Engineer github usename. ',
                        }, 
                        {
                            type: 'list',
                            name: 'repeat',
                            message: 'Add another employee? ',
                            choices: ['Yes', 'No'],
                        }])
                        .then((answers) => { 
                        switch(answers.repeat) { 
                            case 'Yes' :
                                addEmployee()
                                break;
                            case 'No' :
                                render(theTeam)
                                break;
                            };
                        })
} 
function intern() {
    const answers = inquirer 
                .prompt([ 
                    {
                        type: 'input',
                        name: 'name',
                        message: 'Enter the employee name. ',
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: 'Enter employee ID. ',
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: 'Enter the employee email. ',
                    },
                    {
                        type: 'input',
                        name: 'officeNumber',
                        message: 'Enter the Intern school. ',
                    },  
                    {
                        type: 'list',
                        name: 'repeat',
                        message: 'Add another employee? ',
                        choices: ['Yes', 'No'],
                    }])
                    .then((answers) => { 
                    switch(answers.repeat) { 
                        case 'Yes' :
                            addEmployee()
                            break;
                        case 'No' :
                            render(theTeam)
                            break;
                        };
                    })
} 
            
function writeFile() { 
    fs.writeFile(outputPath, render(theTeam), (err) => {
        if (err) throw err; 
        });
    };
}

addEmployee();