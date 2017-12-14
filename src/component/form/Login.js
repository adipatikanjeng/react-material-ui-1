import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input'
import { FormControl, FormHelperText, FormGroup, FormControlLabel } from 'material-ui/Form'
import Visibility from 'material-ui-icons/Visibility'
import Email from 'material-ui-icons/Email'
import VisibilityOff from 'material-ui-icons/VisibilityOff'
import LoginIcon from 'material-ui-icons/Lock'
import Checkbox from 'material-ui/Checkbox';
import axios from 'axios'

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  root: {
    width: '100%'

  },
  formControl: {
    margin: theme.spacing.unit
  },
  card: {
    maxWidth: 400,
    marginTop: 30
  }
})

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showPassword: false,
      errors: {
        email: {
          status: false,
          text: 'Not email'
        },
        password: {
          status: false,
          text: 'Passowrd must over than 8 character'
        }
      }

    }

  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
    let errors = { ...this.state.errors }
    errors.email.status = false
    errors.password.status = false
    this.setState({ errors })
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPasssword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    let errors = { ...this.state.errors }
    if (password.length <= 8) {
      errors.password.status = true
      this.setState({ errors })
    }
    if (!email.includes("@")) {
      errors.email.status = true
      this.setState({ errors })
    }
    axios.post('/auth/login', {
      email: email,
      password: password
    })
  };

  render() {
    const { classes } = this.props;

    return (
      <form action='/' onSubmit={this.handleSubmitForm}>
        <FormControl fullWidth className={classes.formControl} error={this.state.errors.email.status}>
          <InputLabel htmlFor='email'>Email</InputLabel>
          <Input
            id='email'
            name='email'
            type='text'
            value={this.state.email}
            onChange={this.handleChange('email')}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                >
                  <Email />
                </IconButton>
              </InputAdornment>
            }
          />
          {this.state.errors.email.status ? <FormHelperText>{this.state.errors.email.text}</FormHelperText> : ''}

        </FormControl>
        <FormControl fullWidth className={classes.formControl} error={this.state.errors.password.status}>
          <InputLabel htmlFor='password'>Password</InputLabel>
          <Input
            id='password'
            name='password'
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.handleChange('password')}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  onClick={this.handleClickShowPasssword}
                  onMouseDown={this.handleMouseDownPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          {this.state.errors.password.status ? <FormHelperText>{this.state.errors.password.text}</FormHelperText> : ''}
        </FormControl>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.checkedA}
                onChange={this.handleChange('checkedA')}
                value="checkedA"
              />
            }
            label="Remember me"
          />


        </FormGroup>
        <FormControl fullWidth className={classes.formControl}>
          <Button raised color='primary' type='submit' sm>
            Login
            <LoginIcon className={classes.rightIcon} />
          </Button>
        </FormControl>
      </form>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);