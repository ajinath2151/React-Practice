import { Button, IconButton, Snackbar } from '@material-ui/core'
import { Close } from '@material-ui/icons';
import React, { useState } from 'react'

function SnackbarDemo() {

  const [open, setOpen] = useState(false);

  // functions
  const handleClick = ()=> {
    setOpen(true);
  }
  const handleClose = (event, reason)=> {
    if(reason === 'clickaway') {
      return
    }
    setOpen(false);

  };
  return (
    <>
        <div>
            <h3>Simple Snackbar Demo</h3>
            <Button onClick={handleClick} variant="outlined">Open simple snackbar</Button>
            <Snackbar
              anchorOrigin = {{
                vertical:'bottom',
                horizontal:'left',
              }}
              open={open}
              autoHideDuration={1000}
              onClose={handleClose}
              message="Note archived"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <Close fontSize="small" />
            </IconButton>
          </React.Fragment>
              }
            />
        </div>      
      </>
  );
}

export default SnackbarDemo


