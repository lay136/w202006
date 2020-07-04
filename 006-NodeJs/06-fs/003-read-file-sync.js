/*
* @Author: Chen
* @Date:   2020-07-04 10:51:40
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-04 11:06:55
*/
const fs = require('fs')

// 逐步操作
	/*
	//1.打开文件
	const fd = fs.openSync('./003.txt','r');
	//2.读文件
	const buf = Buffer.alloc(100);
	fs.readSync(fd,buf,0,50,0);
	console.log(buf);
	//3.关闭文件
	fs.closeSync(fd);
	*/
// 合并操作
	const buf = fs.readFileSync('./003.txt',{flag:'r',encoding:'utf-8'});
	// console.log(buf.toString());
	console.log(buf);