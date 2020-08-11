/*
* @Author: Chen
* @Date:   2020-08-10 16:30:19
* @Last Modified by:   Chen
* @Last Modified time: 2020-08-11 09:54:47
*/
module.exports = {
	validate:function(value,type){
		if(type == 'required'){
			return !!value
		}
		else if(type == 'username'){
			return /^[a-z][a-z0-9_]{2,5}$/.test(value)
		}
		else if(type == 'password'){
			return /^\w{3,6}$/.test(value)
		}
	},
	showSuccessMsg:function(msg){
		alert(msg)
	},
	showErrMsg:function(msg){
		alert(msg)
	}
}