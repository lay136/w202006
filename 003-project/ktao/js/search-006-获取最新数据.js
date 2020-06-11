/*
* @Author: Chen
* @Date:   2020-05-28 15:51:57
* @Last Modified by:   Chen
* @Last Modified time: 2020-06-11 17:22:47
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
		this.timer = null;
		this.jqXHR = null;

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
			this.$searchInput.on('input',function(){
				if(this.options.delayGetData){
					clearTimeout(this.timer);
					this.timer = setTimeout(function(){
						this.getData()
					}.bind(this),this.options.delayGetData)
				}else{
					this.getData()
				}
			}.bind(this));
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
			//6.(事件代理形式监听事件)点击没一项提交数据
			var _this = this;
			this.$elem.on('click','.search-item',function(){
				//1.获取当前点击项的值
				var val = $(this).html();
				//2.将数据赋给输入框
				_this.setInputVal(val);
				//3.提交数据
				_this.submit();
			})
		},
		getData:function(){
			console.log('will get data ...');
			//发送JSONP请求
			//如果输入框值是空则不发送请求
			if(this.getInputVal() == ''){
				this.hideLayer();
				return ;
			}
			//终止之前的请求,获取最新数据
			if(this.jqXHR){
				this.jqXHR.abort();
			}

			//发送请求获取数据
			this.jqXHR = $.ajax({
				url:this.options.url+this.getInputVal(),
				dataType:'jsonp',
				jsonp:'callback'
			})
			.done(function(data){
				this.$elem.trigger('getSearchData',[data])
			}.bind(this))
			.fail(function(err){
				// console.log(err);
				this.$elem.trigger('getNoSearchData')
			})
			.always(function(){
				this.jqXHR = null;
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
		},
		setInputVal:function(val){
			this.$searchInput.val(val);
		}
	}

	//如果不传递参数则使用默认配置信息
	Search.DEFAULT = {
		autocomplete:true,//是否显示下拉层
		url:'https://suggest.taobao.com/sug?q=',
		delayGetData:200
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