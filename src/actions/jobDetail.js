// Action creator for job detail screen
import { JOB_DETAIL_REFRESH } from '../actions'

/**
 * Method to refresh job details, such as after any API actions
 * @param {*} job new job details to be reflected on screen
 */
const refreshJob = (job = {}) => {
  (dispatch) => {
    if (job) {
      dispatch({ type: JOB_DETAIL_REFRESH, job })
    }
  }
}
