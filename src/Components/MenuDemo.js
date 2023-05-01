import { Button, Menu, MenuItem } from '@material-ui/core'
import { Send } from '@material-ui/icons';
import React, { useState } from 'react'


function MenuDemo() {

  // usestate
  const [anchorEl, setAnchorEl] = React.useState(null);

  // functions
const handleClick = (event)=>{
  setAnchorEl(event.currentTarget);
}
const handleClose = (event) => {
  setAnchorEl(null);
}

  return (
    <>
        <h1>Menus</h1>
        <div>
          <Button onClick={handleClick}>
            OPEN MENU
          </Button>
          <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          >
          <MenuItem onClick={handleClose} >Profile</MenuItem>
          <MenuItem onClick={handleClose}>My Account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
        
    </>
  )
}
export default MenuDemo