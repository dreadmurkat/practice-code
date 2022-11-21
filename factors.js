
function factors(number) {
  var factors = [];

  var sqrtNumber = Math.sqrt(number)
  for (var i = 2; i <= sqrtNumber; i++) {
    console.log(i)

    if (number % i === 0) {
      factors.push(i)

      var otherFactors = number / i
      factors.push(otherFactors)
    }

  }

  return factors;
}

var number = 100;
var factors = factors(number);
console.log("factors = " + factors);