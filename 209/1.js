function divideUntilLessThanTen(number) {
	let iterations = 0;
  
	while (number >= 10) {
	  number /= 2;
	  iterations++;
	}
  
	return iterations;
  }
  
  const result = divideUntilLessThanTen(64);
  console.log(result);