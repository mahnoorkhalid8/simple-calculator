#! /usr/bin/env node
// shabang

import inquirer from "inquirer";
const answer = await inquirer.prompt([{ message: "Enter your first number" , type: "number" , name: "firstNumber"},
{ message: "Enter your second number" , type: "number" , name: "secondNumber"},
{ message: "Select one of the operators to perform operations" , type: "list" , name: "operators" ,
choices: ["Addition" , "Subtraction", "Multiplication", "Division"], }])

//coditional statement
if (answer.operators === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operators === "Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operators === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operators === "Division"){
    console.log(answer.firstNumber / answer.secondNumber);
}
else{
    console.log("Please select valid operator")
}
console.log("The End");