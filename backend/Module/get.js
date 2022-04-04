const fs = require('fs');
// eslint-disable-next-line no-unused-vars
const express = require('express');
/**
 * 
 * @param {express.Router} Router 
 * @param {express} app 
 */
const get = (Router, app) => {
	fs.readdirSync('./backend/Routes').filter(file => file.endsWith('.js')).forEach(file => {
		const route = require(`../Routes/${file}`);
		app.use(route.run(Router()));
	});
    
};

module.exports = {
	get
};