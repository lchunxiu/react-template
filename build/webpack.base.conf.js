/*
 * @Author: liuchunxiu 
 * @Date: 2018-03-28 14:41:34 
 * @Last Modified by: liuchunxiu
 * @Last Modified time: 2018-03-28 14:51:10
 */
'use strict'
const path = require('path')
const config = require('../config/index')

module.exports = {
    context:path.resolve(__dirname, ".."),
    entry: {
        app:'./src/index.js',
        another:'./src/another.js',
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css"],
        alias: {
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname, "../src")],
                // options: {
                //     presets: ['babel-preset-env',"react"],
                // }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    // name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    // name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    // name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
}