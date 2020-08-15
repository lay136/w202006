/*
* @Author: Chen
* @Date:   2020-08-03 15:20:31
* @Last Modified by:   Chen
* @Last Modified time: 2020-08-15 17:04:59
*/
const API_CONFIG = {
	//登录注册
	login: 						['/sessions/users','post'],
	getUsername: 				['/sessions/username','get'],
	logout: 					['/sessions/users','delete'],
	register: 					['/users','post'],
	//个人中心
	checkUsername: 				['/users/checkUsername','get'],
	getUserInfo: 				['/sessions/users','get'],
	updatePassword: 			['/users','put'],
	//首页加载数据
	getHomeCategories: 			['/categories/homeCategories','get'],
	getHomeAds: 				['/ads/positionAds','get'],
	getHomeFloors: 				['/floors','get'],
	//列表页
	getProductList: 			['/products/list','get'],
	//详情页
	getProductDetail: 			['/products/detail','get'],
	//购物车
	addCarts: 					['/carts','post'],
	getCartsCount: 				['/carts/count','get'],
	getCarts: 					['/carts','get'],
	updateCartsChoice: 			['/carts/choices','put'],
	deleteCarts: 				['/carts','delete'],
	updateCartsCounts: 			['/carts/counts','put'],
}
module.exports = {
	API_CONFIG
}