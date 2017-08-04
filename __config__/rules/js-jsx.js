module.exports = function(__dirname) {
  return {
    test: /\.jsx?$/,
    loader: 'babel-loader',
    exclude: /(node_modules|bower_components)/,
    query: {
      presets: ['env'],
    }
  }
}
