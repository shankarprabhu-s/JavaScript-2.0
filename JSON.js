const post = [{
	id: 1,
	title: 'First Post',
	body: 'Regarding first post',
}];
//! Convert Object to JSON String

const json = JSON.stringify(post);
console.log(json);

//! Parse the json
const obj = JSON.parse(json);
console.log(obj);
