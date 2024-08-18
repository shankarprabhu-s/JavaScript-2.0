function Rectangle(name, length, breadth) {
	this.name = name;
	this.length = length;
	this.breadth = breadth;
	//area doest change no matter what so add the area() to prototype
}

// area()
Rectangle.prototype.area = () => this.length * this.breadth;

//perimeter
Rectangle.prototype.perimeter = () => 2 * (this.length + this.breadth);

//isSquare()
Rectangle.prototype.isSquare = () => this.length === this.breadth;

//ChangeName
Rectangle.prototype.changeName = (newName) => (this.name = newName);

const rec1 = new Rectangle('rec1', 10, 10);

console.log(rec1);
console.log(rec1.area());
console.log(rec1.perimeter());
console.log(rec1.isSquare());
rec1.changeName('sqr1');
console.log(rec1.name);

////ANother method

const Rectangle_ = {
	area: () => this.length * this.breadth,
	perimeter: () => 2 * (this.length + this.breadth),
	isSquare: () => this.length === this.breadth,
};

const createRectangle = (length, breadth) =>
	Object.create(Rectangle_, {
		length: {
			value: length,
		},
		breadth: {
			value: breadth,
		},
	});

const rec3 = createRectangle(20, 20);
console.log(rec3.isSquare());
