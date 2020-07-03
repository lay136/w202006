/*
* @Author: Chen
* @Date:   2020-07-03 09:38:12
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-03 09:50:03
*/

/*
const t1 = setTimeout(()=>{
	console.log('timer t1 ...')
},200);
clearTimeout(t1);

console.log('after t1 ....');

const t2 = setInterval(()=>{
	console.log('timer t2 ...')
},1000);
clearInterval(t2);
console.log('after t2 ...');


const t3 = setImmediate(()=>{
	console.log('timer t3 ...')
});
console.log('after t3 ....')



*/
const t4 = setTimeout(()=>{
	console.log('timer t4 ...')
},0);
const t5 = setImmediate(()=>{
	console.log('timer t5 ...')
});

process.nextTick(()=>{
	console.log('process.nextTick ...')
});
console.log('after t5 ...')

