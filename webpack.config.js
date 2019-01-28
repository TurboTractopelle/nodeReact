// webpack.config.js
const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: "production",
  entry: path.join(__dirname, 'src', 'app-client.js'),
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [

    {
      test: path.join(__dirname, 'src'),
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-react','@babel/preset-env']
      }
    }

    ]
  }
};