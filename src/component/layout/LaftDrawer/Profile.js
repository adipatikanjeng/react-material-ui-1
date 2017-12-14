import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 200
  }
}

function Profile (props) {
  const { classes } = props
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image='/images/avatar.jpg'
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography type='headline' component='h2'>
            Heriyadi
          </Typography>
        </CardContent>
        <CardActions>
          <Button raised color='primary'>
            Detail
          </Button>
          <Button raised color='primary'>
            Connect
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Profile)
