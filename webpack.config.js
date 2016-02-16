const StaticHtml = require('static-html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    server: __dirname + '/src/server.js',
    client:  __dirname + '/src/client.js'
  },
  output: {
    path: __dirname + '/public',
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {test: /\.jsx?$/,  loader:'babel'},
      {test: /\.scss$/,  loader:ExtractTextPlugin.extract('css!sass')},
      {test: /\.md$/, loader: 'yaml-markdown'},
      {
        test: /\.(woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff2"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        test: /\.png$/,
        loader: "file-loader?name=[name].[ext]"
      }

    ]
  },
  watchOptions: {
    poll: true
  },
  plugins: [new StaticHtml(),
            new ExtractTextPlugin('client.css')]
}
