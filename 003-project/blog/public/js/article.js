/*
* @Author: TomChen
* @Date:   2019-03-13 18:10:45
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-18 16:14:14
*/
;(function($){
	ClassicEditor
	.create(document.querySelector('#content'),{
		language:'zh-cn',
		ckfinder:{
			uploadUrl:'/article/uploadImage'
		}
	})
	.then(editor=>{
		window.editor = editor
	})
	.catch(err=>{
		console.log(err)
	})
})(jQuery);