/*
* @Author: Chen
* @Date:   2020-07-11 10:18:56
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-11 16:59:49
*/
const mongoose = require('mongoose');

//1.生成文档模型
const BlogSchema = new mongoose.Schema({
  	title:{
      type:String
    },
    content:{
        type:String
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
});


	//自定义静态方法
	BlogSchema.statics.getBlogs = function(query){
		// console.log(this);
		return this.findOne(query).populate('author','name -_id')
	}


//2.根据文档模型生成集合
//2.1第一个参数代表着生成集合的名称(mongoose会自动将集合名称变成负数)
//2.2第二个参数就是传入定义的文档模型UserSchema
const BlogModel = mongoose.model('blog',BlogSchema);


module.exports = BlogModel;