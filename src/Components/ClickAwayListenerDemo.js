import { Button, ClickAwayListener, makeStyles } from "@material-ui/core";
import React from "react";
import { useState } from "react";

const useStyles = makeStyles((theme)=>({
  root: {
    position:'relative',
  },
  dropdown: {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

function ClickAwayListenerDemo() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  // functions
  const handleClickAway = () => {
    setOpen(false);
  };
  const handleClick = ()=> {
    // setOpen(true);
    setOpen((prev)=>!prev);
  }
  return (
    <>
      <h3>Click Away Listener</h3>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className={classes.root}>
          <button type="button" onClick={handleClick} variant="outlined"> Open Menu Dropdown </button>
          { open ? (
            <div className={classes.dropdown}>
               Click me, I will stay visible until you click outside of the box.
            </div>
          ):null}
        </div>
      </ClickAwayListener>       
    </>
  );
}

export default ClickAwayListenerDemo;
