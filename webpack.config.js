var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
	},

	devtool: 'source-map',

	resolve: {
		alias: {
			Test: path.resolve(__dirname, 'app/test/test.js')
		},
	},

	plugins: [
		//new webpack.optimize.UglifyJsPlugin(),
		new HtmlWebpackPlugin({ hash: true, }),
		new ExtractTextPlugin('style.css')
	],

	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader",
				})
			},
		]
	},

	devServer: {
		contentBase: './public',
		inline: false,
	},


};