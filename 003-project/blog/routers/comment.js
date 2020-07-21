/*
* @Author: Chen
* @Date:   2020-07-14 09:55:21
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-21 15:06:22
*/
const express = require('express')
const router = express.Router();
const CategoryModel = require('../models/category.js');
const ArticleModel = require('../models/article.js');
const CommentModel = require('../models/comment.js');

//用户登录验证
router.use('/',(req,res,next)=>{
	if(req.userInfo._id){
		next()
	}else{
		res.send('<h1>请先登录!</h1>')
	}
})

//处理添加评论路由
router.post('/add',(req,res)=>{
	const { content,article } = req.body;
	//将评论插入到数据库中
	CommentModel.insertMany({
		content,
		article,
		user:req.userInfo._id.toString()
	})
	.then(comment=>{
		//将最新的评论分页数据返回给前台
		CommentModel.getPaginationData(req,{article:article})
		.then(comments=>{
			res.json({
				code:0,
				message:'获取评论成功',
				data:comments
			})
		})
		.catch(err=>{
			console.log(err)
			res.json({
				code:10,
				message:'获取评论失败'
			})
		})
	})
	.catch(err=>{
		console.log(err)
		res.json({
			code:10,
			message:'添加评论失败'
		})
	})
})

//处理详情页分页ajax请求
router.get('/list',(req,res)=>{
	const id = req.query.id;
	let query = {}
	if(id){
		query.article = id;
	}
	CommentModel.getPaginationData(req,query)
	.then(data=>{
		res.json({
			code:0,
			message:'获取评论成功',
			data:data
		})
	})
	.catch(err=>{
		res.json({
			code:10,
			message:'获取评论失败'
		})
	})
})







module.exports = router