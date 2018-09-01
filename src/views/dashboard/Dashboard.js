// Dashboard / home screen
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// Material core
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
// Material icons
import {
  InsertChartIcon,
  AttachMoneyIcon,
  DeveloperBoardIcon
} from '../common/MaterialIcons'

const styles = theme => ({
  root: {
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit}px`
  },
  card: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2
  },
  orangeAvatar: {
    backgroundColor: 'orange'
  },
  icons: {
    fontSize: 100
  },
  link: {
    textDecoration: 'none'
  }
})

const Dashboard = (props) => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Grid container wrap='nowrap' spacing={16}>
        <Grid item xs={12}>
          <Link to={'/job'} className={classes.link}>
            <Card className={classes.card}>
              <CardContent>
                <Grid align='center' className={classes.card}>
                  <DeveloperBoardIcon align='center' className={classes.icons} style={{ color: 'blue' }} />
                </Grid>
                <Typography align='center' variant='headline' component='h4'>JOB</Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Link to={'/billing'} className={classes.link}>
            <Card className={classes.card}>
              <CardContent>
                <Grid align='center' className={classes.card}>
                  <AttachMoneyIcon className={classes.icons} style={{ color: 'red' }} />
                </Grid>
                <Typography align='center' variant='headline' component='h4'>BILLING</Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Link to={'/stock'} className={classes.link}>
            <Card className={classes.card}>
              <CardContent>
                <Grid align='center' className={classes.card}>
                  <InsertChartIcon className={classes.icons} style={{ color: 'green' }} />
                </Grid>
                <Typography align='center' variant='headline' component='h4'>STOCK</Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </div>
  )
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Dashboard)
