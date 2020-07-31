/*
* @Author: Chen
* @Date:   2020-07-28 15:55:13
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-28 16:06:08
*/
const http = require('http');

const server = http.createServer((req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*')
	res.end(JSON.stringify(['learn html','learn css','learn react','learn js']))
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running in http://127.0.0.1:3000');
})