/*
* @Author: Chen
* @Date:   2020-07-27 16:38:20
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-28 16:36:24
*/
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer.js'

const store = createStore(reducer,applyMiddleware(thunk))

export default store