/*
* @Author: Chen
* @Date:   2020-07-13 09:41:35
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-13 11:22:50
*/
const express = require('express')
const app = express()
const port = 3000;
const url = require('url');

//处理静态资源
app.use(express.static('public'))

// app.use('/static', express.static('public'));


app.get('/',(req,res)=>{
	// res.end('response get data');
	// res.end('<p>我是段落</p>')
	// res.end({name:'tom'});


	// res.json('response get data');
	// res.json('<p>我是段落</p>')
	// res.json({name:'Tom'});


	// res.send('response get data');
	// res.send('<p>我是段落</p>');
	res.send({name:'Tom'});
});



app.listen(port, () => console.log('server is running in this http://127.0.0.1:3000'));