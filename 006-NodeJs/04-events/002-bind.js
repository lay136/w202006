/*
* @Author: Chen
* @Date:   2020-07-03 11:23:29
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-03 11:35:18
*/
const EventEmitter = require('events');
class MyEmitter extends EventEmitter{};

const emitter = new MyEmitter();

/*
emitter.on('test',()=>{
	console.log('fn test1 ...');
});
emitter.on('test',()=>{
	console.log('fn test2 ...');
});
emitter.addListener('test',()=>{
	console.log('fn test3 ...');
});
emitter.addListener('test',()=>{
	console.log('fn test4 ...');
});

emitter.once('show',()=>{
	console.log('fn test5 ...');
})
*/

// emitter.emit('test');
// emitter.emit('test');
// emitter.emit('test');
// emitter.emit('show');
// emitter.emit('show');

// console.log(emitter.on == emitter.addListener);


emitter.setMaxListeners(20);
emitter.on('test',()=>{
	console.log('fn test1 ...');
});
emitter.on('test',()=>{
	console.log('fn test2 ...');
});
emitter.on('test',()=>{
	console.log('fn test3 ...');
});
emitter.on('test',()=>{
	console.log('fn test4 ...');
});
emitter.on('test',()=>{
	console.log('fn test5 ...');
});
emitter.on('test',()=>{
	console.log('fn test6 ...');
});
emitter.on('test',()=>{
	console.log('fn test7 ...');
});
emitter.on('test',()=>{
	console.log('fn test8 ...');
});
emitter.on('test',()=>{
	console.log('fn test9 ...');
});
emitter.on('test',()=>{
	console.log('fn test10 ...');
});
emitter.on('test',()=>{
	console.log('fn test11 ...');
});

emitter.emit('test');