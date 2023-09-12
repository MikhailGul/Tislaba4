const numbers = [1, -2, 3, -4, 5];
const positiveNumbers = numbers.filter(function(number) {
  return number > 0;
});

console.log(positiveNumbers);
