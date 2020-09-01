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
  /**
   * STUB
   * in webpack 4 loaders is now rules
   * https://webpack.js.org/concepts/loaders/#example
   */
  module: {
    rules: [
      // https://webpack.js.org/loaders/babel-loader/
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            /** FIXME
             * TypeError: Cannot read property 'bindings' of null
             * https://github.com/babel/babel/issues/8908
             */
            presets: ['@babel/preset-env']
          }
        }
      },

      /** ANCHOR compress images */
      {
        test: /\.(png|jpe?g|webp|git|svg|)$/i,
        use: [{
          loader: 'img-optimize-loader',
          options: {
            compress: {
              webp: true,
              // disableOnDevelopment: true,
            }
          }
        }],
      },

      /** ANCHOR use css from a seperate file */
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      /**
       * TODO
       * template variable to set title from webpack config
       */
      // title: 'd3-webapp',
      filename: 'index.html',
      template: './index.html',
      inject: 'body'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
};