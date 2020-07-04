/*
* @Author: Chen
* @Date:   2020-07-04 15:20:25
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-04 15:23:31
*/
const fs = require('fs');

//1.打开可读流=>2.读取流=>3.结束可读流=>4.关闭可读流
const rs = fs.createReadStream('./a.mp4');
const ws = fs.createWriteStream('./b.mp4');


rs.pipe(ws);

/*
rs.on('data',(chunk)=>{
	console.log(chunk);
})
rs.on('end',()=>{
	console.log('read stream end');
})
rs.on('close',()=>{
	console.log('close read stream');
})
*/
