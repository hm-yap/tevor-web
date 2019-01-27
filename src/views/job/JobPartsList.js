// Job read only container
import React from 'react'
// Material core
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import IconButton from '@material-ui/core/IconButton'
// Material icons
import {
  DeleteIcon
} from '../common/MaterialIcons'

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
            <TableCell align='left'>DESCRIPTION</TableCell>
            <TableCell align='left'>STATUS</TableCell>
            <TableCell align='right'>QUANTITY</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {
            tableStub.map(part => {
              return (
                <TableRow hover key={part.shortname} >
                  <TableCell>{part.shortname}</TableCell>
                  <TableCell align='left'>{part.stockDesc}</TableCell>
                  <TableCell align='left'>{part.status}</TableCell>
                  <TableCell align='right'>{part.quantity}</TableCell>
                  <TableCell align='right'>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
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
