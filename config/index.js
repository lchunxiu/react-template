/*
 * @Author: liuchunxiu 
 * @Date: 2018-03-28 14:41:07 
 * @Last Modified by: liuchunxiu
 * @Last Modified time: 2018-03-28 15:41:04
 */
'use strict'
const path = require('path')
module.exports = {
    dev:{
        assetsRoot: path.resolve(__dirname, '../static'),//静态资源存放处
        assetsSubDirectory: 'assets',
        port:8080,
    },
    build:{
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'assets',
        productionGzip:false,
        bundleAnalyzerReport:false,
        productionGzipExtensions:['js','css']
    }
}