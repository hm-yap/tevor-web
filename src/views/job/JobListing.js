import React from 'react'
import PropTypes from 'prop-types'
// Material core
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const styles = theme => {

}

const JobListing = (props) => {
  const { classes, history } = props
  const emptyRows = 4

  const data = [
    {
      id: 'T002345',
      customer: 'DIRECTD',
      imei: 'X213156783',
      jobno: 'TP-12450',
      brand: 'XIAOMI',
      model: 'HONGMI NOTE 4',
      priority: 'HIGH',
      status: 'FIXING'
    },
    {
      id: 'T002377',
      customer: 'WALKIN',
      imei: 'X3431230',
      jobno: 'TP-32314',
      brand: 'APPLE',
      model: 'IPHONE 8',
      priority: 'MEDIUM',
      status: 'DONE'
    },
    {
      id: 'R000077',
      customer: 'M2G',
      imei: 'X1313224',
      jobno: 'TP-48489',
      brand: 'SAMSUNG',
      model: 'GALAXY S8',
      priority: 'LOW',
      status: 'DONE'
    }
  ]

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell numeric>CUSTOMER</TableCell>
            <TableCell numeric>IMEI</TableCell>
            <TableCell numeric>JOBNO</TableCell>
            <TableCell numeric>BRAND</TableCell>
            <TableCell numeric>MODEL</TableCell>
            <TableCell numeric>PRIORITY</TableCell>
            <TableCell numeric>STATUS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map(job => {
              return (
                <TableRow hover key={job.id} onClick={() => history.push(`/job/${job.id}`)}>
                  <TableCell>{job.id}</TableCell>
                  <TableCell numeric>{job.customer}</TableCell>
                  <TableCell numeric>{job.imei}</TableCell>
                  <TableCell numeric>{job.jobno}</TableCell>
                  <TableCell numeric>{job.brand}</TableCell>
                  <TableCell numeric>{job.model}</TableCell>
                  <TableCell numeric>{job.priority}</TableCell>
                  <TableCell numeric>{job.status}</TableCell>
                </TableRow>
              )
            })
          }
          {
            emptyRows > 0 && (
              <TableRow style={{ height: 48 * emptyRows }}>
                <TableCell colSpan={8} />
              </TableRow>
            )
          }
        </TableBody>
      </Table>
    </div>
  )
}

JobListing.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(JobListing)
