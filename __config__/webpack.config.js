const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('./utility/paths')(__dirname)


module.exports = {
  //input
  entry: {
    app: paths.entry,
  },

  //transform
  module: {
    rules: [
      require('./rules/js-jsx')(__dirname),
      require('./rules/css')(__dirname),
    ]
  },

  //output
  output: {
    path: paths.dist,
    filename: 'static/[name].js',
    chunkFilename: 'static/[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Test',
      template: paths.template,
      filename: 'index.html',
    })
  ],

  //dev
  devtool: 'source-map',
  devServer: {
    port: 80
  }
}
