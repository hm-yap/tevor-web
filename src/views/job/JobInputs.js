// Container for Job input fields
import React from 'react'
import PropTypes from 'prop-types'
// Material core
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

const JobCards = props => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <TextField
          disabled
          fullWidth
          value='123'
          label='Test' />
      </Grid>
    </Grid>
  )
}

export default JobCards
