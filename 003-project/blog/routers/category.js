/*
* @Author: Chen
* @Date:   2020-07-14 09:55:21
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-18 10:33:02
*/
const express = require('express')
const router = express.Router();

const UserModel = require('../models/user.js');
const CategoryModel = require('../models/category.js');
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


//显示分类管理页面
router.get('/',(req,res)=>{
	const options = {
		page:req.query.page / 1,
		model:CategoryModel,
		query:{},
		projection:'-__v',
		sort:{order:-1}
	}
	pagination(options)
	.then(result=>{
		res.render('admin/category_list',{
			userInfo:req.userInfo,
			categories:result.docs,
			page:result.page,
			list:result.list,
			pages:result.pages,
			url:'/category'
		})
	})
	.catch(err=>{
		console.log(err)
	})
})
//显示新增分类页面
router.get('/add',(req,res)=>{
	res.render('admin/category_add_edit',{
		userInfo:req.userInfo
	})
})
//处理新增分类路由
router.post('/add',(req,res)=>{
	//1.获取参数
	let { name,order } = req.body;
	if(!order){
		order = 0;
	}
	//2.查询集合进行同名验证
	CategoryModel.findOne({name:name})
	.then(category=>{
		if(category){//数据库有该分类名称不能插入
			res.render('admin/err',{
				userInfo:req.userInfo,
				message:'已有该分类,请更换名称',
				url:'/category/add'
			})
		}else{//可以插入该名称分类
			CategoryModel.insertMany({
				name:name,
				order:order
			})
			.then(data=>{
				res.render('admin/ok',{
					userInfo:req.userInfo,
					message:'添加分类成功',
					url:'/category'
				})
			})
			.catch(err=>{
				console.log(err.message)
				res.render('admin/err',{
					userInfo:req.userInfo,
					message:'操作数据库失败,请稍后再试!'
				})
			})
		}
	})
	.catch(err=>{
		console.log(err.message);
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'操作数据库失败,请稍后再试!'
		})
	})
	
})

//显示编辑分类页面
router.get('/edit/:id',(req,res)=>{
	//获取点击记录的ID
	const id = req.params.id;
	CategoryModel.findById(id)
	.then(category=>{
		res.render('admin/category_add_edit',{
			userInfo:req.userInfo,
			category
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
//处理编辑分类逻辑
router.post('/edit',(req,res)=>{
	//1.获取参数
	let { name,order,id } = req.body;
	if(!order){
		order = 0;
	}
	//2.查询集合获取该记录
	CategoryModel.findOne({_id:id})
	.then(category=>{
		if(category.name == name && category.order == order){//数据没有更改
			res.render('admin/err',{
				userInfo:req.userInfo,
				message:'数据没有改动,请更改后再提交'
			})
		}else{//数据有更新
			CategoryModel.findOne({name:name,_id:{$ne:id}})
			.then(result=>{
				if(result){//数据库有同名分类,不能更新数据
					res.render('admin/err',{
						userInfo:req.userInfo,
						message:'数据库有该分类,请更换名称'
					})
				}else{//可以更新数据
					CategoryModel.updateOne({_id:id},{name,order})
					.then(data=>{
						res.render('admin/ok',{
							userInfo:req.userInfo,
							message:'更新分类成功',
							url:'/category'
						})
					})
					.catch(err=>{
						console.log(err);
						res.render('admin/err',{
							userInfo:req.userInfo,
							message:'操作数据库失败,请稍后再试!'
						})
					})
				}
			})
			.catch(err=>{
				console.log(err);
				res.render('admin/err',{
					userInfo:req.userInfo,
					message:'操作数据库失败,请稍后再试!'
				})
			})
		}
	})
	.catch(err=>{
		console.log(err);
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'操作数据库失败,请稍后再试!'
		})
	})
})

//处理删除分类路由
router.get('/delete/:id',(req,res)=>{
	//获取参数
	const id = req.params.id;
	//通过ID查找数据库并删除该条记录
	CategoryModel.deleteOne({_id:id})
	.then(data=>{
		res.render('admin/ok',{
			userInfo:req.userInfo,
			message:'删除分类成功',
			url:'/category'
		})
	})
	.catch(err=>{
		console.log(err);
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'操作数据库失败,请稍后再试!',
			url:'/category'
		})
	})
})




module.exports = router