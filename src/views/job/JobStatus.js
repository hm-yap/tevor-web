// Job status list
import React from 'react'
// Material core
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'

const JobStatus = props => {
  const dateNow = new Date()
  const dateOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  }
  const dateTimeStr = dateNow.toLocaleString('en-GB', dateOptions).toUpperCase()

  return (
    <List>
      <ListItem dense disableGutters divider>
        <Grid container>
          <Grid item xs={4}>
            <Typography variant='title'>STATUS</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography align='right' variant='title'>FIXING</Typography>
          </Grid>
        </Grid>
      </ListItem>
      <ListItem dense disableGutters divider>
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <Typography variant='subheading'>PRIORITY</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography align='right' variant='subheading'>
              <strong>HIGH</strong>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant='subheading'>CUSTOMER</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography align='right' variant='subheading'>
              <strong>DIRECTD</strong>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant='subheading'>ASSIGNEE</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography align='right' variant='subheading'>
              <strong>XIAN</strong>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant='subheading'>DATE IN</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography align='right' variant='subheading'>{dateTimeStr}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant='subheading'>DATE OUT</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography align='right' variant='subheading'>{dateTimeStr}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant='subheading'>LAST UPDATE</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography align='right' variant='subheading'>{dateTimeStr}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant='subheading'>UPDATED BY</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography align='right' variant='subheading'>TECK</Typography>
          </Grid>
        </Grid>
      </ListItem>
      <ListItem dense disableGutters>
        <Grid container spacing={8}>
          <Grid item xs={6}>
            <Typography variant='subheading'>CHANGE PRIORITY</Typography>
          </Grid>
          <Grid item xs={2}>
            <Button fullWidth size='small' variant='outlined'>LOW</Button>
          </Grid>
          <Grid item xs={2}>
            <Button fullWidth size='small' variant='outlined' color='primary'>MEDIUM</Button>
          </Grid>
          <Grid item xs={2}>
            <Button fullWidth size='small' variant='outlined' color='secondary'>HIGH</Button>
          </Grid>
        </Grid>
      </ListItem>
    </List>
  )
}

export default JobStatus
