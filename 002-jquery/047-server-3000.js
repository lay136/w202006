/*
* @Author: Chen
* @Date:   2020-05-21 16:26:01
* @Last Modified by:   Chen
* @Last Modified time: 2020-05-21 16:26:48
*/
var http = require('http');

var fs = require('fs');
var url = require('url');

var server = http.createServer(function(req,res){
	console.log(req.url);
	console.log(req.method);
	if(req.url == '/favicon.ico'){
		res.end('ok')
	}
	if(req.method == 'POST'){
		var body = '';
		req.on('data',function(chunk){
			body += chunk
		})
		req.on('end',function(){
			res.end(body)
		})
	}else if(req.method == 'GET'){
		if(req.url.search(/\?/) != -1){
			var parm = url.parse(req.url,true).query;
			var objToJSON = JSON.stringify(parm)
			res.end(objToJSON)
		}else{
			var filePath = './' + req.url;
			fs.readFile(filePath,function(err,data){
				if(err){
					res.statusCode = 404;
					res.end('Not Found!!!');
				}else{
					res.end(data);
				}
			})
		}
	}
});
server.listen(3000,'127.0.0.1',function(){
	console.log('server is running at http://127.0.0.1:3000');
});