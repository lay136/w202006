/*
* @Author: Chen
* @Date:   2020-07-04 15:04:12
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-04 15:11:45
*/
const fs = require('fs');

//1.打开可写流=>2.写入流=>3.结束可写流=>4.关闭可写流
const ws = fs.createWriteStream('./005.txt');

ws.write('hello nodejs');

ws.on('finish',()=>{
	console.log('write stream done');
});
ws.on('close',()=>{
	console.log('close write stream');
})

ws.end('done');