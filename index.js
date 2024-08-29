#! /usr/bin/env node 
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter your First number:",
        type: "number",
        name: "FirstNumber",
    },
    {
        message: "Enter your Second number:",
        type: "number",
        name: "SecondNumber",
    },
    {
        message: "Select an Operator",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Suraction", "Multiplication", "Division", "Modulus"],
    },
]);
//conditional statement
if (answer.Operator === "Addition") {
    console.log("your value is" + answer.FirstNumber + answer.SecondNumber);
}
else if (answer.Operator === "Subraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.Operator === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.Operator === "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else if (answer.Operator === "Modulus") {
    console.log(answer.FirstNumber % answer.SecondNumber);
}
else {
    console.log("Please select valid operand");
}
