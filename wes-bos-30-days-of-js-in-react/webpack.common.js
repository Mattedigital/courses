const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const scripts = require('./webpack-loaders/scripts');
const styles = require('./webpack-loaders/styles');
const images = require('./webpack-loaders/images');
const svg = require('./webpack-loaders/svg');
const sounds = require('./webpack-loaders/sounds');
const fonts = require('./webpack-loaders/fonts');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css'],
  },
  module: {
    rules: [
      scripts(),
      styles(),
      images(),
      svg(),
      sounds(),
      fonts(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Common config',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new ExtractTextPlugin('styles.css'),
  ],
};
