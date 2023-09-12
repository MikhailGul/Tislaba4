const numbers2 = [1, 2, 3, 4, 5];
const productLessThan30 = numbers2.every(function(number2, index) {
  return number2 * index < 30;
});

console.log(productLessThan30);