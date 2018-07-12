import React from 'react'
import { Link } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import TableChartIcon from '@material-ui/icons/InsertChart'
import JobIcon from '@material-ui/icons/DeveloperBoard'
import MoneyIcon from '@material-ui/icons/AttachMoney'
import CustomerIcon from '@material-ui/icons/LocalAtm'
import GroupsIcon from '@material-ui/icons/GroupAdd'
import SettingsIcon from '@material-ui/icons/Settings'

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
    <ListItemLink primary='Job' icon={<JobIcon />} to='/job' />
    <ListItemLink primary='Billing' icon={<MoneyIcon />} to='/billing' />
    <ListItemLink primary='Stock' icon={<TableChartIcon />} to='/stock' />
  </div>
)

export const adminMenuItems = (
  <div>
    <ListItemLink primary='Settings' icon={<SettingsIcon />} to='/settings' />
    <ListItemLink primary='Manage Customer' icon={<CustomerIcon />} to='/settings/customer' />
    <ListItemLink primary='Manage User' icon={<GroupsIcon />} to='/settings/user' />
  </div>
)
