const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

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
	console.log(request.body);
	response.send('Account created !😁');
});

app.listen(3000, () => {
	console.log('listening');
});
