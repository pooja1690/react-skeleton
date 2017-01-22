const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: [
    './app/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?name=/assets/images/[name].[ext]",
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|gif|png|eot|svg|woff|ttf)$/,
        loaders: ['file-loader?name=/assets/images/[name].[ext]'],
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/
      }
    ]
  },
};
