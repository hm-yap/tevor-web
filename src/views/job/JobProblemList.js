// Job read only container
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// Material core
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

const JobProblemList = (props) => {
  const problemStub = ['LCD Crack', 'Cannot start', 'Veeeerrrrrrrrry Loooooooong Problem']

  return (
    <div>
      <List>
        {
          problemStub.map((prob, index) => (
            <ListItem key={prob}>
              <ListItemText primary={`${index + 1}. ${prob}`} />
              <ListItemSecondaryAction>
                DELETE
              </ListItemSecondaryAction>
            </ListItem>
          ))
        }
      </List>
    </div >
  )
}

export default JobProblemList
