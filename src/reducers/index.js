import { combineReducers } from 'redux'
import jobReducer from './job'
import stockReducer from './stock'

const rootReducer = combineReducers({
  jobReducer,
  stockReducer
})

export default rootReducer
