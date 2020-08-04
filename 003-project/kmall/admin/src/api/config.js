/*
* @Author: Chen
* @Date:   2020-08-03 15:20:31
* @Last Modified by:   Chen
* @Last Modified time: 2020-08-04 17:34:48
*/

export const SERVER = 'http://127.0.0.1:3000';
export const API_CONFIG = {
	login: 						['/sessions/users','post'],
	logout: 					['/sessions/users','delete'],
	getCounts: 					['/counts','get'],
	getUserList: 				['/users/list','get'],
	addCategories: 				['/categories','post'],
	getLevelCategories: 		['/categories/levelCategories','get'],
	getCategoriesList: 			['/categories/list','get'],
}