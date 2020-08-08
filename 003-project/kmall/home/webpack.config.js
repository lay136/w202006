/*
* @Author: Chen
* @Date:   2020-07-23 10:50:48
* @Last Modified by:   Chen
* @Last Modified time: 2020-08-08 17:35:24
*/
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const getHtmlConfig = (name)=>({
    template:'./src/views/'+name+'.html',//模板文件
    filename:name+'.html',//输出的文件名
    // inject:'head',//脚本写在那个标签里,默认是true(在body结束后)
    hash:true,//给生成的js/css文件添加一个唯一的hash
    chunks:['common',name]
})


module.exports = {
	//配置项目环境
	mode: "development", // "production" | "development" | "none"
	// 这里应用程序开始执行
 	// 指定入口文件
 	//多入口写法:
	entry: {
		common:'./src/pages/common/index.js',
		index:'./src/pages/index/index.js',
		list:'./src/pages/list/index.js',
	},
	//指定出口文件
	output: {
	    filename: 'js/[name]-[hash]-bundle.js',
	    path: path.resolve(__dirname, 'dist'),
	    //静态资源路径配置
	    publicPath:'/'
	},
	//配置别名
    resolve:{
        alias:{
            pages:path.resolve(__dirname,'./src/pages'),
            node_modules:path.resolve(__dirname,'./node_modules'),
        }
    },
	module: {
     	rules: [
     	//配置加载CSS文件
       		{
	            test: /\.css$/,
	            use: [
	              {
	                loader: MiniCssExtractPlugin.loader,
	                options: {
	                }
	              },
	              "css-loader"
	            ]
	        },
       	//配置加载图片资源
       		{
				test: /\.(png|jpg|gif|ttf|woff2|woff|eot|svg)\??.*$/i,
				use: [
			  		{
			    		loader: 'url-loader',
			    		options: {
			      			limit: 10,
			      			name: 'resource/[name].[ext]'
			    		}
			  		}
				]
			},
		// 配置babel
			{
			    test:/\.js$/,
			    exclude: /(node_modules)/,
			    use: {
			        loader: 'babel-loader',
			        options: {
			            // presets: ['env', 'react'],
			            presets: ['env','es2015','stage-3'],
			        }
			    }               
			},
     	]
   	},
   	plugins:[
   		//自动生成HTML
	    new htmlWebpackPlugin(getHtmlConfig('index')),
	    new htmlWebpackPlugin(getHtmlConfig('list')),
	    //自动清理dist目录
	    new CleanWebpackPlugin(),
	    //单独打包CSS文件资源
	    new MiniCssExtractPlugin({
	    	filename:'css/[name]-[hash]-bundle.css'
	    })
	],
	devServer:{
	    contentBase: './dist',//内容的目录
	    port:3002,//服务运行的端口
	    historyApiFallback:true,//h5路由刷新页面不向后台请求数据
	}
}