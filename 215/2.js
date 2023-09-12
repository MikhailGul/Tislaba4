
function findDivisors(number) {
  const divisors = [];

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
}

const num = 12;
console.log(findDivisors(num));
