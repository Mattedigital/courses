module.exports = () => ({
  test: /.*\.(gif|png|jpe?g)$/i,
  exclude: /node_modules/,
  use: {
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      outputPath: 'media/images/',
      publicPath: 'media/images/',
    },
  },
});
