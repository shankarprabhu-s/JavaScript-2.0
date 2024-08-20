function greet(msg, callback) {
	console.log(msg);
	callback();
}

function whatPlace() {
	console.log('Inside the callback');
	console.log('Welcome to Thailand');
}

greet('Hello there..!', whatPlace);
