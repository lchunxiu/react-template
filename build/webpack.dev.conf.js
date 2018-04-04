/*
 * @Author: liuchunxiu 
 * @Date: 2018-03-28 14:41:27 
 * @Last Modified by: liuchunxiu
 * @Last Modified time: 2018-04-04 09:39:05
 */
"use strict";
const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const baseWebpackConfig = require("./webpack.base.conf");
const config = require("../config/index");
const {generateCSSLoaders} = require('./utils');

let devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",
  module: {
    rules: [
        ...generateCSSLoaders(false)
    ]
  },
  performance: {
    hints: "warning",
    maxAssetSize: 200000,
    maxEntrypointSize: 400000,
    assetFilter: function(assetFilename) {
      return assetFilename.endsWith(".css") || assetFilename.endsWith(".js");
    }
  },
  devtool: "inline-source-map",
  stats: "verbose",
  devServer: {
    index: "index.html",
    open: true, // open is enabled, the dev server will open the browser.
    port: config.dev.port || 8080,
    contentBase: config.dev.assetsRoot, //config.dev.assetsRoot, // boolean | string | array, static file location
    compress: false, // enable gzip compression
    hot: true // hot module replacement. Depends on HotModuleReplacementPlugin
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"development"'
    }),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: true
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});

module.exports = devWebpackConfig;
