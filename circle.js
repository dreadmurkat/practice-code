var prompt = require('prompt-sync')();
console.log("hello");
var r = prompt("Enter the radius of the circle:");
var d = 2*r

while (isNaN(r) === true) 
{
    r = prompt("please enter a valid number:")
}
for (let y = r; y => r; y - 1) 
{
var x = Math. sqrt(Math.pow(r, 2) - Math.pow(y,2 ))
//if statement that 
if(x = true){
    process.stdout.write("*")
    console.log();
}
    else(console.log(" "));
    process.stdout.write(" ")
}










