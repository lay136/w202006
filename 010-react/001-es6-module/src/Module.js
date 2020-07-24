/*
* @Author: Chen
* @Date:   2020-07-24 09:42:51
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-24 10:05:59
*/
console.log('here is a module.js file')

//写法一
// export const a = 1
//写法二
/*
const a = 2;
export { a };
*/
//写法三
/*
const a = 3;
export { a }
*/

//写法四
/*
const a = 4;
export { a as b }
*/
//写法五
// export default 5;
// export default 6;
// const a = 6;
// export default a;
/*
const a = 7;
const b = 8;
const c = 9
export {
	a as a1,
	b as b1
}
export default c;
*/
export default const a = 10





