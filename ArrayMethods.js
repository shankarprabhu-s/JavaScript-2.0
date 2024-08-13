//// ForEach loop

const relation = ['Mother', 'Father', 'Brother', 'Son'];

//accepts a callback function
relation.forEach(function (rel) {
	console.log(rel);
});

//short form
relation.forEach((rel, index, arr) => console.log(`${rel} ${index} ${arr}`));

const users = [
	{ name: 'Gopala', age: 10 },
	{ name: 'Sharan', age: 19 },
	{ name: 'Shishir', age: 20 },
];

users.forEach((item) => console.log(item.name));

//// Filter Methods

//! filter returns an array

let num = [1, 5, 7, , 54, 12, 78, 12, 5, 786, 51, 45, 4, 5, 54];

let evalNum = num.filter((item) => item % 2 === 0);

console.log(evalNum);

//// Example
const companies = [
	{ name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
	{ name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
	{ name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
	{ name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
	{ name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
	{ name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
	{ name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
	{ name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
	{ name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const retailCompanies = companies.filter((comp) => comp.category == 'Retail');
console.log(retailCompanies);

//// MAP  method
//! create a new array
//! do an operation to each element

let votes = [123, 5, 7, 84, 6, 84, 5, 74, 5, 745];
const validVotes = votes.map((vote) => vote - 100);
console.log(validVotes);

const companyNames = companies.map((comp) => comp.name);
console.log(companyNames);

const companyInfo = companies.map((comp) => {
	return {
		name: comp.name,
		category: comp.category,
	};
});

console.log(companyInfo);

//! Multiple map
// num = [1,1,1,1,1,1]
const sqrAndDouble = num.map((item) => Math.sqrt(item)).map((item) => 2 * item);

console.log(sqrAndDouble);

//! chaining methods

const trippleEven = num
	.filter((item) => item % 2 === 0)
	.map((item) => item * 3);

console.log(trippleEven);


//// reduce method
//! takes 2 parameter accumulator , currentValue

let sum = num.reduce((acc , cur)=>acc+cur,0);
console.log(sum);

const cart = [
	{ id: 1, name: 'Product 1', price: 130 },
	{ id: 2, name: 'Product 2', price: 150 },
	{ id: 3, name: 'Product 3', price: 200 },
];

const total = cart.reduce((acc , product)=>acc+product.price,0)

console.log(total)
