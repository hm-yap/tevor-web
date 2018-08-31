import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
// Components
import Dashboard from '../views/dashboard/Dashboard'
import Billing from '../views/billing/Billing'
import Job from '../views/job/Job'
import JobNew from '../views/job/JobNew'
import JobDetail from '../views/job/JobDetail'
import JobEdit from '../views/job/JobEdit'
import Stock from '../views/stock/Stock'

const Routes = props => (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route exact path='/job' component={Job} />
    <Route exact path='/job/new' component={JobNew} />
    <Route exact path='/job/:jobid' component={JobDetail} />
    <Route exact path='/job/:jobid/edit' component={JobEdit} />
    <Route exact path='/billing' component={Billing} />
    <Route exact path='/stock' component={Stock} />
  </Switch>
)

export default Routes
