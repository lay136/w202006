/*
* @Author: Chen
* @Date:   2020-08-03 15:20:31
* @Last Modified by:   Chen
* @Last Modified time: 2020-08-03 17:36:17
*/

export const SERVER = 'http://127.0.0.1:3000';
export const API_CONFIG = {
	login: 				['/sessions/users','post'],
	logout: 			['/sessions/users','delete'],
	getCounts: 			['/counts','get'],
	getUserList: 		['/users/list','get']
}