const path = require('path'); //NodeJS helper module to get the absolute file path
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
				// use: ['style-loader', 'css-loader'],		//loaders apply !!! from right to left !!!
				loader: ExtractTextPlugin.extract({		//save css into separate files
					loader: 'css-loader'
				}),
				test: /\.css$/,		//REGEX for filename
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {limit: 40000}
					},
					'image-webpack-loader'
				]

			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css')
	]
};
module.exports = config;