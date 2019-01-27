// Job related API calls
import { REST_API_BASE_URI, BASE_API_OPTIONS } from '../api'
// Job API path
const JOB_API = `${REST_API_BASE_URI}/job`


// Fetch all active jobs
export const fetchActiveJobs = () => {
  const options = Object.assign(BASE_API_OPTIONS, { method: 'GET' })

  return fetch(JOB_API, options)
    .then(response => (response))
}
