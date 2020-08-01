/*
* @Author: Chen
* @Date:   2020-08-01 17:24:15
* @Last Modified by:   Chen
* @Last Modified time: 2020-08-01 17:36:48
*/
import React,{ Component,Fragment } from 'react'
import './index.css'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'

import AdminHeader from 'common/header'


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout

//容器组件
class AdminSider extends Component{
	render(){
 		return (
			<div className="AdminSider">
				<Sider width={200} style={{ background: '#fff' }}>
			        <Menu
			          mode="inline"
			          defaultSelectedKeys={['1']}
			          defaultOpenKeys={['sub1']}
			          style={{ height: '100%', borderRight: 0 }}
			        >
							<SubMenu
								key="sub1"
								title={
								  <span>
								    <Icon type="user" />
								    subnav 1
								  </span>
								}
							>
					            <Menu.Item key="1">option1</Menu.Item>
					            <Menu.Item key="2">option2</Menu.Item>
					            <Menu.Item key="3">option3</Menu.Item>
					            <Menu.Item key="4">option4</Menu.Item>
				    		</SubMenu>
				    </Menu>
				</Sider>
			</div>
		)
	}
}

export default AdminSider