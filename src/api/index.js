// API related configuration details
// for local test, change base URI here:
// const REST_API_BASE_URI = 'https://localhost:3000'
export const REST_API_BASE_URI = 'http://localhost:8443'

// Common API fetch options
export const BASE_API_OPTIONS = {
  credentials: 'include',
  headers:  new Headers({
    'x-tevor-cn': 'system.cert'
  })
}
