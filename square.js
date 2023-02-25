var prompt = require('prompt-sync')();
console.log("hello");
var size = prompt("Enter the size of the square:");

while (isNaN(size) === true) 
{
    size = prompt("please enter a valid number:")
}
for (let i = 0; i < size; i++) 
{
    for (let j = 0; j < size; j++)
        process.stdout.write("*")
    console.log();
}








