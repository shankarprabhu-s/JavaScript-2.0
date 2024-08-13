// let ,var , const
let age = 49;
console.log(age); //49

// console.log(time); //error
let time = '1 o'

const x = 100;
console.log(x); //100;

// x = 99; // cannot re assign

const arr = [1,2,3,4];
// arr = [1,2,3,4,5]; error
// but
arr.push(8) // valid
console.log(arr);


//similar way 

const person = {
     fname : 'Shankar',
     lname : ''
}
person.lname = 'Prabhu';

console.log(person); // valid

// Declare multiple variable at once

let a,b,c;

const  d = 100 , e = 200 , f =300; // valid
