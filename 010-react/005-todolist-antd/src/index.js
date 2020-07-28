/*
* @Author: Chen
* @Date:   2020-07-24 15:09:24
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-27 09:41:53
*/
import React from 'react'
import ReactDom from 'react-dom'

import App from './App.js'

ReactDom.render(
	<App />,
	document.getElementById('root')
)
/*
function tick(){
	return (
		<div>
			<h1>北京时间:</h1>
			<p>{ new Date().toLocaleString() }</p>
		</div>
	)
}
function timer(){
	ReactDom.render(
		tick(),
		document.getElementById('root')
	)
}

setInterval(timer,1000)
*/
