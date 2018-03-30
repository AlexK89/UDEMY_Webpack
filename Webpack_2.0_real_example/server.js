const express = require('express');

// We need 3 dependencies webpackMiddleware, webpack and webpackConfig to make work webpack with express

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('webpack.config');

const app = express();

app.use(webpackMiddleware(webpack(webpackConfig)));
app.listen(3050, () => console.log('Listening')); 	// 3050 - is a port which our App should listen for HTTP requests