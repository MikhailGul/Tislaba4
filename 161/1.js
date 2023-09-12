"use strict";

let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let daysObject = {};

for (let i = 0; i < arr1.length; i++) {
  daysObject[arr1[i]] = arr2[i];
}

console.log(daysObject);

