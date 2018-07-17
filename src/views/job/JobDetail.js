import React from 'react'
import PropTypes from 'prop-types'

const JobDetail = (props) => {
  const { match } = props

  return (
    <div>
      Browse job {match.params.jobid}
    </div>
  )
}

export default JobDetail
