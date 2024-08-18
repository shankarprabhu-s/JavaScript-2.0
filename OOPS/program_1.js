const strLit = 'Hello';
const strObj = new String('Hello');

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

//Boxing
//! conversion of literals to obj
console.log(strLit.toUpperCase());
console.log(strLit[0]);

//Unboxing
console.log(strObj.valueOf(), typeof strObj.valueOf());

//// likewise we have for every other datatype such as number boolean array etc

const funLit = function (x) {
	return x * x;
};
console.log(funLit(4), typeof funLit);

const funObj = new Function('x', 'return x*x');
console.log(funObj(5), typeof funObj);
