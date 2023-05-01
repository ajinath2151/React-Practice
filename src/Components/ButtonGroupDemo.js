import { Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   '& > *': {
  //     margin: theme.spacing(1),
  //   },
  // },
  "& > *": {
    root: {
      marginLeft: "50px",
    },
  },
  bg: {
    margin: "10px",
  },
}));

function ButtonGroupDemo() {
  const classes = useStyles();
  return (
    <>
      <h1>Buttons Group </h1>
      <div className={classes.bg}>
        <ButtonGroup
          className="bg"
          color="primary"
          aria-label="outlined primary button group"
        >
          <Button>button one</Button>
          <Button>button two</Button>
          <Button>button three</Button>
          <Button>button four</Button>
          <Button>button five</Button>
        </ButtonGroup>
        <ButtonGroup
          className={classes.bg}
          color="secondary"
          variant="contained"
          aria-label="contained primary button group"
        >
          <Button>button one</Button>
          <Button>button two</Button>
          <Button>button three</Button>
          <Button>button four</Button>
          <Button>button five</Button>
        </ButtonGroup>
      </div>
      <h1>vertical button group</h1>
      <div className={classes.root2}>
        <ButtonGroup
          className={classes.bg}
          orientation="vertical"
          color="primary"
          aria-label="vertical outlined primary button group"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup
        className={classes.bg}
          orientation="vertical"
          color="primary"
          aria-label="vertical contained primary button group"
          variant="contained"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup
        className={classes.bg}
          orientation="vertical"
          color="primary"
          aria-label="vertical contained primary button group"
          variant="text"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
    </>
  );
}

export default ButtonGroupDemo;
