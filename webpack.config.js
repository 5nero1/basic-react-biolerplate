const path = require('path');
const webpack = require('webpack');
const concat = require('lodash/concat');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const env = process.env.NODE_ENV;
const entryMap = {
  'login/index': path.join(__dirname, 'src/pages/login/index.jsx'),
  'filter/index': path.join(__dirname, 'src/pages/filter/index.jsx'),
  'log4login/index': path.join(__dirname, 'src/pages/log4login/index.jsx'),
  'log4visit/index': path.join(__dirname, 'src/pages/log4visit/index.jsx')
};

let plugins = [
  new ExtractTextPlugin('[name].css')
];

if (env === 'prod') {
  plugins = concat(plugins,
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __DEV__: false,
    })
  );
}

module.exports = {
  entry: entryMap,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1 }
            },
            'less-loader'
          ]
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.less', '.css']
  },
  plugins: plugins
};
