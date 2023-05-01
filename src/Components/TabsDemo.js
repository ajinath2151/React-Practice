import {
  AppBar,
  Box,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";

function TabPanel(Props) {
  const { children, value, index, ...other } = Props;

  return (
    <div
      roll="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      area-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-t
      abpanel-${index}`,
    };
  }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));



function TabsDemo() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  // functions
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <h3>Tabs Demo</h3>
      <div>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tab example"
          >
            <Tab label="item one" {...a11yProps(0)}></Tab>
            <Tab label="item one" {...a11yProps(1)}></Tab>
            <Tab label="item one" {...a11yProps(2)}></Tab>
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </div>
    </>
  );
}
// TabsDemo.propTypes = {
//     children: PropTypes.node,
//     index: propsTypes.any.isRequired,
//     value: propsTypes.any.isRequired,
//   }
  export default TabsDemo