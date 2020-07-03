/*
* @Author: Chen
* @Date:   2020-07-03 15:48:41
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-03 15:52:59
*/
const EventEmitter = require('events');
class MyEmitter extends EventEmitter{};

const emitter = new MyEmitter();

emitter.on('newListener',(eventName,callback)=>{
	console.log('newListener fn ...');
	console.log('eventName::',eventName);
	callback();
	// console.log(callback+'');
})

emitter.on('show',()=>{
	console.log('fn show ...')
});
emitter.on('test',()=>{
	console.log('fn test ...');
})