/*
* @Author: Chen
* @Date:   2020-07-14 09:55:21
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-21 15:30:34
*/
const express = require('express')
const router = express.Router();
const CategoryModel = require('../models/category.js');
const ArticleModel = require('../models/article.js');
const CommentModel = require('../models/comment.js');

//获取首页共通数据
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

//获取详情页数据
async function getDetailData(req){
	const id = req.params.id;
	//获取共通数据
	const getCommomDataPromise = getCommonData();
	//获取文章详情数据
	const getArticleDetailPromise = ArticleModel.findOneAndUpdate({_id:id},{$inc:{click:1}},{new:true})
									.populate({ path: 'user', select: 'username' })
									.populate({ path: 'category', select: 'name' })

	//获取评论分页数据
	const getCommentsDataPromise = CommentModel.getPaginationData(req,{article:id})


	//为了保证详情文章中点击数和点击排行中点击数数据保持一致
	//必须先获取文章更新后的数据再获取点击排行数据
	const articleData = await getArticleDetailPromise;	

	const commonData = await getCommomDataPromise;

	const commentsData = await getCommentsDataPromise;

	const { categoriesData,topArticles } = commonData;
 	return {
		categoriesData,
		topArticles,
		articleData,
		commentsData
	}
}


//显示详情页
router.get('/detail/:id',(req,res)=>{
	getDetailData(req)
	.then(result=>{
		const { categoriesData,topArticles,articleData,commentsData } = result;
		res.render('main/detail',{
			userInfo:req.userInfo,
			categoriesData,
			topArticles,
			articleData,
			//返回分页数据
			comments:commentsData.docs,
			page:commentsData.page,
			list:commentsData.list,
			pages:commentsData.pages,
			//回传分类ID
			currentCategoryId:articleData.category._id
		})
	})
	.catch(err=>{
		console.log(err);
	})
	
})



module.exports = router