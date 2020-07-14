/*
* @Author: Chen
* @Date:   2020-07-14 16:28:42
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-14 16:30:33
*/
const crypto = require('crypto');

module.exports = (str)=>{
	const hmac = crypto.createHmac('sha512', 'sdadagfasdgfasff');
	//加密明文
	hmac.update(str);
	//生成密文并返回
	return hmac.digest('hex')
}