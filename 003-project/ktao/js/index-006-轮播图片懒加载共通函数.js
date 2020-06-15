/*
* @Author: Chen
* @Date:   2020-05-25 17:27:55
* @Last Modified by:   Chen
* @Last Modified time: 2020-06-15 11:25:04
*/
;(function($){
	//共通函数
	//只加载一次html结构函数
	function loadHtmlOnce($elem,callBack){
		var url = $elem.data('load');
		//如果没有数据地址则不发送请求
		if(!url) return; 
		
		//获取数据
		if(!$elem.data('isLoaded')){
			$.getJSON(url,function(data){
				typeof callBack == 'function' && callBack($elem,data);
			})
		}
	}
	//加载图片
	function loadImg(imgUrl,success,error){
		var img = new Image();
		img.onload = function(){
			typeof success == 'function' && success(imgUrl)
		}
		img.onerror = function(){
			typeof error == 'function' && error();
		}
		//模拟网络延迟
		setTimeout(function(){
			img.src = imgUrl;
		},500)
		
	}



/*顶部导航逻辑--------------------开始*/
	var $dropdown = $('.top .dropdown');
	$dropdown.dropdown({
		js:true,
		mode:'slideDownUp'
	});
	//监听显示隐藏事件
	$dropdown.on('dropdown-show dropdown-shown dropdown-hide dropdown-hidden',function(ev){
		if(ev.type == 'dropdown-show'){//将要显示下拉层,加载数据
			loadHtmlOnce($(this),buildTopLayer);
		}
	});
	//生成顶部下拉菜单html
	function buildTopLayer($elem,data){
		var html = ''
		//动态加载数据
		for(var i = 0;i<data.length;i++){
			html += '<li><a href="'+data[i].url+'">'+data[i].name+'</a></li>'
		}
		//模拟网络延迟家在数据
		setTimeout(function(){
			$elem.find('.dropdown-layer').html(html);
			//数据已经加载
			$elem.data('isLoaded',true);
		},300)
	}
	//dropdown插件测试
	/*
	$('#btn').on('click',function(ev){
		ev.stopPropagation();
		$dropdown.dropdown('show');
	})
	*/
	

/*顶部导航逻辑--------------------结束*/

/*搜索区域逻辑--------------------开始*/
	var $search = $('.header .search');
	$search.search({
		js:true,
		mode:'slideDownUp'
	});
	$search.on('getSearchData',function(ev,data){
		var $elem = $(this);
		//1.生成html结构
		var html = getSearchLayer(data,10);
		// console.log(html)
		//2.将html内容插入到下拉层
		$elem.search('appendHtml',html);
		
		//3.显示下拉层
		if(html == ''){
			$elem.search('hideLayer');
		}else{
			$elem.search('showLayer');
		}
	});
	$search.on('getNoSearchData',function(){
		$elem.search('appendHtml','');
		$elem.search('hideLayer');
	})
	//生成下拉层就够数据函数并且可以控制数据长度
	function getSearchLayer(data,max){
		var html = '';
		for(var i = 0;i<data.result.length;i++){
			if(i >= max) break;
			html += '<li class="search-item">'+data.result[i][0]+'</li>'
		}
		return html;
	}


/*搜索区域逻辑--------------------结束*/

/*焦点区域分类列表逻辑--------------------开始*/
	var $categoryDropdown = $('.focus .dropdown');
	$categoryDropdown.dropdown({
		js:true,
		mode:'slideLeftRight',
		eventName:''
	});
	//加载分类列表数据
	$categoryDropdown.on('dropdown-show dropdown-shown dropdown-hide dropdown-hidden',function(ev){
		if(ev.type == 'dropdown-show'){//加载数据,显示下拉层
			loadHtmlOnce($(this),buildCategoryLayer);
		}
	});
	//生成分类列表下拉菜单html
	function buildCategoryLayer($elem,data){
		var html = ''
		//动态加载数据
		for(var i = 0;i<data.length;i++){
			html += '<dl class="category-details">'
			html +=	'	<dt class="category-details-title fl">'
			html +=	'		<a href="#" class="category-details-title-link">'+data[i].title+'</a>'
			html +=	'	</dt>'
			html +=	'	<dd class="category-details-item fl">'
			for(var j = 0;j<data[i].items.length;j++){
				html +=	'<a href="#" class="link">'+data[i].items[j]+'</a>'
			}
			html +=	'	</dd>'
			html +=	'</dl>'
		}
		//模拟网络延迟家在数据
		setTimeout(function(){
			$elem.find('.dropdown-layer').html(html);
			//数据已经加载
			$elem.data('isLoaded',true);
		},300)
	}

/*焦点区域分类列表逻辑--------------------结束*/

/*焦点区域轮播图逻辑--------------------开始*/
	function carouselLazyLoad($elem){
		$elem.item = {};//{0:loaded,1:loaded}
		$elem.totalLoadedNum = 0;
		$elem.totalNum = $coursel.find('.carousel-img').length;
		$elem.fnLoad = null;
		//1.开始加载
		$elem.on('coursel-show',$elem.fnLoad = function(ev,index,elem){
			if(!$elem.item[index]){
				$elem.trigger('coursel-load',[index,elem]);
			}
		})
		//2.执行加载
		$elem.on('coursel-load',function(ev,index,elem){
			var $this = $(elem);
			var $imgs = $this.find('.carousel-img');
			$imgs.each(function(){
				var $img = $(this);
				var imgUrl = $img.data('src');
				loadImg(imgUrl,function(imgUrl){
					$img.attr('src',imgUrl);
				},function(){
					$img.attr('src','image/focus-carousel/placeholder.png');
				});
				//图片加载完毕
				$elem.item[index] = 'loaded';
				$elem.totalLoadedNum++;
				//判断是否所有图片加载完毕,如果加载完毕则移出监听的事件
				if($elem.totalLoadedNum == $elem.totalNum){
					$elem.trigger('coursel-loaded')
				}
			})
			
		})
		//3.加载完毕
		$elem.on('coursel-loaded',function(){
			$coursel.off('coursel-show',$elem.fnLoad);
		})
	}



	var $coursel = $('.focus .carousel-wrap');
	/*
	$coursel.item = {};//{0:loaded,1:loaded}
	$coursel.totalLoadedNum = 0;
	$coursel.totalNum = $coursel.find('.carousel-img').length;
	$coursel.fnLoad = null;
	//1.开始加载
	$coursel.on('coursel-show',$coursel.fnLoad = function(ev,index,elem){
		if(!$coursel.item[index]){
			$coursel.trigger('coursel-load',[index,elem]);
		}
	})
	//2.执行加载
	$coursel.on('coursel-load',function(ev,index,elem){
		var $elem = $(elem);
		var $img = $elem.find('.carousel-img');
		var imgUrl = $img.data('src');
		loadImg(imgUrl,function(imgUrl){
			$img.attr('src',imgUrl);
		},function(){
			$img.attr('src','image/focus-carousel/placeholder.png');
		});

		//图片加载完毕
		$coursel.item[index] = 'loaded';
		$coursel.totalLoadedNum++;
		//判断是否所有图片加载完毕,如果加载完毕则移出监听的事件
		if($coursel.totalLoadedNum == $coursel.totalNum){
			$coursel.trigger('coursel-loaded')
		}
	})
	//3.加载完毕
	$coursel.on('coursel-loaded',function(){
		$coursel.off('coursel-show',$coursel.fnLoad);
	})
	*/
	carouselLazyLoad($coursel)


	$coursel.coursel({})

/*焦点区域轮播图逻辑--------------------结束*/

/*今日热销区域逻辑--------------------开始*/
	var $todaysCoursel = $('.todays .carousel-wrap');
	/*
	$todaysCoursel.item = {};//{0:loaded,1:loaded}
	$todaysCoursel.totalLoadedNum = 0;
	$todaysCoursel.totalNum = $coursel.find('.carousel-img').length;
	$todaysCoursel.fnLoad = null;
	//1.开始加载
	$todaysCoursel.on('coursel-show',$todaysCoursel.fnLoad = function(ev,index,elem){
		if(!$todaysCoursel.item[index]){
			$todaysCoursel.trigger('coursel-load',[index,elem]);
		}
	})
	//2.执行加载
	$todaysCoursel.on('coursel-load',function(ev,index,elem){
		var $elem = $(elem);
		var $imgs = $elem.find('.carousel-img');
		$imgs.each(function(){
			var $img = $(this);
			var imgUrl = $img.data('src');
			loadImg(imgUrl,function(imgUrl){
				$img.attr('src',imgUrl);
			},function(){
				$img.attr('src','image/focus-carousel/placeholder.png');
			});

			//图片加载完毕
			$todaysCoursel.item[index] = 'loaded';
			$todaysCoursel.totalLoadedNum++;
			//判断是否所有图片加载完毕,如果加载完毕则移出监听的事件
			if($todaysCoursel.totalLoadedNum == $todaysCoursel.totalNum){
				$todaysCoursel.trigger('coursel-loaded')
			}
		})
		
	})
	//3.加载完毕
	$todaysCoursel.on('coursel-loaded',function(){
		$coursel.off('coursel-show',$todaysCoursel.fnLoad);
	})
	*/
	carouselLazyLoad($todaysCoursel)

	$todaysCoursel.coursel({})
/*今日热销区域逻辑--------------------结束*/



})(jQuery);