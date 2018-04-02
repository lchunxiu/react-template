/*
 * @Author: liuchunxiu 
 * @Date: 2018-03-28 14:41:38 
 * @Last Modified by: liuchunxiu
 * @Last Modified time: 2018-04-02 18:23:37
 */
'use strict'
const ExtractTextPlugin = require("extract-text-webpack-plugin");

function generateCSSLoader(prefix,isExtract){
    let useCssLoader = [];
    if(!isExtract){
        useCssLoader.push({
            loader: "style-loader"
        });
    }
    useCssLoader.push({
        loader: "css-loader",
        options:{
            modules:false,
            localIdentName: '[path][name]__[local]--[hash:base64:5]'
        }
      });
    if(prefix !== 'css'){
        useCssLoader.push({
            loader: `${prefix}-loader`
          })
    }

    if(isExtract){
        useCssLoader = ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: useCssLoader
          })
    }
    
    let prefixAll = (prefix === 'stylus'?'styl':prefix);
    return {
        test:  new RegExp('\\.' + prefixAll + '$'),
        use: useCssLoader
      };
}

exports.generateCSSLoaders = (isExtract)=>{
    return ['css','less','sass','stylus'].map(ele=>{
        return generateCSSLoader(ele,isExtract);
    })
}