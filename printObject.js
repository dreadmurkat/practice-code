var prompt = require('prompt-sync')();

//Create an object with First name, last  name, address, city, state and zip code fields Print the address like below
var address = {
  firstName: "arjun",
  lastName: "kanaparthi",
  address: "pine street",
  city: "Sammamish",
  state: "WA",
  zipCode: "98075",
};

printObject(address);
//*******************************************************************************************
address.firstName = prompt('enter your first name: ');
address.lastName  = prompt('enter your last name: ');
address.address   = prompt('enter your address: ');
address.city      = prompt('enter your city: ');
address.state     = prompt('enter you state:')
address.zipCode   = prompt('enter your zipCode: ');

printObject(address);

function printObject(address)
{
  console.log(address.firstName + " " + address.lastName);
  console.log(address.address);
  console.log(address.city + ", " + address.state + " - " + address.zipCode);
}









