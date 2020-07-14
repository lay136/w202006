/*
* @Author: Chen
* @Date:   2020-07-10 11:35:45
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-11 11:12:34
*/
//引入mongoose
const mongoose = require('mongoose');
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
	BlogModel.insertMany({
		title:'test 1',
		content:'this is test 1 for best!!',
		author:'5f09240a5eccc407985d278b'
	})
	.then(docs=>{
		console.log('insertMany success::',docs);
	})
	.catch(err=>{
		console.log('insertMany err::',err)
	})
	*/
	// console.log(BlogModel.findOne({_id:'5f092cc4bbcd991cfce37d55'}))
	/*
	BlogModel.findOne({_id:'5f092cc4bbcd991cfce37d55'})
	.then(docs=>{
		console.log('findOne success::',docs)
	})
	.catch(err=>{
		console.log('findOne err::',err);
	})
	
	BlogModel.findById('5f092cc4bbcd991cfce37d55')
	.then(docs=>{
		console.log('findOne success::',docs)
	})
	.catch(err=>{
		console.log('findOne err::',err);
	})
	*/
	BlogModel.updateOne({_id:'5f092cc4bbcd991cfce37d55'},{title:'test 111'})
	.then(docs=>{
		console.log('findOne success::',docs)
	})
	.catch(err=>{
		console.log('findOne err::',err);
	})
})