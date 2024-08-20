//// Bu using the promises
const users = [
	{ name: 'shankar', age: 22 },
	{ name: 'sharath', age: 18 },
];

const getUser = () => {
	setTimeout(() => {
		users.forEach((user) => {
			console.log(`name-->${user.name}:age-->${user.age}`);
		});
	}, 1000);
};

const createUser = (post) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const userExists = users.some(
				(user) => user.name === post.name && user.age === post.age
			);

			if (!userExists) {
				users.push(post);
				resolve();
			} else {
				reject();
			}
		}, 3000);
	});
};

createUser({ name: 'shankar', age: 22 })
	.then(() => console.log('Post Updated'))
	.catch(() => console.log('User already exists'))
	.finally(() => getUser()); // Call the getUser function here
