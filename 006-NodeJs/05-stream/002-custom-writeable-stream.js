/*
* @Author: Chen
* @Date:   2020-07-03 16:15:41
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-03 16:34:44
*/
// const stream = require('stream');
// console.log(stream.Writable);

const { Writable } = require('stream');

/*
const write = new Writable();// The _write() method is not implemented
write.write('hello');
*/


class CustomWritable extends Writable{
	_write(chunk, encoding, callback){
		console.log("chunk::",chunk);
		console.log("encoding::",encoding);
		callback();
	}
}


const write = new CustomWritable();

write.on('finish',()=>{
	console.log('write stream finish ...');
});

write.write('hello');
write.write('world',()=>{
	console.log('after write world');
});

write.end('stream end');