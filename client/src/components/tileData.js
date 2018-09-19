import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import StarIcon from '@material-ui/icons/Star';
// import SendIcon from '@material-ui/icons/Send';
// import MailIcon from '@material-ui/icons/Mail';
// import DeleteIcon from '@material-ui/icons/Delete';
// import ReportIcon from '@material-ui/icons/Report';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
//import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';
import LinkBtn from './LinkBtn';
//import ExitToApp from '@material-ui/icons/ExitToApp';
import Lock from '@material-ui/icons/Lock';
import LockOpen from '@material-ui/icons/LockOpen';


const MailFolderListItems  = (props ) => {
  const {data,logout}=props;
 // console.log(data,"INmail")
	return (
		<div>
			<ListItem>
				<ListItemIcon>
					<PhotoLibraryIcon />
				</ListItemIcon>
				<ListItemText>
					<LinkBtn to="/" label={'Album'} />
				</ListItemText>
			</ListItem>

			<ListItem>
				<ListItemIcon>
					<LibraryMusicIcon />
				</ListItemIcon>
				<ListItemText>
					<LinkBtn to="/news" label={'News'} />
				</ListItemText>
			</ListItem>

    {!data ?	<ListItem>
				<ListItemIcon>
					<Lock />
				</ListItemIcon>
				<ListItemText><LinkBtn to="/login" label={'Login'} /></ListItemText>
      </ListItem>
      :<ListItem>
      <ListItemIcon>
        <LockOpen/>
      </ListItemIcon>
      <ListItemText>
        <Button style={{marginLeft:"-10px"}} onClick={logout}>
							logOut
						</Button></ListItemText>
    </ListItem>
      }
		</div>
	)
}
export default MailFolderListItems;

// export default mailFolderListItems = (props) => {
// 	return (
// 		<div>
// 			<ListItem>
// 				<ListItemIcon>
// 					<PhotoLibraryIcon />
// 				</ListItemIcon>
// 				<ListItemText>
// 					<LinkBtn to="/" label={'Home'} />
// 				</ListItemText>
// 			</ListItem>
// 			<ListItem>
// 				<ListItemIcon>
// 					<LibraryMusicIcon />
// 				</ListItemIcon>
// 				<ListItemText>
// 					<LinkBtn to="/news" label={'News'} />
// 				</ListItemText>
// 			</ListItem>
// 			<ListItem button>
// 				<ListItemIcon>
// 					<SendIcon />
// 				</ListItemIcon>
// 				<ListItemText primary="Send mail" />
// 			</ListItem>
// 			<ListItem button>
// 				<ListItemIcon>
// 					<DraftsIcon />
// 				</ListItemIcon>
// 				<ListItemText primary="Drafts" />
// 			</ListItem>
// 		</div>
// 	);
// }
//export mailFolderListItems;
// export const otherMailFolderListItems = (
//   <div>
//     <ListItem button>
//       <ListItemIcon>
//         <MailIcon />
//       </ListItemIcon>
//       <ListItemText primary="All mail" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <DeleteIcon />
//       </ListItemIcon>
//       <ListItemText primary="Trash" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <ReportIcon />
//       </ListItemIcon>
//       <ListItemText primary="Spam" />
//     </ListItem>
//   </div>
// );
