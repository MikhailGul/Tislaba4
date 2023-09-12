"use strict";

let arr1 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr1.length; i++) {
  arr1[i] = arr1[i] * arr1[i];
}

console.log(arr1);
