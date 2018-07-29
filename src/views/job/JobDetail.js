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
// Components
import JobInputs from './JobInputs'
import JobProblemList from './JobProblemList'
import JobPartsList from './JobPartsList'

const JobDetail = (props) => {
  const { match: { params: { jobid } } } = props
  const dateStr = new Date().toLocaleDateString()

  return (
    <Grid container spacing={16}>
      <Grid item xs={9}>
        <Card>
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
      <Grid item xs={3}>
        <Card>
          <CardContent>
            <Grid container spacing={8}>
              <Grid item xs={12}>
                <Typography variant='title'>STATUS FIXING</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='subheading'>PRIORITY HIGH</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='subheading'>CUSTOMER DIRECTD</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='subheading'>ASSIGNED XIAN</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='subheading'>LAST UPDATE {dateStr}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Button variant='contained'>ASSIGN</Button>
              </Grid>
              <Grid item xs={12}>
                <Button variant='contained'>START</Button>
              </Grid>
              <Grid item xs={12}>
                <Button color='secondary' variant='contained'>CANCEL</Button>
              </Grid>
              <Grid item xs={12}>
                <Button color='primary' variant='contained'>FINISH</Button>
              </Grid>
              <Grid item xs={12}>
                <Button color='primary' variant='contained'>APPROVE</Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
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
        <Card>
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
  )
}

export default JobDetail
