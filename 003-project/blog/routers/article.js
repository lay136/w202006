/*
* @Author: Chen
* @Date:   2020-07-14 09:55:21
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-20 10:48:31
*/
const express = require('express')
const router = express.Router();

const multer = require('multer');
//dest:指定将上传的图片资源存在指定的文件夹目录下
const upload = multer({dest:'public/uploads/'});

const UserModel = require('../models/user.js');
const CategoryModel = require('../models/category.js');
const ArticleModel = require('../models/article.js');
const hmac = require('../util/hmac.js');
const pagination = require('../util/pagination.js');

//管理员权限验证
router.use('/',(req,res,next)=>{
	if(req.userInfo.isAdmin){
		next()
	}else{
		res.send('<h1>请使用管理员账号登录!</h1>')
	}
})


//显示文章管理列表
router.get('/',(req,res)=>{
	/*
	const options = {
		page:req.query.page / 1,
		model:ArticleModel,
		query:{},
		projection:'-__v',
		sort:{_id:1},
		populates:[{ path: 'user', select: 'username' },{ path: 'category', select: 'name' }]
	}
	pagination(options)
	*/
	ArticleModel.getPaginationData(req)
	.then(result=>{
		res.render('admin/article_list',{
			userInfo:req.userInfo,
			articles:result.docs,
			page:result.page,
			list:result.list,
			pages:result.pages,
			url:'/article'
		})
	})
	.catch(err=>{
		console.log(err)
	})
})

//显示新增文章页面
router.get('/add',(req,res)=>{
	//首先获取所有分类传递给新增文章页面
	CategoryModel.find({})
	.then(categories=>{
		res.render('admin/article_add_edit',{
			userInfo:req.userInfo,
			categories
		})
	})
	.catch(err=>{
		console.log(err.message)
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'操作数据库失败,请稍后再试!'
		})
	})
	
})
//处理新增文章路由
router.post('/add',(req,res)=>{
	//1.获取参数
	let { category,title,intro,content } = req.body;
	//2.将文章插入到数据库中
	ArticleModel.insertMany({
		category,
		title,
		intro,
		content,
		user:req.userInfo._id
	})
	.then(data=>{
		res.render('admin/ok',{
			userInfo:req.userInfo,
			message:'新增文章成功',
			url:'/article'
		})
	})
	.catch(err=>{
		console.log(err.message)
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'操作数据库失败,请稍后再试!'
		})
	})
	
})

//处理上传图片资源
//upload.single('upload')
// upload =>这个参数是前台存在图片资源的字段信息
// 必须和前台传递图片资源字段保持一致

router.post('/uploadImage',upload.single('upload'),(req,res)=>{
	// console.log(req.file);
	const filePath = '/uploads/'+req.file.filename;
	res.json({
		uploaded:true,
		url:filePath
	})
})

//显示编辑文章页面
router.get('/edit/:id',(req,res)=>{
	//获取对应文章的ID
	const id = req.params.id;
	//获取所有分类
	CategoryModel.find({})
	.then(categories=>{
		//通过ID获取对应文章
		ArticleModel.findById(id)
		.then(article=>{
			res.render('admin/article_add_edit',{
				userInfo:req.userInfo,
				categories,
				article
			})
		})
		.catch(err=>{
			console.log(err);
			res.render('admin/err',{
				userInfo:req.userInfo,
				message:'操作数据库失败,请稍后再试!'
			})
		})
	})
	.catch(err=>{
		console.log(err);
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'操作数据库失败,请稍后再试!'
		})
	})
	
})
//处理编辑文章逻辑
router.post('/edit',(req,res)=>{
	//1.获取参数
	let { category,title,intro,content,id } = req.body;
	//2.更新文章
	ArticleModel.updateOne({_id:id},{category,title,intro,content})
	.then(data=>{
		res.render('admin/ok',{
			userInfo:req.userInfo,
			message:'更新文章成功',
			url:'/article'
		})
	})
	.catch(err=>{
		console.log(err);
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'操作数据库失败,请稍后再试!'
		})
	})
	
})

//处理删除文章路由
router.get('/delete/:id',(req,res)=>{
	//获取参数
	const id = req.params.id;
	//通过ID查找数据库并删除该条记录
	ArticleModel.deleteOne({_id:id})
	.then(data=>{
		res.render('admin/ok',{
			userInfo:req.userInfo,
			message:'删除文章成功',
			url:'/article'
		})
	})
	.catch(err=>{
		console.log(err);
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'操作数据库失败,请稍后再试!',
			url:'/article'
		})
	})
})




module.exports = router