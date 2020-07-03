/*
* @Author: Chen
* @Date:   2020-07-03 09:08:23
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-03 09:15:32
*/
const fs = require('fs')

//根据参数快速创建web前端项目目录结构
//kz 
// img css js

const fileName = process.argv[2];
// console.log(fileName);

fs.mkdirSync('./'+fileName);
fs.mkdirSync('./'+fileName+'/css');
fs.mkdirSync('./'+fileName+'/img');
fs.mkdirSync('./'+fileName+'/js');