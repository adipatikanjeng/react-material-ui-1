import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Layout from './../Layout'
import Card, { CardContent } from 'material-ui/Card'
import LoginForm from './../form/Login'

const styles = theme => ({
  root: {
    width: '100%'

  },
  formControl: {
    margin: theme.spacing.unit
  },
  card: {
    maxWidth: 400
  }

})

class Login extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <Layout title='Login' children={
        <div className={classes.root}>
          <Card className={classes.card} fullWidth>
            <CardContent>
              <LoginForm />
            </CardContent>
          </Card>
        </div>
      } />
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Login)
