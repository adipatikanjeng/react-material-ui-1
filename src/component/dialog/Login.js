import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Dialog from 'material-ui/Dialog'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import CloseIcon from 'material-ui-icons/Close'
import Slide from 'material-ui/transitions/Slide'
import Card, { CardContent } from 'material-ui/Card'
import Grid from 'material-ui/Grid'
import LoginForm from './../form/Login'

const styles = theme => ({
  appBar: {
    position: 'relative'
  },
  root: {
    flexGrow: 1
  },
  card: {
    maxWidth: 400,
    marginTop: 30
  }
})

function Transition (props) {
  return <Slide direction='left' {...props} />
}

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: this.props.open
    }
  };

  componentWillReceiveProps (newProps) {
    this.setState({ open: newProps.open })
  }

  render () {
    const { classes } = this.props

    return (
      <div className={classes.root}>

        <Dialog
          fullScreen
          open={this.state.open}
          onRequestClose={this.props.action}
          transition={Transition}
        >
          <div className={classes.root}>
            <div className={classes.appFrame}>
              <AppBar className={classes.appBar}>
                <Toolbar>
                  <Typography type='title' color='inherit' className={classes.flex}>
                Login
              </Typography>
                  <IconButton color='contrast' onClick={this.props.action} aria-label='Close'>
                    <CloseIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>
              <main>
                <Typography type='body1'>
                  <Grid container spacing={24}>
                    <Grid item xs={12}>
                      <Card className={classes.card} fullWidth>
                        <CardContent>
                          <LoginForm />
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Typography>
              </main>
            </div>
          </div>
        </Dialog>
      </div>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Login)
