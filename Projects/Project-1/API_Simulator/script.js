const img = document.querySelector('.rounded-full');
const name = document.querySelector('.name');
const email = document.querySelector('.email');
const phone = document.querySelector('.phone');
const loc = document.querySelector('.loc');
const age = document.querySelector('.age');

document.querySelector('button').addEventListener('click', () => {
	fetch('https://randomuser.me/api/')
		.then((res) => res.json())
		.then((data) => {
			const user = data.results[0]; // Access the first user object
			img.src = user.picture.large; // Correct path to thumbnail
			name.innerHTML = `${user.name.title} ${user.name.first} ${user.name.last}`; // Correct path to name
			email.innerHTML = user.email; // Correct path to email
			phone.innerHTML = user.phone; // Correct path to phone
			loc.innerHTML = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}`; // Correct path to location
			age.innerHTML = user.dob.age; // Correct path to age
			user.gender === 'female'
				? (document.body.style.backgroundColor = 'cyan')
				: (document.body.style.backgroundColor = 'pink');
			console.log(user.gender);
		})
		.catch((error) => console.error('Error fetching data:', error)); // Error handling
});
