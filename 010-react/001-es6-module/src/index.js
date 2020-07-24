/*
* @Author: Chen
* @Date:   2020-07-24 09:42:19
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-24 10:06:25
*/
//多次引用模块只执行一次
// import './Module.js';
// import './Module.js';

//写法一
/*
import { a } from './Module.js';
console.log('a = ',a);
*/

//写法二 
/*
import { a } from './Module.js';
console.log('a = ',a);
*/
//写法三
/*
import { a as b } from './Module.js';
console.log('b = ',b)
*/

//写法四
/*
import { b } from './Module.js'
console.log('b = ',b)
*/

//写法五
/*
import c,{ a1,b1 } from './Module.js';
console.log('a1 = ',a1);
console.log('b1 = ',b1);
console.log('c = ',c);
*/
import a from './Module.js';
console.log('a = ',a);


console.log('here is a index.js file')