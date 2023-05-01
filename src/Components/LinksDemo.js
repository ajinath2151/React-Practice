import { Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      fontSize: 20,
      marginRight: 20,
    },
  },
}));
// functions
const preventDefault = (event) => {
  event.preventDefault();
};

function LinksDemo() {
  const classes = useStyles();

  return (
    <>
      <h1>Links Demo</h1>
      <div>
        <h3>Simple links</h3>
        <Typography className={classes.root}>
          <Link
            href="https://www.google.com/"
            onClick={preventDefault}
            color="inherits"
          >
            Link1
          </Link>
          <Link>Link2</Link>
          <Link href="#" onClick={preventDefault} color="inherit">
            {'color="inherit"'}
          </Link>
          <Link href="#" onClick={preventDefault} variant="body2">
            {'variant="body2"'}
          </Link>
        </Typography>
      </div>
      <div>
        <h3>button link</h3>
        <Link
          component="button"
          variant="body2"
          onClick={() => {
            console.info("I'm a button.");
          }}
        >
          Button Link
        </Link>
      </div>
    </>
  );
}

export default LinksDemo;
