/*
* @Author: Chen
* @Date:   2020-07-18 10:39:20
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-18 10:41:26
*/
;(function($){
	$('.del').on('click',function(){
		if(!window.confirm('请问你确定要删除该条记录吗?')){
			return false
		}
	})
})(jQuery)