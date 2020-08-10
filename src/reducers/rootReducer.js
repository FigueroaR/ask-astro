import {  combineReducers } from 'redux'

import signsReducer from './signsReducer'


const rootReducer = combineReducers({
   sign: signsReducer
//   posts:  postsReducer,
//   comments: commentsReducer
})

export default rootReducer