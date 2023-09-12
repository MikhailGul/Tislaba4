function calculateSum(arr) {
  let sum = 0;

  for (let elem of arr) {
    sum += elem;
  }

  return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers));
