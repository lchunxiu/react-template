/*
 * @Author: liuchunxiu 
 * @Date: 2018-03-28 14:41:34 
 * @Last Modified by: liuchunxiu
 * @Last Modified time: 2018-04-08 16:19:22
 */
"use strict";
const path = require("path");
const config = require("../config/index");
function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  context: path.resolve(__dirname, ".."),
  entry: {
    app: "./src/index.js",
    // login: "./src/module/login/index.js",
    // layout: "./src/module/layout/index.js"
  },
  output: {
    path: config.build.assetsRoot,
    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: [".js"],
    modules: [
        resolve("src"), 
        resolve("node_modules")
    ],
    alias: {
      stylus:resolve("src/stylus")
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader?cacheDirectory=true",
        include: [resolve("src")],
        options: {
            presets: ["babel-preset-env","react"],
            plugins: ["transform-decorators-legacy","transform-class-properties","dynamic-import-webpack"]
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000
          // name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000
          // name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000
          // name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
};
