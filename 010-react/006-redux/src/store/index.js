/*
* @Author: Chen
* @Date:   2020-07-27 16:38:20
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-27 17:00:21
*/
import { createStore } from 'redux'
import reducer from './reducer.js'

const store = createStore(reducer)

export default store