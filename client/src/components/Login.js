import React from 'react'
import { connect } from 'react-redux'
import { logIn } from '../actions/userActions'
import { push } from 'react-router-redux'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import LockIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  formControl: {
    margin: theme.spacing.unit
  }
})

class LoginContainer extends React.Component {
  constructor (props) {
    super(props)
    //console.log(props, 'IN loggin')
    this.state = {
      userName: '',
      password: '',
      errMs: this.props.authReducer.errMs,
      isAuthenticated: this.props.authReducer.isAuthenticated
    }
  }

  handleChange = e => {
    const fieldName = e.currentTarget.name
    this.setState({ [fieldName]: e.target.value })
  }

    // handleChange = (e) => {
    // 	const value = e.currentTarget.value;
    // 	const fieldName = e.currentTarget.dataset.fieldName;

    // 	this.setState((prev) => ({
    // 		...prev,
    // 		[fieldName]: value
    // 	}));
    // };

  handleSubmit = e => {
    e.preventDefault()
    this.props.login({
      userName: this.state.userName,
      password: this.state.password
    })
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      isAuthenticated: newProps.authReducer.isAuthenticated
    })
  }

  render () {
    const { errMs } = this.state
    const { classes } = this.props
    return this.state.isAuthenticated
            ? <p>You have already logIn</p>
            : <div>
              <CssBaseline />
              <main className={classes.layout}>
                <Paper className={classes.paper}>
                  <Avatar className={classes.avatar}>
                    <LockIcon />
                  </Avatar>
                  <Typography variant='headline'>Sign in</Typography>
                  <form onSubmit={this.handleSubmit} className={classes.form}>
                    <FormControl margin='normal' required fullWidth>
                      <InputLabel htmlFor='name-simple'>Name</InputLabel>
                      <Input
                        id='name-simple'
                        name='userName'
                        value={this.state.userName}
                        onChange={this.handleChange}
                                  />
                    </FormControl>
                    <FormControl margin='normal' required fullWidth>
                      <InputLabel htmlFor='password'>password</InputLabel>
                      <Input
                        name='password'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                        value={this.state.password}
                        onChange={this.handleChange}
                                  />
                    </FormControl>
                    <Button
                      type='submit'
                      fullWidth
                      variant='raised'
                      color='primary'
                      className={classes.submit}
                              >
                                  Sign in
                              </Button>
                  </form>
                  {errMs && <p>{errMs}</p>}
                </Paper>
              </main>
            </div>
  }
}

const Login = connect(
    state => state,
    dispatch => ({
      login: params => {
        dispatch(logIn(params))
        dispatch(push('/'))
      }
    })
)(withStyles(styles)(LoginContainer))

export default Login

// function SignIn(props) {
//   const { classes } = props;

//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <main className={classes.layout}>
//         <Paper className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <LockIcon />
//           </Avatar>
//           <Typography variant="headline">Sign in</Typography>
//           <form className={classes.form}>
//             <FormControl margin="normal" required fullWidth>
//               <InputLabel htmlFor="email">Email Address</InputLabel>
//               <Input id="email" name="email" autoComplete="email" autoFocus />
//             </FormControl>
//             <FormControl margin="normal" required fullWidth>
//               <InputLabel htmlFor="password">Password</InputLabel>
//               <Input
//                 name="password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />
//             </FormControl>
//             <Button
//               type="submit"
//               fullWidth
//               variant="raised"
//               color="primary"
//               className={classes.submit}
//             >
//               Sign in
//             </Button>
//           </form>
//         </Paper>
//       </main>
//     </React.Fragment>
//   );
// }

// export default withStyles(styles)(SignIn);
