import { Button, makeStyles, useMediaQuery } from "@material-ui/core";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    '& > *':{
      margin:theme.spacing(1),
    }    
  },
}));

function ButtonDemo() {

  const isActive = useMediaQuery('(max-width:597px)');
  const classes = useStyle();
  const test = window.matchMedia('(max-width:597px)');  

  console.log(test);
  return (
    <> 
    <div>      
      { isActive && <h1>ButtonDemo</h1>}  

    </div>

      {/* <div className={classes.root}>
        <h1>Buttons Demo</h1>
        <Button color="primary" variant="outlined">
          Simple button
        </Button>
        <Button variant="contained" color="secondary">
          variant contained
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" href="#">
          Button Link
        </Button>
        <Button variant="text">Text Button</Button>
        <Button
          variant="contained"
          startIcon={<NavigateBefore />}
          endIcon={<NavigateNext />}
          size="large"
          fullWidth="true"
          color="inherit"
        >
          {" "}
          click me
        </Button>
      </div> */}
    </>
  );
}

export default ButtonDemo;
