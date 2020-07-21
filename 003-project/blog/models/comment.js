/*
* @Author: Chen
* @Date:   2020-07-11 10:18:56
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-21 10:51:49
*/
const mongoose = require('mongoose');
const moment = require('moment');
const pagination = require('../util/pagination.js')

//1.生成文档模型
const CommentSchema = new mongoose.Schema({
  	content:{
  		type:String,
  	},
    user:{
    	type:mongoose.Schema.Types.ObjectId,
    	ref:'user'
    },
    article:{
    	type:mongoose.Schema.Types.ObjectId,
    	ref:'article'
    },
    createdAt:{
    	type:Date,
    	default:Date.now
    }
});
    //定义时间虚拟属性
    CommentSchema.virtual('createdTime').get(function () {
        // return this.createdAt.toLocaleString();
        return moment(this.createdAt).format('YYYY - MM - DD HH:mm:ss')
    });
    //定义获取评论分页数据静态方法
    CommentSchema.statics.getPaginationData = function(req,query={}){
        const options = {
            page:req.query.page / 1,
            model:this,
            query:query,
            projection:'-__v',
            sort:{_id:1},
            populates:[{ path: 'user', select: 'username' },{ path: 'article', select: 'title' }]
        }
        return pagination(options)
    }

//2.根据文档模型生成集合
//2.1第一个参数代表着生成集合的名称(mongoose会自动将集合名称变成负数)
//2.2第二个参数就是传入定义的文档模型CommentSchema
const CommentModel = mongoose.model('comment',CommentSchema);


module.exports = CommentModel;