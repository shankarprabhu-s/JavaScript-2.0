function Rectangle(name, length, breadth) {
	this.name = name;
	this.length = length;
	this.breadth = breadth;
	this.area = function () {
		return this.length * this.breadth;
	};
}

//create instace of rectangle function
const rec1 = new Rectangle('rec1', 10, 13);
console.log(rec1.name);
console.log(rec1.area());

// we can create as many as instances we need

console.log(rec1.constructor);
console.log(rec1 instanceof Rectangle);

// add propeties
rec1.color = 'red';

// delete properties

delete rec1.color;

//! hasOwnProperty
console.log(rec1.hasOwnProperty('width'));

//get entries 
console.log(Object.entries(rec1))

