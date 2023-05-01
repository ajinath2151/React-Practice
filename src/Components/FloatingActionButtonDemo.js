import { Fab, makeStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import NavigationIcon from "@material-ui/icons/Navigation";
import FavoriteIcon from "@material-ui/icons/Favorite";
const useStyle = makeStyles((theme) => ({  
    extendedIcon: {
        '& > *': {
            margin:theme.spacing(1),
        }      
    },      
}));

function FloatingActionButtonDemo() {
  const classes = useStyle();
  return (
    <>
      
      <div className={classes.extendedIcon}>
      <h1>Floating Action Button Demo</h1>
        <Fab size="large" color="primary" aria-label="add">
          <Add style={{ fontSize: 40 }} />
        </Fab>
        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
        <Fab variant="extended">
          <NavigationIcon />
          Navigate
        </Fab>        
        <Fab disabled aria-label="like">
  <FavoriteIcon />
</Fab>
      </div>
    </>
  );
}

export default FloatingActionButtonDemo;
