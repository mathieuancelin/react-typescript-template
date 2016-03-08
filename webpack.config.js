var webpack = require('webpack');

// basic plugin used in every env
var plugins = [
  // dedupe js modules in the final build file
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  // so you can use __DEV__ and process.env.NODE_ENV variable in your javascript code
  new webpack.DefinePlugin({
    '__DEV__': process.env.NODE_ENV === 'production' ? false : true,
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'dev')
    }
  })
];
if (process.env.NODE_ENV === 'production') {
  // in prod mode, uglify everything
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compressor: {
      screw_ie8: true,
      warnings: false
    }
  }));
} else {
  // add some plugins in dev mode
  plugins.push(new webpack.HotModuleReplacementPlugin());
  plugins.push(new webpack.NoErrorsPlugin());
}

module.exports = {
  output: {
    path: './dist/',  // final build will be output in the dist folder
    publicPath: '/dist/', // when in dev mode, the build will be in /dist/app.js
    filename: 'app.js', // the file name
    library: 'App', // the global name in a non commonjs env (ie. the browser)
    libraryTarget: 'umd' // build as UMD
  },
  devServer: {
    contentBase: './public/',
  },
  entry: [
    './src/main.tsx' // the main entry point for the build
  ],
  resolve: {
    extensions: ['', '.js', '.es6', '.jsx', '.ts', '.tsx'] // all these files will be considered as modules
  },
  module: {
    loaders: [
      {
        test: /\.ts|\.tsx$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: plugins
};
