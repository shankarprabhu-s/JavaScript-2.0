let x;
x = 'Hello my name is shankar';
const lname = 'Prabhu';
x = x + lname;
console.log(x);

console.log(`${1 + 2}`); // string literal

//// String properties
let l;
l = x.length;
console.log(l);

//// Using new String method
const name = new String('Gopala');
console.log(typeof name); //object
console.log(typeof x); // String

x = name.__proto__;

//// String methods
const city = 'Shimoga';
city.charAt(3);
city.indexOf('s');
city.includes('Shi');
city.substring(0, 4);  //includes 0 exclude 4
city.slice(0,4); // negative index are valid
city.trim(); // removes white spaces
city.split(' ') // return array with given delimiter
