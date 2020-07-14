/*
* @Author: Chen
* @Date:   2020-07-13 11:43:27
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-13 11:49:14
*/
const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
	res.send('response get data blog !!!')
})
router.post('/',(req,res)=>{
	res.send('response post data blog !!!')
})
router.put('/',(req,res)=>{
	res.send('response put data blog !!!')
})
router.delete('/',(req,res)=>{
	res.send('response delete data blog !!!')
})


module.exports = router

