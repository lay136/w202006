/*
* @Author: Chen
* @Date:   2020-07-23 10:50:48
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-23 17:33:45
*/
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	//配置项目环境
	mode: "development", // "production" | "development" | "none"
	// 这里应用程序开始执行
 	// 指定入口文件
 	//单一入口写法:entry:"./src/index.js"
 	//多入口写法:
	entry: {
		index:'./src/pages/index/index.js',
		common:'./src/pages/common/common.js',
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
   	},
   	plugins:[
   		//自动生成HTML
	    new htmlWebpackPlugin({
	        template:'./src/view/index.html',//模板文件
	        filename:'index.html',//输出的文件名
	        // inject:'head',//脚本写在那个标签里,默认是true(在body结束后)
	        hash:true,//给生成的js/css文件添加一个唯一的hash
	        chunks:['common','index']
	    }),
	    //自动清理dist目录
	    new CleanWebpackPlugin()
	],
	devServer:{
	    contentBase: './dist',//内容的目录
	    port:8080//服务运行的端口
	}
}