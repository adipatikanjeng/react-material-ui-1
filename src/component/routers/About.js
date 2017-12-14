/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Layout from './../Layout'
import Paper from 'material-ui/Paper'
import ExpansionPannel from './about/ExpansionPanel'

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
    marginTop: 0,
    padding: theme.spacing.unit * 3 // TODO: See TODO note on Stepper
  },
  transition: {
    paddingBottom: 4
  }
})

class About extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Layout title='About' children={
          <Paper square elevation={0} className={classes.resetContainer}>
            <ExpansionPannel/>

          </Paper>
        } />

      </div>
    )
  }
}

About.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(About)
