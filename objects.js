//! Key value pairs
const person = {
	name: 'Shankar',
	age: 21,
	isPlaced: true,
	address: {
		city: 'Karkala',
		state: 'Ktaka',
		Country: 'India',
	},
	hobbies: ['Chess', 'Suduko'],
};
console.log(person);
console.log(person['name']);
console.log(person.name);
console.log(person.address.city);
console.log(person.hobbies[0]);

//! to delete the properties
delete person.age;

console.log(person);

//! to add properties
person.age = 21;
console.log(person);

//! to add function
person.greet = function () {
	console.log('Hi there');
};
person.greet();

//! we can also create object like
const todo = new Object();
todo.id = 1;
todo.name = 'Buy Book';
console.log(todo);

//! spread operator
const obj1  = {a:1 , b:2}
const obj2 = {c:3 , d:4}
const obj3 = {...obj1 , ...obj2}
console.log(obj3)
console.log(Object.keys(person))
// to get length of object
console.log(Object.keys(person).length)
console.log(Object.entries(person))
console.log(Object.values(person))
console.log(person.hasOwnProperty('age'))

