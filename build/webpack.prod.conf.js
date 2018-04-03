/*
 * @Author: liuchunxiu 
 * @Date: 2018-03-28 14:41:21 
 * @Last Modified by: liuchunxiu
 * @Last Modified time: 2018-04-03 17:36:25
 */
"use strict";
const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const baseWebpackConfig = require("./webpack.base.conf");
const config = require("../config/index");
const { generateCSSLoaders } = require("./utils");

let devWebpackConfig = merge(baseWebpackConfig, {
  mode: "production",
  module: {
    rules: [...generateCSSLoaders(true)]
  },
  performance: {
    hints: false
  },
  devtool: "source-map",
  stats: "errors-only",
  optimization: {
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: -20,
          chunks: "all"
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"production"'
    }),
    new CleanWebpackPlugin(["*"], {
      root: config.build.assetsRoot,
      verbose: true,
      exclude: [".gitkeep"]
    }),
    new ExtractTextPlugin({
      filename: getPath => {
        return getPath("css/[name].css").replace("css/js", "css");
      },
      allChunks: true
    }),
    new UglifyJsPlugin({
      test: /\.jsx?($|\?)/i,
      parallel: 4,
      sourceMap: true,
      uglifyOptions: {
        compress: {
          drop_console: true
        }
      }
    }),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      hash: true,
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: "dependency"
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: config.dev.assetsRoot,
        to: config.build.assetsRoot,
        ignore: [".gitkeep"]
      }
    ])
  ]
});

if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require("compression-webpack-plugin");

  devWebpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: new RegExp(
        "\\.(" + config.build.productionGzipExtensions.join("|") + ")$"
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  );
}

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
  devWebpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = devWebpackConfig;
