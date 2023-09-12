
function checkNumber(num) {
    if (num > 0) {
        console.log('+++');
    } else if (num < 0) {
        console.log('---');
    } else {
        console.log('Число равно нулю');
    }
}
checkNumber(5); 
checkNumber(-5);
checkNumber(0);
