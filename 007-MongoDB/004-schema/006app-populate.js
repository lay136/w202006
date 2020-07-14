/*
* @Author: Chen
* @Date:   2020-07-10 11:35:45
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-11 16:58:56
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
	BlogModel.findOne({title:'test 1'})
	.then(data=>{
		let result = {}
		result.data = data;
		// console.log(data)
		UserModel.findOne({_id:data.author},(err,user)=>{
			if(err){
				console.log(err.message)
			}else{
				// console.log(user);
				result.user = user;

				console.log(result)
			}
		})
	})
	.catch(err=>{
		console.log(err.message)
	})
	*/

	/*
	BlogModel.findOne({title:'test 1'})
	.populate('author','name age -_id')
	.then(docs=>{
		console.log(docs)
	})
	.catch(err=>{
		console.log(err.message)
	})
	*/
	BlogModel.getBlogs({title:'test 1'})
	.then(data=>{
		console.log(data)
	})
	.catch(err=>{
		console.log(err.message)
	})
	
})