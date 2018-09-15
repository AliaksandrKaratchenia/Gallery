import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LinkBtn from './LinkBtn';
import { connect } from 'react-redux';
import { logOut } from '../actions/userActions';
import { push } from 'react-router-redux';
import ExitToApp from '@material-ui/icons/ExitToApp';

const styles = {
	root: {
		flexGrow: 1
	},
	grow: {
		flexGrow: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	},
	button: {
		color: '#212121'
	}
};

function ButtonAppBar(props) {
	const { classes, isAuthenticated, logout } = props;
	console.log(props, 'IN NAVbar');
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="title" color="inherit" className={classes.grow}>
						<LinkBtn to="/" label={'Home'} />
						<LinkBtn to="/news" label={'News'} />
					</Typography>
					{!isAuthenticated ? (
						<LinkBtn to="/login" label={'Login'} />
					) : (
						<Button className={classes.button} onClick={logout}>
							logOut<ExitToApp />
						</Button>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
}

ButtonAppBar.propTypes = {
	classes: PropTypes.object.isRequired
};
const NavBar = connect(
	(state) => state.authReducer,
	(dispatch) => ({
		logout: () => {
			dispatch(logOut());
			dispatch(push('/login'));
		}
	})
)(withStyles(styles)(ButtonAppBar));
export default NavBar;
//export default withStyles(styles)(ButtonAppBar);
//<button onClick={this.props.logout}>Logout {this.props.authReducer.user.userName}!</button>
