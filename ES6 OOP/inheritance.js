class Shape {
	constructor(name) {
		this.name = name;
	}
	logName() {
		console.log(`Shape name : ${this.name}`);
	}
}

class Rectangle extends Shape {
	constructor(name, length, breath) {
		super(name);
		this.length = length;
		this.breadth = breath;
	}
}
class Circle extends Shape {
	constructor(name, rad) {
		super(name);
		this.rad = rad;
	}
}

const rec = new Rectangle('rec', 10, 20);
const cir = new Circle('cir', Math.PI);
rec.logName();
cir.logName();

console.log(rec instanceof Rectangle);
console.log(rec instanceof Shape);
