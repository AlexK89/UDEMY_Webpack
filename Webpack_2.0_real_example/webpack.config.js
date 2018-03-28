var webpack = require('webpack');
var path = require('path');
const VENDOR_LIBS = [ //creating an array of dependencies to optimize loading time by dividing files
	"react", "lodash", "redux", "react-redux", "react-dom", "faker",
	"react-input-range", "react-router",  "redux-form", "redux-thunk"
];

module.exports = {
	entry: {
		bundle: './src/index.js',
		vendor: VENDOR_LIBS
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js' // [name] - takes entry property as a name of file
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				use: ['style-loader', 'css-loader'],
				test: /\.css$/
			}
		]
	}
};