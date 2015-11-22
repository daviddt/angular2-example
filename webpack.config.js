var path = require('path');

module.exports = {
    entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname, 'src/app/bootstrap.ts')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
	module: {
		loaders: [{
			test: /\.ts$/,
			loader: 'ts-loader?compiler=ntypescript'
		}]
	},
    ts: {
        compiler: 'ntypescript'
    }
};