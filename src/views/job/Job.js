// Container for Job listing and statuses
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// Material core
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
// Material icons
import {
  AddIcon
} from '../common/MaterialIcons'
// Components
import JobCards from './JobCards'
import JobListing from './JobListing'

const styles = theme => ({
  root: {
    overflow: 'hidden'
  },
  containerDiv: {
    marginBottom: theme.spacing.unit * 2
  },
  cardHeader: {
    padding: '8 12',
    background: '#AC58FA'
  },
  whiteFont: {
    color: 'white'
  },
  action: {
    padding: '4 8'
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  }
})

const Job = (props) => {
  const { classes, ...other } = props

  return (
    <div className={classes.root}>
      <div className={classes.containerDiv}>
        <Typography variant='headline'>Job Status</Typography>
        <JobCards />
      </div>
      <div className={classes.containerDiv}>
        <Card>
          <CardHeader
            classes={{
              root: classes.cardHeader,
              title: classes.whiteFont,
              action: classes.action
            }}
            title='Job Listing'
            action={
              <Button
                component={Link}
                to='/job/new'
                className={classes.button}
                variant='contained'
                color='primary'>
                <AddIcon className={classes.leftIcon} />
                NEW JOB
              </Button>
            } />
          <CardContent>
            <JobListing {...other} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

Job.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Job)
