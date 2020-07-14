/*
* @Author: Chen
* @Date:   2020-07-13 09:41:35
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-13 11:49:47
*/
const express = require('express')
const app = express()
const port = 3000;

const user = require('./routers/user.js');
const blog = require('./routers/blog.js');

//处理静态资源
app.use(express.static('public'))

// app.use('/static', express.static('public'));
/*
app.get('/user', (req, res) => res.send('response get data user !!!'));
app.post('/user', (req, res) => res.send('response post data user !!!'));
app.put('/user', (req, res) => res.send('response put data user !!!'));
app.delete('/user', (req, res) => res.send('response delete data user !!!'));


app.get('/blog', (req, res) => res.send('response get data blog !!!'));
app.post('/blog', (req, res) => res.send('response post data blog !!!'));
app.put('/blog', (req, res) => res.send('response put data blog !!!'));
app.delete('/blog', (req, res) => res.send('response delete data blog !!!'));
*/
app.use('/user',user);
app.use('/blog',blog);

app.listen(port, () => console.log('server is running in this http://127.0.0.1:3000'));