//import React from 'react';
// import { connect } from 'react-redux';
// import { logOut } from '../actions/userActions';
// import { push } from 'react-router-redux';

// class HomeContainer extends React.Component {
// 	render() {
// 		return <button onClick={this.props.logout}>Logout {this.props.authReducer.user.userName}!</button>;
// 	}
// }

// const Home = connect(
// 	(state) => state,
// 	(dispatch) => ({
// 		logout: () => {
// 			dispatch(logOut());
// 			dispatch(push('/login'));
// 		}
// 	})
// )(HomeContainer);

// export default Home;
import React from 'react';
//import PropTypes from 'prop-types';
import classNames from 'classnames';
//import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
//import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
//import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { getPhotosFromServer } from '../actions/photosAction'
import { connect } from 'react-redux'

const styles = (theme) => ({
	appBar: {
		position: 'relative'
	},
	icon: {
		marginRight: theme.spacing.unit * 2,
		fontSize: 40
	},
	heroUnit: {
		backgroundColor: theme.palette.background.paper
	},
	heroContent: {
		maxWidth: 600,
		margin: '0 auto',
		padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
	},
	heroButtons: {
		marginTop: theme.spacing.unit * 4
	},
	layout: {
		width: 'auto',
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
			width: 1100,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	},
	cardGrid: {
		padding: `${theme.spacing.unit * 8}px 0`
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column'
	},
	cardMedia: {
		paddingTop: '100%' 
	},

	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing.unit * 6
	}
});

// const cards = [ 1, 2, 3, 4 ];
// let arr;
// 	fetch("/getPhotos")
// 	.then(res => res.json())
// 	.then(({ data }) => {
// 	 arr=data;
// 	});

	class AlbumContainer extends React.Component {
		state={
			loading:false
		}
		componentWillMount(){
			this.props.getPhotosFromServer();
		}
		componentWillReceiveProps (newProps) {
			console.log(newProps,"NewProps")
		  }
	
	render () {
		const { classes } = this.props;
		const { photos } = this.props.photoRequestReducer;
		console.log("Props In Home",this.props);
	return (
		<React.Fragment>
			<CssBaseline />
			<main>
				{/* Hero unit */}
				<div className={classes.heroUnit}>
					<div className={classes.heroContent}>
						<Typography variant="display3" align="center" color="textPrimary" gutterBottom>
							<CameraIcon className={classes.icon} />
							Album layout
						</Typography>
						<Typography variant="title" align="center" color="textSecondary" paragraph>
							Something short and leading about the collection below—its contents, the creator, etc. Make
							it short and sweet, but not too short so folks don&apos;t simply skip over it entirely.
						</Typography>
						<div className={classes.heroButtons}>
							<Grid container spacing={16} justify="center">
								<Grid item>
									<Button variant="contained" color="primary">
										Main call to action
									</Button>
								</Grid>
								<Grid item>
									<Button variant="outlined" color="primary">
										Secondary action
									</Button>
								</Grid>
							</Grid>
						</div>
					</div>
				</div>
				<div className={classNames(classes.layout, classes.cardGrid)}>
					{/* End hero unit */}
					<Grid container spacing={8} wrap='wrap'>
						{photos.map((photo,ind) => (
							<Grid item key={ind} xs={12} sm={6} md={3} lg={3}>
								<Card className={classes.card}>
									<CardMedia
										className={classes.cardMedia}
										image= {photo}
										title="Image title"
									/>
								</Card>
							</Grid>
						))}
					</Grid>
				</div>
			</main>
			{/* Footer */}
			<footer className={classes.footer}>
				<Typography variant="title" align="center" gutterBottom>
					Footer
				</Typography>
				<Typography variant="subheading" align="center" color="textSecondary" component="p">
					Something here to give the footer a purpose!
				</Typography>
			</footer>
			{/* End footer */}
		</React.Fragment>
	);
}
}



const Album= connect(
    state => state,
    dispatch => ({
		getPhotosFromServer: () => {
        dispatch(getPhotosFromServer())
      }
    })
)(withStyles(styles)(AlbumContainer))


export default Album;
