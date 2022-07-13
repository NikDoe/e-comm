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
	response.send('Account created !😁');
});

app.listen(3000, () => {
	console.log('listening');
});
