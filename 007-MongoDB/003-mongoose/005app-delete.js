/*
* @Author: Chen
* @Date:   2020-07-10 11:35:45
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-10 17:18:42
*/
//引入mongoose
const mongoose = require('mongoose');
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

  	//1.生成文档模型
  	const UserSchema = new mongoose.Schema({
	  	name: String,
	  	age:Number,
	  	major:String
	});
	//2.根据文档模型生成集合
	//2.1第一个参数代表着生成集合的名称(mongoose会自动将集合名称变成负数)
	//2.2第二个参数就是传入定义的文档模型UserSchema
	const UserModel = mongoose.model('user',UserSchema);

	//3.根据生成的集合进行数据库操作:CRUD
	/*
	UserModel.deleteOne({name:'Leo'},(err,docs)=>{
		if(err){
			console.log('deleteOne err::',err)
		}else{
			console.log('deleteOne success::',docs);
		}
	})
	*/
	UserModel.deleteMany({name:'Leo'},(err,docs)=>{
		if(err){
			console.log('deleteMany err::',err)
		}else{
			console.log('deleteMany success::',docs);
		}
	})
})