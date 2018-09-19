 //import  { Component } from 'react';

// import './App.css';

//class App extends Component {
  // state = {
  //   answer: []
  // };

  // componentDidMount() {
  //   fetch("/getPhotos")
  //     .then(res => res.json())
  //     .then(({ data }) => {
  //       this.setState({answer :data });
  //      // console.log(data)
  //     });

  //   // this.callApi()
  //   //   .then(res => this.setState({ response: res.express }))
  //   //   .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();

  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//                 {this.state.answer.map((el,ind)=>(<img src={el} key={ind} alt="альтернативный текст"></img>))}
//       </div>
//     );
//   }
// }


//   import React from 'react';
 
// import { LazyLoadImage, trackWindowScroll }
//   from 'react-lazy-load-image-component';
//   // const Img= ({ image }) => (
//   //   <div>
//   //     <LazyLoadImage
//   //       height={image.height}
//   //       src={image.src}/>
//   //   </div>
//   // );

//   // const preImg ='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
//   // const image ={
//   //   src:preImg,
//   //   height:"600px",
//   //   width:"100%"
//   // }
//   // let preArr = Array(12).fill(image);



// const Gallery = ({ images, scrollPosition }) => {
// console.log(scrollPosition);
// return(
//   <div>
//     {images.map((image,ind) =>
//       <LazyLoadImage
//         key={ind}
//         height={image.height}
//         // Make sure to pass down the scrollPosition, this
//         // will be used by the component to know it must
//         // not subscribe to the scroll/resize events
//         scrollPosition={scrollPosition}
//         src={image.src}
//         width={image.width} />
//     )}
//   </div>
// );
// }

// // Wrap Gallery with trackWindowScroll HOC so it receives
// // a scrollPosition prop to pass down to the images
// export default trackWindowScroll(Gallery);
// //hi

//   class App extends Component {
//     render() {
//           return (
//             <div className="App">
//             < Gallery images={preArr} />
//             </div>
//           )
//   }
//   }
//   //export default MyImage;
// // Wrap Gallery with trackWindowScroll HOC so it receives
// // a scrollPosition prop to pass down to the images

// export default App;

// import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// //import { mailFolderListItems, otherMailFolderListItems } from './components/tileData';
// const drawerWidth = 240;

// const styles = (theme) => ({
// 	root: {
// 		flexGrow: 1,
// 		height: 440,
// 		zIndex: 1,
// 		overflow: 'hidden',
// 		position: 'relative',
// 		display: 'flex'
// 	},
// 	appBar: {
// 		zIndex: theme.zIndex.drawer + 1,
// 		transition: theme.transitions.create([ 'width', 'margin' ], {
// 			easing: theme.transitions.easing.sharp,
// 			duration: theme.transitions.duration.leavingScreen
// 		})
// 	},
// 	appBarShift: {
// 		marginLeft: drawerWidth,
// 		width: `calc(100% - ${drawerWidth}px)`,
// 		transition: theme.transitions.create([ 'width', 'margin' ], {
// 			easing: theme.transitions.easing.sharp,
// 			duration: theme.transitions.duration.enteringScreen
// 		})
// 	},
// 	menuButton: {
// 		marginLeft: 12,
// 		marginRight: 36
// 	},
// 	hide: {
// 		display: 'none'
// 	},
// 	drawerPaper: {
// 		position: 'relative',
// 		whiteSpace: 'nowrap',
// 		width: drawerWidth,
// 		transition: theme.transitions.create('width', {
// 			easing: theme.transitions.easing.sharp,
// 			duration: theme.transitions.duration.enteringScreen
// 		})
// 	},
// 	drawerPaperClose: {
// 		overflowX: 'hidden',
// 		transition: theme.transitions.create('width', {
// 			easing: theme.transitions.easing.sharp,
// 			duration: theme.transitions.duration.leavingScreen
// 		}),
// 		width: theme.spacing.unit * 7,
// 		[theme.breakpoints.up('sm')]: {
// 			width: theme.spacing.unit * 9
// 		}
// 	},
// 	toolbar: {
// 		display: 'flex',
// 		alignItems: 'center',
// 		justifyContent: 'flex-end',
// 		padding: '0 8px',
// 		...theme.mixins.toolbar
// 	},
// 	content: {
// 		flexGrow: 1,
// 		backgroundColor: theme.palette.background.default,
// 		padding: theme.spacing.unit * 3
// 	}
// });

// class MiniDrawer extends React.Component {
// 	state = {
// 		open: false
// 	};

// 	handleDrawerOpen = () => {
// 		this.setState({ open: true });
// 	};

// 	handleDrawerClose = () => {
// 		this.setState({ open: false });
// 	};

// 	render() {
// 		const { classes, theme } = this.props;

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
import React from "react";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

class App extends React.Component {

  constructor(){
    super();
    const preImg ='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
  //   const image ={
  //   src:preImg,
  //   height:"600px",
  //   width:"100%"
  // }
    let preArr = Array(20).fill(preImg);
    this.state = {
    items: preArr
  };
  }
  

    

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    fetch("/getPhotos")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data,"INFetch")
      this.setState({
        items:[...this.state.items,...data.data]
      })
    })
  };

  render() {
    return (
      <div>
        <h1>demo: react-infinite-scroll-component</h1>
        <hr />
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.items.map((i, index) => (  
              <img src={i} key={index} alt="add"/>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default App;