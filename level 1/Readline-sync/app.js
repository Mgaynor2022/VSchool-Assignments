const readline = require("readline-sync")

const sum = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply =(num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const operations = ["sum", "sub", "mul", "div"]

let userInput = readline.keyInSelect(operations, "please enter the operation to perform: sum, sub, mul, or div.")

const userNum1 = readline.questionInt("Please enter your first number");
console.log(userNum1);

const userNum2 = readline.questionInt("Please enter your second number")
console.log(userNum2);

if (userInput === 0){
    console.log(sum(userNum1, userNum2))
} else if( userInput === 1){
    console.log(subtract(userNum1,userNum2))
} else if (userInput === 2){
    console.log(multiply(userNum1,userNum2))
} else if (userInput === 3) {
    console.log(divide(userNum1,userNum2))
};

