// index starts with 0
// Array can be constructed in two way
//// literals & using Constructor

let arr = [1, 2, 0, 1, 4, 5];

let arr2 = new Array(1, 2, 5, 6);

console.log(arr);
console.log(arr2);

arr.length; // returns length

//// Arrays methods
arr.push(200); //add to end
arr.pop(); // removes last ele
arr.unshift(100); // adds in the 0th index
arr.shift(); // removes 0th ele
arr.reverse(); // reverses the array
arr.includes(3); // verifies whether a value present in the array or not
arr.indexOf(3);
arr.slice(1, 3); // pass the start and end index  but original array is unchanged

arr.splice(1, 3); //changes the original array
let num1 = [1, 2, 3, 4, 5];
let num2 = [10, 20, 30, 40];
let num3 = [num1, num2];
console.log(num3);
let num4 = num1.concat(num2);
console.log(num4);

//// Spread Operator (...)
let allNum = [...num1, ...num2];
console.log(allNum);


//! Flatten array

const age = [1,2,[5,4,7],[8,2]];
console.log(age.flat()); // reduces everything in 1D array
 //! to check array??
 console.log(Array.isArray(age))

 // to create array from strings
 x = Array.from('Shankar');
 console.log(x)