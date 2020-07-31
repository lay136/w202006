/*
* @Author: Chen
* @Date:   2020-07-24 15:14:16
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-31 10:34:29
*/
import React,{ Component,Fragment } from 'react'
import './App.css'
import { connect } from 'react-redux'


import { 
	BrowserRouter as Router,
	// HashRouter as Router,
	Route, 
	Link ,
	Switch
} from "react-router-dom"

import TodoList from './pages/todolist/index.js';

class Home extends Component{
	render(){
		return (
			<h2>this is home page </h2>	
		)
	}
}
class User extends Component{
	render(){
		// console.log(this.props.match.params.id);
		return (
			<h2>this is user page,user id is {this.props.match.params.id} </h2>	
		)
	}
}
class Admin extends Component{
	render(){
		return (
			<Switch>
				<Route exact path="/admin" render={()=>(<h2>this is admin home page</h2>)}></Route>
				<Route exact path="/admin/article" render={()=>(<h2>this is admin article page</h2>)}></Route>
				<Route path="/admin/:id" render={(props)=>(<h2>this is admin page, admin id is {props.match.params.id}</h2>)}></Route>
			</Switch>	
		)
	}
}

//容器组件
class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			isAdmin:false
		}
	}
	render(){
		const ProtectedRoute = ({component:Component,...rest})=>{
			// console.log(rest)
			return (
				<Route 
					{...rest}
					render = {(props)=>{
						return this.state.isAdmin ? <Component /> : <h2>plase use admin login</h2>
					}}
				/>
			)
		}
 		return (
 			<Router>
	 			<div className="App">
					<nav>
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/todolist">TodoList</Link></li>
							<li><Link to="/about">About</Link></li>
							<li><Link to="/user/123456">User</Link></li>
							<li><Link to="/admin">Admin</Link></li>
							<li><Link to="/admin/123">Admin/123</Link></li>
							<li><Link to="/admin/article">Admin/article</Link></li>
						</ul>
						{
							//这里是配饰路由的地方(核心)
						}
						<Route exact path="/" component={Home} />
						<Route path="/todolist" component={TodoList} />
						<Route path="/about" render={()=>(<h2>this is about page</h2>)} />
						<Route path="/user/:id" component={User} />
						<ProtectedRoute path="/admin" component={Admin} />
					</nav>	
				</div>
			</Router>
		)
	}
}

export default connect(null,null)(App)