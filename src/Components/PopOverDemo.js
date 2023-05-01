import { Button, makeStyles, Popover, Typography } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),      
    },
  }));

function PopOverDemo() {
    
        const classes = useStyles();
        const [anchorEl, setAnchorEl] = React.useState(null);
      
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
      
        const handleClose = () => {
          setAnchorEl(null);
        };
      
        const open = Boolean(anchorEl);
        const id = open ? 'simple-popover' : undefined;

  return (
    <>
        <div>
            <h3>PopOver Demo</h3>
            <div>
      <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>The content of the Popover.</Typography>
      </Popover>
    </div>
        </div>   
    </>
  );
}

export default PopOverDemo
 