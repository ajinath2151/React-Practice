import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, makeStyles } from '@material-ui/core'
import { BeachAccess, Image, Work } from '@material-ui/icons';
import React from 'react'

const useStyles = makeStyles((theme)=>({
    root: {
        width:'100%',
        maxWidth:860,
        backgroundColor:theme.palette.background.paper,
        color:"#5f5de7",
    }
}))
function ListDividerDemo() {

    const classes = useStyles();
  return (
    <>
    <div>
        <h3>List Divider Demo</h3>        
        <List component='nav' className={classes.root} aria-albel="mailbox folders"> 
        <ListItem button>
            <ListItemText primary="Inbox">
            </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
        </List>
    </div>
      <div>
      <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Image/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Work />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccess />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
      </div>
    </>
  )
}

export default ListDividerDemo

