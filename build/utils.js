/*
 * @Author: liuchunxiu 
 * @Date: 2018-03-28 14:41:38 
 * @Last Modified by: liuchunxiu
 * @Last Modified time: 2018-03-28 14:46:47
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
        loader: "css-loader"
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