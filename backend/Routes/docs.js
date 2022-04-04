const Route = require('../Structures/Route');

module.exports = new Route({
	path: '/docs',
	run(Router) {
		return Router.get(this.path, (req, res) => {
			res.send('ab');
		});
	}
});