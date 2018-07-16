import React from 'react'
import PropTypes from 'prop-types'
// Material core
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
// Material icons
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
    padding: "15px",
    marginRight: "15px",
    marginTop: "4px",
    float: "left"
  },
  icon: {
    color: "white",
    fontSize: 36
  },
  infoBackground: {
    background: "#04B431"
  },
  infoGradient: {
    background: "linear-gradient(60deg,  #01DF3A, #04B431)"
  },
  attnBackground: {
    background: "#FF8000"
  },
  attnGradient: {
    background: "linear-gradient(60deg,  #FACC2E, #FF8000)"
  },
  urgentBackground: {
    background: "#B41717"
  },
  urgentGradient: {
    background: "linear-gradient(60deg,  #FE642E, #B41717)"
  },
  targetBackground: {
    background: "#0080FF"
  },
  targetGradient: {
    background: "linear-gradient(60deg,  #58ACFA, #0080FF)"
  },
  cardTitle: {
    fontSize: "18px",
    color: 'white'
  },
  cardContent: {
    fontSize: "32px",
    color: 'white'
  }
})

const JobCards = props => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Grid container justify='center' spacing={16}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent className={classes.infoGradient}>
              <div className={`${classes.iconDiv} ${classes.infoBackground}`}>
                <WorkOutlineIcon className={classes.icon} />
              </div>
              <Typography className={classes.cardTitle} align='right'>JOB</Typography>
              <Typography className={classes.cardContent} align='right'>13</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent className={classes.attnGradient}>
              <div className={`${classes.iconDiv} ${classes.attnBackground}`}>
                <ErrorOutlineIcon className={classes.icon} />
              </div>
              <Typography className={classes.cardTitle} align='right'>ATTENTION</Typography>
              <Typography className={classes.cardContent} align='right'>3</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent className={classes.urgentGradient}>
              <div className={`${classes.iconDiv} ${classes.urgentBackground}`}>
                <ErrorOutlineIcon className={classes.icon} />
              </div>
              <Typography className={classes.cardTitle} align='right'>URGENT</Typography>
              <Typography className={classes.cardContent} align='right'>8</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent className={classes.targetGradient}>
              <div className={`${classes.iconDiv} ${classes.targetBackground}`}>
                <MyLocationIcon className={classes.icon} />
              </div>
              <Typography className={classes.cardTitle} align='right'>MONTHLY TARGET</Typography>
              <Typography className={classes.cardContent} align='right'>43 / 100</Typography>
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
