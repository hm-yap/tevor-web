import React from 'react'
import PropTypes from 'prop-types'
// Material core
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
// Material icons
//import InfoIcon from '@material-ui/icons/Work'
import {
  MyLocationIcon,
  ErrorOutlineIcon,
  WorkOutlineIcon
} from '../common/MaterialIcons'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit
  },
  iconDiv: {
    borderRadius: "3px",
    backgroundColor: "#999",
    padding: "15px",
    marginRight: "15px",
    float: "left",
  },
  icon: {
    color: "white",
    fontSize: 36
  },
  infoGradient: {
    background: "linear-gradient(60deg,  #01DF3A, #04B431)"
  },
  attnGradient: {
    background: "linear-gradient(60deg,  #FE9A2E, #FF8000)"
  },
  urgentGradient: {
    background: "linear-gradient(60deg,  #D31919, #B41717)"
  },
  targetGradient: {
    background: "linear-gradient(60deg,  #2E9AFE, #0080FF)"
  }
})

const JobCards = props => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Grid container justify='center' spacing={16}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <div className={`${classes.iconDiv} ${classes.infoGradient}`}>
                <WorkOutlineIcon style={{ color: 'white', fontSize: '36px' }} />
              </div>
              <Typography variant='body1' align='right'>JOB</Typography>
              <Typography variant='headline' align='right'>13</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <div className={`${classes.iconDiv} ${classes.attnGradient}`}>
                <ErrorOutlineIcon className={classes.icon} />
              </div>
              <Typography variant='body1' align='right'>ATTENTION</Typography>
              <Typography variant='headline' align='right'>3</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <div className={`${classes.iconDiv} ${classes.urgentGradient}`}>
                <ErrorOutlineIcon className={classes.icon} />
              </div>
              <Typography variant='body1' align='right'>URGENT</Typography>
              <Typography variant='headline' align='right'>8</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <div className={`${classes.iconDiv} ${classes.targetGradient}`}>
                <MyLocationIcon className={classes.icon} />
              </div>
              <Typography variant='body1' align='right'>TARGET</Typography>
              <Typography variant='headline' align='right'>43 / 100</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

JobCards.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(JobCards)
