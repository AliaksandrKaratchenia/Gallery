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


import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import {Sw} from './SW';

import { ConnectedRouter } from 'react-router-redux';
import { history } from '../store/store';
const drawerWidth = 240;
const styles = (theme) => ({
	root: {
		flexGrow: 1,
		height: "100%",
		zIndex: 1,
		overflow: 'hidden',
		position: 'relative',
		display: 'flex'
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create([ 'width', 'margin' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create([ 'width', 'margin' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 36
	},
	hide: {
		display: 'none'
	},
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		width: theme.spacing.unit * 7,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing.unit * 9
		}
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3
	}
})

class ButtonAppBar extends React.Component {
	state = {
		open: false
	};

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { classes, theme,isAuthenticated, logout } = this.props;
		return (<ConnectedRouter  history={history}>
		
		<div className={classes.root}>
		<AppBar
			position="absolute"
			className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
		>
			<Toolbar disableGutters={!this.state.open}>
				<IconButton
					color="inherit"
					aria-label="Open drawer"
					onClick={this.handleDrawerOpen}
					className={classNames(classes.menuButton, this.state.open && classes.hide)}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="title" color="inherit" noWrap>
					Mini variant drawer
				</Typography>
			</Toolbar>
		</AppBar>
		<Drawer
			variant="permanent"
			classes={{
				paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)
			}}
			open={this.state.open}
		>
			<div className={classes.toolbar}>
				<IconButton onClick={this.handleDrawerClose}>
					{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
				</IconButton>
			</div>
			<Divider />
			<List>{mailFolderListItems}</List>
			<Divider />
			<List>{otherMailFolderListItems}</List>
		</Drawer>
		<main className={classes.content}>
			<div className={classes.toolbar} />
			{Sw}
		</main>
	</div>
</ConnectedRouter>);
}
}


// function ButtonAppBar(props) {
// 	const { classes, isAuthenticated, logout } = props;
// 	console.log(props, 'IN NAVbar');
// 	return (
		
// 		<div className={classes.root}>
// 			<AppBar position="static">
// 				<Toolbar>
// 					<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
// 						<MenuIcon />
// 					</IconButton>
// 					<Typography variant="title" color="inherit" className={classes.grow}>
// 						<LinkBtn to="/" label={'Home'} />
// 						<LinkBtn to="/news" label={'News'} />
// 					</Typography>
// 					{!isAuthenticated ? (
// 						<LinkBtn to="/login" label={'Login'} />
// 					) : (
// 						<Button className={classes.button} onClick={logout}>
// 							logOut<ExitToApp />
// 						</Button>
// 					)}
// 				</Toolbar>
// 			</AppBar>
// 		</div>
// 	);
// }

// ButtonAppBar.propTypes = {
// 	classes: PropTypes.object.isRequired
// };

const NavBar = connect(
	(state) => state.authReducer,
	(dispatch) => ({
		logout: () => {
			dispatch(logOut());
			dispatch(push('/login'));
		}
	})
)(withStyles(styles, { withTheme: true })(ButtonAppBar));
export default NavBar;




	// render() {
	// 	const { classes, theme } = this.props;

// 		return (
// 			<div className={classes.root}>
// 				<AppBar
// 					position="absolute"
// 					className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
// 				>
// 					<Toolbar disableGutters={!this.state.open}>
// 						<IconButton
// 							color="inherit"
// 							aria-label="Open drawer"
// 							onClick={this.handleDrawerOpen}
// 							className={classNames(classes.menuButton, this.state.open && classes.hide)}
// 						>
// 							<MenuIcon />
// 						</IconButton>
// 						<Typography variant="title" color="inherit" noWrap>
// 							Mini variant drawer
// 						</Typography>
// 					</Toolbar>
// 				</AppBar>
// 				<Drawer
// 					variant="permanent"
// 					classes={{
// 						paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)
// 					}}
// 					open={this.state.open}
// 				>
// 					<div className={classes.toolbar}>
// 						<IconButton onClick={this.handleDrawerClose}>
// 							{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
// 						</IconButton>
// 					</div>
// 					<Divider />
// 					<List>{mailFolderListItems}</List>
// 					<Divider />
// 					<List>{otherMailFolderListItems}</List>
// 				</Drawer>
// 				<main className={classes.content}>
// 					<div className={classes.toolbar} />
// 					<Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
// 				</main>
// 			</div>
// 		);
// 	}
// }

// MiniDrawer.propTypes = {
// 	classes: PropTypes.object.isRequired,
// 	theme: PropTypes.object.isRequired
// };

// export default withStyles(styles, { withTheme: true })(MiniDrawer);
