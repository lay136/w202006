/*
* @Author: Chen
* @Date:   2020-05-25 17:27:55
* @Last Modified by:   Chen
* @Last Modified time: 2020-06-15 17:17:53
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
		$elem.totalNum = $elem.find('.carousel-img').length;
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
			$elem.off('coursel-show',$elem.fnLoad);
		})
	}


	var $coursel = $('.focus .carousel-wrap');
	carouselLazyLoad($coursel)


	$coursel.coursel({})

/*焦点区域轮播图逻辑--------------------结束*/

/*今日热销区域逻辑--------------------开始*/
	var $todaysCoursel = $('.todays .carousel-wrap');
	carouselLazyLoad($todaysCoursel)

	$todaysCoursel.coursel({})
/*今日热销区域逻辑--------------------结束*/

/*楼层区域逻辑--------------------开始*/
	//楼层图片懒加载
	function floorImageLazyLoad($elem){
		$elem.item = {};//{0:loaded,1:loaded}
		$elem.totalLoadedNum = 0;
		$elem.totalNum = $elem.find('.floor-img').length;
		$elem.fnLoad = null;
		//1.开始加载
		$elem.on('tab-show',$elem.fnLoad = function(ev,index,elem){
			if(!$elem.item[index]){
				$elem.trigger('tab-load',[index,elem]);
			}
		})
		//2.执行加载
		$elem.on('tab-load',function(ev,index,elem){
			var $this = $(elem);
			var $imgs = $this.find('.floor-img');
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
					$elem.trigger('tab-loaded')
				}
			})
			
		})
		//3.加载完毕
		$elem.on('tab-loaded',function(){
			$elem.off('tab-show',$elem.fnLoad);
		})
	}
	//判断楼层是否进入到可视区 
	function isVisible($elem){
		return ($win.height()+$win.scrollTop()>$elem.offset().top) && ($elem.height()+$elem.offset().top > $win.scrollTop());
	}

	var $floor = $('.floor');
	var $win = $(window);
	var $doc = $(document);
	//遍历每一个楼层实现图片懒加载
	/*
	$floor.each(function(){
		floorImageLazyLoad($(this));
	})
	*/
	$doc.on('floor-show',function(ev,index,elem){
		console.log(index,elem);
	})
	//遍历每一个楼层判断是否在可视区
	function timeShow(){
		$floor.each(function(index,elem){
			if(isVisible($(elem))){
				$doc.trigger('floor-show',[index,elem]);
			}
		})
	}
	
	$win.on('load resize scroll',function(){
		clearTimeout($doc.floorTimer);
		$doc.floorTimer = setTimeout(timeShow,300)
	})

	$floor.tab({})

/*楼层区域逻辑--------------------结束*/



})(jQuery);