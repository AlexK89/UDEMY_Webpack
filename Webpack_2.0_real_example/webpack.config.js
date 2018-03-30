var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //adding all dist js files to index.html automatically
const VENDOR_LIBS = [ //creating an array of dependencies to optimize loading time by dividing files
	"react", "lodash", "redux", "react-redux", "react-dom", "faker",
	"react-input-range", "redux-form", "redux-thunk"
];

module.exports = {
	entry: {
		bundle: './src/index.js',
		vendor: VENDOR_LIBS
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].[chunkhash].js' // [name] - takes entry property as a name of file, [chunkhash] - create unique
		//identifier everytime you change your file
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
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({		// looking for duplicates and ignore it
			name: ['vendor', 'manifest']		// manifest clarify for browser a version of vendor file
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new webpack.DefinePlugin({		// DefinePlugin use to bundle JS files
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) 	// to skip some error checking in production
		})
	]
};
