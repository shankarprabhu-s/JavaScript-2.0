// Constructor function for Shape
const Shape = function (name) {
	this.name = name;
};

// Use a regular function for the prototype method
Shape.prototype.logName = function () {
	console.log(`shape: ${this.name}`);
};

// Constructor function for Rectangle
function Rectangle(name, length, breadth) {
	Shape.call(this, name); // Call the Shape constructor with this context
	this.length = length;
	this.breadth = breadth;
}

// Inherit the prototype from Shape
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle; // Reset the constructor to Rectangle

// Constructor function for Circle
function Circle(name, radius) {
	Shape.call(this, name); // Call the Shape constructor with this context
	this.radius = radius;
}

// Inherit the prototype from Shape
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle; // Reset the constructor to Circle

// Create instances
const rec = new Rectangle('rec_1', 10, 20);
const cir = new Circle('cir_1', 3.4);

console.log(rec);
console.log(cir);

rec.logName(); // Outputs: shape: rec_1
cir.logName(); // Outputs: shape: cir_1
console.log(Rectangle.constructor);
