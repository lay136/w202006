/*
* @Author: Chen
* @Date:   2020-07-03 17:10:57
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-03 17:11:29
*/
//process.stdin 代表控制台的可读流

process.stdin.on('data',(chunk)=>{
	console.log(chunk);
})