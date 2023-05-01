// remove comment from line no 10 and check consol after click on any link and check power of event.preventDefaultMethod

import { Breadcrumbs, Link, makeStyles, Typography } from "@material-ui/core";
import { Grain, Home, NavigateNext, Whatshot } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  activ: {
    fontSize: 20,
  },
  link: {
    fontSize: 20,
    display: "flex",
  },
  icon: {
    marginRight: theme.spacing(1),
    height: 20,
    width: 20,
    marginTop: 5,
  },
}));

// funcitons
const handleClick = (event) => {
  // event.preventDefault();
  console.info("you click on breadcrumbs");
};

function BreadcrumbsDemo() {
  const classes = useStyles();

  return (
    <>
      <h1>Breadcrumbs Demo ब्रेडक्रम्स डेमो </h1>
      <div>
        <h3>simple</h3>
        <Breadcrumbs className={classes.activ}>
          <Link
            color="inherit"
            href="https://v4.mui.com/getting-started/installation/"
            onClick={handleClick}
          >
            Material-Ui
          </Link>
          <Link
            color="inherit"
            href="https://v4.mui.com/components/breadcrumbs/#breadcrumbs"
            onClick={handleClick}
          >
            Core
          </Link>
          <Typography className={classes.activ} color="primary">
            Breadcrumbs
          </Typography>
        </Breadcrumbs>
      </div>
      <div>
        <h3>Activ last breadcurms</h3>
        <Breadcrumbs className={classes.activ} aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={handleClick}>
            Material-UI
          </Link>
          <Link
            color="inherit"
            href="/getting-started/installation/"
            onClick={handleClick}
          >
            Core
          </Link>
          <Link
            color="textPrimary"
            href="/components/breadcrumbs/"
            onClick={handleClick}
          >
            Breadcrumb
          </Link>
        </Breadcrumbs>
      </div>
      <div>
        <h3>separate with svg icon</h3>
        <Breadcrumbs
          className={classes.activ}
          separator={<NavigateNext fontSize="large" />}
          aria-label="breadcrumb"
        >
          <Link color="inherit" href="/" onClick={handleClick}>
            Material-UI
          </Link>
          <Link
            color="inherit"
            href="/getting-started/installation/"
            onClick={handleClick}
          >
            Core
          </Link>
          <Typography className={classes.activ} color="textPrimary">
            Breadcrumb
          </Typography>
        </Breadcrumbs>
      </div>
      <div>
        <h3>Breadcrumbs with svg icon</h3>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            color="inherit"
            href="/"
            onClick={handleClick}
            className={classes.link}
          >
            <Home className={classes.icon} />
            Material-UI
          </Link>
          <Link
            color="inherit"
            href="/getting-started/installation/"
            onClick={handleClick}
            className={classes.link}
          >
            <Whatshot className={classes.icon} />
            Core
          </Link>
          <Typography color="textPrimary" className={classes.link}>
            <Grain className={classes.icon} />
            Breadcrumb
          </Typography>
        </Breadcrumbs>
      </div>
      <div>
        <h3> Collapsed breadcrumbs </h3>
        <Breadcrumbs maxItems={2} aria-label="breadcrumb">
          <Link color="inherit" href="#" onClick={handleClick}>
            Home
          </Link>
          <Link color="inherit" href="#" onClick={handleClick}>
            Catalog
          </Link>
          <Link color="inherit" href="#" onClick={handleClick}>
            Accessories
          </Link>
          <Link color="inherit" href="#" onClick={handleClick}>
            New Collection
          </Link>
          <Typography color="textPrimary">Belts</Typography>
        </Breadcrumbs>
      </div>
    </>
  );
}

export default BreadcrumbsDemo;
