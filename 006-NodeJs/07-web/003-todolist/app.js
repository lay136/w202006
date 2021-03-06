/*
* @Author: Chen
* @Date:   2020-07-04 16:39:56
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-06 11:46:16
*/
const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('./mime.json');
const url = require('url');
const swig  = require('swig');
const querystring = require('querystring');

const { get,add } = require('./model/item.js');

const server = http.createServer((req,res)=>{
	// index.html?name=tom
	// console.log('url:::',req.url);
	const parse = url.parse(req.url,true);
	// console.log('parse::',parse);
	//1.获取请求地址
	const filePath = req.url;
	const pathname = parse.pathname;
	// console.log('pathname::',pathname);

	//根据不同路由进行不同的处理
	//处理请求首页路由
	if(pathname == '/' || pathname == '/index.html'){
		//获取首页数据并返回
		get()
		.then(data=>{
			const fliename = path.normalize(__dirname+'/static/index.html');
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
	//处理添加路由
	else if(pathname == '/add'){
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
			add(query.task)
			.then(data=>{
				
			})
		})
		res.end('ok');
	}
	//处理静态资源
	else{
		// console.log('filePath::',filePath);
		const fliename = path.normalize(__dirname+'/static/'+filePath);
		// console.log('fliename::',fliename);
		//2.根据文件地址读取文件
		fs.readFile(fliename,{encoding:'utf-8'},(err,data)=>{
			if(err){
				res.statusCode = 404;
				res.setHeader('Content-Type', 'text/html;charset=utf-8');
				res.end('<h1>请求的地址出错啦!</h1>')
			}else{
				// console.log(data);
				//根据不同的文件设置文档类型
				//根据不同的后缀名设置文档类型
				// .css text/css
				// .html text/html
				// 获取文件后缀名
				const extname = path.extname(filePath);
				// console.log('extname::',extname);
				mimeType = mime[extname];
				// console.log('mimeType::',mimeType)

				res.statusCode = 200;
				res.setHeader('Content-Type', mimeType+';charset=utf-8');
				res.end(data)
			}
		})
	}


	// res.end('good');
});


server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running in http://127.0.0.1:3000');
})