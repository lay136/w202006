/*
* @Author: Chen
* @Date:   2020-07-10 11:35:45
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-10 15:10:44
*/
//引入mongoose
const mongoose = require('mongoose');
//连接到数据库
mongoose.connect('mongodb://127.0.0.1:27017/kuazhu', {useNewUrlParser: true,useUnifiedTopology: true});

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
	const UserModel = mongoose.model('user', UserSchema);

	//3.根据生成的集合进行数据库操作:CRUD
	//3.1新增
	/*
	const user = new UserModel({ name: 'Tom',age:66,major:'Elec' });
	user.save((err,docs)=>{
		if(err){
			console.log('insert err::',err)
		}else{
			console.log('insert success::',docs);
		}
	})
	*/
	// 3.2查找
	/*
	UserModel.findOne({name:'Tom'},(err,docs)=>{
		if(err){
			console.log('findOne err::',err)
		}else{
			console.log('findOne success::',docs);
		}
	})
	*/
	// 3.3更新
	/*
	UserModel.updateOne({name:'Leo'},{$set:{age:100}},(err,docs)=>{
		if(err){
			console.log('updateOne err::',err)
		}else{
			console.log('updateOne success::',docs);
		}
	})
	
	UserModel.updateOne({name:'Leo'},{age:45},(err,docs)=>{
		if(err){
			console.log('updateOne err::',err)
		}else{
			console.log('updateOne success::',docs);
		}
	})
	*/
	// 3.4删除
	UserModel.deleteOne({name:'Tom'},(err,docs)=>{
		if(err){
			console.log('deleteOne err::',err)
		}else{
			console.log('deleteOne success::',docs);
		}
	})
})