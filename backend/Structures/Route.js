/**
 * @format
 */
// eslint-disable-next-line no-unused-vars
const express = require('express');

/**
 * 
 * @param {express.Router} Router 
 */
// eslint-disable-next-line no-unused-vars
function Run(Router) {}

class Route {
	/**
     * 
     * @typedef {{ path: String, run: Run }} CommandOptions
   	 * @param {CommandOptions} options
     */
	constructor(options) {
		this.path = options.path;
		this.run = options.run;
	}
}

module.exports = Route;