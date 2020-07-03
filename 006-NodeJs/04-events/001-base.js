/*
* @Author: Chen
* @Date:   2020-07-03 10:59:12
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-03 11:06:35
*/
const EventEmitter = require('events');
// console.log(EventEmitter);

/*
//1.生成事件实例
const emitter = new EventEmitter();
// console.log(emitter);

//2.监听事件
emitter.on('test',()=>{
	console.log('fn test ...');
});

//3.触发事件
emitter.emit('test');
*/


class MyEmitter extends EventEmitter {

}
//1.生成事件实例
const emitter = new MyEmitter();
// console.log(emitter);

//2.监听事件
emitter.on('test',()=>{
	console.log('fn test ...');
});

//3.触发事件
emitter.emit('test');