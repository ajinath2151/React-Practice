import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    height: 100,
    width: "50%",
  },
}));
function AlertDemo() {
  const classes = useStyles();

  return (
    <>
      <h3>alert demo</h3>
      <div className={classes.root}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is error Alert
        </Alert>
        <Alert 
        action={<Button color="inherite" size="small">UNDO</Button>}
        severity="warning">warning</Alert>
        <Alert onClose={{}} severity="info">info</Alert>
        <Alert severity="success">Success</Alert>
        <Alert variant="filled" severity="success">
        This is a success alert — check it out!
        </Alert>
      </div>
    </>
  );
}

export default AlertDemo;
