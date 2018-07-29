// Container for Job input fields
import React from 'react'
import PropTypes from 'prop-types'
// Material core
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const JobCards = props => {
  return (
    <div>
      <Grid
        container spacing={16}
        style={{ marginBottom: 8 }}
      >
        <Grid item xs={3}>
          <TextField
            disabled
            fullWidth
            value='X213156783'
            label='IMEI' />
        </Grid>
        <Grid item xs={2}>
          <TextField
            disabled
            fullWidth
            value='TP-12450'
            label='JOBNO' />
        </Grid>
      </Grid>
      <Grid container spacing={16} style={{ marginBottom: 8 }}>
        <Grid item xs={3}>
          <TextField
            disabled
            fullWidth
            value='GALAXY NOTE 6'
            label='MODEL' />
        </Grid>
        <Grid item xs={2}>
          <TextField
            disabled
            fullWidth
            value='SAMSUNG'
            label='BRAND' />
        </Grid>
      </Grid>
      <Grid container spacing={16} style={{ marginBottom: 8 }}>
        <Grid item xs={3}>
          <Typography variant='subheading'>DATE IN {new Date().toLocaleDateString()}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant='subheading'>DATE OUT {new Date().toLocaleDateString()}</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default JobCards
