/*
* @Author: Chen
* @Date:   2020-07-11 09:55:36
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-11 09:56:22
*/
const mongoose = require('mongoose');

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


module.exports = UserModel;