/*
* @Author: Chen
* @Date:   2020-07-03 17:29:54
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-03 17:41:31
*/
const fs = require('fs');

//逐步操作
	/*
	//1.打开文件
	const fd = fs.openSync('./001.txt','a');
	//2.写入内容
	fs.writeSync(fd,'hello');
	//3.保存并关闭文件
	fs.closeSync(fd);
	*/
//合并操作
	fs.writeFileSync('./001.txt','world',{flag:'a'});