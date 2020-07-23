/*
* @Author: Chen
* @Date:   2020-07-23 10:50:48
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-23 16:09:20
*/
const path = require('path');

module.exports = {
	//配置项目环境
	mode: "development", // "production" | "development" | "none"
	// 这里应用程序开始执行
 	// 指定入口文件
 	//单一入口写法:entry:"./src/index.js"
 	//多入口写法:
	entry: {
		index:'./src/index.js',
		about:'./src/about.js',
		contact:'./src/contact.js'
	},
	//指定出口文件
	output: {
	    filename: '[name]-[hash]-bundle.js',
	    path: path.resolve(__dirname, 'dist')
	},
	module: {
     	rules: [
     	//配置加载CSS文件
       		{
         		test: /\.css$/,
 				use: [
           			'style-loader',
           			'css-loader'
         		]
       		},
       	//配置加载图片资源
       		{
				test: /\.(png|jpg|gif)$/i,
				use: [
			  		{
			    		loader: 'url-loader',
			    			options: {
			      			limit: 10
			    		}
			  		}
				]
			}
     	]
   }
}