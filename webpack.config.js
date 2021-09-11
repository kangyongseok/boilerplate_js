const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: ['@babel/polyfill', './index.js'],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "http://localhost:3000/dist",
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    inject: 'body'
  })],
}