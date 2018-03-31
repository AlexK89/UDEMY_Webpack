const express = require('express');
const path = require('path');
const app = express();

// Server Routes
// should be defined !!! BEFORE !!! "if" statement
app.get('/hello', (req, res) => res.send({hi: 'ther'}));

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

// We use process.env.PORT as some server provider do not allow you to change it
app.listen(process.env.PORT || 3050, () => console.log('Listening')); 	// 3050 - is a port which our App should listen for HTTP requests