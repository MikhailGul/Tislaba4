let arr2 = [1, 2, 3, 4, -5, 6, 7];
let sum = 0;

for (let elem of arr2) {
  if (elem < 0) {
    break;
  }
  sum += elem;
}

console.log(sum);