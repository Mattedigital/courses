const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const eslint = require('./webpack-loaders/eslint');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = merge(common, {
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  module: {
    rules: [
      eslint(),
    ],
  },
  plugins: [
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: '**/*.scss',
      syntax: 'scss',
      failOnError: false,
      quiet: false,
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
