/*
* @Author: Chen
* @Date:   2020-07-13 09:41:35
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-13 15:35:06
*/
const express = require('express')
const app = express()
const port = 3000;

//处理静态资源
app.use(express.static('public'))


app.use('/',(req,res,next)=>{
	console.log('to do something taskA .....');
	next()
})
app.use('/',(req,res,next)=>{
	console.log('to do something taskB .....');
	next();
})


app.get('/', (req, res) => {
	// console.log('to do something');
	res.send('response get data  !!!')
});
app.post('/', (req, res) => {
	// console.log('to do something');
	res.send('response post data  !!!')
});
app.put('/', (req, res) => {
	// console.log('to do something');
	res.send('response put data  !!!')
});
app.delete('/', (req, res) => {
	// console.log('to do something');
	res.send('response delete data  !!!')
});


app.listen(port, () => console.log('server is running in this http://127.0.0.1:3000'));