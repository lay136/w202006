/*
* @Author: Chen
* @Date:   2020-07-11 10:18:56
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-14 15:58:45
*/
const mongoose = require('mongoose');

//1.生成文档模型
const UserSchema = new mongoose.Schema({
  	username:{
  		type:String,
  		required:[true,'用户名不能为空'],
  		minlength:[3,'用户名长度不少于3个字符'],
  		maxlength:[10,'用户名长度不超过10个字符']
  	},
    password:{
        type:String,
        required:[true,'密码不能为空']
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
});


//2.根据文档模型生成集合
//2.1第一个参数代表着生成集合的名称(mongoose会自动将集合名称变成负数)
//2.2第二个参数就是传入定义的文档模型UserSchema
const UserModel = mongoose.model('user',UserSchema);


module.exports = UserModel;