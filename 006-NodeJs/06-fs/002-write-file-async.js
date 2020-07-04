/*
* @Author: Chen
* @Date:   2020-07-04 10:14:35
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-04 10:34:52
*/
const fs = require('fs');
const util = require('util');

//逐步操作
	/*
	//1.打开文件
	fs.open('./001.txt','a',(err,fd)=>{
		if(err){
			console.log('open file err');
			console.log(err);
		}else{
			//2.写入内容
			fs.write(fd,'hello',(err)=>{
				if(err){
					console.log('write file err');
					console.log(err);
				}else{
					//3.保存并关闭文件
					fs.close(fd,(err)=>{
						if(err){
							console.log('close file err');
							console.log(err);
						}
					})
				}
			})
		}
	})
	*/
	

//合并操作
/*
	fs.writeFile('001.txt','good',(err)=>{
		if(err){
			console.log('write file err');
			console.log(err)
		}else{
			console.log('write file success');
		}
	})
*/

//异步操作同步化(promise)
const writefile = util.promisify(fs.writeFile);
writefile('001.txt','nodejs')
.then(()=>{
	console.log('write file success');
})
.catch(err=>{
	console.log('write file err');
	console.log(err)
})