/*
* @Author: Chen
* @Date:   2020-07-07 10:58:07
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-07 11:32:17
*/
const crypto = require('crypto');

// const hash = crypto.createHash('md5');
// const hash = crypto.createHash('sha256');
const hash = crypto.createHash('sha512');

// 123456 =>明文
console.log('123456')


hash.update('123456');

console.log(hash.digest('hex'))


