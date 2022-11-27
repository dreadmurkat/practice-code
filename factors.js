
function factors(number) {
  var factors = [];

  var sqrtNumber = Math.sqrt(number)
  for (var i = 2; i <= sqrtNumber; i++) {
    console.log(i)

    if (number % i === 0) {
      // if the number is not already in the array  i want to add it to the array
      if (factors.includes(i) == false) {
        factors.push(i);
      }

      var otherFactors = number / i;

      if (factors.includes(otherFactors) == false) {
        factors.push(otherFactors);
      }
    }
  }
  //factors.sort();
  factors.sort(function(a, b){return(a-b)});

  return factors;
}

var number = 100;
var factors = factors(number);
console.log("factors = " + factors);