/*
* @Author: Chen
* @Date:   2020-07-10 11:35:45
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-11 15:09:12
*/
//引入mongoose
const mongoose = require('mongoose');
const UserModel = require('./models/user.js');
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
	UserModel.insertMany({
		name:'Lesss',
		age:80,
		major:'Art',
		phone:13445678925
	})
	.then(docs=>{
		console.log('insertMany success::',docs);
	})
	.catch(err=>{
		console.log('insertMany err::',err)
	})

	/*
	UserModel.findOne({_id:'5f0924aa4f35dc168852a4fa'},(err,docs)=>{
		if(err){
			console.log('find err::',err)
		}else{
			// console.log('find success::',docs.createdAt.toLocaleString());
			console.log(moment(docs.createdAt).format('YYYY - MM - DD HH:mm:ss'))
		}
	})
	*/
})