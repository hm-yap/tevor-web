import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
//import ReportProblemIcon from '@material-ui/icons/ReportProblem'

import JobCards from './JobCards';

const styles = theme => ({
  root: {
    overflow: 'hidden'
  }
})

const Job = (props) => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <JobCards />
    </div>
  )
}

Job.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Job)
