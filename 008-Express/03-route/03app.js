/*
* @Author: Chen
* @Date:   2020-07-13 09:41:35
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-13 10:52:06
*/
const express = require('express')
const app = express()
const port = 3000;
const url = require('url');

//处理静态资源
app.use(express.static('public'))

// app.use('/static', express.static('public'));


// /?name=Tom&age=18
app.get('/',(req,res)=>{
	/*
	const query = url.parse(req.url,true);
	console.log(query.query);
	*/
	console.log(req.query);
	res.send('response get data !!!')
});

// /user/123/article/456
// /user/:userId/article/:articleId
app.get('/user/:userId/article/:articleId',(req,res)=>{

	console.log(req.params);
	res.send('response get data !!!')
})


app.listen(port, () => console.log('server is running in this http://127.0.0.1:3000'));