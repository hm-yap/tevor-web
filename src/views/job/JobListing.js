import React from 'react'
import PropTypes from 'prop-types'
// Material core
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => {

}

const JobListing = (props) => {
  const { classes } = props
  const emptyRows = 7

  const data = [
    {
      id: "T002345",
      client: "DIRECTD",
      imei: "X213156783",
      jobno: "TP-12450",
      brand: "XIAOMI",
      model: "HONGMI NOTE 4",
      status: "FIXING"
    },
    {
      id: "T002377",
      client: "WALKIN",
      imei: "X3431230",
      jobno: "TP-32314",
      brand: "APPLE",
      model: "IPHONE 8",
      status: "DONE"
    },
    {
      id: "R000077",
      client: "M2G",
      imei: "X1313224",
      jobno: "TP-48489",
      brand: "SAMSUNG",
      model: "GALAXY S8",
      status: "DONE"
    }
  ]

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell numeric>CLIENT</TableCell>
            <TableCell numeric>IMEI</TableCell>
            <TableCell numeric>JOBNO</TableCell>
            <TableCell numeric>BRAND</TableCell>
            <TableCell numeric>MODEL</TableCell>
            <TableCell numeric>STATUS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map(job => {
              return (
                <TableRow key={job.id}>
                  <TableCell>{job.id}</TableCell>
                  <TableCell numeric>{job.client}</TableCell>
                  <TableCell numeric>{job.imei}</TableCell>
                  <TableCell numeric>{job.jobno}</TableCell>
                  <TableCell numeric>{job.brand}</TableCell>
                  <TableCell numeric>{job.model}</TableCell>
                  <TableCell numeric>{job.status}</TableCell>
                </TableRow>
              )
            })
          }
          {
            emptyRows > 0 && (
              <TableRow style={{ height: 48 * emptyRows }}>
                <TableCell colSpan={7} />
              </TableRow>
            )
          }
        </TableBody>
      </Table>
    </div>
  )
}

JobListing.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(JobListing)
