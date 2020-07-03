/*
* @Author: Chen
* @Date:   2020-07-03 15:01:36
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-03 15:07:08
*/
const EventEmitter = require('events');
class MyEmitter extends EventEmitter{};

const emitter = new MyEmitter();

emitter.on('test',(arg1,arg2)=>{
	console.log(arg1,arg2);
})
const arr = [11,22];
// emitter.emit('test','Tom','Leo');
emitter.emit('test',...arr);