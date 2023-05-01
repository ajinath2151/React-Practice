
// box we use in material ui instead of div,span,p,table for any margin padding color, box cant use alone, we can use button with this for make it effectively
// box add one div for contain by default
// clone use for apply style for containt
import { Box, Button, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const myStyle = makeStyles((theme) => ({
  box: {
    fontSize:30,
    color:'red',
    fontWeight:'800',
    margin:20,
    padding:50,   
    
  },
}));

function BoxDemo() {
  const classes = myStyle();
  return (
    <>
    <Box className={classes.box} component="span" clone>
      <Button variant='contained' >Hello</Button>
    </Box>      
    </>
  );
}

export default BoxDemo;
