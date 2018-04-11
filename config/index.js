/*
 * @Author: liuchunxiu 
 * @Date: 2018-03-28 14:41:07 
 * @Last Modified by: liuchunxiu
 * @Last Modified time: 2018-04-11 12:29:00
 */
'use strict'
const path = require('path')
module.exports = {
    dev:{
        assetsRoot: path.resolve(__dirname, '../static'),//静态资源存放处
        assetsSubDirectory: 'assets',
        port:8080,
        isMock:true,
        mockUrl:"./src/mock/index.js"
    },
    build:{
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'assets',
        productionGzip:false,
        bundleAnalyzerReport:true,
        productionGzipExtensions:['js','css']
    }
}