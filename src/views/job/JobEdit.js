// Job edit container
import React from 'react'
import PropTypes from 'prop-types'

const JobEdit = (props) => {
  const { match } = props

  return (
    <div>
      Editing job {match.params.jobid}
    </div>
  )
}

export default JobEdit
