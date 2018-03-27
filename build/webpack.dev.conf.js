'use strict'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

var devWebpackConfig = merge(baseWebpackConfig,{
    mode : 'development',
    performance: {
        hints: "warning",
        maxAssetSize: 200000, 
        maxEntrypointSize: 400000, 
        assetFilter: function (assetFilename) {
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        }
    },
    devtool: "source-map",
    stats: "errors-only",
    devServer: {
        index: 'index.html',
        open: true, // open is enabled, the dev server will open the browser.
        port: 8080,
        contentBase: path.join(__dirname, '../static'), // boolean | string | array, static file location
        compress: false, // enable gzip compression
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    },
    plugins: [
        new webpack.DefinePlugin({
           'process.env.NODE_ENV': '"development"'
        }),
        new CleanWebpackPlugin(['static'],{
            root:path.resolve(__dirname,'..'),
            verbose:true,
            exclude:['.gitkeep']
        }),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
          title: 'react template1',
          filename: 'index.html',
          template: 'index.html',
          inject: true
        }),
        // copy custom static assets
        // new CopyWebpackPlugin([
        //   {
        //     from: path.resolve(__dirname, '../static'),
        //     to:  path.resolve(__dirname, '../static'),
        //     ignore: ['.*']
        //   }
        // ])
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
})

module.exports = devWebpackConfig;