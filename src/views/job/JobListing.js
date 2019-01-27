import React from 'react'
import PropTypes from 'prop-types'
// Material core
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const JobListing = (props) => {
  const { history, jobLists } = props
  const emptyRows = 4
  console.log('jobLists', jobLists)

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
            <TableCell>CUSTOMER</TableCell>
            <TableCell align='right'>IMEI</TableCell>
            <TableCell align='right'>JOBNO</TableCell>
            <TableCell>BRAND</TableCell>
            <TableCell>MODEL</TableCell>
            <TableCell align='center'>PRIORITY</TableCell>
            <TableCell align='center'>STATUS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            props.jobLists.map(job => {
              return (
                <TableRow hover key={job.jobid} onClick={() => history.push(`/job/${job.jobid}`)}>
                  <TableCell>{job.jobid}</TableCell>
                  <TableCell>{job.client}</TableCell>
                  <TableCell align='right'>{job.imei}</TableCell>
                  <TableCell align='right'>{job.jobno}</TableCell>
                  <TableCell>{job.brand}</TableCell>
                  <TableCell>{job.model}</TableCell>
                  <TableCell align='center'>{job.priority}</TableCell>
                  <TableCell align='center'>{job.status}</TableCell>
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
  history: PropTypes.object.isRequired,
  jobLists: PropTypes.array.isRequired
}

export default JobListing
