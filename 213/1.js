function calculateAverage(arr) {
  let sum = 0;
  
  for (let elem of arr) {
    sum += elem;
  }
  
  return sum / arr.length;
}
