/*
* @Author: Chen
* @Date:   2020-07-24 15:14:16
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-30 11:14:59
*/
import React,{ Component,Fragment } from 'react'
import './App.css'
import TodoList from './pages/todolist/'
import Home from './pages/home/'
import { connect } from 'react-redux'

//容器组件
class App extends Component{
	render(){
 		return (
 			<div>
				<TodoList />	
				<Home />
			</div>
		)
	}
}

export default connect(null,null)(App)