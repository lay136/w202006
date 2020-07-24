/*
* @Author: Chen
* @Date:   2020-07-24 15:14:16
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-24 16:58:26
*/
import React,{ Component,Fragment } from 'react'
import './App.css'

class App extends Component{
	handleClick(){
		console.log(this)
		console.log('click btn ...')
	}
	render(){
		return (
			<div className="App">
				<input className="input" />
				<button 
					className="btn"
					onClick={this.handleClick.bind(this)}
				>
					提交
				</button>
				<ul className="list">
					<li>吃饭</li>
					<li>睡觉</li>
					<li>学习</li>
				</ul>
			</div>
		)
	}
}


export default App 