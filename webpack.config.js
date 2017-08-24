var webpack = require('webpack'),
    path = require( 'path' ),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: [
		//'webpack-dev-server/client?http://localhost:8080',
	    //'webpack/hot/only-dev-server',
	    './src/app.js',
        //'./src/app.scss'
	],
	devtool: 'inline-source-map',
  	module: {
	  rules: [
		{
		  test: /\.jsx?$/,
	      exclude: /node_modules/,
	      loader: 'babel-loader',
		  query: {
			  presets: [
				  require.resolve('babel-preset-es2015'),
				  //require.resolve('babel-preset-react')
			  ],
			  //plugins: ["transform-vue-jsx"]
		  },
		 // plugins: ["react-hot"]

	  	},
		{
	        test: /\.scss$/,
	        //Because inline CSS sucks. This monitors all the styling generated by the
	        //sass build task and saves it into a var which we'll be dumping to a location in the
	        //plugins section.
	        loader: ExtractTextPlugin.extract('style','css?sourceMap!sass?sourceMap')
		}
 	 ]
	},
	resolve: {
	  extensions: ['.js', '.jsx', '.scss']
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'app.js'
	},
	devServer: {
		contentBase: './dist',
		hot: false  //http://localhost:8080/webpack-dev-server/
	},
	plugins: [
		//new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin( "app.css" )
	]
};
