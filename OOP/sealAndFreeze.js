//! Seeling --> prevents properties from being added or removed , can still be changed

//! Freezing --> prevents properties from being added or removed or changed

const recObj = {
	name: 'rec_1',
	width: 10,
	height: 20,
};

Object.seal(recObj);
let des = Object.getOwnPropertyDescriptors(recObj);
console.log(des);

recObj.color = 'red'; // not added
delete recObj.width; // not deleted
console.log(recObj);
//but can be changed
recObj.name = 'rectangle_1';
console.log(recObj);

const circleObj = {
	name: 'cir_1',
	radius: 3.2,
};
Object.freeze(circleObj);
//! cant add , remove , freeze

//// to check object sealed or freezed not

console.log(Object.isSealed(recObj));
console.log(Object.isFrozen(recObj));
console.log(Object.isSealed(circleObj));
console.log(Object.isFrozen(circleObj));
// if froze then it is sealed already
