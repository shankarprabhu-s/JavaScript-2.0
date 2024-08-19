class Rectangle {
	constructor(name, length, breadth) {
		this.name = name;
		this.length = length;
		this.breadth = breadth;
	}
	//class methods
	getArea() {
		return this.length * this.breadth;
	}
	logArea() {
		console.log(`the area is ${this.getArea()}`);
	}
	////static method
	static getClass() {
		return 'Rectangle';
	}
}

const rec1 = new Rectangle('rec1', 10, 20);
console.log(rec1.getArea());
rec1.logArea();
//! calling the static method

console.log(Rectangle.getClass());
