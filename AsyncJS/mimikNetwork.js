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

const createUser = (user, callback) => {
	setTimeout(() => {
		users.push(user);
		callback();
	}, 2000);
};
createUser({ name: 'gopal', age: 222 }, getUser);

