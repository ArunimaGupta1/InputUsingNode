let readline = require("readline-sync");
var name = readline.question("Enter the name");
var id = readline.questionInt("Enter the ID");
var salary = readline.questionFloat("Enter the salary");

console.log("Your name "+name);
console.log("Your ID "+id);
console.log("Your Salary "+salary);