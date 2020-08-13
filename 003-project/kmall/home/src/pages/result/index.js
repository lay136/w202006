/*
* @Author: Chen
* @Date:   2020-08-08 15:42:54
* @Last Modified by:   Chen
* @Last Modified time: 2020-08-11 15:59:36
*/
require('pages/common/logo')
require('pages/common/footer')
require('./index.css');
var _util = require('util');


$(function(){
	// $('.register').show()
	//获取地址栏参数
	var type = _util.getParamsFromUrl('type') || 'default';
	$('.'+type).show();
})

