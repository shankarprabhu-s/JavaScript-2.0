//! Everybody knows for , while and do while loop

//// loop through arrays

const items = ['chair', 'Table', 'Pen', 'Brush'];
const users = [{ name: 'Shankar' }, { name: 'Sharath' }, { name: 'Goapla' }];

for (let item of items) {
	console.log(item);
}

for (let user of users) {
	console.log(user);
	console.log(user.name);
}

let str = 'Come On...!!';
for (let char of str) {
	console.log(char);
}

//! Loop over map
const map = new Map();
map.set('name', 'shankar');
map.set('age', 21);

for (let [name, age] of map) {
	console.log(name, age);
}

//! for in gives the index
let mName = 'Prabhu';
for (let i in mName) {
	console.log(i);
}
// output 0,1,2,3..



