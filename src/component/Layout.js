import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import LeftDrawer from './layout/LeftDrawer'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

class Layout extends React.Component {
  render () {
    const { children, classes, title } = this.props

    return (
      <div className={classes.root}>
        <LeftDrawer title={title} children={
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Grid
                container

                alignItems='row'
                direction='center'
                justify='center'
          >{children}
              </Grid>

            </Grid>
          </Grid>
        } />
      </div>
    )
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Layout)
