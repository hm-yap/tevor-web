// Job edit container
import React from 'react'
import PropTypes from 'prop-types'
// Material core
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContentText from '@material-ui/core/DialogContentText'
// Part Table
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
// Search List
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
// Material icons
import {
  DeleteIcon,
  AddIcon
} from '../common/MaterialIcons'

const styles = theme => ({
  dialogContent: {
    marginTop: theme.spacing.unit,
    padding: theme.spacing.unit
  }
})

const JobPartAdd = (props) => {
  const { open, handleClose, title = 'ADD PART', classes } = props

  const jobPartsStub = [
    {
      stockid: 'test',
      stockDesc: 'IPHONE 7S SOME SUPER LONG PART NAME. NO IDEA WHY'
    }
  ]

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='form-dialog-title'
      maxWidth='lg'
    >
      <DialogTitle id='form-dialog-title'>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Search for the part, add to the table, enter quantity and click <em>save</em>
        </DialogContentText>
        <div className={classes.dialogContent}>
          <TextField label='SEARCH' helperText='Stock code or part name' fullWidth />
        </div>
        <div className={classes.dialogContent}>
          <SearchResultList />
        </div>
        <div className={classes.dialogContent}>
          <JobPartTable jobParts={jobPartsStub} />
        </div>
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
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  classes: PropTypes.object.isRequired
}

const SearchResultList = (props) => {
  const searchResultStub = [
    {
      stockid: 'TESTID',
      stockDesc: 'SOME REALLLY LONG PART NAME'
    },
    {
      stockid: 'TESTID2',
      stockDesc: 'SOME REALLLY LONG PART NAME 2'
    },
    {
      stockid: 'TESTID3',
      stockDesc: 'SOME REALLLY LONG PART NAME 3'
    },
    {
      stockid: 'TESTID4',
      stockDesc: 'SOME REALLLY LONG PART NAME 4 WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO'
    },
    {
      stockid: 'TESTID5',
      stockDesc: 'SOME REALLLY LONG PART NAME 5'
    }
  ]

  return (
    <List>
      {
        searchResultStub.map((result) => (
          <ListItem dense divider key={result.stockid}>
            <ListItemText primary={result.stockDesc} secondary={result.stockid} />
            <ListItemSecondaryAction>
              <IconButton>
                <AddIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))
      }
    </List>
  )
}

const JobPartTable = (props) => {
  const { jobParts = [] } = props

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>STOCK CODE</TableCell>
          <TableCell>DESCRIPTION</TableCell>
          <TableCell>QUANTITY</TableCell>
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {
          jobParts.map(part => (
            <TableRow key={part.stockid}>
              <TableCell>{part.stockid}</TableCell>
              <TableCell>{part.stockDesc}</TableCell>
              <TableCell>
                <TextField required margin='dense' type='number' />
              </TableCell>
              <TableCell>
                <DeleteIcon />
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  )
}

JobPartTable.propTypes = {
  jobParts: PropTypes.array
}

export default withStyles(styles)(JobPartAdd)
