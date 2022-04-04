const { use } = require('./Module/use');
const { get } = require('./Module/get');

const run = () => {
	const express = require('express');
	const app = express();
	use(express, app);
	get(express.Router, app);
	const port = process.env.PORT || 3000;
	app.listen(port, () => console.log(`Listening on port ${port}`));
};

module.exports = {
	run
};