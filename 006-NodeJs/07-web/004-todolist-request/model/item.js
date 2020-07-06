/*
* @Author: Chen
* @Date:   2020-07-06 10:36:55
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-06 17:04:08
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
	//1.读取数据
	const data = await readfile(filepath,{flag:'r',encoding:'utf-8'})
	//2.将字符串数据转化成数组
	const arr = JSON.parse(data);
	//3.生成任务对象并添加到数组中
	const obj = {
		id:Date.now().toString(),
		task:task
	}
	arr.push(obj);
	//4.将最新的数据覆盖写入到文件中
	await writefile(filepath,JSON.stringify(arr));
	//5.返回任务对象
	return obj;
}
//删除数据
async function del(id){
	//1.读取数据
	const data = await readfile(filepath,{flag:'r',encoding:'utf-8'})
	//2.将数据转化成数组
	const arr = JSON.parse(data);
	//3.根据id筛选出数组中的数据
	const newArr = arr.filter(item=>{
		return item.id != id;
	})
	//4.将更新的数据覆盖写入到文件中
	await writefile(filepath,JSON.stringify(newArr));
}


module.exports = {
	get,
	add,
	del
}
