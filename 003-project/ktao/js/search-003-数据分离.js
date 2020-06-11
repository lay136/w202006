/*
* @Author: Chen
* @Date:   2020-05-28 15:51:57
* @Last Modified by:   Chen
* @Last Modified time: 2020-06-11 15:52:58
*/
;(function($){
	function Search($elem,options){
		//1.罗列属性
		this.$elem = $elem;
		this.options = options;
		this.$searchForm = this.$elem.find('.search-form');
		this.$searchInput = this.$elem.find('.search-input');
		this.$searchBtn = this.$elem.find('.search-btn');
		this.$searchLayer = this.$elem.find('.search-layer');

		this.isLoadedHTML = false;

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
			//1.初始化显示隐藏插件
			this.$searchLayer.showHide(this.options)
			//2.监听输入框输入事件
			this.$searchInput.on('input',$.proxy(this.getData,this));
			//3.监听点击页面其他部分隐藏搜索下拉层事件
			$(document).on('click',function(){
				//隐藏搜索下拉层
				this.hideLayer();
			}.bind(this));
			//4.点击搜索框阻止事件冒泡
			this.$searchInput.on('click',function(ev){
				ev.stopPropagation();
			});
			//5.监听获取焦点显示下拉层事件
			this.$searchInput.on('focus',function(){
				if(this.getInputVal()){
					this.showLayer()
				}
			}.bind(this));
		},
		getData:function(){
			//发送JSONP请求
			//如果输入框值是空则不发送请求
			if(this.getInputVal() == ''){
				this.hideLayer();
				return ;
			}

			//发送请求获取数据
			$.ajax({
				url:this.options.url+this.getInputVal(),
				dataType:'jsonp',
				jsonp:'callback'
			})
			.done(function(data){
				/*
				console.log(data);
				//1.生成html结构
				var html = ''
				for(var i = 0;i<data.result.length;i++){
					html += '<li>'+data.result[i][0]+'</li>'
				}
				// console.log(html)
				//2.将html内容插入到下拉层
				this.appendHtml(html);
				
				//3.显示下拉层
				if(html == ''){
					this.hideLayer();
				}else{
					this.showLayer()
				}
				*/

				this.$elem.trigger('getSearchData',[data])
			}.bind(this))
			.fail(function(err){
				// console.log(err);
				this.$elem.trigger('getNoSearchData')
			})
		},
		appendHtml:function(html){
			//插入html内容
			this.$searchLayer.html(html);
			this.isLoadedHTML = !!html;
		},
		showLayer:function(){
			if (!this.isLoadedHTML) return ;
			this.$searchLayer.showHide('show');
		},
		hideLayer:function(){
			this.$searchLayer.showHide('hide');
		}
	}

	//如果不传递参数则使用默认配置信息
	Search.DEFAULT = {
		autocomplete:true,//是否显示下拉层
		url:'https://suggest.taobao.com/sug?q='
	}

	$.fn.extend({
		search:function(options,val){
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
					search[options](val);
				}
			})
		}
	})
})(jQuery);