function areDigitsOdd(number) {
	const digits = number.toString().split('').map(Number);
	for (let digit of digits) {
	  if (digit % 2 === 0) {
		return false;
	  }
	}
	return true;
  }
  const num1 = 13579;
  const num2 = 123456;
  console.log(areDigitsOdd(num1));
  console.log(areDigitsOdd(num2));