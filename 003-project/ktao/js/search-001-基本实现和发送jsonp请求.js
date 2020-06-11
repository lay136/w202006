/*
* @Author: Chen
* @Date:   2020-05-28 15:51:57
* @Last Modified by:   Chen
* @Last Modified time: 2020-06-09 17:39:56
*/
;(function($){
	function Search($elem,options){
		//1.罗列属性
		this.$elem = $elem;
		this.options = options;
		this.$searchForm = this.$elem.find('.search-form');
		this.$searchInput = this.$elem.find('.search-input');
		this.$searchBtn = this.$elem.find('.search-btn');

		//2.初始化
		this.init()

		//判断是否显示下拉层
		if(this.options.autocomplete){
			this.autocomplete()
		}
	} 
	Search.prototype = {
		constructor:Search,
		init:function(){
			//监听提交数据事件
			this.$searchBtn.on('click',$.proxy(this.submit,this));
		},
		submit:function(){
			//如果输入框的值是空则不提交数据
			if(!this.getInputVal()){
				return false;
			}
			//数据合法可以提交数据
			this.$searchForm.trigger('submit');
			
		},
		getInputVal:function(){
			return $.trim(this.$searchInput.val());
		},
		autocomplete:function(){
			//监听输入框输入事件
			this.$searchInput.on('input',$.proxy(this.getData,this));
		},
		getData:function(){
			//发送JSONP请求
			//如果输入框值是空则不发送请求
			if(this.getInputVal() == ''){
				return ;
			}

			//发送请求获取数据
			$.ajax({
				url:this.options.url+this.getInputVal(),
				dataType:'jsonp',
				jsonp:'callback'
			})
			.done(function(data){
				console.log(data);
				
			})
			.fail(function(err){
				console.log(err);
			})
		}
	}

	//如果不传递参数则使用默认配置信息
	Search.DEFAULT = {
		autocomplete:true,
		url:'https://suggest.taobao.com/sug?q='
	}

	$.fn.extend({
		search:function(options){
			//1.实现隐式迭代和链式调用
			return this.each(function(){
				var $elem = $(this);
				//2.单例模式
				var search = $elem.data('search');
				if(!search){
					//利用面向对象完成下拉菜单功能
					options = $.extend({},Search.DEFAULT,options);
					search = new Search($elem,options);
					$elem.data('search',search);
				}
				//判断当传入的参数是方法时,则调用该方法
				if(typeof search[options] == 'function'){
					search[options]();
				}
			})
		}
	})
})(jQuery);