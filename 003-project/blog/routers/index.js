/*
* @Author: Chen
* @Date:   2020-07-14 09:55:21
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-20 16:59:03
*/
const express = require('express')
const router = express.Router();
const CategoryModel = require('../models/category.js');
const ArticleModel = require('../models/article.js');


async function getCommonData(){
	//获取顶部分类数据
	const getCategoriesDataPromise = CategoryModel.find({},'name').sort({_id:1});
	//获取点击排行数据
	const getTopArticlesDataPromise = ArticleModel.find({},'click title').sort({click:-1}).limit(10)

	const categoriesData = await getCategoriesDataPromise;
	const topArticles = await getTopArticlesDataPromise;

	return {
		categoriesData,
		topArticles
	}
}

//显示首页
router.get('/',(req,res)=>{
	//获取cookie信息进行验证
	/*
	let userInfo = {}
	if(req.cookies.get('userInfo')){
		userInfo = JSON.parse(req.cookies.get('userInfo'))
	}
	*/
	ArticleModel.getPaginationData(req)
	.then(data=>{
		getCommonData()
		.then(result=>{
			const { categoriesData,topArticles } = result;
			res.render('main/index',{
				userInfo:req.userInfo,
				categoriesData,
				topArticles,
				//返回分页数据
				articles:data.docs,
				page:data.page,
				list:data.list,
				pages:data.pages,
			})
		})
		.catch(err=>{
			console.log(err);
		})
	})
	.catch(err=>{
		console.log(err)
	})
})

//处理首页分页ajax请求
router.get('/articles',(req,res)=>{
	const id = req.query.id;
	let query = {}
	if(id){
		query.category = id;
	}
	ArticleModel.getPaginationData(req,query)
	.then(data=>{
		res.json({
			code:0,
			message:'获取分页文章成功',
			data:data
		})
	})
	.catch(err=>{
		res.json({
			code:10,
			message:'获取分页文章失败'
		})
	})
})



//显示列表页
router.get('/list/:id',(req,res)=>{
	const id = req.params.id;
	let query = {}
	if(id){
		query.category = id;
	}
	ArticleModel.getPaginationData(req,query)
	.then(data=>{
		getCommonData()
		.then(result=>{
			const { categoriesData,topArticles } = result;
			res.render('main/list',{
				userInfo:req.userInfo,
				categoriesData,
				topArticles,
				//返回分页数据
				articles:data.docs,
				page:data.page,
				list:data.list,
				pages:data.pages,
				//回传当前分类ID
				currentCategoryId:id
			})
		})
		.catch(err=>{
			console.log(err);
		})
	})
	.catch(err=>{
		console.log(err)
	})
})
//显示详情页
router.get('/detail',(req,res)=>{
	res.render('main/detail',{
		userInfo:req.userInfo
	})
})



module.exports = router