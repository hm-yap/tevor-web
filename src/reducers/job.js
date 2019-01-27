import { combineReducers } from 'redux'
import {
  JOB_LIST_REFRESH,
  JOB_DETAIL_REFRESH
} from '../actions'

const initialState = {
  jobs: [],
  job: {}
}

const jobLists = (state = initialState.jobs, action) => {
  switch (action.type) {
    case JOB_LIST_REFRESH:
      return [...action.jobs]

    default:
      return state
  }
}

const jobDetail = (state = initialState.job, action) => {
  switch (action.type) {
    case JOB_DETAIL_REFRESH:
      return Object.assign({}, action.job)

    default:
      return state
  }
}

const job = combineReducers({
  jobLists,
  jobDetail
})

export default job
