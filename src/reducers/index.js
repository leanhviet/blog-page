// Libs
import { combineReducers } from 'redux'

// Reducers
import mainData from '../pages/Home/redux/blogs'
import blogData from '../pages/Detail/redux/blog'

export default combineReducers({
  mainData,
  blogData,
})
