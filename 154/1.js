"use strict";

let arr1 = [1, 2, 3, 4, 0, 5, 6];

for (let elem of arr1) {
  console.log(elem);
  if (elem === 0) {
    break;
  }
}