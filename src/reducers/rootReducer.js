import {  combineReducers } from 'redux'

import signsReducer from './signsReducer'


const rootReducer = combineReducers({
   sign: signsReducer
})

export default rootReducer