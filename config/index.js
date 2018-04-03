/*
 * @Author: liuchunxiu 
 * @Date: 2018-03-28 14:41:07 
 * @Last Modified by: liuchunxiu
 * @Last Modified time: 2018-04-03 17:37:10
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
        bundleAnalyzerReport:true,
        productionGzipExtensions:['js','css']
    }
}