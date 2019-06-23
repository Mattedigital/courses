module.exports = () => ({
  test: /.*\.(wav|mp3)$/i,
  exclude: /node_modules/,
  use: {
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      outputPath: 'media/sounds/',
      publicPath: 'media/sounds/',
    },
  },
});
