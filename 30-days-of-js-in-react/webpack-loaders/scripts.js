module.exports = () => ({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  query: {
    presets: [['env', { modules: false }], 'react'],
  },
});
