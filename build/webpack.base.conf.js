'use strict'
const path = require('path')
module.exports = {
    context:path.resolve(__dirname, ".."),
    entry: {
        app:'./src/index.js'
    },
    output: {
        path: path.resolve(__dirname, "../static"),
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