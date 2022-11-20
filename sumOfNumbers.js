


function sumOfEvenAndOddNumbers(numbers)  {
    var sumOdd = 0;
    var sumEven = 0;
 

for (var i = 0; i < numbers.length; i++){
    if(numbers[i]% 2 === 0) 
     {sumEven += numbers[i];}
     else 
     {sumOdd += numbers[i];}
    
}
var bothSums = [sumEven, sumOdd]
return bothSums ;
}

var numbers = [111, 222, 333, 444];
var sums = sumOfEvenAndOddNumbers(numbers);
console.log("sum of even numbers = " + sums[0]);
console.log("sum of odd numbers = " + sums[1]);

    
    




