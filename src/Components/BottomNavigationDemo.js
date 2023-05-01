import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import RestoreIcon from '@material-ui/icons/Restore';
import { Favorite, LocationOn } from '@material-ui/icons';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FolderIcon from '@material-ui/icons/Folder';

const useStyles = makeStyles((theme) =>({
  root: {
    width:500,    
  },
  size: {

  }
}));

function BottomNavigationDemo() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (    
    <>          
      <div className={classes.size}>
      <BottomNavigation
      value={value}
      onChange={(event, newValue) =>{
        setValue(newValue);
      }}
      showLabels      
      className={classes.root}
      >
      <BottomNavigationAction label="Recents" icon={< RestoreIcon />} />
      <BottomNavigationAction label="Favorite" icon={< Favorite />} />
      <BottomNavigationAction label="Location" icon={< LocationOn />} />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
      </BottomNavigation>
      </div>                      
    </>
  )
}
  
export default BottomNavigationDemo
