// 2 types of datatype in js 
//primitive and reference types
//// 1.String
//// 2.Number (Integer & Float)
//// 3. Boolean (True or False)
//// 4. Null (Intentional absence of any object and purposefull)
//// 5. Undefined (A variable not defined )
//// 6. Symbol Built in object whose constructor returns a unique symbol (Introduced in ES6)
////BigInt (Numbers that are greater than Number type)
 

//References
// when we assign a references we ger references to it

// String
const fname = 'Shankar';
console.log(fname);
//// typeof operator
console.log(typeof (fname)); 

//Number
const age = 45;
console.log(age);
const temp = 100.090;
console.log(temp);

//Boolean

const hasRain = true;
// or false;

//Null
const homeNumber = null;
console.log(homeNumber);
console.log(typeof homeNumber);
// check even though the null is primitive type type of null is object

// Undefined
let mName;
console.log(mName); // undefined

//Symbol
const id = Symbol('id');
const ot = id;
console.log(ot);
console.log(typeof ot);


//BigInt
const  n = 924213882965n;
console.log(n);


//// Reference Types
const numbers = [2,5,6,734,3];
console.log(typeof numbers);

const voter = {
    fname : 'Shankar'
}
console.log(typeof voter);


//// primitive data types are stored in the STACK and reference variable stored in HEAP







