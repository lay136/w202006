/*
* @Author: Chen
* @Date:   2020-07-11 10:18:56
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-17 15:09:35
*/
const mongoose = require('mongoose');

//1.生成文档模型
const CategorySchema = new mongoose.Schema({
  	name:{
  		type:String,
  		required:[true,'分类名称不能为空'],
  	},
    order:{
        type:String,
        default:0
    },
});


//2.根据文档模型生成集合
//2.1第一个参数代表着生成集合的名称(mongoose会自动将集合名称变成负数)
//2.2第二个参数就是传入定义的文档模型CategorySchema
const CategoryModel = mongoose.model('category',CategorySchema);


module.exports = CategoryModel;