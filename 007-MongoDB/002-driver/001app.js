/*
* @Author: Chen
* @Date:   2020-07-10 10:31:58
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-10 10:38:54
*/
//引入数据库
const MongoClient = require('mongodb').MongoClient;
// console.log(MongoClient)
const uri = "mongodb://127.0.0.1:27017";

//连接数据库
const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });

client.connect(err => {
  	if(err){
  		console.log('err::',err)
  		console.log('connect mongodb err');
  		throw err
  	}
  	//无论成功或失败都要关闭数据库
  	console.log('connect mongodb success !!');
  	client.close();
});