const Route = require('../Structures/Route');

module.exports = new Route({
	path: '/',
	run(Router){
		return Router.get(this.path, (req, res) => {
			res.render('index.ejs');
		});
	}
});