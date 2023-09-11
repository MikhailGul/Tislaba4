let num = 33;
let b = num%10;
let a = (num-b)/10
if (num >=10&&num<=99){
    c = b+a
if (c<=9){
console.log('сумма цифр числа однозначная')
}else{
    console.log('сумма цифр числа двухзначная')
}
}
else{
    console.log('число находится вне диапазона')
}