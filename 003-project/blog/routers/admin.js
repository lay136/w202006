/*
* @Author: Chen
* @Date:   2020-07-14 09:55:21
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-17 16:34:39
*/
const express = require('express')
const router = express.Router();

const UserModel = require('../models/user.js');
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


//显示后台管理员首页
router.get('/',(req,res)=>{
	res.render('admin/index',{
		userInfo:req.userInfo
	})
})
//显示用户列表
router.get('/users',(req,res)=>{
	//查询数据库获取用户信息
	/*
		分页:具体显示哪一页page由前台传入
		约定:每一页显示几条数据:limit = 2
		第一页显示： 1-2  skip (1-1)*2
		第二页显示： 3-4	 skip (2-1)*2
		第三页显示： 5-6	 skip (3-1)*2
		......
		第n页显示：       skip (page-1)*limit

	*/
	/*
	let page = req.query.page / 1;
	const limit = 2;
	if(isNaN(page)){
		page = 1;
	}
	//上一页边界控制
	if(page == 0){
		page = 1
	}

	UserModel.countDocuments((err,counts)=>{
		let pages = Math.ceil(counts/limit);
		//下一页边界控制
		if(page >= pages){
			page = pages;
		}
		//生成页码数
		let list = [];
		for(let i = 1;i<=pages;i++){
			list.push(i);
		}
		//跳过数据的条数
		let skip = (page-1)*limit;
		UserModel.find({},'-password -__v')
		.sort({_id:1})
		.skip(skip)
		.limit(limit)
		.then(users=>{
			// console.log(users)
			res.render('admin/user_list',{
				userInfo:req.userInfo,
				users:users,
				page:page,
				list:list,
				pages:pages
			})
		})
		.catch(err=>{
			console.log(err)
		})
	})
	*/
	const options = {
		page:req.query.page / 1,
		model:UserModel,
		query:{},
		projection:'-password -__v',
		sort:{_id:1}
	}
	pagination(options)
	.then(result=>{
		res.render('admin/user_list',{
			userInfo:req.userInfo,
			users:result.docs,
			page:result.page,
			list:result.list,
			pages:result.pages,
			url:'/admin/users'
		})
	})
	.catch(err=>{
		console.log(err)
	})
})




module.exports = router