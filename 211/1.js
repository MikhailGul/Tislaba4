function areAllEven(arr) {
	for (let elem of arr) {
	  if (elem % 2 !== 0) {
		return false;
	  }
	}
	return true;
  }
  const numbers1 = [2, 4, 6, 8];
  const numbers2 = [2, 4, 7, 8];
  console.log(areAllEven(numbers1));
  console.log(areAllEven(numbers2));