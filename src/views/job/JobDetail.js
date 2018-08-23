// Job read only container
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// Material core
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// Components
import JobInputs from './JobInputs'
import JobProblemList from './JobProblemList'
import JobPartsList from './JobPartsList'

const styles = () => ({
  top: {
    minHeight: 320
  },
  bottom: {
    minHeight: 410
  }
})

const JobDetail = (props) => {
  const { match: { params: { jobid } }, classes } = props
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
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <Grid container spacing={16}>
          <Grid item xs={8}>
            <Card raised className={classes.top}>
              <CardHeader
                title={jobid}
                action={
                  <Button
                    component={Link}
                    to={`/job/{jobid}/edit`}
                    variant='contained'
                    color='primary'>
                    EDIT JOB
                  </Button>
                } />
              <CardContent>
                <JobInputs />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card raised className={classes.top}>
              <CardContent>
                <List>
                  <ListItem dense disableGutters>
                    <Grid container>
                      <Grid item xs={4}>
                        <Typography variant='title'>STATUS</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography align='right' variant='title'>FIXING</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem dense disableGutters>
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
                    </Grid>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={16}>
          <Grid item xs={4}>
            <Card raised className={classes.bottom}>
              <CardHeader
                title='PHONE PROBLEMS'
                action={
                  <Button
                    component={Link}
                    to={`/job/{jobid}/edit`}
                    variant='contained'
                    color='primary'>
                    ADD
                  </Button>
                } />
              <CardContent>
                <JobProblemList />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={8}>
            <Card raised className={classes.bottom}>
              <CardHeader
                title='PARTS'
                action={
                  <Button
                    component={Link}
                    to={`/job/{jobid}/edit`}
                    variant='contained'
                    color='primary'>
                    ADD PARTS
                  </Button>
                } />
              <CardContent>
                <JobPartsList />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid >
  )
}

JobDetail.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(JobDetail)
