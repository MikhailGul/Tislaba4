"use strict";

let obj1 = {x: 1, y: 2, z: 3};

for (let key in obj1) {
  obj1[key] = obj1[key] * obj1[key];
}

console.log(obj1); // выведет {x: 1, y: 4, z: 9}
