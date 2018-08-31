// Container for Job listing and statuses
import React from 'react'
import PropTypes from 'prop-types'
// Material core
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
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

class Job extends React.Component {
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
    const { classes, ...other } = this.props

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
                  onClick={this.handleOpen}
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
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>NEW JOB</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To create a new job, fill in the form and click <em>save</em>
            </DialogContentText>
            <TextField autoFocus label='BRAND' fullWidth required margin='dense' />
            <TextField label='MODEL' fullWidth required margin='dense' />
            <TextField label='COLOR' fullWidth required margin='dense' />
            <TextField label='STORAGE (GB)' fullWidth required margin='dense' type='number' />
            <TextField label='IMEI' fullWidth helperText='IMEI of the phone (optional)' margin='dense' />
            <TextField label='JOBNO' fullWidth fullWidth helperText='Jobno from customer (optional)' margin='dense' />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color='secondary'>
              Cancel
            </Button>
            <Button onClick={this.handleClose} color='primary'>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

Job.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Job)
