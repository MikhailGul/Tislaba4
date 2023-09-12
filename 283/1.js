const numbers = [-1, 0, 2, -3, 4];
const hasPositiveNumber = numbers.some(function(number) {
  return number > 0;
});

console.log(hasPositiveNumber);

