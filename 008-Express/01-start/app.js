/*
* @Author: Chen
* @Date:   2020-07-11 17:27:41
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-11 17:28:24
*/
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))