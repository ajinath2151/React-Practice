// import {
//   Avatar,
//   Button,
//   Dialog,
//   DialogTitle,
//   List,
//   ListItem,
//   ListItemAvatar,
//   ListItemText,
//   makeStyles,
//   Typography,
// } from "@material-ui/core";
// import React from "react";
// import { useState } from "react";
// import Person from "@material-ui/icons/Person";
// import Add from "@material-ui/icons/Add";
// import blue from "@material-ui/core/colors/blue";
// import PropTypes from "prop-types";

// const emails = ["ajianth2151@gmail.com", "ajinath.shinde@tcs.com"];
// const useStyles = makeStyles((theme) => ({
//   avatar: {
//     backgroundColor: blue[100],
//     color: blue[600],
//   },
// }));

// function DialogBox(props) {
//   const classes = useStyles();
//   const [onClose, setSelectedValue, open] = props;

//   const handleClose = () => {
//     onClose(setSelectedValue);
//   };
//   const handleListItemClick = (value) => {
//     onClose(value);
//   };

//   return (
//     <Dialog
//       onClose={handleClose}
//       area-labelledby="simple dialog title"
//       open={open}
//     >
//       <DialogTitle id="simple-dialog-title"> Set Backup Account</DialogTitle>
//       <List>
//         {emails.map((email) => (
//           <ListItem
//             button
//             onClick={() => handleListItemClick(email)}
//             key={email}
//           >
//             <ListItemAvatar>
//               <Avatar className={classes.avatar}>
//                 <Person />
//               </Avatar>
//             </ListItemAvatar>
//             <ListItemText primary={email}></ListItemText>
//           </ListItem>
//         ))}
//         <ListItem
//           autofocus
//           button
//           onClick={() => handleListItemClick("addAccount")}
//         >
//           <ListItemAvatar>
//             <Avatar>
//               <Add />
//             </Avatar>
//           </ListItemAvatar>
//           <ListItemText primary="Add Account"></ListItemText>
//         </ListItem>
//       </List>
//     </Dialog>
//   );
// }

// // DialogBox.PropTypes = {
// //   onClose:PropTypes.func.isRequired,
// //   open:PropTypes.bool.isRequired,
// //   selectedValue:PropTypes.string.isRequired,
// // };

// export default function DialogBoxDemo() {
//   const [open, setOpen] = React.useState([]);
//   const [selectedValue, setSelectedValue] = React.useState(emails[1]);

//   // click funcitons
//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = (value) => {
//     setOpen(false);
//     setSelectedValue(value);
//   };
//   return (
//     <>
//       <div>
//         <h3>Simple Dialog Box</h3>
//         <br />
//         <Typography variant="subtitle1">Selected : {selectedValue}</Typography>
//         <Button varient="outlined" color="primary" onClick={handleClickOpen}>
//           OPEN SIMPLE DIALOG
//         </Button>
//         <DialogBox
//           selectedValue={selectedValue}
//           open={open}
//           onClose={handleClose}
//         ></DialogBox>
//       </div>
//     </>
//   );
// }
// // export default DialogBoxDemo;


import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <List>
        {emails.map((email) => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}

        <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
      <br />
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}
