/*
* @Author: Chen
* @Date:   2020-07-02 11:19:03
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-02 11:32:32
*/
// console.log(exports);
// console.log(module.exports);
// console.log(exports === module.exports);


const str = 'hello';
const obj = {
	name:'Tom'
}
const fn = ()=>{
	console.log('fn ....');
}

console.log('exports m5 ...');

/*
exports.str = str;
exports.obj = obj;
exports.fn = fn;

module.exports.str = str;
module.exports.obj = obj;
module.exports.fn = fn;
*/


/*
exports = {
	str,
	obj,
	fn
}
*/
module.exports = {
	str,
	obj,
	fn
}