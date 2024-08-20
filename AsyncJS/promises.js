// success --> resolve
// reject

const promise_1 = new Promise((resolve, reject) => {
	//Do some async task
	setTimeout(() => {
		console.log('Async task completed');
		resolve();
	}, 3000);
});

promise_1.then(() => {
	console.log('promise consumed');
});

//// either we can do like this

new Promise((resolve, reject) => {
	//Do some async task
	setTimeout(() => {
		console.log('Async task_2 completed');
		resolve();
	}, 2000);
}).then(() => {
	console.log('promise_2 consumed');
});

console.log('hello from the global task');

//! TO CATCH THE ERRORS
const getUser = new Promise((resolve, reject) => {
	setTimeout(() => {
		// to stimulate the reject
		let error = true;
		if (!error) {
			resolve({ name: 'shankar', age: 30 });
		} else {
			reject('Error:Something went wrong');
		}
	}, 2000);
});

getUser
	.then((user) => console.log(user))
	.catch((error) => console.log(error))
	.finally(() => console.log(`the promiseis resolved or rejected`));
