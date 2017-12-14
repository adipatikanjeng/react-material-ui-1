/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Layout from './../Layout'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  root: {
    width: '100%'
  },
  button: {
    marginRight: theme.spacing.unit
  },
  actionsContainer: {
    marginTop: theme.spacing.unit
  },
  resetContainer: {
    marginTop: 0

  },
  transition: {
    paddingBottom: 4
  }
})

class Home extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Layout title='Dashboard' children={
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>Dashboard Page</Typography>
          </Paper>
        } />

      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Home)
