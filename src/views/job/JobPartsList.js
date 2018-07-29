// Job read only container
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// Material core
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const JobPartsList = (props) => {
  const tableStub = [
    {
      shortname: 'NOFSX234',
      stockDesc: 'NAME OF THE PARTS',
      status: 'OUT OF STOCK',
      quantity: 3
    },
    {
      shortname: 'SXSFFFSZ',
      stockDesc: 'NAME OF THE PARTS',
      status: 'WAITING FOR DELIVERY',
      quantity: 2
    },
    {
      shortname: 'EXJKLJKL',
      stockDesc: 'NAME OF THE PARTS',
      status: 'AVAILABLE',
      quantity: 1
    }
  ]

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>STOCK CODE</TableCell>
            <TableCell numeric>DESCRIPTION</TableCell>
            <TableCell numeric>STATUS</TableCell>
            <TableCell numeric>QUANTITY</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {
            tableStub.map(part => {
              return (
                <TableRow hover key={part.shortname} >
                  <TableCell>{part.shortname}</TableCell>
                  <TableCell numeric>{part.stockDesc}</TableCell>
                  <TableCell numeric>{part.status}</TableCell>
                  <TableCell numeric>{part.quantity}</TableCell>
                  <TableCell numeric>DELETE</TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </div >
  )
}

export default JobPartsList
