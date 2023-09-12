const numbers = [2, 3, 4, 5];
let sumOfSquares = 0;

numbers.forEach(function(number) {
  const square = number * number;
  sumOfSquares += square;
});

console.log(sumOfSquares);