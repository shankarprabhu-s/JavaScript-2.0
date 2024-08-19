class Person {
	constructor(fName, lName) {
		this._fName = fName;
		this._lName = lName;
	}

	get firstName() {
		return this.capitalizeFirst(this._fName);
	}

	set firstName(value) {
		this._fName = this.capitalizeFirst(value);
	}

	get lastName() {
		return this.capitalizeFirst(this._lName);
	}

	set lastName(value) {
		this._lName = this.capitalizeFirst(value);
	}

	capitalizeFirst(value) {
		return value.charAt(0).toUpperCase() + value.substring(1);
	}
}

const person1 = new Person('shankar', 'prabhu');

console.log(person1.firstName); // Output: Shankar
console.log(person1.lastName); // Output: Prabhu

// Using the setter to update firstName and lastName
person1.firstName = 'ravi';
person1.lastName = 'kumar';

console.log(person1.firstName); // Output: Ravi
console.log(person1.lastName); // Output: Kumar
