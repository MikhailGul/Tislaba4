let num = 12345;
let lastDigit = num % 10;

if (lastDigit % 2 === 0) {
  console.log("Число " + num + " четное.");
} else {
  console.log("Число " + num + " нечетное.");
}
