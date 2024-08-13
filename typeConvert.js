//// String to Integer

let amount = '100';
typeof amount // String


//// other than a number gives 'Nan' Not a number 
let amt1 = parseInt(amount) 
let amt2 = +amount
let amt3 = Number(amount)

console.log(typeof amt1 , typeof amt2 , typeof amt3);


//// Integer to String

let cost = 1000;
console.log(typeof cost.toString()); // String


//// Convert number to boolean

let num = 123;
num = Boolean(123); // true
// other than 0 is true

