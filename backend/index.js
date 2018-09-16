// const express = require('express');

// const app = express();
// const port = process.env.PORT || 5000;

// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });

// app.listen(port, () => console.log(`Listening on port ${port}`));

const app = require("./app");
const database = require("./database");
const config = require("./config");

database()
	.then(info => {
		console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
		app.listen(config.PORT, () =>
			console.log(`Example app listening on port ${config.PORT}!`)
		);
	})
	.catch(() => {
		console.error("Unable to connect to database");
		process.exit(1);
	});