/*
* @Author: Chen
* @Date:   2020-07-10 10:31:58
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-10 11:13:27
*/
//引入数据库
const MongoClient = require('mongodb').MongoClient;
// console.log(MongoClient)
const uri = "mongodb://127.0.0.1:27017/";

// Database Name定义数据库名称
const dbName = 'kuazhu';

//连接数据库
const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });

client.connect(err => {
  	if(err){
  		console.log('err::',err)
  		console.log('connect mongodb err');
  		throw err
  	}
  	 console.log("Connected successfully to server");
  	//1.切换数据库(没有则新建并切换到该数据库)
  	const db = client.db(dbName);
  	//2.生成集合
  	const collection = db.collection('user');
  	//3.根据生成的集合进行数据库操作:CRUD
  	//3.1新增
  	/*
  	collection.insertMany([{name:'Tom',age:18},{name:'Leo',age:22}],(err,docs)=>{
  		if(err){
  			console.log('insert err :::',err)
  		}else{
  			console.log('insert success::',docs);
  		}
  		//无论成功或失败都要关闭数据库
  		client.close();
  	})
	*/

	//3.2查找
	/*
	collection.find({}).toArray((err, docs)=> {
		if(err){
			console.log('find err::',err)
		}else{
			console.log('find success::',docs);
		}
		//无论成功或失败都要关闭数据库
  		client.close();
	})
	*/

	//3.3更新
	/*
	collection.updateOne({name:'Tom'},{$set:{name:'Toms'}},(err, docs)=> {
		if(err){
			console.log('updateOne err::',err)
		}else{
			console.log('updateOne success::',docs);
		}
		//无论成功或失败都要关闭数据库
  		client.close();
	})
	*/

	//3.4删除
	collection.deleteOne({name:'Leo'},(err, docs)=> {
		if(err){
			console.log('deleteOne err::',err)
		}else{
			console.log('deleteOne success::',docs);
		}
		//无论成功或失败都要关闭数据库
  		client.close();
	})
  	
});