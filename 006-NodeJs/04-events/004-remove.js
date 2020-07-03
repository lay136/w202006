/*
* @Author: Chen
* @Date:   2020-07-03 15:21:34
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-03 15:28:46
*/
const EventEmitter = require('events');
class MyEmitter extends EventEmitter{};

const emitter = new MyEmitter();

let listener1 = ()=>{
	console.log('fn show 1 ');
}
let listener2 = ()=>{
	console.log('fn show 2 ');
}

emitter.on('show',listener1)
emitter.on('show',listener2);
emitter.on('test',()=>{
	console.log('fn test 1');
})


// emitter.off("show",listener1);
emitter.removeListener('show',listener1);
emitter.emit('show');

console.log(emitter.off === emitter.removeListener);