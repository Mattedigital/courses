const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      exclude: ['.git'],
      verbose: true,
    }),
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new FaviconsWebpackPlugin({
      logo: './src/media/favicon.svg',
      prefix: './favicons/favicon-[hash]',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: true,
        favicons: true,
        firefox: true,
        opengraph: true,
        twitter: true,
        yandex: true,
        windows: true,
      },
    }),
  ],
});
