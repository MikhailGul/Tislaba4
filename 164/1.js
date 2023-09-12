let arr = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;

for (let elem of arr) {
  let strElem = elem.toString();
  if (strElem.startsWith('1') || strElem.startsWith('2')) {
    sum += elem;
  }
}

console.log(sum);