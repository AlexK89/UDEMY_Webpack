const path = require('path'); //NodeJS helper module to get the absolute file path
const config = {
	entry: './src/index.js', //our entry point of our App
	output: {
		//  need to specify !!! absolute !!! file path.  __dirname is a constant in NodeJS
		// 'build' in this case it a destination, where to save the output
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js' //following by convention file name is bundle.js
	},
	module: {
		rules: [			// by rules we define which modules we want to use with webpack
			{
				use: 'babel-loader',
				test: /\.js$/,		//REGEX for filename
			},
			{
				use: ['style-loader', 'css-loader'],		//loaders apply !!! from right to left !!!
				test: /\.css$/,		//REGEX for filename
			}
		]
	}
};
module.exports = config;