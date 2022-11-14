
function sumupto(number) {
    var sum = 0;
   for (let startingNumber = 1; startingNumber <= number; startingNumber ++)
   {
       sum = startingNumber + sum;
   }

  return sum;

};

function sumevenupto(number) {
    var sum = 0;
   for (let startingNumber = 0; startingNumber <= number; startingNumber += 2)
   {
       sum = startingNumber + sum;
   }

  return sum;

};



console.log(sumevenupto(6));

