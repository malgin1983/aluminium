const path = require('path')
module.exports = {
	mode: 'production',
	entry: {
		main: './public/scripts/main.js',
	},
	output: {
		filename: '[name].[hash:5].js',
		path: path.join(__dirname, 'public', 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},

			// Loading images
			{
				test: /\.(png|jpg|jpeg|gif|ico)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'images',
							name: '[name]-[sha1:hash:7].[ext]',
						},
					},
				],
			},

			// Loading fonts
			{
				test: /\.(ttf|otf|eot|woff|woff2)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'fonts',
							name: '[name].[ext]',
						},
					},
				],
			},

			// Loading CSS
			{
				test: /\.(css)$/,
				use: 'style-loader',
			},
		],
	},
}
