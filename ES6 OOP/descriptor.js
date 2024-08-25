//! some of the propertty we cannot change
//! like PI value
let des = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(des);

const rec = {
	name: 'rec',
	length: 10,
	breadth: 50,
};
des = Object.getOwnPropertyDescriptor(rec, 'name');
console.log(des);
// to change this

Object.defineProperty(rec, 'name', {
	writable: false,
	configurable: false,
	enumerable: false,
});

des = Object.getOwnPropertyDescriptor(rec, 'name');
console.log(des);

rec.name = 'sqr';
console.log(rec.name); // not changed to sqr

console.log(Object.getOwnPropertyDescriptors(rec));
