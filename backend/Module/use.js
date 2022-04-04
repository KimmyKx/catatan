const path = require('path');

const use = (express, app) => {
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(express.static(path.join(__dirname, '..', 'Assets')));
	app.set('views', path.join(__dirname, '..', '..', 'frontend', 'views'));
	app.set('view engine', 'ejs');
};

module.exports = {
	use
};