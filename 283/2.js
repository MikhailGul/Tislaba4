
const numbers2 = [1, 2, 3, 4, 5];
const hasProductGreaterThan30 = numbers2.some(function(number2, index) {
  return number2 * index > 30;
});

console.log(hasProductGreaterThan30);