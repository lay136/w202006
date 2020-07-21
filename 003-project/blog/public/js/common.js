/*
* @Author: Chen
* @Date:   2020-07-14 10:54:16
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-21 15:21:35
*/
;(function($){
	//1.登录注册面板切换
	$userInfo = $('#user-info');
	$userRegister = $('#register');
	$userLogin = $('#login');
	//1.1 登录 => 注册
	$('#go-register').on('click',function(){
		//隐藏登录面板
		$userLogin.hide()
		//显示注册面板
		$userRegister.show();
	})
	//1.2 注册 => 登录
	$('#go-login').on('click',function(){
		//隐藏注册面板
		$userRegister.hide()
		//显示登录面板
		$userLogin.show();
	})

	//2.用户注册逻辑
	//用户名是以字母开头的3-10位包含数字字母和下划线
	var usernameReg = /^[a-z][a-z0-9_]{2,9}$/i;
	//密码是3-6位任意字符
	var passwordReg = /^\w{3,6}$/i;
	$('#sub-register').on('click',function(){
		//2.1 获取注册信息
		var username = $userRegister.find("[name='username']").val();
		var password = $userRegister.find("[name='password']").val();
		var repassword = $userRegister.find("[name='repassword']").val();
		var $err = $userRegister.find('.err');
		var errMsg = ''
		//2.2 验证数据合法性
		//验证用户名
		if(!usernameReg.test(username)){
			errMsg = '用户名是以字母开头的3-10位包含数字字母和下划线'
		}
		//验证密码
		else if(!passwordReg.test(password)){
			errMsg = '密码是3-6位任意字符'
		}
		//验证重复密码
		else if(password != repassword){
			errMsg = '两次密码输入不一致'
		}
		//验证通过
		else{
			errMsg = ''
		}
		//2.3 验证通过发送ajax请求
		if(errMsg){
			$err.html(errMsg);
		}else{
			$err.html('');
			//发送ajax
			$.ajax({
				url:'/user/register',
				type:'POST',
				dataType:'json',
				data:{
					username:username,
					password:password
				}
			})
			.done(function(data){
				// console.log(data)
				if(data.code == 0){//注册成功
					$err.html('');
					$('#go-login').trigger('click');
				}else{
					$err.html(data.message);
				}
			})
			.fail(function(err){
				$err.html('请求失败,请稍后再试!!');
			})
		}
	})
	//3.用户登录逻辑
	$('#sub-login').on('click',function(){
		//3.1 获取注册信息
		var username = $userLogin.find("[name='username']").val();
		var password = $userLogin.find("[name='password']").val();
		var $err = $userLogin.find('.err');
		var errMsg = ''
		//3.2 验证数据合法性
		//验证用户名
		if(!usernameReg.test(username)){
			errMsg = '用户名是以字母开头的3-10位包含数字字母和下划线'
		}
		//验证密码
		else if(!passwordReg.test(password)){
			errMsg = '密码是3-6位任意字符'
		}
		//验证通过
		else{
			errMsg = ''
		}
		//3.3 验证通过发送ajax请求
		if(errMsg){
			$err.html(errMsg);
		}else{
			$err.html('');
			//发送ajax
			$.ajax({
				url:'/user/login',
				type:'POST',
				dataType:'json',
				data:{
					username:username,
					password:password
				}
			})
			.done(function(data){
				if(data.code == 0){//登录成功
					/*
					$userInfo.find('span').html(data.user.username)
					$userLogin.hide();
					$userInfo.show();
					*/
					window.location.reload();
				}else{//登录失败
					$err.html(data.message);
				}
			})
			.fail(function(err){
				$err.html('请求失败,请稍后再试!!');
			})
		}
	})
	/*
	//4.用户退出
	$('#logout').on('click',function(){
		$.ajax({
			url:'/user/logout',
			type:'get'
		})
		.done(function(data){
			if(data.code == 0){
				window.location.href = '/';
			}
		})
		.fail(function(err){
			$userInfo.find('.err').html('请求失败,请稍后再试!!');
		})
	})
	*/

	//5.首页分页器逻辑
	var $articlePage = $('#article-page');
	function buildArticleHtml(articles){
		var html = '';
			articles.forEach(function(article){
				var createdTime = moment(article.createdAt).format('YYYY - MM - DD HH:mm:ss')
				html += `<div class="panel panel-default content-item">
			          <div class="panel-heading">
			            <h3 class="panel-title">
			              <a href="/detail/${article._id.toString()}" class="link" target="_blank">${ article.title }</a>
			            </h3>
			          </div>
			          <div class="panel-body">
			            ${ article.intro }
			          </div>
			          <div class="panel-footer">
			            <span class="glyphicon glyphicon-user"></span>
			            <span class="panel-footer-text text-muted">${ article.user.username }</span>
			            <span class="glyphicon glyphicon-th-list"></span>
			            <span class="panel-footer-text text-muted">${ article.category.name }</span>
			            <span class="glyphicon glyphicon-time"></span>
			            <span class="panel-footer-text text-muted">${ createdTime }</span>
			            <span class="glyphicon glyphicon-eye-open"></span>
			            <span class="panel-footer-text text-muted"><em>${ article.click }</em>已阅读</span>
			          </div>
			        </div>`
			})
		 	
		return html;
	}
	function buildPaginationHtml(page,list,pages){
		var html = '';
		html += '<ul class="pagination">';
		if(page == 1){
			html += `<li class="disabled">
						<a href="javascript:;" aria-label="Previous">
							<span aria-hidden="true">&laquo;</span>
						</a>
					</li>`
		}else{
			html += `<li>
				      <a href="javascript:;" aria-label="Previous">
				        <span aria-hidden="true">&laquo;</span>
				      </a>
				    </li>`
		}
		list.forEach(function(i){
			if(i == page){
				html += `<li class="active"><a href="javascript:;">${ i }</a></li>`
			}else{
				html += `<li><a href="javascript:;">${ i }</a></li>`
			}
		})
    	if(page == pages){
    		html += `<li class="disabled">
      					<a href="javascript:;" aria-label="Next">
				        <span aria-hidden="true">&raquo;</span>
				      </a>
				    </li>`
    	}else{
    		html += `<li>
				      <a href="javascript:;" aria-label="Next">
				        <span aria-hidden="true">&raquo;</span>
				      </a>
				    </li>`
    	}
    	html += `</ul>`
		return html;
	}
	//监听事件构建分页数据HTML结构
	$articlePage.on('get-data',function(ev,data){
		//构建首页文章列表结构
		//构建文章列表
		$('#article-wrap').html(buildArticleHtml(data.docs));
		//构建分页器
		if(data.pages > 1){
			$('#article-page').html(buildPaginationHtml(data.page,data.list,data.pages))
		}else{
			$('#article-page').html('')
		}
		
	})
	$articlePage.pagination({
		url:'/articles'
	})

	//6.详情页分页逻辑
	var $commentPage = $('#comment-page');
	function buildCommentHtml(comments){
		var html = '';
		comments.forEach(function(comment){
			var createdTime = moment(comment.createdAt).format('YYYY - MM - DD HH:mm:ss')
			html += `<div class="panel panel-default">
			          	 <div class="panel-heading">
			              <h3 class="panel-title">${comment.user.username} 发布于 ${createdTime}</h3>
			            </div>
			            <div class="panel-body">
			              ${comment.content}
			            </div>
			          </div>`
		})
		return html;
	}
	//监听事件构建分页数据HTML结构
	$commentPage.on('get-data',function(ev,data){
		//构建详情评论数据结构
		$('#comment-wrap').html(buildCommentHtml(data.docs));
		//构建分页器
		if(data.pages > 1){
			$('#comment-page').html(buildPaginationHtml(data.page,data.list,data.pages))
		}else{
			$('#comment-page').html('')
		}
		
	})
	$commentPage.pagination({
		url:'/comment/list'
	})


	
})(jQuery)