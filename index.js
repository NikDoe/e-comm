const express = require('express');

const app = express();

app.get('/', (request, response) => {
	response.send(`
	<div>
		<form method="post">
			<input name="email" placeholder="email" />
			<input name="password" placeholder="password" />
			<input name="passwordConfirm" placeholder="password confirmation" />
			<button>Sign Up</button>
		</form>
	</div>
	`);
});

app.post('/', (request, response) => {
	request.on('data', data => {
		const parsed = data.toString('utf8').split('&');

		const formData = {};

		for (const string of parsed) {
			const [key, value] = string.split('=');
			formData[key] = value;
		}
		console.log(formData);
	});
	response.send('Account created !😁');
});

app.listen(3000, () => {
	console.log('listening');
});
