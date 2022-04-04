const Route = require('../Structures/route');

module.exports = new Route({
	path: '/',
	run(Router){
		return Router.get(this.path, (req, res) => {
			res.render('index.ejs');
		});
	}
});