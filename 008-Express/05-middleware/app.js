/*
* @Author: Chen
* @Date:   2020-07-13 09:41:35
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-13 15:45:23
*/
const express = require('express')
const app = express()
const port = 3000;
const querystring = require('querystring');
const bodyParser = require('body-parser')

//处理静态资源
app.use(express.static('public'));

// 引入处理post和put请求的中间件
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.post('/',(req,res)=>{
	/*
	let body = '';
	req.on('data',(chunk)=>{
		body += chunk;
	})
	req.on('end',()=>{
		console.log(querystring.parse(body));
	})
	*/
	console.log(req.body)

	res.send('response data post');
})


app.listen(port, () => console.log('server is running in this http://127.0.0.1:3000'));