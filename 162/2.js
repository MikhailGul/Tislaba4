
let obj2 = {x: 1, y: 2, z: 3};

for (let key in obj2) {
  obj2[key] = obj2[key] + 1;
}

console.log(obj2);