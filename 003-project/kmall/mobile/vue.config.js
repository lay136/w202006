/*
* @Author: Chen
* @Date:   2020-08-25 09:12:24
* @Last Modified by:   Chen
* @Last Modified time: 2020-08-27 17:40:33
*/
const path = require('path')
module.exports = {
	devServer: {
		port: 3003
	},
	pluginOptions: {
	    'style-resources-loader': {
	      preProcessor: 'less',
	      patterns: [
	      	path.resolve(__dirname, './src/assets/less/index.less')
	      ]
	    }
	},
	chainWebpack:config =>{
	    config.resolve.alias
	    .set('pages',path.resolve(__dirname,'./src/pages'))
	    .set('api',path.resolve(__dirname,'./src/api'))
	} 
}