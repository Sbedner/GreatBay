var inquirer = require("inquirer");

// Created a series of questions
inquirer.prompt([
    {
        type: "list",
        name: "who",
        message: "Are you an administrator? Or do you have an account?",
        choices: ["Administrator", "User"]
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your username."
    },
    {
        type: "password",
        name: "password",
        message: "Please enter your password."
    }

]).then(function (user) {
    if (user.password === "password" && user.who === "Administrator") {
        inquirer.prompt([

            {
                type: "list",
                name: "atasks",
                message: "Thank you. What would you like to do?",
                choices: ["Change Prices", "Change Stock Quantity", "Change Available Items"]
            },
        ])
    } else if (user.password === "password" && user.who === "User") {

        inquirer.prompt([
            {
                type: "list",
                name: "utasks",
                message: "Thank you. What would you like to do?",
                choices: ["Post an Item", "Bid on an Item"]
            },
        ])
    }

});