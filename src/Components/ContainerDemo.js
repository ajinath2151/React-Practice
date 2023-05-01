// layout container, make webpage content responsive , and manage it in a wrapper
// default size 1280px lg(large) screen
import { CssBaseline, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { Fragment } from "react";

const useStyle = makeStyles((theme) => ({
  con: {
    backgroundColor: "#cfe8fc",
    border: "1px solid red",
    height: "50vh",
  },
}));

function ContainerDemo() {
  const classes = useStyle();

  return (
    <>
      <Fragment>
        <CssBaseline>
          <Container className={classes.con} maxWidth="xs">
            <Typography component="div"><h1>extra small (xs)0px </h1></Typography>
          </Container>
        </CssBaseline>
      </Fragment>
      <Fragment>
        <CssBaseline>
          <Container className={classes.con} maxWidth="sm">
            <Typography component="div"><h1>small (sm)600px </h1></Typography>
          </Container>
        </CssBaseline>
      </Fragment>
      <Fragment>
      <CssBaseline>
        <Container className={classes.con} maxWidth="md">
          <Typography component="div"><h1>medium(md)960px </h1> </Typography>
        </Container>
      </CssBaseline>      
    </Fragment>
    <Fragment>
      <CssBaseline>
        <Container className={classes.con} maxWidth="lg">
          <Typography component="div">
          <h1>large (lg) 1280px </h1>
          </Typography>
        </Container>
      </CssBaseline>
    </Fragment>
    <Fragment>
      <CssBaseline>
        <Container className={classes.con} maxWidth="xl">
          <Typography component="div">
          <h1>extra large (xl)1920px </h1>
          </Typography>
        </Container>
      </CssBaseline>
    </Fragment>
    </>
  );
}

export default ContainerDemo;
