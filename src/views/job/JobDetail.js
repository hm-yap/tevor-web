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
// Components
import JobInputs from './JobInputs'
import JobProblemList from './JobProblemList'
import JobPartsList from './JobPartsList'
import JobStatus from './JobStatus'
import JobEdit from './JobEdit'
// Material icons
import {
  AddIcon,
  EditIcon
} from '../common/MaterialIcons'

const styles = theme => ({
  top: {
    minHeight: 380
  },
  bottom: {
    minHeight: 400
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  cardHeader: {
    padding: '16px 16px'
  },
  whiteFont: {
  },
  action: {
    marginTop: -4,
    marginRight: -4
  }
})

class JobDetail extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  render() {
    const { match: { params: { jobid } }, classes } = this.props

    return (
      <div>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Grid container spacing={16}>
              <Grid item xs={8}>
                <Card raised className={classes.top}>
                  <CardHeader
                    title={jobid}
                    classes={{
                      root: classes.cardHeader,
                      title: classes.whiteFont,
                      action: classes.action
                    }}
                    action={
                      <Button
                        onClick={this.handleOpen}
                        variant='contained'
                        color='primary'>
                        <EditIcon className={classes.leftIcon} />
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
                    <JobStatus />
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
                    classes={{
                      root: classes.cardHeader,
                      title: classes.whiteFont,
                      action: classes.action
                    }}
                    action={
                      <Button
                        component={Link}
                        to={`/job/{jobid}/edit`}
                        variant='contained'
                        color='primary'>
                        <AddIcon className={classes.leftIcon} />
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
                    classes={{
                      root: classes.cardHeader,
                      title: classes.whiteFont,
                      action: classes.action
                    }}
                    action={
                      <Button
                        component={Link}
                        to={`/job/{jobid}/edit`}
                        variant='contained'
                        color='primary'>
                        <AddIcon className={classes.leftIcon} />
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
        <JobEdit
          title='EDIT JOB'
          open={this.state.open}
          handleClose={this.handleClose} />
      </div>
    )
  }
}

JobDetail.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(JobDetail)
