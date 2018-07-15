import React from 'react'
import { Link } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import {
  HomeIcon,
  InsertChartIcon,
  AttachMoneyIcon,
  DeveloperBoardIcon,
  LocalAtmIcon,
  GroupAddIcon,
  SettingsIcon
} from './MaterialIcons'

class ListItemLink extends React.Component {
  renderLink = itemProps => <Link to={this.props.to} {...itemProps} />

  render() {
    const { icon, primary, secondary } = this.props
    return (
      <ListItem button component={this.renderLink}>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText inset primary={primary} secondary={secondary} />
      </ListItem>
    )
  }
}

export const staffMenuItems = (
  <div>
    <ListItemLink primary='Home' icon={<HomeIcon />} to='/' />
    <ListItemLink primary='Job' icon={<DeveloperBoardIcon style={{ color: 'blue' }} />} to='/job' />
    <ListItemLink primary='Billing' icon={<AttachMoneyIcon style={{ color: 'red' }} />} to='/billing' />
    <ListItemLink primary='Stock' icon={<InsertChartIcon style={{ color: 'green' }} />} to='/stock' />
  </div>
)

export const adminMenuItems = (
  <div>
    <ListItemLink primary='Supplier' icon={<LocalAtmIcon style={{ color: 'purple' }} />} to='/settings/supplier' />
    <ListItemLink primary='Customer' icon={<LocalAtmIcon style={{ color: 'orange' }} />} to='/settings/customer' />
    <ListItemLink primary='User' icon={<GroupAddIcon style={{ color: 'green' }} />} to='/settings/user' />
    <ListItemLink primary='Settings' icon={<SettingsIcon />} to='/settings' />
  </div>
)
