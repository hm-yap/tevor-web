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

const JobProblemEdit = (props) => {
  const { open, handleClose, title = 'EDIT PROBLEM' } = props

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='form-dialog-title'
    >
      <DialogTitle id='form-dialog-title'>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Fill in job problems and click <em>save</em>
        </DialogContentText>
        <TextField style={{ width: 400 }} autoFocus label='PROBLEM' fullWidth required margin='dense' />
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

JobProblemEdit.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
}

export default JobProblemEdit
