/*
* @Author: Chen
* @Date:   2020-07-04 11:28:19
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-04 11:43:38
*/
const fs = require('fs');
const util = require('util');

//逐步操作
/*
	//1.打开文件
	fs.open('./003.txt','r',(err,fd)=>{
		if(err){
			console.log(err);
			console.log('read file err');
		}else{
			//2.读文件
			const buf = Buffer.alloc(100);
			fs.read(fd,buf,0,50,0,(err)=>{
				if(err){
					console.log(err)
					console.log('read file err')
				}else{
					// console.log(data)
					console.log(buf);
				}
				//3.关闭文件
				fs.close(fd,(err)=>{
					if(err){
						console.log('close file err');
						console.log(err);
					}
				})
			})
		}

	})
	
*/	

//合并操作
	/*
 	fs.readFile('./003.txt',{flag:'r',encoding:'utf-8'},(err,data)=>{
 		if(err){
 			console.log(err)
 		}else{
 			console.log(data)
 		}
 	})
	*/
//异步操作同步化(promise)
const readfile = util.promisify(fs.readFile);
readfile('./003.txt',{flag:'r',encoding:'utf-8'})
.then(data=>{
	console.log(data)
})
.catch(err=>{
	console.log(err);
})