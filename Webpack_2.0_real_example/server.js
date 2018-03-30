const express = require('express');
const path = require('path');
const app = express();

if (process.env.NODE_ENV !== "production") {
	// We need 3 dependencies webpackMiddleware, webpack and webpackConfig to make work webpack with express

	const webpackMiddleware = require('webpack-dev-middleware');
	const webpack = require('webpack');
	const webpackConfig = require('./webpack.config.js');

	app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
	// Send correct files to user
	app.use(express.static('dist'));

	// double check if the browser history library works correctly 
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'dist/index.html'));
	})
}

app.listen(3050, () => console.log('Listening')); 	// 3050 - is a port which our App should listen for HTTP requests