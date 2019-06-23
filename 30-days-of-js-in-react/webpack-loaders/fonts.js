module.exports = () => ({
  test: /\.(ttf|eot|woff|woff2)$/,
  exclude: /node_modules/,
  loader: 'file-loader',
  options: {
    name: '[name].[ext]',
    publicPath: 'media/fonts/',
    outputPath: 'media/fonts/',
  },
});
