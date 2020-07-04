/*
* @Author: Chen
* @Date:   2020-07-04 15:41:08
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-04 16:19:39
*/

/*
const http = require('http');

const server = http.createServer((req,res)=>{
	// console.log('in this server');
	// req 可读流
	// res 可写流

	res.end('ok');
});


server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running in http://127.0.0.1:3000');
})
*/


const http = require('http');

// const hostname = '127.0.0.1';
const hostname = '10.214.188.242';
const port = 3000;

const server = http.createServer((req, res) => {
 	console.log('url::',req.url);
 	console.log('method::',req.method);
 	res.write('nodejs');
  	res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});