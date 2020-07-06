/*
* @Author: Chen
* @Date:   2020-07-06 10:36:55
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-06 11:45:31
*/
const fs = require('fs');
const path = require('path');
const util = require('util');

const filepath = path.normalize(__dirname+'/../data/item.json');

//异步处理获取数据
const readfile = util.promisify(fs.readFile);
//异步处理添加数据
const writefile = util.promisify(fs.writeFile);

//获取数据
async function get(){
	//1.读取文件数据
	const data = await readfile(filepath,{flag:'r',encoding:'utf-8'})
	//2.将数据转化成数组
	const arr = JSON.parse(data);
	//3.返回数据
	return arr
}
//添加数据
async function add(task){
	console.log(task);
}
//删除数据


module.exports = {
	get,
	add,
}
