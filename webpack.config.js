const path = require('path');
module.exports = {
  entry: {
    main: ['@babel/polyfill', './index.js'],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "http://localhost:3000/dist",
  },
}