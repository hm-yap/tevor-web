import { combineReducers } from 'redux'
import job from './job'
import stockReducer from './stock'

const rootReducer = combineReducers({
  job,
  stockReducer
})

export default rootReducer
