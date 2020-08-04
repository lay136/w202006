/*
* @Author: Chen
* @Date:   2020-07-24 15:14:16
* @Last Modified by:   Chen
* @Last Modified time: 2020-08-04 11:09:36
*/
import React,{ Component,Fragment } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { getUsername } from 'util';


import { 
	BrowserRouter as Router,
	// HashRouter as Router,
	Route, 
	Link ,
	Switch,
	Redirect
} from "react-router-dom"

import Home from 'pages/home/index.js';
import Login from 'pages/login/index.js';
import User from 'pages/user/index.js';
import Category from 'pages/category/index.js';
import Err from 'common/err';

import apiObj from 'api/index.js';



//容器组件
class App extends Component{
	render(){
		// console.log(apiObj)
		const HomeRoute = ({ component: Component, ...rest }) => (
      		<Route 
      			{...rest} 
      			render={(props) => {
      				return getUsername() ? <Component /> : <Redirect to="/login" />
      			}}
        	/>
		)
		const LoginRoute = ({ component: Component, ...rest }) => (
      		<Route 
      			{...rest} 
      			render={(props) => {
      				return getUsername() ? <Redirect to="/" /> : <Component />
      			}}
        	/>
		)
 		return (
 			<Router>
	 			<div className="App">
	 				<Switch>
						<HomeRoute exact path="/" component={Home} />
						<HomeRoute path="/user" component={User} />
						<HomeRoute path="/category" component={Category} />
						<LoginRoute path="/login" component={Login} />
						<Route component={Err} />
					</Switch>
				</div>
			</Router>
		)
	}
}

export default connect(null,null)(App)