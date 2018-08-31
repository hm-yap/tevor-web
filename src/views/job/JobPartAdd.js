// Job edit container
import React from 'react'
import PropTypes from 'prop-types'
// Material core
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContentText from '@material-ui/core/DialogContentText'

const JobPartAdd = (props) => {
  const { open, handleClose, title = 'EDIT JOB' } = props

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='form-dialog-title'
    >
      <DialogTitle id='form-dialog-title'>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Fill in job part details and click <em>save</em>
        </DialogContentText>
        <TextField autoFocus label='BRAND' fullWidth required margin='dense' />
        <TextField label='MODEL' fullWidth required margin='dense' />
        <TextField label='COLOR' fullWidth required margin='dense' />
        <TextField label='STORAGE (GB)' fullWidth required margin='dense' type='number' />
        <TextField label='IMEI' fullWidth helperText='IMEI of the phone (optional)' margin='dense' />
        <TextField label='JOBNO' fullWidth helperText='Jobno from customer (optional)' margin='dense' />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='secondary'>
          Cancel
        </Button>
        <Button onClick={handleClose} color='primary'>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

JobPartAdd.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
}

export default JobPartAdd
