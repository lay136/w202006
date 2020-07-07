/*
* @Author: Chen
* @Date:   2020-07-07 09:40:29
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-07 10:26:30
*/
const path = require('path');
const fs = require('fs');
const mime = require('../mime.json');
const url = require('url');
const swig  = require('swig');
const querystring = require('querystring');

const { get:getItem,add:addItem,del:delItem } = require('../model/item.js');

class Controller{
	index(req,res,...args){
		//获取首页数据并返回
		getItem()
		.then(data=>{
			const fliename = path.normalize(__dirname+'/../View/index.html');
			const template = swig.compileFile(fliename);
			const html = template({
				data:data
			})
			res.end(html)
		})
		.catch(err=>{
			res.statusCode = 404;
			res.setHeader('Content-Type', 'text/html;charset=utf-8');
			res.end('<h1>请求的地址出错啦!</h1>')
		})
	}
	add(req,res,...args){
		//获取参数
		//1.定义变量存数据
		let body = ''
		//2.监听data事件
		req.on('data',(chunk)=>{
			body += chunk;
		})
		//3.监听end事件
		req.on('end',()=>{
			//将参数转化成对象
			const query = querystring.parse(body);
			//将任务添加到后台数据文件中
			addItem(query.task)
			.then(data=>{
				res.end(JSON.stringify({
					code:0,
					message:'添加任务成功',
					data:data
				}))
			})
			.catch(err=>{
				res.end(JSON.stringify({
					code:1,
					message:'添加任务失败'
				}))
			})
		})
	}
	del(req,res,...args){
		//1.获取参数信息
		const parse = url.parse(req.url,true);
		const id = parse.query.id;
		//2.根据参数信息中的ID删除文件中对应数据
		delItem(id)
		.then(data=>{
			//3.返回删除信息
			res.end(JSON.stringify({
				code:0,
				message:'删除任务成功'
			}))
		})
		.catch(err=>{
			res.end(JSON.stringify({
				code:1,
				message:'删除任务失败'
			}))
		})
	}
}


module.exports = new Controller()