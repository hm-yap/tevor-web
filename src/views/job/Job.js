import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
// Material core
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
import JobCards from './JobCards';
import JobListing from './JobListing';

const styles = theme => ({
  root: {
    overflow: 'hidden'
  },
  containerDiv: {
    marginBottom: theme.spacing.unit * 2
  },
  cardHeader: {
    padding: "8px 12px",
    background: "#AC58FA"
  },
  whiteFont: {
    color: "white"
  },
  action: {
    padding: "4px 8px"
  },
  button: {
    marginTop: "8px",
    marginRight: "8px"
  }
})

const Job = (props) => {
  const { classes, ...other } = props

  return (
    <div className={classes.root}>
      <div className={classes.containerDiv}>
        <Typography variant="headline">Job Status</Typography>
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
            title="Job Listing"
            action={
              <Button
              component={Link}
              to="/job/new"
              className={classes.button}
              variant="contained"
              color="primary">
                ADD NEW JOB
                  <AddIcon />
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
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Job)
