// Webpack uses this to work with directories
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'd3-webapp',
      filename: 'index.html',
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};