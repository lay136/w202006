/*
* @Author: Chen
* @Date:   2020-07-02 11:22:54
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-02 14:57:42
*/
//require('文件名')
//引入模块文件会执行文件内的代码
//导出的始终是module.exports指向的对象
const req = require('./m5.js');

// console.log(req);
console.log(req.str);
console.log(req.obj);
console.log(req.fn);
req.fn();

