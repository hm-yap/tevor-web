// Action creator for job listing screen
import { JOB_LIST_REFRESH } from '../actions'
import {
  fetchActiveJobs
} from '../api/job'

/**
 * Method to refresh job listing, such as after API fetch
 * @param {*} jobs new list of jobs to be displayed
 */
const refreshJobList = (jobs = []) => (
  (dispatch) => {
    if (Array.isArray(jobs) === true && jobs.length >= 0) {
      dispatch({ type: JOB_LIST_REFRESH, jobs })
    }
  }
)

export const getActiveJobs = () => (
  (dispatch) => {
    fetchActiveJobs()
      .then(response => {
        if (response.status === 200) {
          response.json().then(res => {
            const { result } = res
            dispatch(refreshJobList(result))
          })
        }
      })
  }
)
