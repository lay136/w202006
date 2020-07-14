/*
* @Author: Chen
* @Date:   2020-07-13 11:43:27
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-13 11:48:01
*/
const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
	res.send('response get data user !!!')
})
router.post('/',(req,res)=>{
	res.send('response post data user !!!')
})
router.put('/',(req,res)=>{
	res.send('response put data user !!!')
})
router.delete('/',(req,res)=>{
	res.send('response delete data user !!!')
})


module.exports = router

