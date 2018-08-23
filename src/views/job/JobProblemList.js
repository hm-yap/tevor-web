// Job read only container
import React from 'react'
// Material core
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
// Material icons
import {
  DeleteIcon
} from '../common/MaterialIcons'

const JobProblemList = (props) => {
  const problemStub = ['LCD Crack', 'Cannot start', 'Veeeerrrrrrrrry Loooooooong Problem']

  return (
    <div>
      <List>
        {
          problemStub.map((prob, index) => (
            <ListItem divider key={prob}>
              <ListItemText primary={prob.toUpperCase()} />
              <ListItemSecondaryAction>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))
        }
      </List>
    </div >
  )
}

export default JobProblemList
