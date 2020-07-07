/*
* @Author: Chen
* @Date:   2020-07-07 10:58:07
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-07 11:08:16
*/
const crypto = require('crypto');

const hmac = crypto.createHmac('sha512', 'sdasdsadasdasdas');

// 123456 =>明文
console.log('123456')


hmac.update('123456');

console.log(hmac.digest('hex'));