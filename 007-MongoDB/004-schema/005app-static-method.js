/*
* @Author: Chen
* @Date:   2020-07-10 11:35:45
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-11 16:16:31
*/
//引入mongoose
const mongoose = require('mongoose');
const UserModel = require('./models/user.js');
const BlogModel = require('./models/blog.js');
const moment = require('moment');
//连接到数据库
mongoose.connect('mongodb://127.0.0.1:27017/kuazhu', {useNewUrlParser: true,useUnifiedTopology: true});

let getRandom = (min,max)=>{
	return Math.round(min + Math.random()*(max-min))
}
let names = ['Tom','Leo','Petter','Json','Jane','Bobi','Marry'];
let majors = ['Computer','Art','Music','Sport','Elec'];

let getName = ()=>names[getRandom(0,names.length - 1)];
let getMajor = ()=>majors[getRandom(0,majors.length - 1)];


const db = mongoose.connection;
db.on('error', (err)=>{
	console.log('connect mongodb err::',err)
	throw err;
});
db.once('open', function() {
  	console.log('connect mongodb success !!');

  	

	//3.根据生成的集合进行数据库操作:CRUD
	/*
	UserModel.insertMany({
		name:'Petter',
		age:45,
		major:'Music',
		phone:13445678925
	})
	.then(docs=>{
		console.log('insertMany success::',docs);
	})
	.catch(err=>{
		console.log('insertMany err::',err)
	})
	
	BlogModel.insertMany({
		title:'test 2',
		content:'best title of test 2',
		author:'5f096b85e9ca9f2004447c0d'
	})
	.then(docs=>{
		console.log('insertMany success::',docs);
	})
	.catch(err=>{
		console.log('insertMany err::',err)
	})
	*/

	/*
	UserModel.findById('5f096b85e9ca9f2004447c0d',(err,docs)=>{
		if(err){
			console.log('findById err::',err)
		}else{
			console.log('findById success::',docs);
		}
	})
	*/

	UserModel.findByPhone(13445678925,(err,docs)=>{
		if(err){
			console.log('findById err::',err)
		}else{
			console.log('findById success::',docs);
		}
	})
	
})